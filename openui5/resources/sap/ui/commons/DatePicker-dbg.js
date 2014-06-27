/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.DatePicker.
jQuery.sap.declare("sap.ui.commons.DatePicker");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.commons.TextField");


/**
 * Constructor for a new DatePicker.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLocale locale} : string</li>
 * <li>{@link #getYyyymmdd yyyymmdd} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.commons.TextField#constructor sap.ui.commons.TextField}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Allows end users to interact with dates.
 * Entries can directly be written in, or selected from a calendar pad.
 * Note: Dates can always be manually entered in the fix YYYYMMDD format, on top of the flexible "locale" format.
 * @extends sap.ui.commons.TextField
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.DatePicker
 */
sap.ui.commons.TextField.extend("sap.ui.commons.DatePicker", { metadata : {

	// ---- object ----

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"locale" : {type : "string", group : "Misc", defaultValue : null},
		"yyyymmdd" : {type : "string", group : "Misc", defaultValue : null}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.DatePicker with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.ui.commons.DatePicker.extend
 * @function
 */


/**
 * Getter for property <code>locale</code>.
 * 
 * Defines the locale (language and country), e.g. "en-US", whose translations should be used to render the DatePicker.
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>locale</code>
 * @public
 * @name sap.ui.commons.DatePicker#getLocale
 * @function
 */

/**
 * Setter for property <code>locale</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sLocale  new value for property <code>locale</code>
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.DatePicker#setLocale
 * @function
 */


/**
 * Getter for property <code>yyyymmdd</code>.
 * Defines the date as a "yyyymmdd" string, independent from the format used. The inherited textField "value" attribute uses the date format as configured via the locale.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>yyyymmdd</code>
 * @public
 * @name sap.ui.commons.DatePicker#getYyyymmdd
 * @function
 */

/**
 * Setter for property <code>yyyymmdd</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sYyyymmdd  new value for property <code>yyyymmdd</code>
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.DatePicker#setYyyymmdd
 * @function
 */


// Start of sap\ui\commons\DatePicker.js
jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-core");
jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-datepicker");
jQuery.sap.require("sap.ui.model.type.Date");

/**
 * This code should run only once!
**/
(function(){
	// Call-back function to record the closure.
	// If someone clicks on the window, that closes the DatePicker.
	// Our controller wants to be informed about such state-change.
	var fOnClose = function(dateText, inst) {
		// "this" refers to the associated input field.
		var sInputId   = this.id;
		var sControlID = sInputId.replace(/-input/, '');
		var oControl   = sap.ui.getCore().getControl(sControlID);
		if (oControl) {
			if (oControl.oPrivate.bVerboseMode) {
				jQuery.sap.log.debug("DATEPICKER: JQUERY ONCLOSE CALLBACK");
			}
			oControl._hide();
		}
	};
	// Call-back function used to override jQuery's setting of the focus
	// on the alternate DDLB, for those DDLBs to behave like all other ones.
	// Used since our Keyboard Navigator is without effect on those ENTER events.
	// Also used for focusing into the Calendar Pad after Month Previous/Next
	// (PageUp/PageDown) events.
	var fOnChangeMonthYear = function(year, month, inst) {
		// "this" refers to the associated input field.
		if (document.activeElement) {
			if (document.activeElement.className == "ui-datepicker-month") {
				// User expects focus to stay on (changed) Month DDLB.
				setTimeout(sap.ui.commons.DatePicker._focusMonth, 100);
			} else if (document.activeElement.className == "ui-datepicker-year") {
				// User expects focus to stay on (changed) Year DDLB.
				setTimeout(sap.ui.commons.DatePicker._focusYear, 100);
			}
			else {
				// Assuming Calendar Pad focus needed, for Previous/Next Month button support.
				// However jQuery may also be calling us because it is internally initializing
				// the Month while the picker is still closed.
				// "_focusCalendar()" will check for that!
//				jQuery.sap.log.debug("DATEPICKER: CalendarPad CALLBACK");
				var oParent = jQuery(this).parent(); // outer DIV of DatePicker
				var oDatePicker = sap.ui.getCore().byId(oParent.attr("id"));
				if (oDatePicker.oPrivate.bIsVisible) {
					//only if datepicker is shown
					setTimeout(sap.ui.commons.DatePicker._focusCalendar, 100);
				}
			}
		}
	};

//	Defining the Language-independent, SAP-specific jQuery settings:
	jQuery.datepicker.regional[''] = {
//			buttonImage       : "icon.gif",	// Works as shown below...
			changeMonth       : true,		// For rendering the DDLB allowing month changes.
			changeYear        : true,		// For rendering the DDLB allowing year changes.
//			disabled          : true,		// Does not seem to work...
			isRTL             : sap.ui.getCore().getConfiguration().getRTL(),
			onChangeMonthYear : fOnChangeMonthYear,
			onClose           : fOnClose,	// For reacting to picker closing.
//			onSelect          : fOnSelect,	// For reacting to date selection.
			showOn            : 'button',	// Works as shown below... Not useful to us.
			showOtherMonths   : true,		// For rendering the days outside the current month.
			selectOtherMonths : true,		// Allow to select dates from other monts
			showWeek          : true,		// For rendering the week numbers.
			weekHeader        : ''			// For rendering no header (e.g. 'Wk') on top of the week numbers.
	};
	// Default settings for ALL DatePickers!:
	jQuery.datepicker.setDefaults(jQuery.datepicker.regional['']);
}());

/*
 * if the first day of the week is a Sunday the week number is sometimes wrong
 * because the week number calculation uses monday as first day, so for sunday
 * it returns the previous week
 * so just use next day for week number calculation
 */
sap.ui.commons.DatePicker.weekNumWithSundayFirst = function(date){

	var checkDate = new Date(date.getTime());
	if (checkDate.getDay() == 0) {
		checkDate.setDate(checkDate.getDate() + 1);
	}
	return jQuery.datepicker.iso8601Week(checkDate);

};

/*
 * in US the week starts with Sunday
 * The first week of the year starts with January 1st. But Dec. 31 is still in the last year
 * So the week beginning in December and ending in January has 2 week numbers
 * Displayed it the number of the first week day, like in outlook
 */
sap.ui.commons.DatePicker.weekNumUS = function(date){

	var checkDate = new Date(date.getTime());
	// Find Sunday of this week starting on Sunday
	checkDate.setDate(checkDate.getDate() - checkDate.getDay());
	if (date.getMonth() == 0 && checkDate.getMonth == 11) {
		// special case 1. week of year. If day is in January week number for it is 1
		return 1;
	}
	var time = checkDate.getTime();
	var firstDate = new Date(checkDate.getTime());
	firstDate.setMonth(0); // Compare with sunday before Jan 1
	firstDate.setDate(1);
	firstDate.setDate(firstDate.getDate() - firstDate.getDay());
	return Math.floor(Math.round((checkDate - firstDate) / 86400000) / 7) + 1;

};

/**
 * Initializes the control.
 * It is called from the constructor.
 * @private
 */
sap.ui.commons.DatePicker.prototype.init = function(){

	sap.ui.commons.TextField.prototype.init.apply(this, arguments);

	// The <INPUT> part of the DatePicker should look like that of the ComboBox.
	// (to share same look&feel)

	// There is no point really in setting the "maxLength" attribute for the DatePicker,
	// as jQuery already parses the input according to the configured language-dependent dateFormat.
	// Anyway, such maxLength would be language-dependent!
	// this.setMaxLength(10);

	this.oPrivate = {
	  bIsVisible: false,    // "visibility:hidden" allows not to display the jQuery
							// DatePicker on INPUT-focus!  :-)
	  tLastTimeStamp: "",   // Used to avoid re-opening on double-clicks.
	  sValue: "",			// VALUE saved on KEYUP for IE to use next if ONKEYDOWN = ENTER,
							// for processing YYYYMMDD entries before jQuery kicks in.
	  bVerboseMode: false   // When set to "true", prints console logs.
	};

	this._oFormatYyyymmdd = sap.ui.core.format.DateFormat.getInstance({pattern: "yyyyMMdd"});

	if (sap.ui.Device.browser.mobile) {
		this.mobile = true;
		this._oFormatMobile = sap.ui.core.format.DateFormat.getInstance({pattern: "yyyy-MM-dd"});
	}

};

/**
 * Small utility.
 */
sap.ui.commons.DatePicker.prototype._getInputId = function(){
	// To follow the ComboBox behavior, the <INPUT> ID = control ID + "-input":
	return this.getId() + "-input";
};

/**
 * Adds the jQuery DatePicker onAfterRendering.
 * Another possibility would be to wait until INPUT-focus or BUTTON-click,
 * if performance becomes an issue with multiple instances.
 */
sap.ui.commons.DatePicker.prototype.onAfterRendering = function(){
	var sInputId  = this._getInputId();

	// Attaching our onKeydown non-jQuery handler before the jQuery DatePicker binds
	// its own, as we want to be invoked first for parsing entries in the YYYYMMDD format!
	// The SAPUI5 "sapOnEnter" and "onKeydown" handlers are of no use since the DatePicker
	// onENTER handler kicks-in before those two (and event intercepts the ENTER events).
	// jQuery "INPUT.bind('keydown',...)" can't be used without causing jQuery JavaScript errors.
	// So we are left with the basic JavaScript event registering mechanisms.
	var oInput = jQuery.sap.domById(sInputId);
	jQuery(oInput).bind('keydown', jQuery.proxy(sap.ui.commons.DatePicker.prototype._handleKeydown, this));

	var oBindingInfo = this.getBindingInfo("value");
	var sLocale   = this.getRenderedLocale();

	// if DatePicker is bound to a model of date type use the defined pattern.
	if (oBindingInfo && oBindingInfo.type && oBindingInfo.type instanceof sap.ui.model.type.Date) {
		var sOldPattern = this.pattern;
		this.pattern = oBindingInfo.type.getOutputPattern();
		this._bValidateViaBinding = true;
		if (sOldPattern != this.pattern) {
			var oLocale = new sap.ui.core.Locale(sLocale);
			this._oFormat = sap.ui.core.format.DateFormat.getInstance({pattern: this.pattern}, oLocale);
		}
	}

	// in mobile mode don't attach the jQuery datePicker to the field
	// don't use jQuery date pattern because only native one (yyyy-mm-dd) filled by the device datepicker
	if (!this.mobile){
		// Attaching a jQuery DatePicker to the <INPUT> element, with the supported locale:
		var oSelector = jQuery.sap.byId(sInputId);
		oSelector.datepicker(jQuery.datepicker.regional[sLocale]);
		oSelector.removeAttr("title"); // because otherwise JAWS reads Tooltip sometimes twice (its additional in description text)

		// Attaching our CSS classes to the jQuery DatePicker for styling and visibility.
		var oPicker = jQuery('#ui-datepicker-div');
		oPicker.addClass('sapUi-jQdatePicker sapUi-visibilityHidden sapUiShd');

		// add disalog role an a description to popup because otherwise user will not recognize where he is
		// full aria support not yet available for jQuery datepicker
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");
		oPicker.attr('role', 'dialog').attr('aria-label', rb.getText("DATEPICKER_DIALOG"));

		// if DatePicker is bound to a model of date type use the defined pattern.
		if (this._bValidateViaBinding) {
			oSelector.datepicker( "option", "dateFormat", this._convertDatePattern(this.pattern));
			// as jQueryDatePicker tries to parse the date from the old pattern, what fails in this case
			// we have to set it again. (But only of already formatted)
			if (!this._bSetYyyymmddAfterRendering && !this._bSetValueAfterRendering ) {
				oSelector.datepicker( "setDate" , this.getValue() );
			}
		}
	}

	// Now that we have the jQuery DatePicker attached, we can convert YYYYDDMM to VALUE
	// or VALUE to YYYYMMDD!
	// Only one of the two YYYYMMDD and VALUE attributes can be set.
	// (Setting one resets the other. So the last in wins.)
	if (this._bSetYyyymmddAfterRendering) {
		this.setYyyymmdd(this.getYyyymmdd());
	} else if(this._bSetValueAfterRendering){
		this.setValue(this.getValue());
	}
	this._bSetYyyymmddAfterRendering = undefined;
	this._bSetValueAfterRendering = undefined;

};

/**
 * The "_show()" and "_hide()" utilities are for opening/closing the DatePicker.
 * "visibility:hidden" is applied, not to render the Picker on INPUT-focus.
 * Own Keyboard Handler is required for overriding jQuery navigation.
 */
sap.ui.commons.DatePicker.prototype._show = function(){
	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: ._show()");
	}

	// if the DatePicker is inside the popup a higher z-index is needed to prevent
	// that popup sets focus back to input field if clicked somewhere in the DatePicker-popup.
	if (sap.ui.core.Popup) {
		// if not in a popup and no popup on page sap.ui.core.Popup not loaded
		sap.ui.core.Popup.getNextZIndex();
	}

	// Opening the DatePicker!
	var oSelector = jQuery.sap.byId(this._getInputId());
	var oPicker = jQuery('#ui-datepicker-div');
	oPicker.removeClass('sapUi-visibilityHidden sapUi-DP-top');
	oSelector.datepicker( "show" );

	// to show borders datepicker must know if its on top or below the input field
	if (oPicker.offset().top < oSelector.offset().top) {
		oPicker.addClass('sapUi-DP-top');
	}

	// workaound for jQuery-DatePicker bug in fixed ares
	if(oPicker.css('position') == 'fixed'){
		if((oPicker.position().top - jQuery(document).scrollTop() + oPicker.outerHeight()) > document.documentElement.clientHeight){
			var sNewTop = (oPicker.position().top - jQuery(document).scrollTop() - oPicker.outerHeight() - oSelector.outerHeight()) + 'px';
			oPicker.css('top', sNewTop);
		}
	}

	// Taking note of that state.
	this.oPrivate.bIsVisible = true;
	// Making sure this DatePicker has our keydown handler:
	this._setKeyboardNavigation();
	// Focusing onto the selected or current day:
	// Can't focus right-away in IE8/9! (No issue with Firefox and Safari.)
	//this._focusCalendar();
	// Therefore adding a delay for the Picker to have time to render.
	// Anyway, this can only make this code more robust for future jQuery releases!
	setTimeout(sap.ui.commons.DatePicker._focusCalendar, 100);

	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: open");
	}
};

/**
 * Functionality to close the DatePicker
 */
sap.ui.commons.DatePicker.prototype._hide = function(){
	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: ._hide()");
	}

	if (this.oPrivate.bIsVisible) {
		// Record time of closing:
		var currentTime = new Date().getTime();
		this.oPrivate.tLastTimeStamp = currentTime;

		// Proceeding with the closing.
		jQuery('#ui-datepicker-div').addClass('sapUi-visibilityHidden');
		this.oPrivate.bIsVisible = false;
		var oSelector = jQuery.sap.byId(this._getInputId());
		oSelector.datepicker( "hide" );

		var oInput = this.getInputDomRef();
		if (oInput.value != this.getValue()) {
			this._checkChange();
		}
		// By default (ENTER, ESC, Picker-CLICK, ...) focusing back onto the INPUT field.
		// However, clicking anywhere else will override this default behavior.
		if (oInput) {
			oInput.focus();
		}
	}

	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: closed");
	}
};

