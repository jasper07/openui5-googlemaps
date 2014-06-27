/*
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.core.util.MockServer for mocking a server
sap.ui.define(['jquery.sap.global', 'sap/ui/Device', 'sap/ui/base/ManagedObject', 'sap/ui/thirdparty/sinon'],
	function(jQuery, Device, ManagedObject, sinon) {
	"use strict";

	if (!!Device.browser.internet_explorer) {
		jQuery.sap.require("sap.ui.thirdparty.sinon-ie");
	}
	
	/*global URI *///declare unusual global vars for JSLint/SAPUI5 validation
	
	/**
	 * Creates a mocked server. This helps to mock all or some backend calls, e.g. for OData/JSON Models or simple XHR calls, without
	 * changing the application code. This class can also be used for qunit tests.
	 * 
	 * @param {string} [sId] id for the new server object; generated automatically if no non-empty id is given
	 *      Note: this can be omitted, no matter whether <code>mSettings</code> will be given or not!
	 * @param {object} [mSettings] optional map/JSON-object with initial property values, aggregated objects etc. for the new object
	 * @param {object} [oScope] scope object for resolving string based type and formatter references in bindings
	 * 
	 * @class Class to mock a server
	 * @extends sap.ui.base.ManagedObject
	 * @abstract
	 * @author SAP
	 * @version 1.20.7
	 * @public
	 * @name sap.ui.core.util.MockServer
	 * @experimental Since 1.15.1. The mock server is still under construction, so some implementation details can be changed in future.
	 */
	var MockServer = ManagedObject.extend("sap.ui.core.util.MockServer", /** @lends sap.ui.core.util.MockServer */
	{
		constructor : function(sId, mSettings, oScope) {
			ManagedObject.apply(this, arguments);
			MockServer._aServers.push(this);
		},

		metadata : {
			properties : {
				/**
				 * Setter for property <code>rootUri</code>. All request path URI are prefixed with this root URI if set.
				 *
				 * Default value is empty/<code>undefined</code>
				 * @param {string} rootUri new value for property <code>rootUri</code>
				 * @public
				 * @name sap.ui.core.util.MockServer#setRootUri
				 * @function
				 */

				/**
				 * Getter for property <code>rootUri</code>.
				 *
				 * Default value is empty/<code>undefined</code>
				 *
				 * @return {string} the value of property <code>rootUri</code>
				 * @public
				 * @name sap.ui.core.util.MockServer#getRootUri
				 * @function
				 */
				rootUri : "string",

				/**
				 * Setter for property <code>requests</code>.
				 * 
				 * Default value is is <code>[]</code>
				 * 
				 * Each array entry should consist of an array with the following properties / values:
				 *
				 * <ul>
				 * <li><b>method <string>: "GET"|"POST"|"DELETE|"PUT"</b>
				 * <br>
				 * (any HTTP verb)
				 * </li>
				 * <li><b>path <string>: "/path/to/resource"</b>
				 * <br> 
				 * The path is converted to a regular expression, so it can contain normal regular expression syntax.
				 * All regular expression groups are forwarded as arguments to the <code>response</code> function.
				 * In addition to this, parameters can be written in this notation: <code>:param</code>. These placeholder will be replaced by regular expression groups.
				 * </li>
				 * <li><b>response <function>: function(xhr, param1, param2, ...) { }</b>
				 * <br>
				 * The xhr object can be used to respond on the request. Supported methods are:
				 * <br>
				 * <code>xhr.respond(iStatusCode, mHeaders, sBody)</code>
				 * <br>
				 * <code>xhr.respondJSON(iStatusCode, mHeaders, oJsonObjectOrString)</code>. By default a JSON header is set for response header
				 * <br>
				 * <code>xhr.respondXML(iStatusCode, mHeaders, sXmlString)</code>. By default a XML header is set for response header
				 * <br>
				 * <code>xhr.respondFile(iStatusCode, mHeaders, sFileUrl)</code>. By default the mime type of the file is set for response header
				 * </li>
				 * </ul>
				 * 
				 * @param {object[]} requests new value for property <code>requests</code>
				 * @public
				 * @name sap.ui.core.util.MockServer#setRequests
				 * @function
				 */

				/**
				 * Getter for property <code>requests</code>.
				 *
				 * Default value is <code>[]</code>
				 *
				 * @return {object[]} the value of property <code>rootUri</code>
				 * @public
				 * @name sap.ui.core.util.MockServer#getRequests
				 * @function
				 */
				requests : {type:"object[]", defaultValue:[]}
			}
		},

		_oServer : null,
		_aFilter : null,
		_oMockdata: null,
		_oMetadata: null,
		_sMetadataUrl: null,
		_sMockdataBaseUrl: null,
		_mEntitySets: null
		
	});


	/**
	 * Starts the server.
	 * @public
	 * @name sap.ui.core.util.MockServer#start
	 * @function
	 */
	MockServer.prototype.start = function() {
		this._oServer = MockServer._getInstance();
		this._aFilters = [];
		var aRequests = this.getRequests();
		var iLength = aRequests.length;
		for (var i = 0; i < iLength; i++) {
			var oRequest = aRequests[i];
			this._addRequestHandler(oRequest.method, oRequest.path, oRequest.response);
		}
	};


	/**
	 * Stops the server.
	 * @public
	 * @name sap.ui.core.util.MockServer#stop
	 * @function
	 */
	MockServer.prototype.stop = function() {
		if (this.isStarted()) {
			this._removeAllRequestHandlers();
			this._removeAllFilters();
			this._oServer = null;
		}
	};


	/**
	 * Returns whether the server is started or not.
	 * 
	 * @return {boolean} whether the server is started or not.
	 * @public
	 * @name sap.ui.core.util.MockServer#isStarted
	 * @function
	 */
	MockServer.prototype.isStarted = function() {
		return !!this._oServer;
	};
	
	/**
	 * Applies the OData system query option string on the given array
	 * @param {object} oFilteredData
	 * @param {string} sQuery string in the form {query}={value}
	 * @param {string} sEntitySetName the name of the entitySet the oFilteredData belongs to
	 * @private
	 * @name sap.ui.core.util.MockServer#_applyQueryOnCollection
	 * @function
	 */
	MockServer.prototype._applyQueryOnCollection = function(oFilteredData, sQuery , sEntitySetName) {
		var aQuery = sQuery.split('=');
		var sODataQueryValue = aQuery[1];
		if(sODataQueryValue === "") return;
		if(sODataQueryValue.lastIndexOf(',') === sODataQueryValue.length){
			throw new Error("400");
		}
		switch (aQuery[0]) {
		case "top":
			if(!(new RegExp(/^\d+$/).test(sODataQueryValue))){
				throw new Error("400");
			}
			oFilteredData.results = oFilteredData.results.slice(0, sODataQueryValue);
			break;
		case "skip":
			if(!(new RegExp(/^\d+$/).test(sODataQueryValue))){
				throw new Error("400");
			}
			oFilteredData.results =  oFilteredData.results.slice(sODataQueryValue ,oFilteredData.results.length);
			break;
		case "orderby":
			oFilteredData.results = this._getOdataQueryOrderby(oFilteredData.results, sODataQueryValue); 
			break;
		case "filter":
			oFilteredData.results = this._getOdataQueryFilter(oFilteredData.results, sODataQueryValue); 
			break;
		case "select":
			oFilteredData.results = this._getOdataQuerySelect(oFilteredData.results, sODataQueryValue); 
			break;
		case "inlinecount":			
			var iCount =  this._getOdataInlineCount(oFilteredData.results , sODataQueryValue);
			if(iCount){
				oFilteredData.__count = iCount;
			}
			break;
		case "expand":			
			oFilteredData.results = this._getOdataQueryExpand(oFilteredData.results, sODataQueryValue ,sEntitySetName); 
			break;
		default:
			throw new Error("400");
		}
		
	};

	/**
	 * Applies the OData system query option string on the given entry
	 * @param {object} oEntry 
	 * @param {string} sQuery string of the form {query}={value}
	 * @param {string} sEntitySetName the name of the entitySet the oEntry belongs to
	 * @private
	 * @name sap.ui.core.util.MockServer#_applyQueryOnEntry
	 * @function
	 */
	MockServer.prototype._applyQueryOnEntry = function(oEntry, sQuery , sEntitySetName) {
		var aQuery = sQuery.split('=');
		var sODataQueryValue = aQuery[1];
		if(sODataQueryValue === "") return;
		if(sODataQueryValue.lastIndexOf(',') === sODataQueryValue.length){
			throw new Error("400");
		}
		switch (aQuery[0]) {
		case "filter":
			return this._getOdataQueryFilter([oEntry], sODataQueryValue)[0]; 
		case "select":
			return this._getOdataQuerySelect([oEntry], sODataQueryValue)[0]; 
		case "expand":			
			return this._getOdataQueryExpand([oEntry], sODataQueryValue ,sEntitySetName)[0]; 
		default:
			throw new Error("400");
		}
	};
	
	/**
	 * Applies the Orderby OData system query option string on the given array
	 * @param {object} aDataSet 
	 * @param {string} sODataQueryValue a comma separated list of property navigation paths to sort by, where each property navigation path terminates on a primitive property
	 * @private
	 * @name sap.ui.core.util.MockServer#_getOdataQueryOrderby
	 * @function
	 */
	MockServer.prototype._getOdataQueryOrderby = function(aDataSet, sODataQueryValue){
		// sort properties lookup
		var aProperties = decodeURIComponent(sODataQueryValue).split(',');
		
		var fnComparator = function compare(a,b) {
			
			for ( var i = 0; i < aProperties.length; i++) {
				// sort order lookup asc / desc
				var aSort = aProperties[i].split(' ');
				// by default the sort is in asc order
				var iSorter = 1;
				if(aSort.length > 1){
					switch (aSort[1]) {
					case 'asc':
						iSorter = 1;
						break;
					case 'desc':
						iSorter = -1;
						break;
					default:
						throw new Error("400");
					}
				}
				// support for complex type property
				var sPropName = aSort[0].replace("/", ".");
				if(!a.hasOwnProperty(sPropName))
					throw new Error("400");
				if (a[sPropName] < b[sPropName])
					return -1*iSorter;
				if (a[sPropName] > b[sPropName])
					return 1*iSorter;
			}
			return 0;
		};
		return aDataSet.sort(fnComparator);
	};

	/**
	 * Applies the Filter OData system query option string on the given array
	 * @param {object} aDataSet 
	 * @param {string} sODataQueryValue a boolean expression
	 * @private
	 * @name sap.ui.core.util.MockServer#_getOdataQueryFilter
	 * @function
	 */
	MockServer.prototype._getOdataQueryFilter = function(aDataSet, sODataQueryValue){
		sODataQueryValue = decodeURIComponent(sODataQueryValue);
		// The data needs to be filtered. for the moment only simple filters can be used
		var sODataFilterMethod = sODataQueryValue.indexOf("(") != -1 ? sODataQueryValue.split("(")[0] : sODataQueryValue.split(" ")[1];
		var that = this;
		var fnGetFilteredData = function (bValue, iValueIndex, iPathIndex, fnSelectFilteredData){
			var aODataFilterValues, sValue;
			if (!bValue){ //e.g eq, ne, gt, lt, le, ge
				aODataFilterValues = sODataQueryValue.split(" ");
				sValue = that._trim(aODataFilterValues[iValueIndex]);
				sValue = ((sValue.charAt(0) == "'") && (sValue.charAt(sValue.length -1) == "'")) ? sValue.substr(1, aODataFilterValues[2].length - 2) : sValue;
			}
			else{ //e.g.substringof, startswith, endswith
				aODataFilterValues = sODataQueryValue.split("(")[1].split(")")[0].split(",");
				sValue = that._trim(aODataFilterValues[iValueIndex]).substr(1, aODataFilterValues[0].length - 2);
			}	

			var sPath = that._trim(aODataFilterValues[iPathIndex]);
			//check if sPath exists as property of the entityset
			if(!aDataSet[0].hasOwnProperty(sPath)){
				throw new Error("400")
			}

			return fnSelectFilteredData(sPath,sValue);
		};

		switch (sODataFilterMethod) {
		case "substringof" :					
			return fnGetFilteredData (true,0,1, 
					function (sPath ,sValue){
				return jQuery.grep(aDataSet, function(oMockData){
					return (oMockData[sPath].indexOf(sValue) != -1);
				});
			})			
		case "startswith" :
			return fnGetFilteredData (true,1,0, 
					function (sPath ,sValue){
				return jQuery.grep(aDataSet, function(oMockData){
					return (oMockData[sPath].indexOf(sValue) == 0);
				});
			})			
		case "endswith" :
			return fnGetFilteredData (true, 1,0, 
					function (sPath ,sValue){
				return jQuery.grep(aDataSet, function(oMockData){
					return (oMockData[sPath].indexOf(sValue) == (oMockData[sPath].length - sValue.length));
				});
			})			
		case "eq" :
			return fnGetFilteredData (false,2,0, 
					function (sPath ,sValue){
				return jQuery.grep(aDataSet, function(oMockData){
					return (oMockData[sPath] == sValue);
				});
			})		
		case "ne" :
			return fnGetFilteredData (false,2,0, 
					function (sPath ,sValue){
				return jQuery.grep(aDataSet, function(oMockData){
					return (oMockData[sPath] != sValue);
				});
			})		
		case "gt" :
			return fnGetFilteredData (false,2,0, 
					function (sPath ,sValue){
				return jQuery.grep(aDataSet, function(oMockData){
					return (oMockData[sPath] > sValue);
				});
			})
		case "lt" :
			return fnGetFilteredData (false,2,0, 
					function (sPath ,sValue){
				return jQuery.grep(aDataSet, function(oMockData){
					return (oMockData[sPath] < sValue);
				});
			})
		case "ge" :
			return fnGetFilteredData (false, 2,0, 
					function (sPath ,sValue){
				return jQuery.grep(aDataSet, function(oMockData){
					return (oMockData[sPath] >= sValue);
				});
			})
		case "le" :
			return fnGetFilteredData (false, 2,0, 
					function (sPath ,sValue){
				return jQuery.grep(aDataSet, function(oMockData){
					return (oMockData[sPath] <= sValue);
				});
			})
		default:
			throw new Error("400");
		}
	};

	/**
	 * Applies the Select OData system query option string on the given array
	 * @param {object} aDataSet 
	 * @param {string} sODataQueryValue a comma separated list of property paths, qualified action names, qualified function names, or the star operator (*)
	 * @private
	 * @name sap.ui.core.util.MockServer#_getOdataQuerySelect
	 * @function
	 */
	MockServer.prototype._getOdataQuerySelect = function(aDataSet, sODataQueryValue){
		var aProperties = sODataQueryValue.split(',');
		if (jQuery.inArray("*", aProperties) !== -1){
			return aDataSet;
		}	
		var aSelectedDataSet = [];
		
		//check if all properties exist
		jQuery.each(aProperties, function(i, sPropertyName){
			if(!aDataSet[0].hasOwnProperty(sPropertyName)){
				throw new Error("404")
			}
		})
		//TODO deepDown selection
		//clone array of objects and delete not selected properties for each object 
		jQuery.each(aDataSet, function(iIndex, oData){
			var oPushedObject = jQuery.extend(true, {}, oData);
			for (var sName in oPushedObject) {
				if (sName !== "__metadata" && jQuery.inArray(sName, aProperties) === -1){
					delete oPushedObject[sName];
				}				
			}
			aSelectedDataSet.push(oPushedObject);
		});	
		return aSelectedDataSet;
	};	
	
	/**
	 * Applies the InlineCount OData system query option string on the given array
	 * @param {object} aDataSet 
	 * @param {string} sODataQueryValue a value of allpages, or a value of none
	 * @private
	 * @name sap.ui.core.util.MockServer#_getOdataInlineCount
	 * @function
	 */
	MockServer.prototype._getOdataInlineCount = function(aDataSet , sODataQueryValue){ 
		var aProperties = sODataQueryValue.split(',');
		
		if(aProperties.length !== 1 || (aProperties[0] !== 'none' && aProperties[0] !== 'allpages')){
			throw new Error("400");
		}
		if (aProperties[0] === 'none'){
			return;
		}			
		return aDataSet.length;
	};	
	
	/**
	 * Applies the Expand OData system query option string on the given array
	 * @param {object} aDataSet 
	 * @param {string} sODataQueryValue a comma separated list of navigation property paths
	 * @param {string} sEntitySetName the name of the entitySet the aDataSet belongs to
	 * @private
	 * @name sap.ui.core.util.MockServer#_getOdataQueryExpand
	 * @function
	 */
	MockServer.prototype._getOdataQueryExpand = function(aDataSet , sODataQueryValue , sEntitySetName){ 
		var that = this;
		var aNavProperties = sODataQueryValue.split(',');
		var oEntitySetNavProps = that._mEntitySets[sEntitySetName].navprops; 
		jQuery.each(aDataSet, function(iIndex, oRecord){
			jQuery.each(aNavProperties, function(iIndex, sNavProp){
				var aNavProps = sNavProp.split("/");
				var sNavProp = aNavProps[0];
				var aNavEntry = jQuery.extend(true, [], that._resolveNavigation(sEntitySetName, oRecord, sNavProp));
				
				if(!!aNavEntry && aNavProps.length > 1){
					var sRestNavProps = aNavProps.splice(1,aNavProps.length).join("/");
					aNavEntry = that._getOdataQueryExpand(aNavEntry ,sRestNavProps , oEntitySetNavProps[sNavProp].to.entitySet )
				}

				if(oEntitySetNavProps[sNavProp].to.multiplicity === "*"){
					oRecord[sNavProp] = {results: aNavEntry};
				}else{
					oRecord[sNavProp] = aNavEntry[0] ? aNavEntry[0] : {};
				}
			})
		});
		return aDataSet;
	}
	
	/**
	 * Refreshes the service metadata document and the mockdata
	 * 
	 * @private
	 * @name sap.ui.core.util.MockServer#_refreshData
	 * @function
	 */
	MockServer.prototype._refreshData = function() {
	
		
		// load the metadata
		this._loadMetadata(this._sMetadataUrl);
		
		// here we need to analyse the EDMX and identify the entity sets
		this._mEntitySets = this._findEntitySets(this._oMetadata); 

		if (this._sMockdataBaseUrl == null) {
			// load the mockdata
			this._generateMockdata(this._mEntitySets, this._oMetadata);
		} else {
			// check the mockdata base URL to end with a slash
			if (!jQuery.sap.endsWith(this._sMockdataBaseUrl, "/") && !jQuery.sap.endsWith(this._sMockdataBaseUrl, ".json")) {
				this._sMockdataBaseUrl += "/";
			}
			// load the mockdata
			this._loadMockdata(this._mEntitySets, this._sMockdataBaseUrl);
		}
	};

	
	/**
	 * Returns the root URI without query or hash parameters
	 * @return {string} the root URI without query or hash parameters
	 * @name sap.ui.core.util.MockServer#_getRootUri
	 * @function
	 */
	MockServer.prototype._getRootUri = function() {
		var sUri = this.getRootUri();
		sUri = sUri && /([^?#]*)([?#].*)?/.exec(sUri)[1]; // remove URL parameters or anchors
		return sUri;
	};
	
	
	/**
	 * Loads the service metadata for the given url
	 * @param {string} sMetadataUrl url to the service metadata document
	 * @return {XMLDocument} the xml document object 
	 * @private
	 * @name sap.ui.core.util.MockServer#_loadMetadata
	 * @function
	 */
	MockServer.prototype._loadMetadata = function(sMetadataUrl) {
		
		// load the metadata
		var oMetadata = jQuery.sap.sjax({url: sMetadataUrl, dataType: "xml"}).data;
		jQuery.sap.assert(oMetadata !== undefined, "The metadata for url \"" + sMetadataUrl + "\" could not be found!");
		this._oMetadata = oMetadata;
		
		return oMetadata;
		
	};
	

	/**
	 * find the entity sets in the metadata XML document
	 * @param {XMLDocument} oMetadata the metadata XML document
	 * @return {map} map of entity sets 
	 * @private
	 * @name sap.ui.core.util.MockServer#_findEntitySets
	 * @function
	 */
	MockServer.prototype._findEntitySets = function(oMetadata) {
		
		// here we need to analyse the EDMX and identify the entity sets
		var mEntitySets = {};
		var oPrincipals = jQuery(oMetadata).find("Principal");
		var oDependents = jQuery(oMetadata).find("Dependent");
		
		jQuery(oMetadata).find("EntitySet").each(function(iIndex, oEntitySet) {
			var $EntitySet = jQuery(oEntitySet);
			// split the namespace and the name of the entity type (namespace could have dots inside)
			var aEntityTypeParts =/((.*)\.)?(.*)/.exec($EntitySet.attr("EntityType"));
			mEntitySets[$EntitySet.attr("Name")] = {
				"name": $EntitySet.attr("Name"), 
				"schema": aEntityTypeParts[2],
				"type": aEntityTypeParts[3],
				"keys": [],
				"keysType" : {},
				"navprops": {}
			};
		});
		
		// helper function to find the entity set and property reference
		// for the given role name
		var fnResolveNavProp = function(sRole, bFrom) {
			var aRoleEnd = jQuery(oMetadata).find("End[Role=" + sRole + "]");
			var sEntitySet;
			var sMultiplicity;
			jQuery.each(aRoleEnd, function(i,oValue){
				if(!!jQuery(oValue).attr("EntitySet")){
					sEntitySet = jQuery(oValue).attr("EntitySet");
				}else{
					sMultiplicity = jQuery(oValue).attr("Multiplicity");
				}
			});
			var aPropRef = [];			
			var oPrinDeps = (bFrom) ? oPrincipals :  oDependents;
			jQuery(oPrinDeps).each(function(iIndex, oPrinDep){ 
				if (sRole == (jQuery(oPrinDep).attr("Role"))) {	
					jQuery(oPrinDep).children("PropertyRef").each(function(iIndex, oPropRef) {
						aPropRef.push(jQuery(oPropRef).attr("Name"));
					});
					return false;
				}
			});				
			return {
				"role": sRole,
				"entitySet": sEntitySet,
				"propRef": aPropRef,
				"multiplicity" : sMultiplicity
			};
		};
		
		// find the keys and the navigation properties of the entity types
		jQuery.each(mEntitySets, function(sEntitySetName, oEntitySet) {
			// find the keys
			var $EntityType = jQuery(oMetadata).find("EntityType[Name=" + oEntitySet.type + "]");
			var aKeys = jQuery($EntityType).find("PropertyRef");
			jQuery.each(aKeys, function(iIndex, oPropRef) {
				var sKeyName = jQuery(oPropRef).attr("Name");
				oEntitySet.keys.push(sKeyName);
				oEntitySet.keysType[sKeyName] = jQuery($EntityType).find("Property[Name="+ sKeyName +"]").attr("Type");
			});
			// resolve the navigation properties
			var aNavProps = jQuery(oMetadata).find("EntityType[Name=" + oEntitySet.type + "] NavigationProperty");
			jQuery.each(aNavProps, function(iIndex, oNavProp) {
				var $NavProp = jQuery(oNavProp);
				oEntitySet.navprops[$NavProp.attr("Name")] = {
					"name": $NavProp.attr("Name"),
					"from": fnResolveNavProp($NavProp.attr("FromRole"), true),
					"to": fnResolveNavProp($NavProp.attr("ToRole"), false)
				};
			})
		});

		// return the entity sets
		return mEntitySets;

	};
	
	
	/**
	 * find the entity types in the metadata XML document
	 * @param {XMLDocument} oMetadata the metadata XML document
	 * @return {map} map of entity types
	 * @private
	 * @name sap.ui.core.util.MockServer#_findEntityTypes
	 * @function
	 */
	MockServer.prototype._findEntityTypes = function (oMetadata) {
		var mEntityTypes = {};
		jQuery(oMetadata).find("EntityType").each(function (iIndex, oEntityType) {
			var $EntityType = jQuery(oEntityType);
			mEntityTypes[$EntityType.attr("Name")] = {
				"name": $EntityType.attr("Name"),
				"properties": [],
				"keys": []
			};
			$EntityType.find("Property").each(function (iIndex, oProperty) {
				var $Property = jQuery(oProperty);
				var type = $Property.attr("Type");
				mEntityTypes[$EntityType.attr("Name")].properties.push({
					"schema": type.substring(0, type.lastIndexOf(".")),
					"type": type.substring(type.lastIndexOf(".") + 1),
					"name": $Property.attr("Name"),
					"precision": $Property.attr("Precision"),
					"scale": $Property.attr("Scale")
				})
			});
			$EntityType.find("PropertyRef").each(function (iIndex, oKey) {
				var $Key = jQuery(oKey);
				var sPropertyName = $Key.attr("Name");
				mEntityTypes[$EntityType.attr("Name")].keys.push(sPropertyName);
			});
		});
		return mEntityTypes;
	};

	
	/**
	 * find the complex types in the metadata XML document
	 * @param {XMLDocument} oMetadata the metadata XML document
	 * @return {map} map of complex types
	 * @private
	 * @name sap.ui.core.util.MockServer#_findComplexTypes
	 * @function
	 */
	MockServer.prototype._findComplexTypes = function (oMetadata) {
		var mComplexTypes = {};
		jQuery(oMetadata).find("ComplexType").each(function (iIndex, oComplexType) {
			var $ComplexType = jQuery(oComplexType);
			mComplexTypes[$ComplexType.attr("Name")] = {
				"name": $ComplexType.attr("Name"),
				"properties": []
			};
			$ComplexType.find("Property").each(function (iIndex, oProperty) {
				var $Property = jQuery(oProperty);
				var type = $Property.attr("Type");
				mComplexTypes[$ComplexType.attr("Name")].properties.push({
					"schema": type.substring(0, type.lastIndexOf(".")),
					"type": type.substring(type.lastIndexOf(".") + 1),
					"name": $Property.attr("Name"),
					"precision": $Property.attr("Precision"),
					"scale": $Property.attr("Scale")
				})
			});
		});
		return mComplexTypes;
	};


	/**
	 * creates a key string for the given keys and entry
	 * @param {object} oEntitySet the entity set info
	 * @param {object} oEntry entity set entry which contains the keys as properties
	 * @return {string} the keys string
	 * @private 
	 * @name sap.ui.core.util.MockServer#_createKeysString
	 * @function
	 */
	MockServer.prototype._createKeysString = function(oEntitySet, oEntry) {
		// creates the key string for an entity
		var that = this;
		var sKeys = "";
		if (oEntry) {
			jQuery.each(oEntitySet.keys, function(iIndex, sKey) {
				if (sKeys) {
					sKeys += ",";
				}

				var oKeyValue = oEntry[sKey];
				if(oEntitySet.keysType[sKey] === "Edm.String"){
					sKeys += sKey + "='" + oKeyValue + "'"; 
				}
				else if(oEntitySet.keysType[sKey] === "Edm.DateTime"){
					sKeys += sKey + "=" + that._getDateInMin(oKeyValue); 
				}
				else{
					sKeys += sKey + "=" + oKeyValue; 
				}
		});
	}
	return sKeys;
};
	
	
	/**
	 * loads the mock data for the given entity sets and tries to load them from
	 * the files inside the given base url. The name of the JSON files containing the
	 * mock data should be the same as the name of the underlying entity type. As
	 * an alternative you could also specify the url to a single JSON file containing
	 * the mock data for all entity types.
	 * @param {map} mEntitySets map of entity sets
	 * @param {string} sBaseUrl the base url which contains the mock data in JSON files or if the url is pointing to a JSON file containing all entity types
	 * @return {array} the mockdata arary containing the data for the entity sets
	 * @private 
	 * @name sap.ui.core.util.MockServer#_loadMockdata
	 * @function
	 */
	MockServer.prototype._loadMockdata = function(mEntitySets, sBaseUrl) {
		// load the entity sets (map the entity type data to the entity set)
		var that = this,
		    mEntityTypesData = {};
		this._oMockdata = {};
		// load the entity types data 
		if (jQuery.sap.endsWith(sBaseUrl, ".json")) {
			// all entity types are in one file
			var oResponse = jQuery.sap.sjax({url: sBaseUrl, dataType: "json"});
			if (oResponse.success) {
				mEntityTypesData = oResponse.data;
			} else {
				jQuery.sap.log.error("The mockdata for all the entity types could not be found at \"" + sBaseUrl + "\"!");
			}
		} else {
			// load the entity types individually
			jQuery.each(mEntitySets, function(sEntitySetName, oEntitySet) {
				if (!mEntityTypesData[oEntitySet.type]) {
					var sEntityTypeUrl = sBaseUrl + oEntitySet.type + ".json";
					var oResponse = jQuery.sap.sjax({url: sEntityTypeUrl, dataType: "json"});
					if (oResponse.success) {
						mEntityTypesData[oEntitySet.type] = oResponse.data;
					} else {
						jQuery.sap.log.error("The mockdata for entity type \"" + oEntitySet.type + "\" could not be found at \"" + sBaseUrl + "\"!");
					}
				}
			});
		}
		// create the mock data for the entity sets and enhance the mock data with metadata
		jQuery.each(mEntitySets, function(sEntitySetName, oEntitySet) {
			// TODO: should we clone here or not? right now we clone because of unique metadata for 
			//       individual entity sets otherwise the data of the entity types would be a 
			//       reference and thus it overrides the metadata from the other entity type.
			//       this happens especially then when we have two entity sets for the same
			//       entity type => maybe we move the metdata generation to the response creation!
			that._oMockdata[sEntitySetName] = [];
			if (mEntityTypesData[oEntitySet.type]) {
				jQuery.each(mEntityTypesData[oEntitySet.type], function(iIndex, oEntity) {
					that._oMockdata[sEntitySetName].push(jQuery.extend(true, {}, oEntity));
				});
			}
			// enhance with OData metadata if exists
			if (that._oMockdata[sEntitySetName].length > 0) {
				that._enhanceWithMetadata(oEntitySet, that._oMockdata[sEntitySetName]);
			}
		});
		// return the new mockdata
		return this._oMockdata;
	};

	
	/**
	 * enhances the mock data for the given entity set with the necessary metadata.
	 * Important is at least to have a metadata entry incl. uri for the entry and 
	 * for the navigation property it is required to have a deferred infor in case
	 * of not expanding it.
	 * @param {object} oEntitySet the entity set info
	 * @param {object} oMockData mock data for the entity set
	 * @private 
	 * @name sap.ui.core.util.MockServer#_enhanceWithMetadata
	 * @function
	 */
	MockServer.prototype._enhanceWithMetadata = function(oEntitySet, oMockData) {
		if (oMockData) {
			var that = this,
			    sRootUri = this._getRootUri(),
			    sEntitySetName = oEntitySet && oEntitySet.name;
			jQuery.each(oMockData, function(iIndex, oEntry) {
				// add the metadata for the entry (type is pointing to the EntityType which is required by datajs to resolve properties)
				oEntry.__metadata = {
					id: sRootUri + sEntitySetName + "(" + that._createKeysString(oEntitySet, oEntry) + ")",
					type: oEntitySet.schema + "." + oEntitySet.type, 
					uri: sRootUri + sEntitySetName + "(" + that._createKeysString(oEntitySet, oEntry) + ")"
				};
				// add the navigation properties
				jQuery.each(oEntitySet.navprops, function(sKey, oNavProp) {
					oEntry[sKey] = {
							__deferred: {
									uri: sRootUri + sEntitySetName + "(" + that._createKeysString(oEntitySet, oEntry) + ")/" + sKey
							}
					};
				});
			});
		}
	};

	/**
	 * verify entitytype keys type ((e.g. Int, String, SByte, Time, DateTimeOffset, Decimal, Double, Single, Boolean, DateTime)
	 * @param {oEntitySet} the entity set for verification
	 * @param {aRequestedKeys} aRequestedKeys the requested Keys
	 * @return boolean
	 * @private
	 * @name sap.ui.core.util.MockServer#_isRequestedKeysValid
	 * @function
	 */
	MockServer.prototype._isRequestedKeysValid = function (oEntitySet, aRequestedKeys) {
		
		if (aRequestedKeys.length === 1 && !aRequestedKeys[0].split('=')[1]) {
			aRequestedKeys = [oEntitySet.keys[0] + "=" + aRequestedKeys[0]];
		}
		
		for ( var i = 0; i < aRequestedKeys.length; i++ ) {
			var aKey = aRequestedKeys[i].split('=');
			var sKey = this._trim(aKey[0]);
			var sRequestValue = this._trim(aKey[1]);
			var sFirstChar = sRequestValue.charAt(0);
			var sLastChar =  sRequestValue.charAt(sRequestValue.length -1);

			if(oEntitySet.keysType[sKey] === "Edm.String"){
				if (sFirstChar !== "'" || sLastChar !== "'"){
					return false;
				} 
			}else if(oEntitySet.keysType[sKey] === "Edm.DateTime"){
				if (sFirstChar === "'" || sLastChar !== "'"){
					return false;
				} 
			}else {
				if(sFirstChar === "'" || sLastChar === "'"){
					return false;
				}
			}
		}
		return true;
	};
	
	/**
	 * Takes a string '<poperty1>=<value1>, <poperty2>=<value2>,...' and creates an
	 * object (hash map) out of it.
	 * 
	 * @param {sKeys}
	 *            the string of porperty/value pairs
	 * @param {object}
	 *            object consisting of the parsed properties
	 */	
	MockServer.prototype._parseKeys = function(sKeys) {
	    var oResult = {}; // default is an empty hash map
		    var aProps = sKeys.split(",");
		    for (var i=0; i<aProps.length; i++) {
		        var aPair = aProps[i].split("=");
		        if (aPair.length === 2) {
		        	if (aPair[1].indexOf('\'') === 0) {
		            oResult[aPair[0]] = aPair[1].slice(1,aPair[1].length-1);
		        	} else {
		        		oResult[aPair[0]] = aPair[1];
		        	}
		        }
		    };
	    return oResult;
	};
	
	
	/**
	 * This method takes over the already existing key values from oKeys and
	 * adds values for all remaining keys specified by oEntitySet.
	 * The result is merged into oEntity.
	 * 
	 * @param {object}
	 *            oEntitySet description of the entity set, conatins the full list of key fields
	 * @param {oKeys}
	 *            oKeys contains already defined key values
	 * @param {oEntity}
	 *            oEntity the result object, where the key property/value pairs merged into
	 * @name sap.ui.core.util.MockServer#_completeKey
	 * @function
	 */
	MockServer.prototype._completeKey = function(oEntitySet, oKeys, oEntity) {
		if (oEntity) {
			jQuery.each(oEntitySet.keys, function(iIndex, sKey) {
				if (oKeys[sKey]) {
					if (!oEntity[sKey]) {
						// take over the specified key value
						oEntity[sKey] = oKeys[sKey];
						}
				} else {
					// create a new key value
					if (!oEntitySet.iSequence) {
						oEntitySet.iSequence = 0;
					}
					oEntitySet.iSequence++;
					oEntity[sKey] = oEntitySet.type + "_" + oEntity.type + "_" + oEntitySet.iSequence.toString();
				}
			});
		}
	};
	
	/**
	 * Generate some mock data for a specific entityType. String value will be
	 * based on the property name and an index Integer / Decimal value will be
	 * generated randomly Date / Time / DateTime value will also be generated
	 * randomly
	 * 
	 * @param {object}
	 *            oEntityType the entity type used to generate the data
	 * @param {int}
	 *            iIndex index of this particular object in the parent
	 *            collection
	 * @param {map}
	 *            mComplexTypes map of the complex types
	 * @return {object} the mocked entity
	 * @private
	 * @name sap.ui.core.util.MockServer#_generateDataFromEntity
	 * @function
	 */
	MockServer.prototype._generateDataFromEntity = function(oEntityType, iIndex, mComplexTypes) {
		var oEntity = {};
		for (var i = 0; i < oEntityType.properties.length; i++) {
			var oProperty = oEntityType.properties[i];
			var oPropertyValue = "";
				switch (oProperty.type){
					case "String": 
						oEntity[oProperty.name] = oProperty.name + "_" + iIndex;
						break;
					case "DateTime":
						var date = new Date();
						date.setFullYear(2000 + Math.floor(Math.random() * 20));
						date.setDate(Math.floor(Math.random() * 30));
						date.setMonth(Math.floor(Math.random() * 12));
						date.setMilliseconds(0);
						oEntity[oProperty.name] = "/Date(" + date.getTime() + ")/";
						break;
					case "Int16":
					case "Int32":
					case "Int64":
						oEntity[oProperty.name] = Math.floor(Math.random() * 10000);
						break;
					case "Decimal":
						oEntity[oProperty.name] = Math.floor(Math.random() * 1000000) / 100;
						break;
					case "Boolean": 
						oEntity[oProperty.name] = Math.random()<.5;		
						break;
					case "Byte":
						oEntity[oProperty.name] = Math.floor(Math.random()*10);
						break;
					case "Double":
						oEntity[oProperty.name] = Math.random()*10;
						break;
					case "Single":
						oEntity[oProperty.name] = Math.random() * 1000000000;
						break;
					case "SByte":
						oEntity[oProperty.name] = Math.floor(Math.random()*10);
						break;
					case "Time":
						oEntity[oProperty.name] = Math.floor(Math.random()*23)+":"+ Math.floor(Math.random()*59)+":"+Math.floor(Math.random()*59);
						break;
					case "Guid":
					case "DateTimeOffset":
						break; //TODO: generate values for GUID and DateTimeOffset
					default:	
						oEntity[oProperty.name] = this._generateDataFromEntity(mComplexTypes[oProperty.type], iIndex);
				}

		}		
		return oEntity;
	};
	

	/**
	 * Generate some mock data for a specific entityset.
	 * @param {object} oEntitySet the entity set for which we want to generate the data
	 * @param {map} mEntityTypes map of the entity types
	 * @param {map} mComplexTypes map of the complex types
	 * @return {array} the array of mocked data
	 * @private
	 * @name sap.ui.core.util.MockServer#_generateDataFromEntitySet
	 * @function
	 */
	MockServer.prototype._generateDataFromEntitySet = function(oEntitySet, mEntityTypes, mComplexTypes) {
		var oEntityType = mEntityTypes[oEntitySet.type];
		var aMockedEntries = [];
		for ( var i = 0; i < 100; i++) {
			aMockedEntries.push(this._generateDataFromEntity(oEntityType, i, mComplexTypes));
		}
		return aMockedEntries;
	};
	

	/**
	 * Generate some mock data based on the metadata specified for the odata service.
	 * @param {map} mEntitySets map of the entity sets
	 * @param {object} oMetadata the complete metadata for the service
	 * @private
	 * @name sap.ui.core.util.MockServer#_generateMockdata
	 * @function
	 */
	MockServer.prototype._generateMockdata = function(mEntitySets, oMetadata) {
		// load the entity sets (map the entity type data to the entity set)
		var that = this, sRootUri = this._getRootUri(), oMockData = {};

		// here we need to analyse the EDMX and identify the entity types and complex types
		var mEntityTypes = this._findEntityTypes(oMetadata);
		var mComplexTypes = this._findComplexTypes(oMetadata);

		jQuery.each(mEntitySets, function(sEntitySetName, oEntitySet) {
			oMockData[sEntitySetName] = that._generateDataFromEntitySet(oEntitySet, mEntityTypes, mComplexTypes);
			jQuery.each(oMockData[sEntitySetName], function(iIndex, oEntry) {
				// add the metadata for the entry
				oEntry.__metadata = {
					uri : sRootUri + sEntitySetName + "(" + that._createKeysString(oEntitySet, oEntry) + ")",
					type : oEntitySet.schema + "." + oEntitySet.type
				};
				// add the navigation properties
				jQuery.each(oEntitySet.navprops, function(sKey, oNavProp) {
					oEntry[sKey] = {
						__deferred : {
							uri : sRootUri + sEntitySetName + "(" + that._createKeysString(oEntitySet, oEntry) + ")/" + sKey
						}
					};
				});
			});
		});
		this._oMockdata = oMockData;
	};

	// helper function to resolve a navigation and return the matching entities
	MockServer.prototype._resolveNavigation = function(sEntitySetName, oFromRecord, sNavProp) {
		var oEntitySet = this._mEntitySets[sEntitySetName];
		var oNavProp = oEntitySet.navprops[sNavProp];
		if(!oNavProp){
			throw new Error("404");
		}
		
		var aEntries = [];
		var iPropRefLength = oNavProp.from.propRef.length;
		//if there is no ref.constraint, the data is return according to the multiplicity 
		if(iPropRefLength === 0 ){
			if(oNavProp.to.multiplicity === "*"){
				return this._oMockdata[oNavProp.to.entitySet];
			}
			else{
				aEntries.push(this._oMockdata[oNavProp.to.entitySet][0]);
				return aEntries;
			}
		}
		// maybe we can do symbolic links with a function to handle the navigation properties 
		// instead of copying the data into the nested structures
		jQuery.each(this._oMockdata[oNavProp.to.entitySet], function(iIndex, oToRecord) {

			// check for property ref being identical
			var bEquals = true;
			for (var i = 0; i < iPropRefLength; i++) {
				if (oFromRecord[oNavProp.from.propRef[i]] != oToRecord[oNavProp.to.propRef[i]]) {
					bEquals = false;
					break;
				}
			}
			// if identical we add the to record
			if (bEquals) {
				aEntries.push(oToRecord);
			}

		});
		return aEntries;
	};

	
	/**
	 * Simulates an existing OData service by sepcifiying the metadata URL and the base URL for the mockdata. The server
	 * configures the request handlers depending on the service metadata. The mockdata needs to be stored individually for
	 * each entity type in a separate JSON file. The name of the JSON file needs to match the name of the entity type. If
	 * no base url for the mockdata is specified then the mockdata are generated from the metadata
	 * 
	 * @param {string} sMetadataUrl url to the service metadata document
	 * @param {string} sMockdataBaseUrl base url which contains the mockdata as single .json files or the .json file containing the complete mock data 
	 * 
	 * @experimental functionality might be enhanced in future
	 * @since 1.13.2
	 * @public
	 * @name sap.ui.core.util.MockServer#simulate
	 * @function
	 */
	MockServer.prototype.simulate = function(sMetadataUrl, sMockdataBaseUrl) {
		var that = this;
		this._sMetadataUrl = sMetadataUrl;
		this._sMockdataBaseUrl = sMockdataBaseUrl;
		
		this._refreshData();
		
		// helper to find the entity set entry for a given entity set name and the keys of the entry
		var fnGetEntitySetEntry = function(sEntitySetName, sKeys) {
			var oFoundEntry;
			var oEntitySet = that._mEntitySets[sEntitySetName];
			var aKeys = oEntitySet.keys;
			// split keys
			var aRequestedKeys = sKeys.split(',');

			// check number of keys to be equal to the entity keys and validates keys type for quotations
			if(aRequestedKeys.length !== aKeys.length || !that._isRequestedKeysValid(oEntitySet, aRequestedKeys)) {
				return oFoundEntry;
			}
			
			if (aRequestedKeys.length === 1 && !aRequestedKeys[0].split('=')[1]) {
				aRequestedKeys = [aKeys[0] + "=" + aRequestedKeys[0]];
			}
			jQuery.each(that._oMockdata[sEntitySetName], function(iIndex, oEntry) {
				// check each key for existence and value
				for ( var i = 0; i < aRequestedKeys.length; i++) {
					var aKeyVal = aRequestedKeys[i].split('=');
					var sKey = that._trim(aKeyVal[0]);
					//key doesn't match, continue to next entry
					if(jQuery.inArray(sKey, aKeys) === -1){
						return true; // = continue
					}
					
					var sNewValue = that._trim(aKeyVal[1]);
					var sOrigiValue = oEntry[sKey];
					if(oEntitySet.keysType[sKey] === "Edm.String"){
						//in case of string, remove the quotations
						sNewValue = sNewValue.replace(/^\'|\'$/g,'');
					}
					else if (oEntitySet.keysType[sKey] === "Edm.DateTime"){
							sOrigiValue = that._getDateInMin(sOrigiValue);
					}

					//value doesn't match, continue to next entry
					if ( sOrigiValue !== sNewValue) {
						return true; // = continue
					}
				}
				oFoundEntry = {index: iIndex, entry: oEntry};
				return false; // = break
			});
			return oFoundEntry;
		};
		

		// helper to resolve an entity set for insert/delete/update operations
		var fnResolveTargetEntityName = function(oEntitySet, sKeys, sUrlParams) {
			// Set the default entity name
			var sSetName = oEntitySet.name;
			// If there are sUrlParams try to find a navigation property
			if (sUrlParams) {
				var navProp = oEntitySet.navprops[sUrlParams];
			}
			if (navProp) {
				// instead of the default entity name use the endpoints entity
				// name
				sSetName = navProp.to.entitySet;
			}
			return sSetName;
		};

		var initNewEntity = function(oXhr, sTargetEntityName, sKeys, sUrlParams) {
			var oEntity = JSON.parse(oXhr.requestBody);
			if (oEntity) {
				if (sKeys) {
					var oKeys = that._parseKeys(sKeys);
					//TODO is it allowed to create/update an entry without supplying all its keys?
					that._completeKey(that._mEntitySets[sTargetEntityName], oKeys, oEntity);
				}
				that._enhanceWithMetadata(that._mEntitySets[sTargetEntityName], [oEntity]);
				return oEntity;
			}
			return null;
		};
		
		// create the request handlers
		var aRequests = [];
		
		// add the CSRF-token request
        aRequests.push({
            method : "GET",
            path : new RegExp(".*"),
            response : function(oXhr) {
                if (oXhr.requestHeaders["x-csrf-token"] == "Fetch" ) {
                    oXhr.respond(200, { "X-CSRF-Token": "42424242424242424242424242424242" });
                } 
            }
        });
		
		// add the $metadata request
		aRequests.push({
			method : "GET",
			path : new RegExp("\\$metadata([?#].*)?"),
			response : function(oXhr) {
				jQuery.sap.require("jquery.sap.xml");
				oXhr.respond(200, { "Content-Type": "application/xml;charset=utf-8" }, jQuery.sap.serializeXML(that._oMetadata));
			}
		});

		// batch processing
		aRequests.push({
			method : "POST",
			path : new RegExp("\\$batch([?#].*)?"),
			response : function(oXhr) {
				var fnResovleStatus = function(iStatusCode) {
					switch (iStatusCode) {
					case 200:
						return "200 OK";
					case 204:
						return "204 No Content";
					case 201:
						return "201 Created";
					case 400:
						return "400 Bad Request";
					case 404:
						return "404 Not Found";
					default:
						break;
					}
				};
				var fnBuildResponseString = function(oResponse) {
					var sResponseData = JSON.stringify(oResponse.data) || "";
					return "HTTP/1.1 " + fnResovleStatus(oResponse.statusCode) + "\r\nContent-Type: application/json\r\nContent-Length: "
					+ sResponseData.length + "\r\ndataserviceversion: 2.0\r\n\r\n" + sResponseData + "\r\n";
				};
				// START BATCH HANDLING
				var sRequestBody = oXhr.requestBody;
				var oBoundaryRegex = new RegExp("--batch_[a-z0-9-]*");
				var sBoundary = oBoundaryRegex.exec(sRequestBody)[0];
				// boundary is defined in request header
				if (!!sBoundary) {
					var aBatchBodyResponse = [];
					//split requests by boundary
					var aBatchRequests = sRequestBody.split(sBoundary);
					var sServiceURL = oXhr.url.split("$")[0];

					var rPut = new RegExp("PUT (.*) HTTP");
					var rPost = new RegExp("POST (.*) HTTP");
					var rDelete = new RegExp("DELETE (.*) HTTP");
					var rGet = new RegExp("GET (.*) HTTP");

					for ( var i = 1; i < aBatchRequests.length - 1; i++) {
						var sBatchRequest = aBatchRequests[i];
						//GET Handling
						if (rGet.test(sBatchRequest) && sBatchRequest.indexOf("multipart/mixed") == -1) {
							//In case of POST, PUT or DELETE not in ChangeSet
							if (rPut.test(sBatchRequest) || rPost.test(sBatchRequest) || rDelete.test(sBatchRequest)) {
								oXhr.respond(400, null, "The Data Services Request could not be understood due to malformed syntax");
								return;
							} 
							var oResponse = jQuery.sap.sjax({
								url : sServiceURL + rGet.exec(sBatchRequest)[1],
								dataType : "json"
							});
							aBatchBodyResponse.push("\r\nContent-Type: application/http\r\n" + "Content-Length: " + fnBuildResponseString(oResponse).length
									+ "\r\n" + "content-transfer-encoding: binary\r\n\r\n" + fnBuildResponseString(oResponse));
						}
						//CUD handling within changesets    	   
						else {
							var aChangesetResponses = [];

							// copying the mock data to support rollback
							var oCopiedMockdata = jQuery.extend(true, {}, that._oMockdata);

							var fnCUDRequest = function(rCUD, sData, sType) {
								var oResponse = jQuery.sap.sjax({
									type : sType,
									url : sServiceURL + rCUD.exec(sChangesetRequest)[1],
									dataType : "json",
									data : sData
								});

								if (oResponse.statusCode == 400 || oResponse.statusCode == 404) {
									var sError = "\r\nHTTP/1.1 " + fnResovleStatus(oResponse.statusCode)
									+ "\r\nContent-Type: application/json\r\nContent-Length: 0\r\n\r\n";
									throw new Error(sError);
								}
								aChangesetResponses.push(fnBuildResponseString(oResponse));
							};
							// extract changeset
							var sChangesetBoundary = sBatchRequest.substring(sBatchRequest.indexOf("boundary=") + 9, sBatchRequest
									.indexOf("\r\n\r\n"));
							var aChangesetRequests = sBatchRequest.split("--" + sChangesetBoundary);

							try {
								for ( var j = 1; j < aChangesetRequests.length - 1; j++) {
									var sChangesetRequest = aChangesetRequests[j];
									//Check if GET exists in ChangeSet - Return 400
									if (rGet.test(sChangesetRequest)) {
										// rollback
										that._oMockdata = oCopiedMockdata;
										oXhr.respond(400, null, "The Data Services Request could not be understood due to malformed syntax");
										return;
									} else if (rPut.test(sChangesetRequest)) {
										// PUT
										var sData = sChangesetRequest.substring(sChangesetRequest.indexOf("{"),
												sChangesetRequest.lastIndexOf("}") + 1).replace(/\\/g, '');
										fnCUDRequest(rPut, sData, 'PUT');
									} else if (rPost.test(sChangesetRequest)) {
										// POST
										var sData = sChangesetRequest.substring(sChangesetRequest.indexOf("{"),
												sChangesetRequest.lastIndexOf("}") + 1).replace(/\\/g, '');
										fnCUDRequest(rPost, sData, 'POST');

									} else if (rDelete.test(sChangesetRequest)) {
										// DELETE
										fnCUDRequest(rDelete, null, 'DELETE');
									}
								}//END ChangeSets FOR
								var sChangesetRespondData = "\r\nContent-Type: multipart/mixed; boundary=ejjeeffe1\r\n\r\n--ejjeeffe1";
								for ( var k = 0; k < aChangesetResponses.length; k++) {
									sChangesetRespondData += "\r\nContent-Type: application/http\r\n" + "Content-Length: "
									+ aChangesetResponses[k].length + "\r\n" + "content-transfer-encoding: binary\r\n\r\n"
									+ aChangesetResponses[k] + "--ejjeeffe1";
								}
								sChangesetRespondData += "--\r\n";
								aBatchBodyResponse.push(sChangesetRespondData);
							} catch (oError) {
								that._oMockdata = oCopiedMockdata;
								var sError = "\r\nContent-Type: application/http\r\n" + "Content-Length: " + oError.message.length
								+ "\r\n" + "content-transfer-encoding: binary\r\n\r\n" + oError.message;
								aBatchBodyResponse.push(sError);
							}
						} //END ChangeSets handling	 
					}//END Main FOR
					//CREATE BATCH RESPONSE
					var sRespondData = "--ejjeeffe0";
					for ( var i = 0; i < aBatchBodyResponse.length; i++) {
						sRespondData += aBatchBodyResponse[i] + "--ejjeeffe0";
					}
					sRespondData += "--";
					var mHeaders = {
							'Content-Type' : "multipart/mixed; boundary=ejjeeffe0"
					};
					oXhr.respond(202, mHeaders, sRespondData);
					//no boundary is defined
				} else {
					oXhr.respond(202);
				}
			}
		});

		
		// add entity sets
		jQuery.each(this._mEntitySets, function(sEntitySetName, oEntitySet) {
			
			// support $count requests on entity set
			aRequests.push({
				method : "GET",
				path : new RegExp("(" + sEntitySetName + ")/\\$count/?(.*)?"),
				response : function(oXhr, sEntitySetName, sUrlParams) {
					oXhr.respond(200, { "Content-Type": "text/plain;charset=utf-8" }, "" + that._oMockdata[sEntitySetName].length);
				}
			});
			
			// support entity set with and without OData system query options
			aRequests.push({
				method : "GET",
				path : new RegExp("(" + sEntitySetName + ")/?(\\?\\$((filter|skip|top|orderby|select|inlinecount|expand)=(.*)))?"),
				response : function(oXhr, sEntitySetName, sUrlParams) {
					var aData = that._oMockdata[sEntitySetName];
					if(aData){
						// using extend to copy the data to a new array
						var oFilteredData = {results :jQuery.extend(true, [], aData)};
						if (sUrlParams) {
							// sUrlParams should not contains ?, but only & in its stead
							var aUrlParams = sUrlParams.replace("?", "&").replace(/\$/g,'').split("&");
							if (aUrlParams.length > 1){
								aUrlParams = that._orderQueryOptions(aUrlParams);
							}	
							try{
								jQuery.each(aUrlParams, function(iIndex, sQuery) {
									that._applyQueryOnCollection(oFilteredData, sQuery, sEntitySetName);
								});
							}catch(e){
								oXhr.respond(parseInt(e.message || e.number, 10));
								return;
							}
						}
						oXhr.respond(200, {	"Content-Type" : "application/json;charset=utf-8"	}, JSON.stringify({	d : oFilteredData}));		
					}else{
						oXhr.respond(404);
					}
				}
			});
			
			// support access of a single entry of an entity set with and without OData system query options
			aRequests.push({
				method : "GET",
				path : new RegExp("(" + sEntitySetName + ")\\(([^/\\?#]+)\\)/?(\\?\\$((filter|skip|top|orderby|select|inlinecount|expand)=(.*)))?"),
				response : function(oXhr, sEntitySetName, sKeys, sUrlParams) {
					
					var oEntry = jQuery.extend(true, {}, fnGetEntitySetEntry(sEntitySetName, sKeys));
					if (!jQuery.isEmptyObject(oEntry)) {
						if (sUrlParams) {
							// sUrlParams should not contains ?, but only & in its stead
							var aUrlParams = sUrlParams.replace("?", "&").replace(/\$/g,'').split("&");
							if (aUrlParams.length > 1){
								aUrlParams = that._orderQueryOptions(aUrlParams);
							}
							
							try{
								jQuery.each(aUrlParams, function(iIndex, sQuery) {
									oEntry.entry = that._applyQueryOnEntry(oEntry.entry, sQuery, sEntitySetName);
								});
							}catch(e){
								oXhr.respond(parseInt(e.message || e.number, 10));
								return;
							 }
						}
						oXhr.respond(200, { "Content-Type": "application/json;charset=utf-8" }, JSON.stringify({d: oEntry.entry}));
					} else {
						oXhr.respond(404);
					}
				}
			});
			
			// support navigation property 
			jQuery.each(oEntitySet.navprops, function(sNavName, oNavProp) {
				// support $count requests on navigation properties
				aRequests.push({
					method : "GET",
					path : new RegExp("(" + sEntitySetName + ")\\(([^/\\?#]+)\\)/(" + sNavName + ")/\\$count/?(.*)?"),
					response : function(oXhr, sEntitySetName, sKeys, sNavProp, sUrlParams) {
						var oEntry = fnGetEntitySetEntry(sEntitySetName, sKeys);
						if (oEntry) {
							var aEntries = that._resolveNavigation(sEntitySetName, oEntry.entry, sNavProp);
							oXhr.respond(200, { "Content-Type": "text/plain;charset=utf-8" }, "" + aEntries.length);
						} else {
							oXhr.respond(404);
						}
					}
				});
				
				// support access of navigation property with and without OData system query options
				aRequests.push({
					method : "GET",
					path : new RegExp("(" + sEntitySetName + ")\\(([^/\\?#]+)\\)/(" + sNavName + ")/?(\\?\\$((filter|skip|top|orderby|select|inlinecount|expand)=(.*)))?"),
					response : function(oXhr, sEntitySetName, sKeys, sNavProp, sUrlParams) {					
						var oEntry = fnGetEntitySetEntry(sEntitySetName, sKeys);
						if (oEntry) {
							var aEntries,oFilteredData={}; 
							try{
								aEntries = that._resolveNavigation(sEntitySetName, oEntry.entry, sNavProp);

								if(aEntries){
									var sMultiplicity = that._mEntitySets[sEntitySetName].navprops[sNavProp].to.multiplicity;
									if(sMultiplicity === "*"){
										oFilteredData = {results : jQuery.extend(true, [], aEntries)};
									}else{
										oFilteredData = jQuery.extend(true, {}, aEntries[0]);
									}
									if (sUrlParams) {
										// sUrlParams should not contains ?, but only & in its stead
										var aUrlParams = sUrlParams.replace("?", "&").replace(/\$/g,'').split("&");

										if (aUrlParams.length > 1){
											aUrlParams = that._orderQueryOptions(aUrlParams);
										}	

										if(sMultiplicity === "*"){
											jQuery.each(aUrlParams, function(iIndex, sQuery) {
												that._applyQueryOnCollection(oFilteredData, sQuery, that._mEntitySets[sEntitySetName].navprops[sNavProp].to.entitySet);
											});
										}else{
											jQuery.each(aUrlParams, function(iIndex, sQuery) {
												oFilteredData = that._applyQueryOnEntry(oFilteredData, sQuery, that._mEntitySets[sEntitySetName].navprops[sNavProp].to.entitySet);
											});
										}
									}
								}
								oXhr.respond(200, { "Content-Type": "application/json;charset=utf-8" }, JSON.stringify({d: oFilteredData}));
								return;
							}catch (e) {
								oXhr.respond(parseInt(e.message || e.number, 10));
								return;
							}
						}
						oXhr.respond(404);
					}
				});
				
			});
			
			// support creation of an entity of a specific type
			aRequests.push({
				method : "POST",
				path : new RegExp("(" + sEntitySetName + ")(\\(([^/\\?#]+)\\)/?(.*)?)?"),
				response : function(oXhr, sEntitySetName, group2 ,sKeys, sNavName) {
					var sRespondData = null;
					var sRespondContentType = null;
					var iResult = 405; // default: method not allowed
					var sTargetEntityName = fnResolveTargetEntityName(oEntitySet, sKeys, sNavName);
					if (sTargetEntityName) {
						var oEntity = initNewEntity(oXhr, sTargetEntityName, sKeys, sNavName);
						if (oEntity) {
							var sUri = that._getRootUri() + sTargetEntityName + "(" + that._createKeysString(that._mEntitySets[sTargetEntityName], oEntity) + ")";
							sRespondData = JSON.stringify({d: oEntity, uri: sUri}); //'{"uri": "' + sUri + '" }';
							sRespondContentType = {"Content-Type": "application/json;charset=utf-8"};
							that._oMockdata[sTargetEntityName] = that._oMockdata[sTargetEntityName].concat([oEntity]);
							iResult = 201; 
						}
					}
					oXhr.respond(iResult, sRespondContentType, sRespondData); 
				}
			});
			
			// support update of an entity of a specific type
			aRequests.push({
				method : "PUT",
				path : new RegExp("(" + sEntitySetName + ")\\(([^/\\?#]+)\\)/?(.*)?"),
				response : function(oXhr, sEntitySetName, sKeys, sNavName) {
					var iResult = 405; // default: method not allowed 
					var sRespondData = null;
					var sRespondContentType = null;
					
					var sTargetEntityName = fnResolveTargetEntityName(oEntitySet, sKeys, sNavName);
					if (sTargetEntityName) {
						var oEntity = initNewEntity(oXhr, sTargetEntityName, sKeys, sNavName);
						if (oEntity) {
							var sUri = that._getRootUri() + sTargetEntityName + "(" + that._createKeysString(that._mEntitySets[sTargetEntityName], oEntity) + ")";
							//sRespondData = '{"uri": "' + sUri + '" }';
							sRespondContentType = {"Content-Type": "application/json;charset=utf-8"};
							
							var oExistingEntry = fnGetEntitySetEntry(sEntitySetName, sKeys);
							if (oExistingEntry) { // Overwrite existing
								that._oMockdata[sEntitySetName][oExistingEntry.index] = oEntity;
							} else { // really new //TODO don't allow creation of new entries with PUT
								that._oMockdata[sTargetEntityName] = that._oMockdata[sTargetEntityName].concat([oEntity]);
							}
							iResult = 204; 
						}
					} 
					oXhr.respond(iResult, sRespondContentType, sRespondData);  
				}
			});
			
			// support deletion of an entity of a specific type
			aRequests.push({
				method : "DELETE",
				path : new RegExp("(" + sEntitySetName + ")\\(([^/\\?#]+)\\)/?(.*)?"),
				response : function(oXhr, sEntitySetName, sKeys, sUrlParams) {
					var iResult = 200; 
					var oEntry = fnGetEntitySetEntry(sEntitySetName, sKeys);
					if (oEntry) {
						that._oMockdata[sEntitySetName].splice(oEntry.index, 1);
					} else {
						iResult = 400;
					}
					oXhr.respond(iResult, null, null);
				}
			});
			
		});
		
		// apply the request handlers
		this.setRequests(aRequests);
		
	};


	/**
	 * Organize query options according to thier execution order
	 * 
	 * @private
	 * @name sap.ui.core.util.MockServer#_orderQueryOptions
	 * @function
	 */
	MockServer.prototype._orderQueryOptions = function(aUrlParams) {	
		var iFilterIndex, iInlinecountIndex, iSkipIndex, iTopIndex,  iOrderbyIndex, iSelectindex, iExpandIndex, aOrderedUrlParams = [];
		jQuery.each(aUrlParams, function(iIndex, sQuery) {
			switch (sQuery.split('=')[0]) {
				case "top": iTopIndex = jQuery.inArray(sQuery, aUrlParams); break;			
				case "skip": iSkipIndex = jQuery.inArray(sQuery, aUrlParams); break;			
				case "orderby": iOrderbyIndex = jQuery.inArray(sQuery, aUrlParams); break;		
				case "filter": iFilterIndex = jQuery.inArray(sQuery, aUrlParams); break;		
				case "select": iSelectindex = jQuery.inArray(sQuery, aUrlParams); break;
				case "inlinecount": iInlinecountIndex = jQuery.inArray(sQuery, aUrlParams); break;
				case "expand": iExpandIndex = jQuery.inArray(sQuery, aUrlParams); break;
			}
		});	
		
		if (iFilterIndex >= 0) aOrderedUrlParams.push(aUrlParams[iFilterIndex]);
		if (iInlinecountIndex >= 0) aOrderedUrlParams.push(aUrlParams[iInlinecountIndex]);
		if (iSkipIndex >= 0) aOrderedUrlParams.push(aUrlParams[iSkipIndex]);
		if (iTopIndex >= 0) aOrderedUrlParams.push(aUrlParams[iTopIndex]);
		if (iSelectindex >= 0) aOrderedUrlParams.push(aUrlParams[iSelectindex]);
		if (iOrderbyIndex >= 0) aOrderedUrlParams.push(aUrlParams[iOrderbyIndex]);
		if (iExpandIndex >= 0) aOrderedUrlParams.push(aUrlParams[iExpandIndex]);
		
		return aOrderedUrlParams;
	};
	
	
	/**
	 * Removes all request handlers.
	 * 
	 * @private
	 * @name sap.ui.core.util.MockServer#_removeAllRequestHandlers
	 * @function
	 */
	MockServer.prototype._removeAllRequestHandlers = function() {
		var aRequests = this.getRequests();
		var iLength = aRequests.length;
		for (var i = 0; i < iLength; i++) {
			MockServer._removeResponse(aRequests[i].response);
		}
	};


	/**
	 * Removes all filters.
	 * 
	 * @private
	 * @name sap.ui.core.util.MockServer#_removeAllFilters
	 * @function
	 */
	MockServer.prototype._removeAllFilters = function() {
		for (var i = 0; i < this._aFilters.length; i++) {
			MockServer._removeFilter(this._aFilters[i]);
		}
		this._aFilters = null;
	};


	/**
	 * Adds a request handler to the server, based on the given configuration.
	 * 
	 * @param {string}
	 *          sMethod HTTP verb to use for this method (e.g. GET, POST, PUT, DELETE...)
	 * @param {string|regexp}
	 *          sPath the path of the URI (will be concatenated with the rootUri)
	 * @param {function}
	 *          fnResponse the response function to call when the request occurs
	 * 
	 * @private
	 * @name sap.ui.core.util.MockServer#_addRequestHandler
	 * @function
	 */
	MockServer.prototype._addRequestHandler = function(sMethod, sPath, fnResponse) {
		sMethod = sMethod ? sMethod.toUpperCase() : sMethod;
		if (typeof sMethod !== "string") {
			throw new Error("Error in request configuration: value of 'method' has to be a string");
		}
		if (!(typeof sPath === "string" || sPath instanceof RegExp)) {
			throw new Error("Error in request configuration: value of 'path' has to be a string or a regular expression");
		}
		if (typeof fnResponse !== "function") {
			throw new Error("Error in request configuration: value of 'response' has to be a function");
		}

		var sUri = this._getRootUri();
		
		// create the URI regexp (will be escaped)
		sUri = sUri && new RegExp(this._escapeStringForRegExp(sUri));
		
		// create the path regexp (will have the special regexp encoding)
		if (sPath && !(sPath instanceof RegExp)) {
			sPath = new RegExp(this._createRegExpPattern(sPath));
		}
		
		// create the regexp for the request handler (concat root uri and path)
		var oRegExp = this._createRegExp(sUri ? sUri.source + sPath.source : sPath.source);

		this._addFilter(this._createFilter(sMethod, oRegExp));
		this._oServer.respondWith(sMethod, oRegExp, fnResponse);

		// some debug logging to see what is registered and how the regex look like
		jQuery.sap.log.debug("MockServer: adding " + sMethod + " request handler for pattern " + oRegExp);
		
	};


	/**
	 * Creates a regular expression based on a given pattern.
	 * 
	 * @param {string} sPattern the pattern to use for the regular expression.
	 * @return {RegExp} the created regular expression.
	 * 
	 * @private
	 * @name sap.ui.core.util.MockServer#_createRegExp
	 * @function
	 */
	MockServer.prototype._createRegExp = function(sPattern) {
		return new RegExp("^" + sPattern + "$");
	};


	/**
	 * Creates a regular expression pattern. All <code>:param</code> are replaced 
	 * by regular expression groups.
	 * 
	 * @return {string} the created regular expression pattern.
	 * 
	 * @private
	 * @name sap.ui.core.util.MockServer#_createRegExpPattern
	 * @function
	 */
	MockServer.prototype._createRegExpPattern = function(sPattern) {
		return sPattern.replace(/:([\w\d]+)/g, "([^\/]+)");
	};

	/**
	 * Converts a string into a regular expression. Escapes all regexp critical 
	 * characters.
	 * 
	 * @return {string} the created regular expression pattern.
	 * 
	 * @private
	 * @name sap.ui.core.util.MockServer#_escapeStringForRegExp
	 * @function
	 */
	MockServer.prototype._escapeStringForRegExp = function(sString) {
		return sString.replace(/[\\\/\[\]\{\}\(\)\-\*\+\?\.\^\$\|]/g, "\\$&");
	};
	
	/**
	 * Creates a trim string
	 * 
	 * @return {string} the trimmed string.
	 * 
	 * @private
	 * @name sap.ui.core.util.MockServer#_trim
	 * @function
	 */
	MockServer.prototype._trim = function(sString) {
		return sString && sString.replace(/^\s+|\s+$/g, "");
	};
	
	/**
	 * Parses an ISO format date string into a valid date object.
	 * 
	 * @return {Date} the date.
	 * 
	 * @private
	 * @name sap.ui.core.util.MockServer#_getDateInMin
	 * @function
	 */
	MockServer.prototype._getDateInMin = function(sString) {
		if(!sString) return;
		return "datetime'" + new Date(Number(sString.replace("/Date(",'').replace(")/",''))).toJSON().substring(0,19) + "'";			
		
	}

	/**
	 * Adds a filter function. The filter determines whether to fake a response or not. When the filter function
	 * returns true, the request will be faked.
	 * 
	 * @param {function} fnFilter the filter function to add
	 * @private
	 * @name sap.ui.core.util.MockServer#_addFilter
	 * @function
	 */
	MockServer.prototype._addFilter = function(fnFilter) {
		this._aFilters.push(fnFilter)
		MockServer._addFilter(fnFilter);
	};


	/**
	 * Creates and returns a filter filter function.
	 * 
	 * @param {string} sRequestMethod HTTP verb to use for this method (e.g. GET, POST, PUT, DELETE...)
	 * @param {RegExp} oRegExp the regular expression to use for this filter
	 * 
	 * @private
	 * @name sap.ui.core.util.MockServer#_createFilter
	 * @function
	 */
	MockServer.prototype._createFilter = function(sRequestMethod, oRegExp) {
		return function(sMethod, sUri, bAsync, sUsername, sPassword) {
			return sRequestMethod === sMethod && oRegExp.test(sUri);
		}
	};


	/**
	 * Cleans up the resources associated with this object and all its aggregated children.
	 *
	 * After an object has been destroyed, it can no longer be used in!
	 *
	 * Applications should call this method if they don't need the object any longer.
	 *
	 * @see sap.ui.base.ManagedObject#destroy
	 * @param {boolean}
	 *            [bSuppressInvalidate] if true, this ManagedObject is not marked as changed
	 * @public
	 * @name sap.ui.core.util.MockServer#destroy
	 * @function
	 */
	MockServer.prototype.destroy = function(bSuppressInvalidate) {
		ManagedObject.prototype.destroy.apply(this, arguments);
		this.stop();
		var aServers = MockServer._aServers;
		var iIndex = jQuery.inArray(this, aServers);
		aServers.splice(iIndex, 1);
	};


	// =======
	// STATICS
	// =======
	
	MockServer._aFilters = [];
	MockServer._oServer = null;
	MockServer._aServers = [];

	/**
	 * Returns the instance of the sinon fake server.
	 * 
	 * @return {object} the server instance
	 * @private
	 * @name sap.ui.core.util.MockServer._getInstance
	 * @function
	 */
	MockServer._getInstance = function() {
		// We can not create many fake servers, see bug https://github.com/cjohansen/Sinon.JS/issues/211
		// This is why we reuse the server and patch it manually
		if (!this._oServer) {
			this._oServer = window.sinon.fakeServer.create();
			this._oServer.autoRespond = true;
		}
		return this._oServer;
	};


	/**
	 * Global configuration of all mock servers.
	 * 
	 * @param {object} mConfig the configuration object.
	 * @param {boolean} [mConfig.autoRespond=true] If set true, all mock servers will respond automatically. If set false you have to call {@link sap.ui.core.util.MockServer#respond} method for response.
	 * @param {int} [mConfig.autoRespondAfter=0] the time in ms after all mock servers should send their response. 
	 * @param {boolean} [mConfig.fakeHTTPMethods=false] If set to true, all mock server will find <code>_method</code> parameter in the POST body and use this to override the the actual method. 
	 * @name sap.ui.core.util.MockServer.config
	 * @function
	 */
	MockServer.config = function(mConfig) {
		var oServer = this._getInstance();

		oServer.autoRespond = mConfig.autoRespond === false ? false : true;
		oServer.autoRespondAfter = mConfig.autoRespondAfter || 0;
		oServer.fakeHTTPMethods = mConfig.fakeHTTPMethods || false;
	};


	/**
	 * Respond to a request, when the servers are configured not to automatically respond.
	 * @name sap.ui.core.util.MockServer.respond
	 * @function
	 */
	MockServer.respond = function() {
		this._getInstance().respond();
	};


	/**
	 * Starts all registered servers.
	 * @name sap.ui.core.util.MockServer.startAll
	 * @function
	 */
	MockServer.startAll = function() {
		for (var i=0; i < this._aServers.length; i++) {
			this._aServers[i].start();
		}
	};


	/**
	 * Stops all registered servers.
	 * @name sap.ui.core.util.MockServer.stopAll
	 * @function
	 */
	MockServer.stopAll = function() {
		for (var i=0; i < this._aServers.length; i++) {
			this._aServers[i].stop();
		}
		this._getInstance().restore();
		this._oServer = null;
	};


	/**
	 * Stops and calls destroy on all registered servers. Use this method for cleaning up.
	 * @name sap.ui.core.util.MockServer.destroyAll
	 * @function
	 */
	MockServer.destroyAll = function() {
		this.stopAll();
		for (var i=0; i < this._aServers.length; i++) {
			this._aServers[i].destroy();
		}
	};


	/**
	 * Adds a filter function. The filter determines whether to fake a response or not. When the filter function
	 * returns true, the request will be faked.
	 * 
	 * @param {function} fnFilter the filter function to add
	 * @private
	 * @name sap.ui.core.util.MockServer._addFilter
	 * @function
	 */
	MockServer._addFilter = function(fnFilter) {
		this._aFilters.push(fnFilter);
	};


	/**
	 * Removes a filter function.
	 * 
	 * @param {function} fnFilter the filter function to remove
	 * @return {boolean} whether the filter was removed or not
	 * @private
	 * @name sap.ui.core.util.MockServer._removeFilter
	 * @function
	 */
	MockServer._removeFilter = function(fnFilter) {
		var iIndex = jQuery.inArray(fnFilter, this._aFilters);
		if (iIndex !== -1) {
			this._aFilters.splice(iIndex, 1);
		}
		return iIndex !== -1;
	};


	/**
	 * Removes a response from the real sinon fake server object
	 *
	 * @param {function} fnResponse the response function to remove
	 * @return {boolean} whether the response was removed or not
	 * @private
	 * @name sap.ui.core.util.MockServer._removeResponse
	 * @function
	 */
	MockServer._removeResponse = function(fnResponse) {
		var aResponses = this._oServer.responses;
		var iLength = aResponses.length;
		for (var i = 0; i < iLength; i++) {
			if (aResponses[i].response === fnResponse) {
				aResponses.splice(i, 1);
				return true;
			}
		}
		return false;
	};

	// ================================
	// SINON CONFIGURATON AND EXTENSION
	// ================================

	window.sinon.FakeXMLHttpRequest.useFilters = true;

	window.sinon.FakeXMLHttpRequest.addFilter(function(sMethod, sUri, bAsync, sUsername, sPassword) {
		var aFilters = MockServer._aFilters;
		for (var i = 0; i < aFilters.length; i++) {
			var fnFilter = aFilters[i];
			if (fnFilter(sMethod, sUri, bAsync, sUsername, sPassword)) {
				return false;
			}
		}
		return true;
	});

	var getMimeType = function(sFileName) {
		if (/.*\.json$/i.test(sFileName)) {
			return "JSON";
		}
		if (/.*\.xml$/i.test(sFileName)) {
			return "XML";
		}
		if (/.*metadata$/i.test(sFileName)) {
			// This is needed in case the metadata comes from a
			// local file otherwise it's interpreted as octetstream
			return "XML";
		}
		return null;
	};

	/**
	 * @public
	 */
	window.sinon.FakeXMLHttpRequest.prototype.respondFile = function(iStatus, mHeaders, sFileUrl) {
		var oResponse = jQuery.sap.sjax({url:sFileUrl, dataType:"text"});
		if (!oResponse.success) throw new Error("Could not load file from: " + sFileUrl);

		var oData = oResponse.data;
		var sMimeType = getMimeType(sFileUrl);

		if (this["respond" + sMimeType]) {
			this["respond" + sMimeType](iStatus, mHeaders, oData);
		} else {
			this.respond(iStatus, mHeaders, oData);
		}
	};

	/**
	 * @public
	 */
	window.sinon.FakeXMLHttpRequest.prototype.respondJSON = function(iStatus, mHeaders, oJSONData) {
		mHeaders = mHeaders || {};
		mHeaders["Content-Type"] = mHeaders["Content-Type"] || "application/json";
		this.respond(iStatus, mHeaders, typeof oJSONData === "string" ? oJSONData : JSON.stringify(oJSONData));
	};

	/**
	 * @public
	 */
	window.sinon.FakeXMLHttpRequest.prototype.respondXML = function(iStatus, mHeaders, sXmlData) {
		mHeaders = mHeaders || {};
		mHeaders["Content-Type"] = mHeaders["Content-Type"] || "application/xml";
		this.respond(iStatus, mHeaders, sXmlData);
	};

	return MockServer;

}, /* bExport= */ true);
