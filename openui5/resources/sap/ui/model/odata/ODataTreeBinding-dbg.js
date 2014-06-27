/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the OData model implementation of a tree binding
sap.ui.define(['jquery.sap.global', 'sap/ui/model/TreeBinding'],
	function(jQuery, TreeBinding) {
	"use strict";


	/**
	*
	* @class
	* Tree binding implementation for client models
	*
	 * @param {sap.ui.model.Model} oModel
	 * @param {string} sPath
	 * @param {sap.ui.model.Context} oContext
	 * @param {array} [aFilters] predefined filter/s (can be either a filter or an array of filters)
	 * @param {object} [mParameters]
	 * 
	* @name sap.ui.model.odata.ODataTreeBinding
	* @extends sap.ui.model.TreeBinding
	*/
	var ODataTreeBinding = TreeBinding.extend("sap.ui.model.odata.ODataTreeBinding", /** @lends sap.ui.model.odata.ODataTreeBinding */ {
	
		constructor : function(oModel, sPath, oContext, aFilters, mParameters){
			TreeBinding.apply(this, arguments);
	
			this.bPendingRequest = false;
			this.oFinalLengths = {};
			this.oLengths = {};
			this.oKeys = {};
			this.bNeedsUpdate = false;
			if (!mParameters || !mParameters.navigation) {
				jQuery.sap.log.error("A navigation paths parameter object has to be defined");
				this.oNavigationPaths = {};
			} else {
				this.oNavigationPaths = mParameters.navigation;
			}
		}
	
	});
	
	/**
	 * Creates a new subclass of class sap.ui.model.odata.ODataTreeBinding with name <code>sClassName</code> 
	 * and enriches it with the information contained in <code>oClassInfo</code>.
	 * 
	 * For a detailed description of <code>oClassInfo</code> or <code>FNMetaImpl</code> 
	 * see {@link sap.ui.base.Object.extend Object.extend}.
	 *   
	 * @param {string} sClassName name of the class to be created
	 * @param {object} [oClassInfo] object literal with informations about the class  
	 * @param {function} [FNMetaImpl] alternative constructor for a metadata object
	 * @return {function} the created class / constructor function
	 * @public
	 * @static
	 * @name sap.ui.model.odata.ODataTreeBinding.extend
	 * @function
	 */
	
	/**
	 * Return root contexts for the tree
	 *
	 * @return {Array} the contexts array
	 * @protected
	 * @name sap.ui.model.odata.ODataTreeBinding#getRootContexts
	 * @function
	 */
	ODataTreeBinding.prototype.getRootContexts = function() {
		var sNavPath = this._getNavPath(this.sPath),
			sAbsolutePath = this.oModel.resolve(this.sPath, this.getContext()),
			that = this,
			oContext;

		//If path cannot be resolved, we return an empty array
		if (!sAbsolutePath) {
			return [];
		}

		if (!this.oModel.isList(this.sPath, this.getContext())) {
			//An context is bound
			if (this.bDisplayRootNode) {
				//Get the binding context for the root element, it is created if it doesn't exist yet
				this.oModel.createBindingContext(this.sPath, this.getContext(), { expand: sNavPath }, function(oNewContext) {
					oContext = oNewContext;
					if (that.oRootContext !== oNewContext) {
						that.oRootContext = oNewContext;
						that.bNeedsUpdate = true;
					} else {
						var oData = that.oModel.oData[oContext.getPath().substr(1)];
						that._processODataObject(oData, oContext.getPath(), sNavPath);
					}
				}, false);
				if (oContext) {
					return [oContext];
				} else {
					return [];
				}
			} else {
				//We don't really need the data from the root context, that's why we don'z use createbindingContext here which would load the data
				oContext = this.oModel.getContext(this.sPath);
				return this.getNodeContexts(oContext);
			}
		} else {
			//An aggregation is bound
			return this._getContextsForPath(sAbsolutePath, sNavPath);
		}
	
	};
	
	/**
	 * Return node contexts for the tree
	 * @param {object} oContext to use for retrieving the node contexts
	 * @return {Array} the contexts array
	 * @protected
	 * @name sap.ui.model.odata.ODataTreeBinding#getNodeContexts
	 * @function
	 */
	ODataTreeBinding.prototype.getNodeContexts = function(oContext) {
	
		var sNavPath = this._getNavPath(oContext.getPath()),
			sAbsolutePath;
	
		//If no nav path was found no nav property is defined and we cannot find any more data
		if (!sNavPath) {
			return [];
		}
	
		sAbsolutePath = this.oModel.resolve(sNavPath, oContext);
		sNavPath = this.oNavigationPaths[sNavPath];
		
		return this._getContextsForPath(sAbsolutePath, sNavPath);
	
	};
	
	/**
	 * Returns if the node has child nodes
	 *
	 * @function
	 * @name sap.ui.model.TreeBinding.prototype.hasChildren
	 * @param {Object} oContext the context element of the node
	 * @return {boolean} true if node has children
	 *
	 * @public
	 */
	ODataTreeBinding.prototype.hasChildren = function(oContext) {
		return oContext && this.oLengths[oContext.getPath()] > 0;
	};
	
	/**
	 * Gets or loads all contexts for a specified path
	 *
	 * @function
	 * @name sap.ui.model.TreeBinding.prototype._getContextsForPath
	 * @param {String} sAbsolutePath the absolute path to be loaded
	 * @param {String} sNavPath the nav path which defines the expand parameter
	 * @return {boolean} true if node has children
	 *
	 * @private
	 */
	ODataTreeBinding.prototype._getContextsForPath = function(sAbsolutePath, sNavPath) {
		var aContexts = [],
			iLength = this.oModel.iSizeLimit,
			bLoadContexts,
			sKey;
	
		if (this.oFinalLengths && this.oFinalLengths[sAbsolutePath] && this.oLengths[sAbsolutePath] < iLength) {
			iLength = this.oLengths[sAbsolutePath];
		}
	
		// Loop through known data and check whether we already have all rows loaded
		if (this.oKeys[sAbsolutePath]) {
			for (var i = 0; i < iLength; i++) {
				sKey = this.oKeys[sAbsolutePath][i];
				if (!sKey) {
					break;
				}
				aContexts.push(this.oModel.getContext('/'+sKey));
			}
		}
	
		bLoadContexts = aContexts.length != iLength && !(this.oFinalLengths[sAbsolutePath] && aContexts.length >= this.oLengths[sAbsolutePath]);
	
		// check if metadata are already available
		if (this.oModel.getServiceMetadata()) {
			// If rows are missing send a request
			if (!this.bPendingRequest && bLoadContexts) {
				this.loadSubNodes(sAbsolutePath, sNavPath);
			}
		}
	
		return aContexts;
	};
	
	/**
	 * Load list data from the server
	 * @name sap.ui.model.odata.ODataTreeBinding#loadSubNodes
	 * @function
	 */
	ODataTreeBinding.prototype.loadSubNodes = function(sAbsolutePath, sNavPath) {
		var that = this,
			aParams = [];
	
		if (sNavPath) {
			aParams.push("$expand=" + sNavPath);
		}
	
		function fnSuccess(oData) {
	
			// Collecting contexts
			that.oLengths[sAbsolutePath] = oData.results.length;
			that.oFinalLengths[sAbsolutePath] = true;
			that.oKeys[sAbsolutePath] = [];
			for (var i=0; i < oData.results.length; i++) {
				var oEntry = oData.results[i];
				that._processODataObject(oEntry, sAbsolutePath, sNavPath);
				that.oKeys[sAbsolutePath].push(that.oModel._getKey(oEntry));
			}
	
			that.oRequestHandle = null;
			that.bPendingRequest = false;
			that.bNeedsUpdate = true;
		}
		
		function fnCompleted() {
			that.fireDataReceived();
		}
	
		function fnError(oData) {
			that.oRequestHandle = null;
			that.bPendingRequest = false;
			that.fireDataReceived();
		}
	
		function fnUpdateHandle(oHandle) {
			that.oRequestHandle = oHandle;
		}
	
		if (sAbsolutePath) {
			if (!this.oFinalLengths[sAbsolutePath]) {
				this.bPendingRequest = true;
				// execute the request and use the metadata if available
				this.fireDataRequested();
				this.oModel._loadData(sAbsolutePath, aParams, fnSuccess, fnError, false, fnUpdateHandle, fnCompleted);
			}
		}
	};
	
	/**
	 * Resets the current list data and length
	 * 
	 * @private
	 * @name sap.ui.model.odata.ODataTreeBinding#resetData
	 * @function
	 */
	ODataTreeBinding.prototype.resetData = function(oContext) {
		if (oContext) {
			//Only reset specific content
			var sPath = oContext.getPath();
	
			delete this.oKeys[sPath];
			delete this.oLengths[sPath];
			delete this.oFinalLengths[sPath];
		} else {
			this.oKeys = {};
			this.oLengths = {};
			this.oFinalLengths = {};
		}
	};
	
	/**
	 * Refreshes the binding, check whether the model data has been changed and fire change event
	 * if this is the case. For server side models this should refetch the data from the server.
	 * To update a control, even if no data has been changed, e.g. to reset a control after failed
	 * validation, please use the parameter bForceUpdate.
	 * 
	 * @param {boolean} [bForceUpdate] Update the bound control even if no data has been changed
	 * @param {object} [mChangedEntities]
	 * @param {string] [mEntityTypes]
	 * 
	 * @public
	 * @name sap.ui.model.odata.ODataTreeBinding#refresh
	 * @function
	 */
	ODataTreeBinding.prototype.refresh = function(bForceUpdate, mChangedEntities, mEntityTypes) {
		var bChangeDetected = false;
		if (!bForceUpdate) {
			if (mEntityTypes){
				var sResolvedPath = this.oModel.resolve(this.sPath, this.oContext);
				var oEntityType = this.oModel.oMetadata._getEntityTypeByPath(sResolvedPath);
				if (oEntityType && (oEntityType.entityType in mEntityTypes)) {
					bChangeDetected = true;
				}
			}
			if (mChangedEntities && !bChangeDetected) {
				jQuery.each(this.oKeys, function(i, aNodeKeys) {
					jQuery.each(aNodeKeys, function(i, sKey) {
						if (sKey in mChangedEntities) {
							bChangeDetected = true;
							return false;
						}
					});
					if (bChangeDetected) return false;
				});
			} 
			if (!mChangedEntities && !mEntityTypes) { // default
				bChangeDetected = true;
			}
		}
		if (bForceUpdate || bChangeDetected) {
			this.resetData();
			this.bNeedsUpdate = false;
			this._fireChange();
		}
	};
	
	/**
	 * @see sap.ui.model.TreeBinding.prototype.filter
	 * @public
	 * @name sap.ui.model.odata.ODataTreeBinding#filter
	 * @function
	 */
	ODataTreeBinding.prototype.filter = function(aFilters){
		jQuery.sap.log.warning("Filtering is currently not possible in the ODataTreeBinding");
		return this;
	};
	
	/**
	 * Check whether this Binding would provide new values and in case it changed,
	 * inform interested parties about this.
	 * 
	 * @param {boolean} bForceUpdate
	 * 
	 * @name sap.ui.model.odata.ODataTreeBinding#checkUpdate
	 * @function
	 */
	ODataTreeBinding.prototype.checkUpdate = function(bForceUpdate, mChangedEntities){
		var bChangeDetected = false;
		if (!bForceUpdate) {
			if (this.bNeedsUpdate || !mChangedEntities) {
				bChangeDetected = true;
			} else {
				jQuery.each(this.oKeys, function(i, aNodeKeys) {
					jQuery.each(aNodeKeys, function(i, sKey) {
						if (sKey in mChangedEntities) {
							bChangeDetected = true;
							return false;
						}
					});
					if (bChangeDetected) return false;
				});
			}
		}
		if (bForceUpdate || bChangeDetected) {
			this.bNeedsUpdate = false;
			this._fireChange();
		}
	};
	
	ODataTreeBinding.prototype._getNavPath = function(sPath) {
		//Check the last part of the path
		var sAbsolutePath = this.oModel.resolve(sPath, this.getContext());
		
		if (!sAbsolutePath) {
			return;
		}
		
		var aPathParts = sAbsolutePath.split("/"),
			sEntityName = aPathParts[aPathParts.length-1],
			sNavPath;

		//Only if part contains "(" we are working on a specific entity with children
		var sCurrent = sEntityName.split("(")[0];
		if (sCurrent && this.oNavigationPaths[sCurrent]) {
			//Replace context with subitems context
			sNavPath = this.oNavigationPaths[sCurrent];
		}
		return sNavPath;
	};
	
	ODataTreeBinding.prototype._processODataObject = function(oObject, sAbsolutePath, sNavPath) {
		var sKey = this.oModel._getKey(oObject),
			oContext = this.oModel.getContext("/" + sKey),
			sPath = oContext.getPath();
	
		var oRef = this.oModel._getObject(sNavPath, oContext);
		if (jQuery.isArray(oRef)) {
			this.oKeys[sPath] = oRef;
			this.oLengths[sPath] = oRef.length;
			this.oFinalLengths[sPath] = true;
		} else if (typeof oRef === "object") {
			this.oKeys[sPath] = [oRef];
			this.oLengths[sPath] = 0;
			this.oFinalLengths[sPath] = true;
		} else {
			if (sNavPath && oObject[sNavPath].__list) {
				this.oKeys[sPath] = oObject[sNavPath].__list;
				this.oLengths[sPath] = this.oKeys[sPath].length;
				this.oFinalLengths[sPath] = true;
			} else {
				this.oKeys[sAbsolutePath] = [];
				this.oLengths[sAbsolutePath] = 0;
				this.oFinalLengths[sAbsolutePath] = false;
			}
		}
	};

	return ODataTreeBinding;

}, /* bExport= */ true);