/**
 * BUTTON-click is to toggle the DatePicker.
 */
sap.ui.commons.DatePicker.prototype.onclick = function(oEvent){
	var target = oEvent.target;

	if (this.mobile && target.nodeName != "INPUT") {
		return;
	}

	// Do not react if disabled/nonEditable, in case defined as such by inheritance.
	if ( !this.getEnabled() || !this.getEditable()) {
		if (target.nodeName != "INPUT") {
			// button clicked -> focus complete field.
			this.$().focus();
		}
		return;
	}

	if (target.nodeName != "INPUT") {
		// The button must have been clicked!
		// DIV#myDatePickerId              <-- DIV container
		//   INPUT#myDatePickerId-input    <-- INPUT field
		//   DIV#myDatePickerId-icon       <-- BUTTON field
		if (this.oPrivate.bIsVisible) {
			if (this.oPrivate.bVerboseMode) {
				jQuery.sap.log.debug("DATEPICKER: BUTTON-CLICK HIDE");
			}
			this._hide();
		} else {
			// Discard double-events:
			// Scenario: When clicking outside of the DatePicker and of its INPUT field,
			//           jQuery closes the DatePicker.
			//           Now, if one happens to be clicking on the DatePicker button,
			//           jQuery will first close the DatePicker, then, we will get this
			//           button-click event that we will have to discard, not to immediately
			//           re-open the DatePicker!
			//           The time interval between these two events typically range between
			//           50 and 170 msec.
			var currentTime = new Date().getTime();
			var timeLapse   = currentTime - this.oPrivate.tLastTimeStamp;
			// Assuming that anything received within 300msec interval is invalid.
			if (timeLapse && timeLapse < 300) {
				if (this.oPrivate.bVerboseMode) {
					jQuery.sap.log.debug("DATEPICKER: BUTTON-D-CLICK IGNORED: " + timeLapse + "msec");
				}
				this.getInputDomRef().focus();
			} else {
				if (this.oPrivate.bVerboseMode) {
					jQuery.sap.log.debug("DATEPICKER: BUTTON-CLICK SHOW");
				}
				if (!sap.ui.Device.support.input.placeholder) {
					// simulate focus on input field to remove placeholder
					this.onfocusin(oEvent);
				}
				this._show();
			}
		}
	}
};

