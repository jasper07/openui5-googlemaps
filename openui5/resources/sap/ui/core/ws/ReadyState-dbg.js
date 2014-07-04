/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides enumeration sap.ui.core.ws.ReadyState
sap.ui.define(['jquery.sap.global'],
	function(jQuery) {
	"use strict";


	/**
	 * @class Defines the different ready states for a WebSocket connection.
	 *
	 * @version 1.20.7
	 * @static
	 * @public
	 * @name sap.ui.core.ws.ReadyState
	 */
	var ReadyState = {
	
		/**
		 * The connection has not yet been established.
		 * @public
		 */
		CONNECTING: 0,
	
		/**
		 * The WebSocket connection is established and communication is possible.
		 * @public
		 */
		OPEN: 1,
	
		/**
		 * The connection is going through the closing handshake.
		 * @public
		 */
		CLOSING: 2,
	
		/**
		 * The connection has been closed or could not be opened.
		 * @public
		 */
		CLOSED: 3
	
	};
	

	return ReadyState;

}, /* bExport= */ true);
