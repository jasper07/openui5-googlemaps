/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.model.odata.ODataAnnotations
sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";


	/* global OData */// declare unusual global vars for JSLint/SAPUI5 validation
	/**
	 * !!! EXPERIMENTAL !!!
	 *
	 * @param {object}
	 *          oAnnotations
	 *
	 * @class Implementation to access oData Annotations
	 *
	 * @author SAP AG
	 * @version
	 * 1.20.7
	 *
	 * @constructor
	 * @public
	 * @name sap.ui.model.odata.ODataAnnotations
	 * @extends sap.ui.base.Object
	 * @experimental This feature has not been tested due to the lack of OData testing infrastructure. The API is NOT stable yet. Use at your own risk.
	 */
	var ODataAnnotations = sap.ui.base.Object.extend("sap.ui.model.odata.ODataAnnotations", /** @lends sap.ui.model.odata.ODataAnnotations */
	{
	
		constructor : function(oModel, sAnnotationURI, bLoadAsync) {
			"use strict";
			this.oModel = oModel;
			this.oMetadata = null;
			this.oAnnotations = null;
			this.bInitialized = false;
			this.bLoaded = false;
			this.bLoadAsync = bLoadAsync;
			this.xPath = null;
			this.sAnnotationURI = sAnnotationURI;
			this.oXMLDoc = null;
			this.error = null;
			this.oAlias = {};
			this.bValidXML = true;
			this.oRequestHandle = null;
				
			// Whether the xml document is in MS proprietary
			this.xmlCompatVersion = false;
			
			
			if (sAnnotationURI) {
				this.loadXML();
				
				if (!bLoadAsync) {
					// Synchronous loading, we can directly check for errors
					jQuery.sap.assert(
						!jQuery.isEmptyObject(oModel.oMetadata), 
						"Metadata must be available for synchronous annotation loading"
					);
					if (this.error) {
						jQuery.sap.log.error(
							"OData annotations could not be loaded: " + this.error.message
						);
					}
				}
				
			}
		}
	});
	
	
	ODataAnnotations.prototype.getAnnotationsData = function() {
		return this.oAnnotations;
	};
	
	/**
	 * Parses the alias definitions of the annotation document and fills the internal oAlias object.
	 * 
	 * @private
	 * @name sap.ui.model.odata.ODataAnnotations#_parseAliases
	 * @function
	 */
	ODataAnnotations.prototype._parseAliases = function(oAnnotationReferences) {
		// Alias nodes
		var refNodes = this.xPath.selectNodes(this.oXMLDoc, "//edmx:Reference", this.oXMLDoc);
		
		for (var i = 0; i < refNodes.length; i += 1) {
			var refNode = this.xPath.nextNode(refNodes, i);
			var aliasNodes = this.xPath.selectNodes(this.oXMLDoc, "./edmx:Include", refNode);
			if (aliasNodes && aliasNodes.length > 0) {
				var aliasNode = this.xPath.nextNode(aliasNodes, 0);
				if (aliasNode.getAttribute("Alias")) {
					this.oAlias[aliasNode.getAttribute("Alias")] = aliasNode.getAttribute("Namespace");
				} else {
					this.oAlias[aliasNode.getAttribute("Namespace")] = aliasNode.getAttribute("Namespace");
				}
			}
			var annoNodes = this.xPath.selectNodes(this.oXMLDoc, "./edmx:IncludeAnnotations", refNode);
			if (annoNodes.length > 0) {
				for (var j = 0; j < annoNodes.length; j += 1) {
					var annoNode = this.xPath.nextNode(annoNodes, j);
					if (annoNode.getAttribute("TargetNamespace")) {
						var sAnnoNameSpace = annoNode.getAttribute("TargetNamespace");
						if (!oAnnotationReferences[sAnnoNameSpace]) {
							oAnnotationReferences[sAnnoNameSpace] = {};
						}
						oAnnotationReferences[sAnnoNameSpace][annoNode.getAttribute("TermNamespace")] = refNode.getAttribute("Uri");
					} else {
						oAnnotationReferences[annoNode.getAttribute("TermNamespace")] = refNode.getAttribute("Uri");
					}
				}
			}
		}
	}
	
	ODataAnnotations.prototype.parse = function() {
		var mappingList = {}, schemaNodes, oSchema = {}, schemaNode,
		oAnnotationReferences = {},
		termNodes, oTerms, termNode, sTermType, oMetadataProperties, annotationNodes, annotationNode,
		annotationTarget, annotationNamespace, annotation, propertyAnnotation, propertyAnnotationNodes,
		propertyAnnotationNode, sTermValue, targetAnnotation, annotationQualifier, annotationTerm,
		valueAnnotation, expandNodes, expandNode, path, pathValues, expandNodesApplFunc;
	
		this.xPath = this.getXPath();
		this.oMetadata = this.oModel.getServiceMetadata();
	
		if (this.bInitialized) {
			return this.oAnnotations;
		}
		// Set XPath namespace
		this.oXMLDoc = this.xPath.setNameSpace(this.oXMLDoc);
		// Schema Alias
		schemaNodes = this.xPath.selectNodes(this.oXMLDoc, "//d:Schema", this.oXMLDoc);
		for (var i = 0; i < schemaNodes.length; i += 1) {
			schemaNode = this.xPath.nextNode(schemaNodes, i);
			oSchema.Alias = schemaNode.getAttribute("Alias");
			oSchema.Namespace = schemaNode.getAttribute("Namespace");
		}
		
		// Fill local alias object
		this._parseAliases(oAnnotationReferences);
		
		if (oAnnotationReferences) {
			mappingList.annotationReferences = oAnnotationReferences;
		}
		mappingList.aliasDefinitions = this.oAlias;
		// Term nodes
		termNodes = this.xPath.selectNodes(this.oXMLDoc, "//d:Term", this.oXMLDoc);
		if (termNodes.length > 0) {
			oTerms = {};
			for (var nodeIndex = 0; nodeIndex < termNodes.length; nodeIndex += 1) {
				termNode = this.xPath.nextNode(termNodes, nodeIndex);
				sTermType = this.replaceWithAlias(termNode.getAttribute("Type"), this.oAlias);
				oTerms["@" + oSchema.Alias + "." + termNode.getAttribute("Name")] = sTermType;
			}
			mappingList.termDefinitions = oTerms;
		}
		// Metadata information of all properties
		oMetadataProperties = this.getAllPropertiesMetadata(this.oMetadata);
		if (oMetadataProperties.extensions) {
			mappingList.propertyExtensions = oMetadataProperties.extensions;
		}
		// Annotations
		annotationNodes = this.xPath.selectNodes(this.oXMLDoc, "//d:Annotations ", this.oXMLDoc);
		for (var nodeIndex = 0; nodeIndex < annotationNodes.length; nodeIndex += 1) {
			annotationNode = this.xPath.nextNode(annotationNodes, nodeIndex);
			if (annotationNode.hasChildNodes() === false) {
				continue;
			}
			annotationTarget = annotationNode.getAttribute("Target");
			annotationNamespace = annotationTarget.split(".")[0];
			if (annotationNamespace && this.oAlias[annotationNamespace]) {
				annotationTarget = annotationTarget.replace(new RegExp(annotationNamespace, ""), this.oAlias[annotationNamespace]);
			}
			annotation = annotationTarget;
			propertyAnnotation = null;
			if (annotationTarget.indexOf("/") > 0) {
				annotation = annotationTarget.split("/")[0];
				propertyAnnotation = annotationTarget.replace(annotation + "/", "");
			}
			if (!mappingList[annotation]) {
				mappingList[annotation] = {};
			}
			// --- Value annotation of complex types. ---
			if (propertyAnnotation) {
				if (!mappingList.propertyAnnotations) {
					mappingList.propertyAnnotations = {};
				}
				if (!mappingList.propertyAnnotations[annotation]) {
					mappingList.propertyAnnotations[annotation] = {};
				}
				mappingList.propertyAnnotations[annotation][propertyAnnotation] = {};
				propertyAnnotationNodes = this.xPath.selectNodes(this.oXMLDoc, "./d:Annotation", annotationNode);
				for (var nodeIndexValue = 0; nodeIndexValue < propertyAnnotationNodes.length; nodeIndexValue += 1) {
					propertyAnnotationNode = this.xPath.nextNode(propertyAnnotationNodes, nodeIndexValue);
					if (propertyAnnotationNode.hasChildNodes() === false) {
						sTermValue = this.replaceWithAlias(propertyAnnotationNode.getAttribute("Term"));
						mappingList.propertyAnnotations[annotation][propertyAnnotation][sTermValue] = this.getPropertyValueAttributes(propertyAnnotationNode);
					}
				}
				// --- Annotations ---
			} else {
				targetAnnotation = annotation.replace(this.oAlias[annotationNamespace], annotationNamespace);
				propertyAnnotationNodes = this.xPath.selectNodes(this.oXMLDoc, "./d:Annotation", annotationNode);
				for (var nodeIndexAnnotation = 0; nodeIndexAnnotation < propertyAnnotationNodes.length; nodeIndexAnnotation += 1) {
					propertyAnnotationNode = this.xPath.nextNode(propertyAnnotationNodes, nodeIndexAnnotation);
					annotationQualifier = propertyAnnotationNode.getAttribute("Qualifier");
					annotationTerm = this.replaceWithAlias(propertyAnnotationNode.getAttribute("Term"));
					if (annotationQualifier) {
						annotationTerm += "#" + annotationQualifier;
					}
					valueAnnotation = this.getPropertyValue(this.oXMLDoc, propertyAnnotationNode, targetAnnotation);
					valueAnnotation = this.setEdmTypes(valueAnnotation, oMetadataProperties.types, annotation, oSchema);
					mappingList[annotation][annotationTerm] = valueAnnotation;
				}
				// --- Setup of Expand nodes. ---
				expandNodes = this.xPath.selectNodes(this.oXMLDoc, "//d:Annotations[contains(@Target, '" + targetAnnotation
						+ "')]//d:PropertyValue[contains(@Path, '/')]//@Path", this.oXMLDoc);
				for (i = 0; i < expandNodes.length; i += 1) {
					expandNode = this.xPath.nextNode(expandNodes, i);
					path = expandNode.value;
					if (mappingList.propertyAnnotations) {
						if (mappingList.propertyAnnotations[annotation]) {
							if (mappingList.propertyAnnotations[annotation][path]) {
								continue;
							}
						}
					}
					pathValues = path.split('/');
					if (this.isNavProperty(annotation, pathValues[0], this.oMetadata)) {
						if (!mappingList.expand) {
							mappingList.expand = {};
						}
						if (!mappingList.expand[annotation]) {
							mappingList.expand[annotation] = {};
						}
						mappingList.expand[annotation][pathValues[0]] = pathValues[0];
					}
				}
				expandNodesApplFunc = this.xPath.selectNodes(this.oXMLDoc, "//d:Annotations[contains(@Target, '" + targetAnnotation
						+ "')]//d:Path[contains(., '/')]", this.oXMLDoc);
				for (i = 0; i < expandNodesApplFunc.length; i += 1) {
					expandNode = this.xPath.nextNode(expandNodesApplFunc, i);
					path = this.xPath.getNodeText(expandNode);
					if (mappingList.propertyAnnotations[annotation]) {
						if (mappingList.propertyAnnotations[annotation][path]) {
							continue;
						}
					}
					if (!mappingList.expand) {
						mappingList.expand = {};
					}
					if (!mappingList.expand[annotation]) {
						mappingList.expand[annotation] = {};
					}
					pathValues = path.split('/');
					if (this.isNavProperty(annotation, pathValues[0], this.oMetadata)) {
						if (!mappingList.expand) {
							mappingList.expand = {};
						}
						if (!mappingList.expand[annotation]) {
							mappingList.expand[annotation] = {};
						}
						mappingList.expand[annotation][pathValues[0]] = pathValues[0];
					}
				}
			}
		}
	
		// TODO: Check conditions for failed parsing and throw error... this thing seems to never fail.
		this.oAnnotations = mappingList;
		this.bInitialized = true;
		this.oModel.fireAnnotationsLoaded({annotations: this});
	
		return this.oAnnotations;
	};
	
	ODataAnnotations.prototype.getXPath = function() {
		var xPath = {};
	
		if (this.xmlCompatVersion) {// old IE
			xPath = {
				setNameSpace : function(outNode) {
					outNode.setProperty("SelectionNamespaces",
							'xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" xmlns:d="http://docs.oasis-open.org/odata/ns/edm"');
					outNode.setProperty("SelectionLanguage", "XPath");
					return outNode;
				},
				selectNodes : function(outNode, xPath, inNode) {
					return inNode.selectNodes(xPath);
				},
				nextNode : function(node) {
					return node.nextNode();
				},
				getNodeText : function(node) {
					return node.text;
				}
			};
		} else {// Chrome, Firefox, Opera, etc.
			xPath = {
				setNameSpace : function(outNode) {
					return outNode;
				},
				nsResolver : function(prefix) {
					var ns = {
						"edmx" : "http://docs.oasis-open.org/odata/ns/edmx",
						"d" : "http://docs.oasis-open.org/odata/ns/edm"
					};
					return ns[prefix] || null;
				},
				selectNodes : function(outNode, sPath, inNode) {
					var xmlNodes = outNode.evaluate(sPath, inNode, this.nsResolver, /* ORDERED_NODE_SNAPSHOT_TYPE: */ 7, null);
					xmlNodes.length = xmlNodes.snapshotLength;
					return xmlNodes;
				},
				nextNode : function(node, item) {
					return node.snapshotItem(item);
				},
				getNodeText : function(node) {
					return node.textContent;
				}
			};
		}
		return xPath;
	};
	
	
	/**
	 * Sets an XML document
	 * 
	 * @public
	 * @name sap.ui.model.odata.ODataAnnotations#setXML
	 * @function
	 */
	ODataAnnotations.prototype.setXML = function(oXMLDocument, sXMLContent) {
		// TODO: Check for MSXML-DOcument vs. Standards DOM-Document
		var that = this;
		
		if(sap.ui.Device.browser.internet_explorer) {
			// TODO: Check when IE will support evaluate-method
			this.oXMLDoc = new ActiveXObject("Microsoft.XMLDOM"); // ??? "Msxml2.DOMDocument.6.0"
			this.oXMLDoc.loadXML(sXMLContent);
			this.xmlCompatVersion = true;
		} else if (oXMLDocument) { 
			this.oXMLDoc = oXMLDocument;
		} else {
			this.oXMLDoc = new DOMParser().parseFromString(sXMLContent, 'application/xml');
		}
		
		if (this.oXMLDoc.getElementsByTagName("parsererror").length > 0) {
			// Malformed XML, notify application of the problem
			
			// This seems to be needed since with some jQuery versions the XML document
			// is partly parsed and with some it is not parsed at all. We now choose the
			// "safe" approach and only accept completely valid documents.
			return false;
		} else {
			// Check if Metadata is loaded on the model. We need the Metadata to parse the annotations
			if (jQuery.isEmptyObject(this.oModel.getServiceMetadata())) {
				// Metadata is not loaded, wait for it before trying to parse
				this.oModel.attachInternalMetadataLoaded(function() {
					that.parse();
				});
			} else {
				this.parse();
			}
			return true;
		}
	};
	
	
	ODataAnnotations.prototype.loadXML = function() {
		var that = this;
	
		var mAjaxOptions = {
			url : this.sAnnotationURI,
			async : this.bLoadAsync
		};
		// TODO: Check IE10 XML document for compatibility
		// mAjaxOptions["xhrFields"] = {responseType : 'msxml-document'};
	
		var fnHandleFail = function _handleFail(oJQXHR, sStatusText) {
	
			if (that.oRequestHandle && that.oRequestHandle.bSuppressErrorHandlerCall) {
				return;
			}
			that.oRequestHandle = null;
			that.error = { message : sStatusText, response : oJQXHR.response };
			that.oModel._handleError(that.error);
		};
	
		var fnHandleSuccess = function(sData, sTextStatus, oJQXHR) {
			that.oRequestHandle = null;
			if (!that.setXML(oJQXHR.responseXML, oJQXHR.responseText)) {
				fnHandleFail(oJQXHR, "Malformed XML document");
			}
		};
	
		this.oRequestHandle = jQuery.ajax(mAjaxOptions).done(fnHandleSuccess).fail(fnHandleFail);
	};
	
	ODataAnnotations.prototype.getAllPropertiesMetadata = function(oMetadata) {
		var oMetadataSchema = {},
		oPropertyTypes = {},
		oPropertyExtensions = {},
		bPropertyExtensions = false,
		sNamespace,
		aEntityTypes,
		aComplexTypes,
		oEntityType = {},
		oProperties = {},
		oExtensions = {},
		bExtensions = false,
		oProperty,
		oComplexTypeProp,
		sPropertyName,
		sType,
		oPropExtension,
		oReturn;
	
		for (var i = oMetadata.dataServices.schema.length - 1; i >= 0; i -= 1) {
			oMetadataSchema = oMetadata.dataServices.schema[i];
			if (oMetadataSchema.entityType) {
				sNamespace = oMetadataSchema.namespace;
				aEntityTypes = oMetadataSchema.entityType;
				aComplexTypes = oMetadataSchema.complexType;
				for (var j in aEntityTypes) {
					oEntityType = aEntityTypes[j];
					oExtensions = {};
					if (oEntityType.hasStream && oEntityType.hasStream === "true") {
						continue;
					}
					for (var k in oEntityType.property) {
						oProperty = oEntityType.property[k];
						if (oProperty.type.substring(0, sNamespace.length) === sNamespace) {
							for (var l in aComplexTypes) {
								if (aComplexTypes[l].name === oProperty.type.substring(sNamespace.length + 1)) {
									for (k in aComplexTypes[l].property) {
										oComplexTypeProp = aComplexTypes[l].property[k];
										oProperties[aComplexTypes[l].name + "/" + oComplexTypeProp.name] = oComplexTypeProp.type;
									}
								}
							}
						} else {
							sPropertyName = oProperty.name;
							sType = oProperty.type;
							for (var p in oProperty.extensions) {
								oPropExtension = oProperty.extensions[p];
								if ((oPropExtension.name === "display-format") && (oPropExtension.value === "Date")) {
									sType = "Edm.Date";
								} else {
									bExtensions = true;
									if (!oExtensions[sPropertyName]) {
										oExtensions[sPropertyName] = {};
									}
									if (oPropExtension.namespace && !oExtensions[sPropertyName][oPropExtension.namespace]) {
										oExtensions[sPropertyName][oPropExtension.namespace] = {};
									}
									oExtensions[sPropertyName][oPropExtension.namespace][oPropExtension.name] = oPropExtension.value;
								}
							}
							oProperties[sPropertyName] = sType;
						}
					}
					if (!oPropertyTypes[sNamespace + "." + oEntityType.name]) {
						oPropertyTypes[sNamespace + "." + oEntityType.name] = {};
					}
					oPropertyTypes[sNamespace + "." + oEntityType.name] = oProperties;
					if (bExtensions) {
						if (!oPropertyExtensions[sNamespace + "." + oEntityType.name]) {
							bPropertyExtensions = true;
						}
						oPropertyExtensions[sNamespace + "." + oEntityType.name] = {};
						oPropertyExtensions[sNamespace + "." + oEntityType.name] = oExtensions;
					}
				}
			}
		}
		if (bPropertyExtensions) {
			oReturn = {
				types : oPropertyTypes,
				extensions : oPropertyExtensions
			};
		} else {
			oReturn = {
				types : oPropertyTypes
			};
		}
		return oReturn;
	};
	
	ODataAnnotations.prototype.setEdmTypes = function(aPropertyValues, oProperties, sTarget, oSchema) {
		var oPropertyValue, sEdmType = '';
		for (var pValueIndex in aPropertyValues) {
			if (aPropertyValues[pValueIndex]) {
				oPropertyValue = aPropertyValues[pValueIndex];
				if (oPropertyValue.Value && oPropertyValue.Value.Path) {
					sEdmType = this.getEdmType(oPropertyValue.Value.Path, oProperties, sTarget, oSchema);
					if (sEdmType) {
						aPropertyValues[pValueIndex].EdmType = sEdmType;
					}
					continue;
				}
				if (oPropertyValue.Path) {
					sEdmType = this.getEdmType(oPropertyValue.Path, oProperties, sTarget, oSchema);
					if (sEdmType) {
						aPropertyValues[pValueIndex].EdmType = sEdmType;
					}
					continue;
				}
				if (oPropertyValue.Facets) {
					aPropertyValues[pValueIndex].Facets = this.setEdmTypes(oPropertyValue.Facets, oProperties, sTarget, oSchema);
					continue;
				}
				if (oPropertyValue.Data) {
					aPropertyValues[pValueIndex].Data = this.setEdmTypes(oPropertyValue.Data, oProperties, sTarget, oSchema);
					continue;
				}
				if (pValueIndex === "Data") {
					aPropertyValues.Data = this.setEdmTypes(oPropertyValue, oProperties, sTarget, oSchema);
					continue;
				}
				if (oPropertyValue.Value && oPropertyValue.Value.Apply) {
					aPropertyValues[pValueIndex].Value.Apply.Parameters = this.setEdmTypes(oPropertyValue.Value.Apply.Parameters,
							oProperties, sTarget, oSchema);
					continue;
				}
				if (oPropertyValue.Value && oPropertyValue.Type && (oPropertyValue.Type === "Path")) {
					sEdmType = this.getEdmType(oPropertyValue.Value, oProperties, sTarget, oSchema);
					if (sEdmType) {
						aPropertyValues[pValueIndex].EdmType = sEdmType;
					}
				}
			}
		}
		return aPropertyValues;
	};
	
	ODataAnnotations.prototype.getEdmType = function(sPath, oProperties, sTarget, oSchema) {
		if ((sPath.charAt(0) === "@") && (sPath.indexOf(oSchema.Alias) === 1)) {
			sPath = sPath.slice(oSchema.Alias.length + 2);
		}
		if (sPath.indexOf("/") >= 0) {
			if (oProperties[sPath.slice(0, sPath.indexOf("/"))]) {
				sTarget = sPath.slice(0, sPath.indexOf("/"));
				sPath = sPath.slice(sPath.indexOf("/") + 1);
			}
		}
		for (var pIndex in oProperties[sTarget]) {
			if (sPath === pIndex) {
				return oProperties[sTarget][pIndex];
			}
		}
	};
	ODataAnnotations.prototype.getPropertyValueAttributes = function(documentNode) {
		var attrName = "", attrValue = "", i, propertyValueAttributes = {};
		for (i = 0; i < documentNode.attributes.length; i += 1) {
			if ((documentNode.attributes[i].name !== "Property") && (documentNode.attributes[i].name !== "Term")) {
				attrName = documentNode.attributes[i].name;
				attrValue = documentNode.attributes[i].value;
			}
		}
		if (attrName.length > 0) {
			propertyValueAttributes[attrName] = this.replaceWithAlias(attrValue);
		}
		return propertyValueAttributes;
	};
	
	ODataAnnotations.prototype.getSimpleNodeValue = function(xmlDoc, documentNode) {
		var oValue = {}, stringValueNodes, stringValueNode, pathValueNodes, pathValueNode, applyValueNodes, applyValueNode;
		if (documentNode.hasChildNodes()) {
			stringValueNodes = this.xPath.selectNodes(xmlDoc, "./d:String", documentNode);
			if (stringValueNodes.length > 0) {
				stringValueNode = this.xPath.nextNode(stringValueNodes, 0);
				oValue["String"] = this.xPath.getNodeText(stringValueNode);
			} else {
				pathValueNodes = this.xPath.selectNodes(xmlDoc, "./d:Path", documentNode);
				if (pathValueNodes.length > 0) {
					pathValueNode = this.xPath.nextNode(pathValueNodes, 0);
					oValue["Path"] = this.xPath.getNodeText(pathValueNode);
				} else {
					applyValueNodes = this.xPath.selectNodes(xmlDoc, "./d:Apply", documentNode);
					if (applyValueNodes.length > 0) {
						applyValueNode = this.xPath.nextNode(applyValueNodes, 0);
						oValue["Apply"] = this.getApplyFunctions(xmlDoc, applyValueNode, this.xPath);
					}
				}
			}
		}
		return oValue;
	};
	ODataAnnotations.prototype.getPropertyValue = function(xmlDoc, documentNode, target) {
		var propertyValue = {}, recordNodes, recordNodeCnt, nodeIndex, recordNode, propertyValues, urlValueNodes, urlValueNode, pathNode, oPath = {}, annotationNodes, annotationNode, nodeIndexValue, termValue, collectionNodes;
		var xPath = this.getXPath();
		
		if (documentNode.hasChildNodes()) {
			recordNodes = this.xPath.selectNodes(xmlDoc, "./d:Record | ./d:Collection/d:Record | ./d:Collection/d:If/d:Record",
					documentNode);
			if (recordNodes.length) {
				recordNodeCnt = 0;
				for (nodeIndex = 0; nodeIndex < recordNodes.length; nodeIndex += 1) {
					recordNode = this.xPath.nextNode(recordNodes, nodeIndex);
					propertyValues = this.getPropertyValues(xmlDoc, recordNode, target);
					if (recordNode.getAttribute("Type")) {
						propertyValues["RecordType"] = this.replaceWithAlias(recordNode.getAttribute("Type"));
					}
					if (recordNodeCnt === 0) {
						if (recordNode.nextElementSibling || (recordNode.parentNode.nodeName === "Collection")
								|| (recordNode.parentNode.nodeName === "If")) {
							propertyValue = [];
							propertyValue.push(propertyValues);
						} else {
							propertyValue = propertyValues;
						}
					} else {
						propertyValue.push(propertyValues);
					}
					recordNodeCnt += 1;
				}
			} else {
				urlValueNodes = this.xPath.selectNodes(xmlDoc, "./d:UrlRef", documentNode);
				if (urlValueNodes.length > 0) {
					for (nodeIndex = 0; nodeIndex < urlValueNodes.length; nodeIndex += 1) {
						urlValueNode = this.xPath.nextNode(urlValueNodes, nodeIndex);
						propertyValue["UrlRef"] = this.getSimpleNodeValue(xmlDoc, urlValueNode);
					}
				} else {
					urlValueNodes = this.xPath.selectNodes(xmlDoc, "./d:Url", documentNode);
					if (urlValueNodes.length > 0) {
						for (nodeIndex = 0; nodeIndex < urlValueNodes.length; nodeIndex += 1) {
							urlValueNode = this.xPath.nextNode(urlValueNodes, nodeIndex);
							propertyValue["Url"] = this.getSimpleNodeValue(xmlDoc, urlValueNode);
						}
					} else {
						collectionNodes = this.xPath.selectNodes(xmlDoc,
								"./d:Collection/d:AnnotationPath | ./d:Collection/d:PropertyPath", documentNode);
						if (collectionNodes.length > 0) {
							propertyValue = [];
							for (nodeIndex = 0; nodeIndex < collectionNodes.length; nodeIndex += 1) {
								pathNode = this.xPath.nextNode(collectionNodes, nodeIndex);
								oPath = {};
								oPath[pathNode.nodeName] = xPath.getNodeText(pathNode);
								propertyValue.push(oPath);
							}
						} else {
							propertyValue = this.getPropertyValueAttributes(documentNode);
							annotationNodes = this.xPath.selectNodes(xmlDoc, "./d:Annotation", documentNode);
							annotationNode = {};
							for (nodeIndexValue = 0; nodeIndexValue < annotationNodes.length; nodeIndexValue += 1) {
								annotationNode = this.xPath.nextNode(annotationNodes, nodeIndexValue);
								if (annotationNode.hasChildNodes() === false) {
									termValue = this.replaceWithAlias(annotationNode.getAttribute("Term"));
									propertyValue[termValue] = this.getPropertyValueAttributes(annotationNode);
								}
							}
						}
					}
				}
			}
		} else {
			propertyValue = this.getPropertyValueAttributes(documentNode);
		}
		return propertyValue;
	};
	ODataAnnotations.prototype.getPropertyValues = function(xmlDoc, documentNode, target) {
		var properties = {}, annotationNode = {}, annotationNodes, nodeIndexValue, termValue, propertyValueNodes, nodeIndex, propertyValueNode, propertyName, applyNodes, applyNode, applyNodeIndex;
		annotationNodes = this.xPath.selectNodes(xmlDoc, "./d:Annotation", documentNode);
		for (nodeIndexValue = 0; nodeIndexValue < annotationNodes.length; nodeIndexValue += 1) {
			annotationNode = this.xPath.nextNode(annotationNodes, nodeIndexValue);
			if (annotationNode.hasChildNodes() === false) {
				termValue = this.replaceWithAlias(annotationNode.getAttribute("Term"));
				properties[termValue] = this.getPropertyValueAttributes(annotationNode);
			}
		}
		propertyValueNodes = this.xPath.selectNodes(xmlDoc, "./d:PropertyValue", documentNode);
		if (propertyValueNodes.length > 0) {
			for (nodeIndex = 0; nodeIndex < propertyValueNodes.length; nodeIndex += 1) {
				propertyValueNode = this.xPath.nextNode(propertyValueNodes, nodeIndex);
				propertyName = propertyValueNode.getAttribute("Property");
				properties[propertyName] = this.getPropertyValue(xmlDoc, propertyValueNode, target);
				applyNodes = this.xPath.selectNodes(xmlDoc, "./d:Apply", propertyValueNode);
				applyNode = null;
				for (applyNodeIndex = 0; applyNodeIndex < applyNodes.length; applyNodeIndex += 1) {
					applyNode = this.xPath.nextNode(applyNodes, applyNodeIndex);
					if (applyNode) {
						properties[propertyName] = {};
						properties[propertyName]['Apply'] = this.getApplyFunctions(xmlDoc, applyNode);
					}
				}
			}
		} else {
			properties = this.getPropertyValue(xmlDoc, documentNode, target);
		}
		return properties;
	};
	ODataAnnotations.prototype.getApplyFunctions = function(xmlDoc, applyNode) {
		var apply = {}, parameterNodes, paraNode = null, parameters = [], i;
		parameterNodes = this.xPath.selectNodes(xmlDoc, "./d:*", applyNode);
		for (i = 0; i < parameterNodes.length; i += 1) {
			paraNode = this.xPath.nextNode(parameterNodes, i);
			switch (paraNode.nodeName) {
				case "Apply" :
					parameters.push({
						"Type" : "Apply",
						"Value" : this.getApplyFunctions(xmlDoc, paraNode)
					});
					break;
				case "LabeledElement" :
					parameters.push({
						"Name" : paraNode.getAttribute("Name"),
						"Value" : this.getSimpleNodeValue(xmlDoc, paraNode)
					});
					break;
				default :
					parameters.push({
						"Type" : paraNode.nodeName,
						"Value" : this.xPath.getNodeText(paraNode)
					});
					break;
			}
		}
		apply['Name'] = applyNode.getAttribute('Function');
		apply['Parameters'] = parameters;
		return apply;
	};
	ODataAnnotations.prototype.isNavProperty = function(sEntityType, sPathValue, oMetadata) {
		var oMetadataSchema, i, namespace, aEntityTypes, j, k;
		for (i = oMetadata.dataServices.schema.length - 1; i >= 0; i -= 1) {
			oMetadataSchema = oMetadata.dataServices.schema[i];
			if (oMetadataSchema.entityType) {
				namespace = oMetadataSchema.namespace + ".";
				aEntityTypes = oMetadataSchema.entityType;
				for (k = aEntityTypes.length - 1; k >= 0; k -= 1) {
					if (namespace + aEntityTypes[k].name === sEntityType && aEntityTypes[k].navigationProperty) {
						for (j = 0; j < aEntityTypes[k].navigationProperty.length; j += 1) {
							if (aEntityTypes[k].navigationProperty[j].name === sPathValue) {
								return true;
							}
						}
					}
				}
			}
		}
		return false;
	};
	
	ODataAnnotations.prototype.replaceWithAlias = function(sValue, oAlias) {
		if (oAlias === undefined) {
			oAlias = this.oAlias;
		}
		
		for (var sAlias in oAlias) {
			if (sValue.indexOf(sAlias + ".") >= 0) {
				sValue = sValue.replace(sAlias + ".", oAlias[sAlias] + ".");
				return sValue;
			}
		}
		return sValue;
	};
	
	ODataAnnotations.prototype.destroy = function() {
	
		// Abort pending xml request
		if (this.oRequestHandle) {
			this.oRequestHandle.bSuppressErrorHandlerCall = true;
			this.oRequestHandle.abort();
			this.oRequestHandle = null;
		}
	
		sap.ui.base.Object.prototype.destroy.apply(this, arguments);
	};
	

	return ODataAnnotations;

}, /* bExport= */ true);