sap.ui.commons.DatePicker.prototype.onmousedown = function(oEvent){

	if (this.oPrivate.bIsVisible) {
		// stop propagation of event, otherwise if the DatePicker is in a dialog (popup) this will move in front of the calendar
		oEvent.stopPropagation();
	}

};

/**
 * Pseudo event for pseudo 'show' event (F4, Alt + down-Arrow).
 * Used for opening the DatePicker.
 */
sap.ui.commons.DatePicker.prototype.onsapshow = function(oEvent){
	// Do not react if disabled/nonEditable, in case defined as such by inheritance.
	if ( !this.getEnabled || !this.getEditable() || this.mobile) {
		return;
	}

	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: .onsapshow()");
	}
	this._checkChange(oEvent);
	this._show();

	// Would be nice if Framework could intercept the F4 event, so that IE would not open its
	// URL history...
	// Doing it here for now.
	oEvent.preventDefault();
	oEvent.stopPropagation();
};

sap.ui.commons.DatePicker.prototype._handleKeydown = function(oEvent){

	if (this.mobile) {
		// no keyboard support for mobile devices (no jQuery DatePicker assigned)
		return;
	}

	if (oEvent.keyCode == jQuery.sap.KeyCodes.PAGE_UP && !oEvent.ctrlKey && !oEvent.shiftKey) {
		// increase by one day
		this._increaseDate("day", 1, oEvent);
	}else if (oEvent.keyCode == jQuery.sap.KeyCodes.PAGE_DOWN && !oEvent.ctrlKey && !oEvent.shiftKey) {
		// decrease by one day
		this._increaseDate("day", -1, oEvent);
	}else if (oEvent.keyCode == jQuery.sap.KeyCodes.PAGE_UP && !oEvent.ctrlKey && oEvent.shiftKey) {
		// increase by one month
		this._increaseDate("month", 1, oEvent);
	}else if (oEvent.keyCode == jQuery.sap.KeyCodes.PAGE_DOWN && !oEvent.ctrlKey && oEvent.shiftKey) {
		// decrease by one month
		this._increaseDate("month", -1, oEvent);
	}else if (oEvent.keyCode == jQuery.sap.KeyCodes.PAGE_UP && oEvent.ctrlKey && oEvent.shiftKey) {
		// increase by one year
		this._increaseDate("year", 1, oEvent);
	}else if (oEvent.keyCode == jQuery.sap.KeyCodes.PAGE_DOWN && oEvent.ctrlKey && oEvent.shiftKey) {
		// decrease by one year
		this._increaseDate("year", -1, oEvent);
	}

};

/*
 * increase or decrease date by i sUnit
 */
