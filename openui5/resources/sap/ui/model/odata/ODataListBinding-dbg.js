/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides class sap.ui.model.odata.ODataListBinding
sap.ui.define(['jquery.sap.global', 'sap/ui/core/format/DateFormat', 'sap/ui/model/FilterType', 'sap/ui/model/ListBinding', './CountMode', './Filter'],
	function(jQuery, DateFormat, FilterType, ListBinding, CountMode, Filter) {
	"use strict";


	/*global OData *///declare unusual global vars for JSLint/SAPUI5 validation
	
	/**
	 *
	 * @class
	 * List binding implementation for oData format
	 *
	 * @param {sap.ui.model.Model} oModel
	 * @param {string} sPath
	 * @param {sap.ui.model.Context} oContext
	 * @param {array} [aSorters] initial sort order (can be either a sorter or an array of sorters)
	 * @param {array} [aFilters] predefined filter/s (can be either a filter or an array of filters)
	 * @param {object} [mParameters]
	 * 
	 * @name sap.ui.model.odata.ODataListBinding
	 * @extends sap.ui.model.ListBinding
	 */
	var ODataListBinding = ListBinding.extend("sap.ui.model.odata.ODataListBinding", /** @lends sap.ui.model.odata.ODataListBinding */ {
	
		constructor : function(oModel, sPath, oContext, aSorters, aFilters, mParameters) {
			ListBinding.apply(this, arguments);
			this.sFilterParams = null;
			this.sSortParams = null;
			this.sRangeParams = null;
			this.sCustomParams = this.oModel.createCustomParams(this.mParameters);
			this.iStartIndex = 0;
			this.bPendingChange = false;
			this.aKeys = [];
			this.bInitialized = false;
			this.sCountMode = (mParameters && mParameters.countMode) || this.oModel.sDefaultCountMode;
			this.bRefresh = false;
			this.bNeedsUpdate = false;
			this.bDataAvailable = false;
			
			// load the entity type for the collection only once and not e.g. every time when filtering
			if (!this.oModel.getServiceMetadata()) {
				var that = this,
				fnCallback = function(oEvent) {
					that._initSortersFilters();
					that.oModel.detachMetadataLoaded(fnCallback);
				}
				this.oModel.attachMetadataLoaded(this, fnCallback);
			} else {
				this._initSortersFilters();
			}
	
			// if nested list is already available and no filters or sorters are set, 
			// use the data and don't send additional requests
			// TODO: what if nested list is not complete, because it was too large?
			var oRef = this.oModel._getObject(this.sPath, this.oContext);
			if (jQuery.isArray(oRef) && !aSorters && !aFilters) {
				this.aKeys = oRef;
				this.iLength = oRef.length;
				this.bLengthFinal = true;
				this.bDataAvailable = true;
			}
			else {
				// call getLength when metadata is already loaded or don't do anything
				// if the the metadata gets loaded it will call a refresh on all bindings
				if (this.oModel.getServiceMetadata()) {
					this.resetData();
				}
			}
	
		},
	
		metadata : {
			publicMethods : [
				"getLength"
			]
		}
	
	});
	
	/**
	 * Creates a new subclass of class sap.ui.model.odata.ODataListBinding with name <code>sClassName</code> 
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
	 * @name sap.ui.model.odata.ODataListBinding.extend
	 * @function
	 */
	
	/**
	 * Return contexts for the list
	 *
	 * @param {int} [iStartIndex=0] the start index of the requested contexts
	 * @param {int} [iLength] the requested amount of contexts
	 *
	 * @return {Array} the contexts array
	 * @protected
	 * @name sap.ui.model.odata.ODataListBinding#getContexts
	 * @function
	 */
	ODataListBinding.prototype.getContexts = function(iStartIndex, iLength, iThreshold) {	
	
		this.bInitialized = true;
		this.iLastLength = iLength;
		this.iLastStartIndex = iStartIndex;
		this.iLastThreshold = iThreshold;
		
		//	Set default values if startindex, threshold or length are not defined
		if (!iStartIndex) {
			iStartIndex = 0;
		}
		if (!iLength) {
			iLength = this.oModel.iSizeLimit;
			if (this.bLengthFinal && this.iLength < iLength) {
				iLength = this.iLength;
			}
		}
		if (!iThreshold) {
			iThreshold = 0;
		}
	
		var bLoadContexts = true, 
			aContexts = this._getContexts(iStartIndex, iLength),
			oContextData = {},
			oSection;
	
		oSection = this.calculateSection(iStartIndex, iLength, iThreshold, aContexts);
		bLoadContexts = aContexts.length != iLength && !(this.bLengthFinal && aContexts.length >= this.iLength - iStartIndex);
		
		// check if metadata are already available
		if (this.oModel.getServiceMetadata()) {
			// If rows are missing send a request
			if (!this.bPendingRequest && oSection.length > 0 && (bLoadContexts || iLength < oSection.length)) {
				this.loadData(oSection.startIndex, oSection.length);
				aContexts.dataRequested = true;
			} 	
		}
		
		if (this.bRefresh) {
			// if refreshing and length is 0, pretend a request to be fired to make a refresh with
			// with preceding $count request look like a request with $inlinecount=allpages
			if (this.bLengthFinal && this.iLength == 0) {
				this.loadData(oSection.startIndex, oSection.length, true);
				aContexts.dataRequested = true;
			}
			this.bRefresh = false;
		} else {
			// Do not create context data and diff in case of refresh, only if real data has been received
			// The current behaviour is wrong and makes diff detection useless for OData in case of refresh
		 	for (var i = 0; i < aContexts.length; i++) {
				oContextData[aContexts[i].getPath()] = aContexts[i].getObject();
			}
		
			if (this.bUseExtendedChangeDetection) {
				//Check diff
				if (this.aLastContexts&& iStartIndex < this.iLastEndIndex) {
					var that = this;
					var aDiff = jQuery.sap.arrayDiff(this.aLastContexts, aContexts, function(oOldContext, oNewContext) {
						return jQuery.sap.equal(
								oOldContext && that.oLastContextData && that.oLastContextData[oOldContext.getPath()],
								oNewContext && oContextData && oContextData[oNewContext.getPath()]
							);
					});
					aContexts.diff = aDiff;
				}
			}
		
			this.iLastEndIndex = iStartIndex + iLength;
			this.aLastContexts = aContexts.slice(0);
			this.oLastContextData = jQuery.extend(true, {}, oContextData);
		}
		
		return aContexts;
	};
	
	/**
	 * Return contexts for the list
	 *
	 * @param {int} [iStartIndex=0] the start index of the requested contexts
	 * @param {int} [iLength] the requested amount of contexts
	 *
	 * @return {Array} the contexts array
	 * @private
	 * @name sap.ui.model.odata.ODataListBinding#_getContexts
	 * @function
	 */
	ODataListBinding.prototype._getContexts = function(iStartIndex, iLength) {
		var aContexts = [],
			oContext,
			sKey;
		
		if (!iStartIndex) {
			iStartIndex = 0;
		}
		if (!iLength) {
			iLength = this.oModel.iSizeLimit;
			if (this.bLengthFinal && this.iLength < iLength) {
				iLength = this.iLength;
			}
		}
		
		//	Loop through known data and check whether we already have all rows loaded
		for (var i = iStartIndex; i < iStartIndex + iLength; i++) {
			sKey = this.aKeys[i];
			if (!sKey) {
				break;
			}
			oContext = this.oModel.getContext('/'+sKey);
			aContexts.push(oContext);
		}
	
		return aContexts;
	};
	
	/*
	 * @private
	 * @name sap.ui.model.odata.ODataListBinding#calculateSection
	 * @function
	 */
	ODataListBinding.prototype.calculateSection = function(iStartIndex, iLength, iThreshold, aContexts) {
		var bLoadNegativeEntries = false,
			iSectionLength,
			iSectionStartIndex,
			iPreloadedSubsequentIndex,
			iPreloadedPreviousIndex,
			iRemainingEntries,
			oSection = {},
			sKey;
	
		iSectionStartIndex = iStartIndex;
		iSectionLength = 0;
	
		// check which data exists before startindex; If all necessary data is loaded iPreloadedPreviousIndex stays undefined
		for (var i = iStartIndex; i >= Math.max(iStartIndex-iThreshold,0); i--) {
			sKey = this.aKeys[i];
			if (!sKey) {
				iPreloadedPreviousIndex = i+1;
				break;
			}
		}
		// check which data is already loaded after startindex; If all necessary data is loaded iPreloadedSubsequentIndex stays undefined
		for (var j = iStartIndex + iLength; j < iStartIndex + iLength + iThreshold; j++) {
			sKey = this.aKeys[j];
			if (!sKey) {
				iPreloadedSubsequentIndex = j;
				break;
			}
		}
		
		// calculate previous remaining entries
		iRemainingEntries = iStartIndex - iPreloadedPreviousIndex;
		if (iPreloadedPreviousIndex && iStartIndex > iThreshold && iRemainingEntries < iThreshold) {
			if (aContexts.length != iLength) {
				iSectionStartIndex = iStartIndex - iThreshold;
			} else {
				iSectionStartIndex = iPreloadedPreviousIndex - iThreshold;
			} 
			iSectionLength = iThreshold;
		}
		
		// No negative preload needed; move startindex if we already have some data
		if (iSectionStartIndex == iStartIndex) {
			iSectionStartIndex += aContexts.length;
		}
		
		//read the rest of the requested data
		if (aContexts.length != iLength) {
			iSectionLength += iLength - aContexts.length;
		}
		
		//calculate subsequent remaining entries
		iRemainingEntries = iPreloadedSubsequentIndex - iStartIndex - iLength;
		
		if (iRemainingEntries == 0) {
			iSectionLength += iThreshold;
		}
		
		if (iPreloadedSubsequentIndex && iRemainingEntries < iThreshold && iRemainingEntries > 0) {
				//check if we need to load previous entries; If not we can move the startindex
				if (iSectionStartIndex > iStartIndex) {
					iSectionStartIndex = iPreloadedSubsequentIndex;
					iSectionLength += iThreshold;
				}
				
		}
		
		//check final length and adapt sectionLength if needed.
		if (this.bLengthFinal && this.iLength < (iSectionLength + iSectionStartIndex)) {
			iSectionLength = this.iLength - iSectionStartIndex;
		}
		
		oSection.startIndex = iSectionStartIndex;
		oSection.length = iSectionLength;
		
		return oSection;
	};
	
	/**
	 * Setter for context
	 * @param {Object} oContext the new context object
	 * @name sap.ui.model.odata.ODataListBinding#setContext
	 * @function
	 */
	ODataListBinding.prototype.setContext = function(oContext) {
		if (this.oContext != oContext) {
			this.oContext = oContext;
			if (this.isRelative()) {
				// get new entity type with new context
				this.oEntityType = this._getEntityType();
	
				if (this.bInitialized){
					// if nested list is already available, use the data and don't send additional requests
					// TODO: what if nested list is not complete, because it was too large?
					var oRef = this.oModel._getObject(this.sPath, this.oContext);
					if (jQuery.isArray(oRef)) {
						this.aKeys = oRef;
						this.iLength = oRef.length;
						this.bLengthFinal = true;
						this._fireChange();
					}
					else {
						this.refresh();
					}
				} 
			}
		}
	};
	
	/**
	 * Load list data from the server
	 * @name sap.ui.model.odata.ODataListBinding#loadData
	 * @function
	 */
	ODataListBinding.prototype.loadData = function(iStartIndex, iLength, bPretend) {
	
		var that = this,
			bInlineCountRequested = false;
	
		// create range parameters and store start index for sort/filter requests
		if (iStartIndex || iLength) {
			this.sRangeParams = "$skip=" + iStartIndex + "&$top=" + iLength;
			this.iStartIndex = iStartIndex;
		}
		else {
			iStartIndex = this.iStartIndex;
		}
	
		// create the request url
		var aParams = [];
		if (this.sRangeParams) { 
			aParams.push(this.sRangeParams);
		}
		if (this.sSortParams) {
			aParams.push(this.sSortParams);
		}
		if (this.sFilterParams) {
			aParams.push(this.sFilterParams);
		}
		if (this.sCustomParams) {
			aParams.push(this.sCustomParams);
		}
		if (!this.bLengthFinal &&
			(this.sCountMode == CountMode.Inline ||
			this.sCountMode == CountMode.Both)) {
			aParams.push("$inlinecount=allpages");
			bInlineCountRequested = true;
		}
		
		function fnSuccess(oData) {
	
			// Collecting contexts
			jQuery.each(oData.results, function(i, entry) {
				that.aKeys[iStartIndex + i] = that.oModel._getKey(entry);
			});
	
			// update iLength (only when the inline count was requested and is available)
			if (bInlineCountRequested && oData.__count) {
				that.iLength = parseInt(oData.__count, 10);
				that.bLengthFinal = true;
			}
	
			// if we got data and the results + startindex is larger than the
			// length we just apply this value to the length
			if (that.iLength < iStartIndex + oData.results.length) {
				that.iLength = iStartIndex + oData.results.length;
				that.bLengthFinal = false;
			}
	
			// if less entries are returned than have been requested
			// set length accordingly
			if (oData.results.length < iLength || iLength === undefined) {
				that.iLength = iStartIndex + oData.results.length;
				that.bLengthFinal = true;
			}
	
			// check if there are any results at all...
			if (iStartIndex == 0 && oData.results.length == 0) {
				that.iLength = 0;
				that.bLengthFinal = true;
			}
			
			that.oRequestHandle = null;
			that.bPendingRequest = false;
			
			// If request is originating from this binding, change must be fired afterwards
			that.bNeedsUpdate = true;
		}
		
		function fnCompleted() {
			that.fireDataReceived();
		}
		
		function fnError(oError) {
			that.oRequestHandle = null;
			that.bPendingRequest = false;
			that.fireDataReceived();
		}
		
		function fnUpdateHandle(oHandle) {
			that.oRequestHandle = oHandle;
		}
		
		var sPath = this.sPath,
			oContext = this.oContext;
			
		if (this.isRelative()) {
			sPath = this.oModel.resolve(sPath,oContext);
		}
		if (sPath) {
			if (bPretend) {
				// Pretend to send a request by firing the appropriate events
				var sUrl = this.oModel._createRequestUrl(sPath, aParams);
				this.fireDataRequested();
				this.oModel.fireRequestSent({url: sUrl, method: "GET", async: true});
				setTimeout(function() {
					// If request is originating from this binding, change must be fired afterwards
					that.bNeedsUpdate = true;
					that.checkUpdate();
					that.oModel.fireRequestCompleted({url: sUrl, method: "GET", async: true, success: true});
					that.fireDataReceived();
				}, 0);
			} else {
				// Execute the request and use the metadata if available
				this.bPendingRequest = true;
				this.fireDataRequested();
				this.oModel._loadData(sPath, aParams, fnSuccess, fnError, false, fnUpdateHandle, fnCompleted);
			}
		}
	
	};
	
	/**
	 * Return the length of the list
	 *
	 * @return {number} the length
	 * @protected
	 * @name sap.ui.model.odata.ODataListBinding#getLength
	 * @function
	 */
	ODataListBinding.prototype.getLength = function() {
		return this.iLength;
	};
	
	/**
	 * Return the length of the list
	 *
	 * @return {number} the length
	 * @name sap.ui.model.odata.ODataListBinding#_getLength
	 * @function
	 */
	ODataListBinding.prototype._getLength = function() {
	
		var that = this;
	
		// create a request object for the data request
		var aParams = [];
		if (this.sFilterParams) {
			aParams.push(this.sFilterParams);
		}
		
		// use only custom params for count and not expand,select params
		if (this.mParameters && this.mParameters.custom) {
			var oCust = { custom: {}};
			jQuery.each(this.mParameters.custom, function (sParam, oValue){
				oCust.custom[sParam] = oValue;
			});
			aParams.push(this.oModel.createCustomParams(oCust));
		}
		
		function _handleSuccess(oData) {
			that.iLength = parseInt(oData, 10);
			that.bLengthFinal = true;
		}
	
		function _handleError(oError) {
			var sErrorMsg = "Request for $count failed: " + oError.message;
			if (oError.response){
				sErrorMsg += ", " + oError.response.statusCode + ", " + oError.response.statusText + ", " + oError.response.body;
			}
			jQuery.sap.log.warning(sErrorMsg);
		}
		
		// Use context and check for relative binding
		var sPath = this.oModel.resolve(this.sPath, this.oContext);
	
		// Only send request, if path is defined
		if (sPath) {
			var sUrl = this.oModel._createRequestUrl(sPath + "/$count", null, aParams);
			var oRequest = this.oModel._createRequest(sUrl, "GET", false);
			// count needs other accept header
			oRequest.headers["Accept"] = "text/plain, */*;q=0.5";
		
			// execute the request and use the metadata if available
			// (since $count requests are synchronous we skip the withCredentials here)
			this.oModel._request(oRequest, _handleSuccess, _handleError, undefined, undefined, this.oModel.getServiceMetadata());
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
	 * @public
	 * @name sap.ui.model.odata.ODataListBinding#refresh
	 * @function
	 */
	ODataListBinding.prototype.refresh = function(bForceUpdate, mChangedEntities, mEntityTypes) {
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
				jQuery.each(this.aKeys, function(i, sKey) {
					if (sKey in mChangedEntities) {
						bChangeDetected = true;
						return false;
					}
				});
			} 
			if (!mChangedEntities && !mEntityTypes) { // default
				bChangeDetected = true;
			}
		}
		if (bForceUpdate || bChangeDetected) {
			this.abortPendingRequest();
			this.resetData();
			this._fireRefresh({reason: sap.ui.model.ChangeReason.Refresh});
		}
	};
	
	/**
	 * fireRefresh
	 * @name sap.ui.model.odata.ODataListBinding#_fireRefresh
	 * @function
	 */
	ODataListBinding.prototype._fireRefresh = function(mArguments) {
		this.bRefresh = true;
		this.fireEvent("refresh", mArguments);
	};
	
	/**
	 * Initialize binding. Fires a refresh 
	 * 
	 * @public
	 * @name sap.ui.model.odata.ODataListBinding#initialize
	 * @function
	 */
	ODataListBinding.prototype.initialize = function() {
		if (this.bDataAvailable) {
			this._fireChange({reason: sap.ui.model.ChangeReason.Change});
		} else {
			this._fireRefresh({reason: sap.ui.model.ChangeReason.Refresh});
		}
	};
	
	/**
	 * Check whether this Binding would provide new values and in case it changed,
	 * inform interested parties about this.
	 *
	 * @param {boolean} bForceUpdate
	 * @param {object} mChangedEntities
	 * @name sap.ui.model.odata.ODataListBinding#checkUpdate
	 * @function
	 */
	ODataListBinding.prototype.checkUpdate = function(bForceUpdate, mChangedEntities) {
		var bChangeReason = this.sChangeReason ? this.sChangeReason : sap.ui.model.ChangeReason.Change,
			bChangeDetected = false, 
			oLastData, oCurrentData,
			that = this;
		
		if (!bForceUpdate && !this.bNeedsUpdate) {
			//TODO: check if we can loop only the last requested contexts
			if (mChangedEntities) {
				jQuery.each(this.aKeys, function(i, sKey) {
					if (sKey in mChangedEntities) {
						bChangeDetected = true;
						return false;
					}
				});
			} else {
				bChangeDetected = true;
			}
			if (bChangeDetected && this.aLastContexts) {
				// Reset bChangeDetected and compare actual data of entries
				bChangeDetected = false;
				//Get contexts for visible area and compare with stored contexts
				var aContexts = this._getContexts(this.iLastStartIndex, this.iLastLength, this.iLastThreshold);
				if (this.aLastContexts.length != aContexts.length) {
					bChangeDetected = true;
				} else {
					jQuery.each(this.aLastContexts, function(iIndex, oContext) {
						oLastData = that.oLastContextData[oContext.getPath()];
						oCurrentData = aContexts[iIndex].getObject();
						// Compare whether last data is completely contained in current data (so broader $select
						// or $expand doesn't trigger a change) and to a maximum depth of 3, to cover complex types.
						if (!jQuery.sap.equal(oLastData, oCurrentData, 3, true)) {
							bChangeDetected = true;
							return false;
						}
					});
				}
			}
		}
		if (bForceUpdate || bChangeDetected || this.bNeedsUpdate) {
			this.bNeedsUpdate = false;
			this._fireChange({reason: bChangeReason});
		}
		this.sChangeReason = undefined;
	};
	
	/**
	 * Resets the current list data and length
	 * 
	 * @private
	 * @name sap.ui.model.odata.ODataListBinding#resetData
	 * @function
	 */
	ODataListBinding.prototype.resetData = function() {	
		this.aKeys = [];
		this.iLength = 0;
		this.bLengthFinal = false;
		this.sChangeReason = undefined;
		this.bDataAvailable = false;
		if (this.oModel.isCountSupported() && 
			(this.sCountMode == CountMode.Request || 
			this.sCountMode == CountMode.Both)) {
			this._getLength();
		}
	};
	
	/**
	 * Aborts the current pending request (if any)
	 * 
	 * This can be called if we are sure that the data from the current request is no longer relevant,
	 * e.g. when filtering/sorting is triggered or the context is changed.
	 * 
	 * @private
	 * @name sap.ui.model.odata.ODataListBinding#abortPendingRequest
	 * @function
	 */
	ODataListBinding.prototype.abortPendingRequest = function() {	
		if (this.oRequestHandle) {
			this.oRequestHandle.abort();
	 		this.oRequestHandle = null;
			this.bPendingRequest = false;
		}
	};
	
	/**
	 * Sorts the list.
	 *
	 * @param {sap.ui.model.Sorter|Array} aSorters the Sorter or an array of sorter objects object which define the sort order
	 * @return {sap.ui.model.ListBinding} returns <code>this</code> to facilitate method chaining 
	 * @public
	 * @name sap.ui.model.odata.ODataListBinding#sort
	 * @function
	 */
	ODataListBinding.prototype.sort = function(aSorters) {
	
		if (aSorters instanceof sap.ui.model.Sorter) {
			aSorters = [aSorters];
		}
		
		this.aSorters = aSorters;
		this.createSortParams(aSorters);
	
		// Only reset the keys, length usually doesn't change when sorting
		this.abortPendingRequest();
		this.aKeys = [];
	
		if (this.bInitialized) {
			if (this.oRequestHandle) {
				this.oRequestHandle.abort();
				this.oRequestHandle = null;
				this.bPendingRequest = false;
			}
			this.sChangeReason = sap.ui.model.ChangeReason.Sort;
			this._fireRefresh({reason : this.sChangeReason});
			// TODO remove this if the sort event gets removed which is now deprecated
			this._fireSort({sorter: aSorters});
		}
		return this;
	};
	
	/**
	 * Create URL parameters for sorting
	 * @name sap.ui.model.odata.ODataListBinding#createSortParams
	 * @function
	 */
	ODataListBinding.prototype.createSortParams = function(aSorters) {
		if (!aSorters || aSorters.length == 0) {
			return;
		}
		this.sSortParams = "$orderby=";
		for (var i=0; i < aSorters.length; i++) {
			var oSorter = aSorters[i];
			if(oSorter instanceof sap.ui.model.Sorter){
				this.sSortParams += oSorter.sPath;
				this.sSortParams += oSorter.bDescending ? "%20desc" : "%20asc";
				this.sSortParams += ",";
			}
		}
		//remove trailing comma
		this.sSortParams = this.sSortParams.slice(0,-1);
	
	};
	
	
	/**
	 * 
	 * Filters the list.
	 * 
	 * When using sap.ui.model.Filter the filters are first grouped according to their binding path.
	 * All filters belonging to a group are ORed and after that the
	 * results of all groups are ANDed.
	 * Usually this means, all filters applied to a single table column
	 * are ORed, while filters on different table columns are ANDed.
	 * 
	 * When using the specific sap.ui.model.odata.Filter it is possible to specify to AND or OR the filters with the same binding path:
	 * Syntax: new sap.ui.model.odata.Filter(sPath, [{operator:sap.ui.model.FilterOperator, value1: oValue},
	 *				                                 {operator: sap.ui.model.FilterOperator, value1: oValue}], bAND); // [bAND] = true
	 * 
	 * @param {sap.ui.model.Filter[]|sap.ui.model.odata.Filter[]} aFilters Array of filter objects
	 * @param {sap.ui.model.FilterType} sFilterType Type of the filter which should be adjusted, if it is not given, the standard behaviour applies
	 * @return {sap.ui.model.ListBinding} returns <code>this</code> to facilitate method chaining 
	 * 
	 * @public
	 * @name sap.ui.model.odata.ODataListBinding#filter
	 * @function
	 */
	ODataListBinding.prototype.filter = function(aFilters, sFilterType) {
	
		if (!aFilters) {
			aFilters = [];
		}
		
		if (aFilters instanceof sap.ui.model.Filter) {
			aFilters = [aFilters];
		}
	
		if (sFilterType == FilterType.Application) {
			this.aApplicationFilters = aFilters;
		} else {
			this.aFilters = aFilters;
		}
		
		aFilters = this.aFilters.concat(this.aApplicationFilters);
		
		if (!aFilters || !jQuery.isArray(aFilters) || aFilters.length == 0) {
			this.aFilters = [];
			this.aApplicationFilters = [];
		}
	
		this.createFilterParams(aFilters);
		this.abortPendingRequest();
		this.resetData();
		
		if (this.bInitialized) {
			if (this.oRequestHandle) {
				this.oRequestHandle.abort();
				this.oRequestHandle = null;
				this.bPendingRequest = false;
			}
			this.sChangeReason = sap.ui.model.ChangeReason.Filter;
			this._fireRefresh({reason : this.sChangeReason});
			// TODO remove this if the filter event gets removed which is now deprecated
			if (sFilterType == FilterType.Application) {
				this._fireFilter({filters: this.aApplicationFilters});
			} else {
				this._fireFilter({filters: this.aFilters});
			}
		}
		
		return this;
	};
	
	/**
	 * Create URL parameters for filtering
	 * @name sap.ui.model.odata.ODataListBinding#createFilterParams
	 * @function
	 */
	ODataListBinding.prototype.createFilterParams = function(aFilters) {
		
		if(aFilters && aFilters.length > 0){
			var oFilterGroups = {},
				iFilterGroupLength = 0,
				aFilterGroup,
				sFilterParam = "$filter=",
				iFilterGroupCount = 0,
				that = this;
			//group filters by path
			jQuery.each(aFilters, function(j, oFilter) {
				if (oFilter.sPath) {
					aFilterGroup = oFilterGroups[oFilter.sPath];
					if (!aFilterGroup) {
						aFilterGroup = oFilterGroups[oFilter.sPath] = [];
						iFilterGroupLength++;
					}
				} else {
					aFilterGroup = oFilterGroups["__multiFilter"];
					if (!aFilterGroup) {
						aFilterGroup = oFilterGroups["__multiFilter"] = [];
						iFilterGroupLength++;
					}
				}
				aFilterGroup.push(oFilter);
			});
			jQuery.each(oFilterGroups, function(sPath, aFilterGroup) {
				if (aFilterGroup.length > 1) {
					sFilterParam += '(';
				}
				jQuery.each(aFilterGroup, function(i,oFilter) {
					if (oFilter instanceof Filter) {
						if (oFilter.aValues.length > 1) {
							sFilterParam += '(';
						}
						jQuery.each(oFilter.aValues, function(i, oFilterSegment) {
							if (i > 0) {
								if(oFilter.bAND) {
									sFilterParam += "%20and%20";
								} else {
									sFilterParam += "%20or%20";
								}
							}
							sFilterParam = that._createFilterSegment(oFilter.sPath, oFilterSegment.operator, oFilterSegment.value1, oFilterSegment.value2, sFilterParam);
						});
						if (oFilter.aValues.length > 1) {
							sFilterParam += ')';
						}
					} else if (oFilter._bMultiFilter) {
						sFilterParam += that._resolveMultiFilter(oFilter);
					} else {
						sFilterParam = that._createFilterSegment(oFilter.sPath, oFilter.sOperator, oFilter.oValue1, oFilter.oValue2, sFilterParam);
					}
					if (i < aFilterGroup.length-1) {
						sFilterParam += "%20or%20";
					}
				});
				if (aFilterGroup.length > 1) {
					sFilterParam += ')';
				}
				if (iFilterGroupCount < iFilterGroupLength-1) {
					sFilterParam += "%20and%20";
				}
				iFilterGroupCount++;
			});
			this.sFilterParams = sFilterParam;
		}else{
			this.sFilterParams = null;
		}
	};
	
	/**
	 * convert multi filter to filter string
	 *
	 * @private
	 * @name sap.ui.model.odata.ODataListBinding#_resolveMultiFilter
	 * @function
	 */
	ODataListBinding.prototype._resolveMultiFilter = function(oMultiFilter){
		var that = this,
			aFilters = oMultiFilter.aFilters,
			sFilterParam = "";
		
		if (aFilters) {
			sFilterParam += "(";
			jQuery.each(aFilters, function(i, oFilter) {
				var bLocalMatch = false;
				if (oFilter._bMultiFilter) {
					sFilterParam += that._resolveMultiFilter(oFilter)
				} else if (oFilter.sPath) {
					sFilterParam += that._createFilterSegment(oFilter.sPath, oFilter.sOperator, oFilter.oValue1, oFilter.oValue2, "");
				}
				if (i < (aFilters.length - 1)) {
					if (oMultiFilter.bAnd) {
						sFilterParam += "%20and%20";
					} else {
						sFilterParam += "%20or%20";
					}
				}
			});
			sFilterParam += ")";
		}
		
		return sFilterParam;
	};
	
	ODataListBinding.prototype._createFilterSegment = function(sPath, sOperator, oValue1, oValue2, sFilterParam) {
		
		var oProperty;
		if (this.oEntityType) {
			oProperty = this.oModel.oMetadata._getPropertyMetadata(this.oEntityType, sPath);
			jQuery.sap.assert(oProperty, "PropertyType for property "+ sPath + " of EntityType " + this.oEntityType.name + " not found!");
		}
		
		if (oProperty) {
			oValue1 = this.oModel.formatValue(oValue1, oProperty.type);
			oValue2 = (oValue2 != null) ? this.oModel.formatValue(oValue2, oProperty.type) : null;
		} else {
			jQuery.sap.assert(null, "Type for filter property could not be found in metadata!");
		}
		
		if (oValue1) {
			oValue1 = jQuery.sap.encodeURL(String(oValue1));
		}
		if (oValue2) {
			oValue2 = jQuery.sap.encodeURL(String(oValue2));
		}
		
		// TODO embed 2nd value
		switch(sOperator) {
			case "EQ":
			case "NE":
			case "GT":
			case "GE":
			case "LT":
			case "LE":
				sFilterParam += sPath + "%20" + sOperator.toLowerCase() + "%20" + oValue1;
				break;
			case "BT":
				sFilterParam += "(" + sPath + "%20ge%20" + oValue1 + "%20and%20" + sPath + "%20le%20" + oValue2 + ")";
				break;
			case "Contains":
				sFilterParam += "substringof(" + oValue1 + "," + sPath + ")";
				break;
			case "StartsWith":
				sFilterParam += "startswith(" + sPath + "," + oValue1 + ")";
				break;
			case "EndsWith":
				sFilterParam += "endswith(" + sPath + "," + oValue1 + ")";
				break;
			default:
				sFilterParam += "true";
		}
		return sFilterParam;
	};
	
	ODataListBinding.prototype._initSortersFilters = function(){
		this.oEntityType = this._getEntityType();	
		this.createSortParams(this.aSorters);
		this.createFilterParams(this.aFilters.concat(this.aApplicationFilters));
	};
	
	ODataListBinding.prototype._getEntityType = function(){
		var sResolvedPath = this.oModel.resolve(this.sPath, this.oContext);
		
		if (sResolvedPath) {
			var oEntityType = this.oModel.oMetadata._getEntityTypeByPath(sResolvedPath);
			jQuery.sap.assert(oEntityType, "EntityType for path " + sResolvedPath + " could not be found!");
			return oEntityType;
			
		}
		return undefined;
	};
	

	return ODataListBinding;

}, /* bExport= */ true);