sap.ui.commons.DatePicker.prototype._increaseDate = function(sUnit, i, oEvent){

	var oSelector = jQuery.sap.byId(this._getInputId());
	// current displayed date is stored in DatePicker
	var oDate = oSelector.datepicker( "getDate" );

	if (!oDate) {
		// empty datePicker -> just lets type
		return;
	}

	switch (sUnit) {
	case "day":
		oDate.setDate(oDate.getDate()+i);
		break;
	case "month":
		oDate.setMonth(oDate.getMonth()+i);
		break;
	case "year":
		oDate.setFullYear(oDate.getFullYear()+i);
		break;
	default:
		break;
	}
	oSelector.datepicker( "setDate", oDate )
	// this updates the input field too

	oEvent.preventDefault(); // otherwise in safari "+" or "-" will be added
};

/**
 * Event handler for saving DATEs when FOCUS is lost.
 * Handles TABs as well.
 */
sap.ui.commons.DatePicker.prototype.onsapfocusleave = function(oEvent){
	// Ignore event if DatePicker is opening.
	if (this.oPrivate.bIsVisible) {
		return;
	}

	if (this.oPrivate.bVerboseMode) {
		jQuery.sap.log.debug("DATEPICKER: .onsapfocusleave()");
	}

	sap.ui.commons.TextField.prototype.onsapfocusleave.apply(this, arguments);
};

/**
 * On opening of the DatePicker, the requirement is to:
 * - focus on a move-to day, as done via arrow keys (Up, Right, Down, Left).
 * - focus on the already "selected" date, if one has already been set, or else:
 * - focus on the current date, or else (if having selected a new Month):
 * - focus on the 1st of the Month.
 * Meant to be called if the Picker is already open or just opening.
 * However the use of "setTimeout()" means we will have to make sure the picker
 * is still open before proceeding!
 * Also, can be called "any time" via our OnChangeMonthYear() callback function!
 * Not "prototype" since instance-independent.
*/
sap.ui.commons.DatePicker._focusCalendar = function() {
	var oPicker       = jQuery('#ui-datepicker-div');
	var sControlID    = oPicker.attr('associatedControlId');
	// Return if called back for a Picker that has not even reached the opening state:
	if (!sControlID) {
		return;
	}
	var oControl      = sap.ui.getCore().getControl(sControlID);
	if (!oControl) {
		return;
	}

	// Return if the Picker is now closed. May happen after setTimeout():
	if (!oControl.oPrivate.bIsVisible) {
		oPicker.attr('restoreFocusOnDay', "");
		return;
	}
	var oDivContainer = jQuery.sap.domById(sControlID);
	var oFocusCell    = null;
	var oFocusDay     = null;

	// Were we to restore the focus against a particular day?
	var sDay = oPicker.attr('restoreFocusOnDay');
	if (sDay) {
		oFocusCell = jQuery('a.ui-state-default');
		var day = Number(sDay);
		if (day <= 0) {day += oFocusCell.length;}
		oFocusDay = oFocusCell[day-1];
		if (oFocusDay && oFocusDay.offsetHeight) {
			// Can only focus on "in-the-month" Anchors (not on "out-of-the-month" SPANs),
			// and can only focus if the calendar day has been rendered (height check).
			oFocusDay.focus();
			jQuery(oFocusDay).mouseover();
			// Although we just focused into the Calendar, having our INPUT field
			// still look "in-focus", like a ComboBox would do when open:
			if (oDivContainer.className.indexOf("sapUiTfFoc") == -1) {
				oDivContainer.className += " sapUiTfFoc";
			}
			oPicker.attr('restoreFocusOnDay', "");
			return;
		}
	}

	// Currently hovered/focused day
	oFocusDay = jQuery('a.ui-state-default.ui-state-hover').get(0);

	// Currently selected date:
	if (!oFocusDay){
		oFocusCell = jQuery('td.ui-datepicker-current-day');
		oFocusDay  = (oFocusCell[0]) ? oFocusCell[0].firstChild : null;
	}

	// Today:
	if (!oFocusDay){
		oFocusCell = jQuery('td.ui-datepicker-today');
		oFocusDay  = (oFocusCell[0]) ? oFocusCell[0].firstChild : null;
	}

	// 1st of the Month:
	if (!oFocusDay){
		var aDays = jQuery("a.ui-state-default");
		for ( var iDay = 0; iDay < aDays.length; iDay++) {
			var oDay = aDays[iDay];
			if (!jQuery(oDay).hasClass('ui-priority-secondary')) {
				// first Day of month found
				oFocusDay = oDay;
				break;
			}
		}
	}

	if (oFocusDay && oFocusDay.nodeName == "A" && oFocusDay.offsetHeight) {
		oFocusDay.focus();
		jQuery(oFocusDay).mouseover();
		if (oDivContainer.className.indexOf("sapUiTfFoc") == -1) {
			oDivContainer.className += " sapUiTfFoc";
		}
		return;
	}

	// Just to be on the safe side, in case more time is needed on IE to render
	// the inner calendar, we will try again in 100msec.
	// Infinite loops are avoided by stopping if no open picker is found.
	setTimeout(sap.ui.commons.DatePicker._focusCalendar, 100);
};

/**
 * Similar, but simpler, utilities for focusing onto the DDLBs.
 * Can only be called if the Picker is already rendered.
 * Not "prototype" since instance-independent.
*/
sap.ui.commons.DatePicker._focusMonth = function() {
	jQuery('select.ui-datepicker-year')[0].focus(); // Focussing elsewhere closes the month DDLB.
	jQuery('select.ui-datepicker-month')[0].focus();
};

sap.ui.commons.DatePicker._focusYear = function() {
	jQuery('select.ui-datepicker-month')[0].focus(); // Focussing elsewhere closes the year DDLB.
	jQuery('select.ui-datepicker-year')[0].focus();
};

/**
 * Keyboard Navigation:
 * - Tab						: For navigating between the 3 selectors (2 DDLBs + 1 Calendar).
 * - Arrows					: For navigating within a selector.
 * - Enter or Space	: For making a selection.
 * - Esc						: For closing with no selection.
 * - Home						: For navigating to the first day.
 * - End						: For navigating to the last day.
 * - PageUp					: For rendering the previous month.
 * - PageDown				: For rendering the next month.
 *
 * BEWARE: "this" points to the jQuery Picker, as this handler got bound against it.
 *         Use "oControl" for pointing to "this" controller!
 *
 * JAWS: Please do not forget to change cursor modes, as by default, JAWS
 *       uses some keys for its own usage, e.g. RightArrow = "SayNextCharacter".
 *       INSERT-Z will toggle you in and out of normal arrow keyboard navigation mode.
 *       Arrow navigation can be used within the Calendar part of the DatePicker.
 *       Otherwise one can still use Alt-LeftArrow and Alt-RightArrow for navigation.
 *
 * Not "prototype" since instance-independent.
*/
sap.ui.commons.DatePicker._keyboardHandler = function(event) {
	// Sub-function for focusing onto a given calendar day, i.e. 1 through 31.
	// use mouseover function to allow mouse/keyboard interaction using class ui-state-hover
	function focusDay(nDay) {
		// Retrieving all possible day cells within the calendar:
		var days = jQuery("a.ui-state-default");
		var bOtherMonth = jQuery(days[nDay-1]).hasClass('ui-priority-secondary');
		if ((nDay > 0) && (nDay <= days.length) && !bOtherMonth) {
			// Focussing within the current month:
			days[nDay-1].focus(); // Day 1 is at index 0...
			jQuery(days[nDay-1]).mouseover();
		} else if ((nDay <= 0) || (bOtherMonth && nDay < 7)) {
			// Focussing within the previous month:
			var iShiftDays = 0;
			if (jQuery(days[0]).hasClass('ui-priority-secondary')) {
				// previous months days displayed
				iShiftDays = 7;
			}
			jQuery("a.ui-datepicker-prev").focus();
			jQuery("a.ui-datepicker-prev").click();
			var aNewDays = jQuery("a.ui-state-default");
			jQuery(aNewDays[aNewDays.length-1-iShiftDays+nDay]).mouseover();
			jQuery('#ui-datepicker-div').attr('restoreFocusOnDay', String(aNewDays.length-iShiftDays+nDay));

		} else {
			// Focussing within the next month:
			var iShiftDays = 0;
			var iNewDay = nDay - days.length;
			if (jQuery(days[days.length-1]).hasClass('ui-priority-secondary')) {
				// previous months days displayed
				iShiftDays = 7;
			}
			jQuery("a.ui-datepicker-next").focus();
			jQuery("a.ui-datepicker-next").click();
			var aNewDays = jQuery("a.ui-state-default");
			jQuery(aNewDays[iShiftDays+iNewDay-1]).mouseover();
			jQuery('#ui-datepicker-div').attr('restoreFocusOnDay', String(iShiftDays+iNewDay));
		}
	}

	// Sub-function for focusing onto the last calendar day.
	function focusLastDayOfMonth() {
		var aDays = jQuery("a.ui-state-default");
		// find last day of month
		for ( var iDay = aDays.length - 1; iDay >= 0; iDay--) {
			var oDay = aDays[iDay];
			if (!jQuery(oDay).hasClass('ui-priority-secondary')) {
				// last Day of month found
				oDay.focus();
				jQuery(oDay).mouseover();
				return(iDay);
			}
		}
	}

	function focusFirstDayOfMonth(bFocus) {
		var aDays = jQuery("a.ui-state-default");
		for ( var iDay = 0; iDay < aDays.length; iDay++) {
			var oDay = aDays[iDay];
			if (!jQuery(oDay).hasClass('ui-priority-secondary')) {
				// first Day of month found
				oDay.focus();
				jQuery(oDay).mouseover();
				return(iDay);
			}
		}
	}

	// Sub-function for focusing onto the 1st day of the week, given a day within the week.
	function focusFirstDayOfWeek(nDay) {
		var days = jQuery("a.ui-state-default");
		// Fetching the current Calendar Row. Going up from "A" to "TD" to "TR":
		var currentRow = days[nDay-1].parentNode.parentNode;
		// Looking for the 1st Calendar day found within that row:
		for (var i=0, len=days.length; i<len; i++) {
			if (days[i].parentNode.parentNode == currentRow) {
				if (!jQuery(days[i]).hasClass('ui-priority-secondary')) {
					days[i].focus();
					jQuery(days[i]).mouseover();
				}else{
					// day is in previous month
					jQuery("a.ui-datepicker-prev").focus();
					jQuery("a.ui-datepicker-prev").click();
					var aNewDays = jQuery("a.ui-state-default");
					jQuery(aNewDays[aNewDays.length-7]).mouseover();
					jQuery('#ui-datepicker-div').attr('restoreFocusOnDay', String(aNewDays.length-6));
				}
				return;
			}
		}
	}

	// Sub-function for focusing onto the last day of the week, given a day within the week.
	function focusLastDayOfWeek(nDay) {
		var days = jQuery("a.ui-state-default");
		var currentRow = days[nDay-1].parentNode.parentNode;
		// Looking for the last Calendar day found within that row:
		for (var i=days.length-1; i>=0; i--) {
			if (days[i].parentNode.parentNode == currentRow) {
				if (!jQuery(days[i]).hasClass('ui-priority-secondary')) {
					days[i].focus();
					jQuery(days[i]).mouseover();
				}else{
					// day is in next month
					jQuery("a.ui-datepicker-next").focus();
					jQuery("a.ui-datepicker-next").click();
					var aNewDays = jQuery("a.ui-state-default");
					jQuery(aNewDays[6]).mouseover();
					jQuery('#ui-datepicker-div').attr('restoreFocusOnDay', String(7));
				}
				return;
			}
		}
	}

	// Retrieving some current data:
	var key              = event.keyCode;
	var target           = event.target;
	var currentFocusDay  = Number(target.innerHTML);
	var bIsHeaderEvent   = (target.nodeName == "SELECT"); // DDLB event
	var bIsCalendarEvent = (target.nodeName == "A");      // Day-cell event
	if (!bIsHeaderEvent && !bIsCalendarEvent) {
		jQuery.sap.log.debug("ERROR: DatePicker.prototype._keyboardHandler()");
		return;
	}

	// as days of previous or next month are focusable the number of the day is not the
	// focusable number. So the current day must be found from all days.
	for ( var iDay = 0; iDay < jQuery("a.ui-state-default").length; iDay++) {
		var oDay = jQuery("a.ui-state-default")[iDay];
		if (target == oDay) {
			// current day found
			currentFocusDay = iDay + 1;
			break;
		}
	}

	switch (key){
	case jQuery.sap.KeyCodes.TAB: /* 9 */
		// Moving between DDLBs and Calendar areas.
		if (bIsHeaderEvent) {
			if ((target.className.indexOf("year")!=-1 && !event.shiftKey) ||
					(target.className.indexOf("month")!=-1 && event.shiftKey)) {
				setTimeout(sap.ui.commons.DatePicker._focusCalendar, 100);
			} else {
				if (target.className.indexOf("year")!=-1) {
					setTimeout(sap.ui.commons.DatePicker._focusMonth, 100);
				}
				else {
					setTimeout(sap.ui.commons.DatePicker._focusYear, 100);
				}
				return;
			} // Native TABing between DDLBs.
		} else {
			if (event.shiftKey) {
				jQuery("select.ui-datepicker-year")[0].focus();
			}
			else                {
				jQuery("select.ui-datepicker-month")[0].focus();
			}
		}
		break;
	case jQuery.sap.KeyCodes.ENTER: /* 13 */
		if (document.activeElement) {
			// Oddly enough, on IE, have to stop jQuery from doing a 2nd selection back!
			if (document.activeElement.className == "ui-datepicker-month"){
				setTimeout(sap.ui.commons.DatePicker._focusMonth, 100);
				break;  // Intercept this event from jQuery.
			} else if (document.activeElement.className == "ui-datepicker-year" ){
				setTimeout(sap.ui.commons.DatePicker._focusYear, 100);
				break;  // Intercept this event from jQuery.
			}
		}
		return; // Leave this event to jQuery to handle.
		break;
	case jQuery.sap.KeyCodes.ESCAPE: /* 27 */
		// Closing the current DatePicker:
		// jQuery('#ui-datepicker-div').hide(); <- Does not work as jQuery will not invoke
		//                                         our supplied onClose() callback function
		//                                         since we are the ones triggering this closure!
		// So, invoking our "_hide()" function instead, as our Controller needs to register this.
		var oPicker    = jQuery('#ui-datepicker-div');
		var sControlID = oPicker.attr('associatedControlId');
		var oControl   = sap.ui.getCore().getControl(sControlID);
		oControl._hide();
		break;
	case jQuery.sap.KeyCodes.SPACE: /* 32 */
		// Select the current day. jQuery handler is on parent TD.
		if (bIsCalendarEvent) {
			jQuery(target.offsetParent).click();
		}
		else {
			return;
		}
		break;
	case jQuery.sap.KeyCodes.PAGE_UP: /* 33 */
		// Activate the "Previous" button:
		jQuery("a.ui-datepicker-prev").click();
		jQuery('#ui-datepicker-div').attr('restoreFocusOnDay', String(focusFirstDayOfMonth()+1));
		break;
	case jQuery.sap.KeyCodes.PAGE_DOWN: /* 34 */
		// Activate the "Next" button:
		jQuery("a.ui-datepicker-next").click();
		jQuery('#ui-datepicker-div').attr('restoreFocusOnDay', String(focusFirstDayOfMonth()+1));
		break;
	case jQuery.sap.KeyCodes.END: /* 35 */
		// Focus on last day of...
		if (bIsCalendarEvent) {
			if (event.ctrlKey) {
				focusLastDayOfMonth();
			}
			else               {
				focusLastDayOfWeek(currentFocusDay);
			}
		} else {
			return;
		}
		break;
	case jQuery.sap.KeyCodes.HOME: /* 36 */
		// Focus on first day of...
		if (bIsCalendarEvent) {
			if (event.ctrlKey) {
				focusFirstDayOfMonth();
			}
			else               {
				focusFirstDayOfWeek(currentFocusDay);
			}
		} else {
			return;
		}
		break;
	case jQuery.sap.KeyCodes.ARROW_LEFT: /* 37 */
		// Focus onto "day-1", if possible.
		if (bIsCalendarEvent) {
			if (sap.ui.getCore().getConfiguration().getRTL()) {
				focusDay(currentFocusDay+1);
			}
			else {
				focusDay(currentFocusDay-1);
			}
		}
		else {
			return;
		} // Allow native DDLB selection
		break;
	case jQuery.sap.KeyCodes.ARROW_UP: /* 38 */
		// Focus onto "day-7", if possible.
		if (bIsCalendarEvent) {
			focusDay(currentFocusDay-7);
		}
		else {
			return;
		} // Allow native DDLB selection
		break;
	case jQuery.sap.KeyCodes.ARROW_RIGHT: /* 39 */
		// Focus onto "day+1", if possible.
		if (bIsCalendarEvent) {
			if (sap.ui.getCore().getConfiguration().getRTL()) {
				focusDay(currentFocusDay-1);
			}
			else {
				focusDay(currentFocusDay+1);
			}
		}
		else {
			return;
		} // Allow native DDLB selection
		break;
	case jQuery.sap.KeyCodes.ARROW_DOWN: /* 40 */
		// Focus onto "day+7", if possible.
		if (bIsCalendarEvent) {
			focusDay(currentFocusDay+7);
		}
		else                  {
			return;
		} // Allow native DDLB selection
		break;
	default:
		return;
	}

	// If we did not return, then this event was ours. Intercept!
	event.preventDefault();
	event.stopPropagation();
};

/**
 * Registering our DatePicker Keyboard Navigation handler over that of jQuery.
 * Also records the Control ID, as a means to reach it given a jQuery Picker.
 * @private
 */
sap.ui.commons.DatePicker.prototype._setKeyboardNavigation = function() {
	var oPicker = jQuery('#ui-datepicker-div');
	if (oPicker) {
		// BEWARE: Do not register the KeyDown Event Handler more than once!
		//         Avoid multiple eventing and memory gobbler.
		var registeredCtrlId = oPicker.attr('associatedControlId');
		if (!registeredCtrlId) {
			oPicker.bind('keydown', jQuery.proxy(sap.ui.commons.DatePicker._keyboardHandler, this));
		}
		// Note that jQuery uses only 1 picker for all instances, so we always
		// need to update our current Control ID:
		oPicker.attr('associatedControlId', this.getId());
	} else {
		jQuery.sap.log.debug("ERROR: DatePicker ._setKeyboardNavigation() fails.");
	}
};

/**
 * Returns the "locale" (e.g. "en-US") to use for rendering a DatePicker.
 * Checks with the controller, the page, the navigator, until a match is found.
 * If no match is found, return the SAP 'en' default supported locale-language.
 * @private
 */
sap.ui.commons.DatePicker.prototype.getRenderedLocale = function() {
	// Fetch and check if the Control locale can be supported:
	var sLocale = this.getLocale();
	if (sLocale) {
		var oLocale = new sap.ui.core.Locale(sLocale);
		sLocale = oLocale.toString();
	}else {
		sLocale = sap.ui.getCore().getConfiguration().getFormatSettings().getFormatLocale().toString();
		this.setLocaleTexts(sLocale);
	}

	if (!sLocale) {
		// As Fallback, using the SAP-default "en" locale:
		sLocale = "en";
		this.setLocaleTexts(sLocale);
	}

	return sLocale;
};

// #############################################################################
// Overwritting methods that are generated in DatePicker.API.js
// #############################################################################

/*
 * Setter for property <code>yyyymmdd</code>.
 * Required for handling application inputs (mainly onLoad).
 *
 * @param {string} sYyyymmdd  new value for property <code>yyyymmdd</code>
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DatePicker.prototype.setYyyymmdd = function(sYyyymmdd) {

	// Quickly saving this non-validated YYYYMMDD as is, in case getter is called
	// before we are done.
	// "true" to suppress rendering. Rendering done on VALUE change.
	this.setProperty("yyyymmdd", sYyyymmdd, true);

	// No need to process this YYYYMMDD before control is rendered.
	// (Propection against multiple qUnit-test YYYYMMDD changes.)
	// Attribute will be processed onAfterRendering.
	var oInput = this.getInputDomRef();
	if (!oInput) {
		this._bSetYyyymmddAfterRendering = true;
		this._bSetValueAfterRendering = false;
		return this;
	}

	var oSelector = jQuery.sap.byId(this._getInputId());
	var sValue;
	try{
		var oDate = this._oFormatYyyymmdd.parse(sYyyymmdd);
		if (this.mobile) {
			// on mobile devices the date is displayed in native pattern, so it must be
			// converted into control pattern for value property
			sValue = this._oFormat.format(oDate);
			var sOutputValue = this._oFormatMobile.format(oDate);
			oSelector.val(sOutputValue);
		}else{
			// Building a date object with the fix-format received date:
			// Updating the DatePicker:
			oSelector.datepicker( "setDate" , oDate );
			// Saving the current date value:
			sValue = oInput.value;
		}
	} catch (e) {
		// Maybe YYYYMMDD was not supplied in the YYYYDDMM format!?
		jQuery.sap.log.error("Error: DATEPICKER setYyyymmdd(" + sYyyymmdd + ") failed! Maybe the format is wrong.");
		return this;
	};
	// "true" to suppress rendering. Not needed since we just read it from the DOM!
	this.setProperty("value", sValue, true);

	return this;
};

/*
 * Setter for property <code>value</code>.
 * Required for handling user manual inputs.
 *
 * @param {string} sValue new value for property <code>value</code>
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.DatePicker.prototype.setValue = function(sValue) {

	// No need to process this VALUE before control is rendered.
	// (Propection against multiple qUnit-test VALUE changes.)
	// Attribute will be processed onAfterRendering.
	var oInput = this.getInputDomRef();
	if (!oInput) {
		this.setProperty("value", sValue, true);
		this._bSetValueAfterRendering = true;
		this._bSetYyyymmddAfterRendering = false;
		return this;
	}

	// jQuery needed to compute yyyymmdd.
	var oSelector = jQuery.sap.byId(this._getInputId());
	var oDate;
	try{
		if (this.mobile) {
			// on mobile devices the date is displayed in native pattern, so it must be
			// converted into control pattern fpr value property
			oDate = this._oFormat.parse(sValue);
			var sOutputValue = this._oFormatMobile.format(oDate);
			oSelector.val(sOutputValue);
		}else{
			// Updating the DatePicker with the raw VALUE:
			oSelector.datepicker( "setDate" , sValue );
			// Using a date object, asking jQuery to reformat it in our fix-YYYYMMDD format:
			oDate = oSelector.datepicker( "getDate" );
			// Checking how jQuery interpreted the supplied DATE:
			sValue = oInput.value;
		}
		var sYyyymmdd = "";
		if (oDate) {
			sYyyymmdd = this._oFormatYyyymmdd.format(oDate);
		}
	} catch (e) {
		// Maybe VALUE was not supplied in the appropriate LOCALE format!?
		jQuery.sap.log.error("Error: DATEPICKER setValue(" + sValue + ") failed! Maybe VALUE was not supplied in the appropriate LOCALE format!");
		//however set property to allow checks from Datatbinding or application
		this.setProperty("value", sValue, true);
		return this;
	}
	// set property only once after formatatting
	// "true" to suppress rendering. jQuery DatePicker handles that.
	this.setProperty("value", sValue, true);
	// Saving the concurrent date attribute:
	// "true" to suppress rendering. Rendering done on VALUE change.
	this.setProperty("yyyymmdd", sYyyymmdd, true);

	jQuery.sap.log.debug("DATEPICKER(" + this.getId() + "): setValue: value= " + this.getValue() + " yyyymmdd= " + this.getYyyymmdd());
	return this;
};

/**
 * Setter for property <code>locale</code>.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {string} sLocale  new value for property <code>locale</code>
 * @public
 */
sap.ui.commons.DatePicker.prototype.setLocale = function(sLocale) {
	// Worth checking if there is any change to process:
	var oldLoc = this.getLocale();
	if(sLocale == oldLoc) {
		return this;
	}

	// Saving the supplied locale:
	// "true" to suppress rendering. Rendering done on VALUE change.
	this.setProperty("locale", sLocale, true);

	// If control has not been rendered, there is no point rendering a new one now!
	var oInput = this.getInputDomRef();
	if (!oInput) {
		this.setLocaleTexts(sLocale);
		return this;
	}

	// Retrieving the supported translations, to give jQuery:
	sLocale = this.getRenderedLocale();
	var oSelector = jQuery.sap.byId(this._getInputId());
	if(!this.mobile){
		// Have to instantiate a new jQuery DatePicker for reformating the rendered Date!
		// Updating the new jQuery DatePicker and ourselves via a JavaScript Date object.
		this.setLocaleTexts(sLocale);
		var oDate = oSelector.datepicker( "getDate" );
		// Only way to reformat VALUE on the fly, according to the new LOCALE:
		oSelector.datepicker( "destroy" );
		oSelector.datepicker(jQuery.datepicker.regional[sLocale]);
		oSelector.datepicker( "setDate" , oDate );
		this.setValue(oInput.value);
	}else{
		// on mobile devices only change value property to new pattern
		// Yyyymmdd and rendered value are not changed
		var sValue = this.getValue();
		oDate = this._oFormat.parse(sValue);
		this.setLocaleTexts(sLocale);
		sValue = this._oFormat.format(oDate);
		this.setProperty("value", sValue, true);
	}

	return this;
};

/*
 * Setter for texts of <code>locale</code>.
 *
 * @param {string} sLocale  new value for property <code>locale</code>
 * @private
 */
sap.ui.commons.DatePicker.prototype.setLocaleTexts = function(sLocale) {

	// normalize locale and use data from CLDR
	var oLocale = new sap.ui.core.Locale(sLocale);
	var oLocaleData = sap.ui.core.LocaleData.getInstance(oLocale);
	sLocale = oLocale.toString();

	// jQuery datepicker texts not needed in mobile case
	// check if texts already loaded
	var oRegional = jQuery.datepicker.regional[sLocale];
	if(!oRegional || !oRegional.closeText){
		oRegional = oRegional || (jQuery.datepicker.regional[sLocale] = {}); 

		//language dependend fields
		var rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons", sLocale);

		oRegional.closeText = rb.getText("DATEPICKER_CLOSE_TEXT");
		oRegional.prevText = rb.getText("DATEPICKER_PREV_TEXT");
		oRegional.nextText = rb.getText("DATEPICKER_NEXT_TEXT");
		oRegional.currentText = rb.getText("DATEPICKER_CURRENT_TEXT");
		oRegional.monthNames = oLocaleData.getMonths("wide");
		oRegional.monthNamesShort = oLocaleData.getMonths("abbreviated");
		oRegional.dayNames = oLocaleData.getDays("wide");
		oRegional.dayNamesShort = oLocaleData.getDays("abbreviated");
		if (oLocale.sLanguage == "zh" || oLocaleData.getDaysStandAlone("abbreviated")[0].length > 2) {
			// weekdays are too large -> use short ones
			oRegional.dayNamesMin = oLocaleData.getDaysStandAlone("narrow");
		}else{
			oRegional.dayNamesMin = oLocaleData.getDaysStandAlone("abbreviated");
		}

		oRegional.dateFormat = this._convertDatePattern(oLocaleData.getDatePattern("medium"));
		oRegional.showMonthAfterYear = this._getOrderMonthYear(oRegional.dateFormat);
		oRegional.firstDay = oLocaleData.getFirstDayOfWeek();
		if (sLocale == "en-US"){
			oRegional.calculateWeek = sap.ui.commons.DatePicker.weekNumUS;
		} else if (oRegional.firstDay == 0) {
			oRegional.calculateWeek = sap.ui.commons.DatePicker.weekNumWithSundayFirst;
		}
	}

	// if pattern not defined by databinding use the one of the locale
	if (!this._bValidateViaBinding) {
		var sOldPattern = this.pattern;
		this.pattern = oLocaleData.getDatePattern("medium");
		if (sOldPattern != this.pattern) {
			this._oFormat = sap.ui.core.format.DateFormat.getInstance({pattern: this.pattern}, oLocale);
		}
	}

};

/*
 * Converts the date pattern from OLCR to the one of the jQuery datePicker
 * Month is coded in the different way
 */
sap.ui.commons.DatePicker.prototype._convertDatePattern = function(sPattern) {

	var aFormatArray = sap.ui.core.format.DateFormat.prototype.parseJavaDateFormat(sPattern);
	var aBuffer = [];
	var oPart;
	var sFormat;
	var bNotSupported = false;

	for (var i = 0; i < aFormatArray.length; i++) {
		oPart = aFormatArray[i];
		switch (oPart.sType) {
			case "text":
				aBuffer.push(oPart.sValue);
				break;
			case "day":
				if (oPart.iDigits == 1) {
					aBuffer.push("d");
				}else {
					aBuffer.push("dd");
				}
				break;
			case "dayNameInWeek":
			case "dayNameInWeekStandalone":
				if (oPart.iDigits < 4) {
					aBuffer.push("D");
				} else if (oPart.iDigits >= 4){
					aBuffer.push("DD");
				}
				break;
			case "dayInYear":
				if (oPart.iDigits < 4) {
					aBuffer.push("o");
				} else if (oPart.iDigits >= 4){
					aBuffer.push("oo");
				}
				break;
			case "dayNumberOfWeek":
				bNotSupported = true;
				break;
			case "month":
			case "monthStandalone":
				if (oPart.iDigits == 1) {
					aBuffer.push("m");
				} else if (oPart.iDigits == 2){
					aBuffer.push("mm");
				} else if (oPart.iDigits == 3){
					aBuffer.push("M");
				} else if (oPart.iDigits == 4){
					aBuffer.push("MM");
				} else {
					// not supported -> just use short one
					aBuffer.push("m");
				}
				break;
			case "era":
				aBuffer.push("AD");
				break;
			case "year":
			case "weekYear":
				if (oPart.iDigits == 2) {
					aBuffer.push("y");
				}else {
					aBuffer.push("yy");
				}
				break;
			case "weekInYear":
				bNotSupported = true;
				break;
			default:
				bNotSupported = true;
				break;
		}
	}

	sFormat = aBuffer.join("");

	if (bNotSupported) {
		jQuery.sap.log.warning("Date pattern \""+ sPattern + "\" not supported by DatePicker", "_convertDatePattern", "DatePicker");
	}

	return sFormat;

};

/*
 * Checks the order of month an year in pattern to decide the
 * order of the month/year dropdown in DatePicker
 */
sap.ui.commons.DatePicker.prototype._getOrderMonthYear = function(sFormat) {
	var iIndex1 = sFormat.indexOf('M'),
	    iIndex2 = sFormat.lastIndexOf('y');
	if (iIndex1 == -1) {
		iIndex1 = sFormat.indexOf('m');
	}

	if (iIndex1 > iIndex2) {
		return true;
	}else{
		return false;
	}
};

/**
 * Fire event change to attached listeners.
 *
 * Expects following event parameters:
 * <ul>
 * <li>'newValue' of type <code>string</code> The new / changed value of the DatePicker.</li>
 * <li>'newYyyymmdd' of type <code>string</code> The new / changed Yyyymmdd of the DatePicker. </li>
 * <li>'invalidValue' of type <code>boolean</code> The new / changed value of the DatePicker is not a valid date. </li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.DatePicker} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.DatePicker#fireChange
 * @function
 */
sap.ui.commons.DatePicker.prototype.fireChange = function( bInvalidValue ) {
	this.fireEvent("change", {newValue:this.getValue(),
							  newYyyymmdd:this.getYyyymmdd(),
							  invalidValue: bInvalidValue});
	return this;
};

/*
 * Overwrites the mehod in TextField to add additional YYYYMMDD parameter
 */
sap.ui.commons.DatePicker.prototype._checkChange = function(oEvent) {
	var oInput = this.getInputDomRef(),
		newVal = oInput && oInput.value;

	if (this.mobile) {
		// on mobile devices the date is displayed in native pattern, so it must be
		// converted into control pattern fpr value property
		var oDate = this._oFormatMobile.parse(newVal);
		newVal = this._oFormat.format(oDate);
	}

	if(this.getEditable() && this.getEnabled() && newVal != this.getValue()) {
		// check if input in valid pattern
		var sLocale  = this.getRenderedLocale();
		var oDate;
		var bWrong = false;
		if (!this.mobile) {
			// in mobile case no wrong input is possible
			if (newVal != "") {
				oDate = this._oFormat.parse(newVal);
				if (oDate) {
					// just format date to right pattern, because maybe a fallback pattern is used in the parsing
					newVal = this._oFormat.format(oDate);
				}else{
					bWrong = true;
				}
			}
		}

		if (bWrong) {
			// date can not be parsed -> just set it without try to compute Yyyymmdd
			// in DataBinding case a parsing error is thrown
			this.setProperty("value", newVal, true);
		}else{
			this.setValue(newVal);
		}

		this.fireChange( bWrong );
	}else if(this.getEditable() && this.getEnabled() && newVal == this.getYyyymmdd()){
		// the same date is entered as yyyymmdd again -> just set converted value to input field
		oInput.value = this.getValue();
	}
};
