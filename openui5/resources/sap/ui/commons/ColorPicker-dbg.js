/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.ColorPicker.
jQuery.sap.declare("sap.ui.commons.ColorPicker");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new ColorPicker.
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
 * <li>{@link #getColorString colorString} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.ColorPicker#event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.ColorPicker#event:liveChange liveChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * This control gives the user the opportunity to choose a color. The color can be defined using HEX-, RGB- or HSV-values or a CSS colorname.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.ColorPicker
 */
sap.ui.core.Control.extend("sap.ui.commons.ColorPicker", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getRGB"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"colorString" : {type : "string", group : "Misc", defaultValue : null}
	},
	events : {
		"change" : {}, 
		"liveChange" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.ColorPicker with name <code>sClassName</code> 
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
 * @name sap.ui.commons.ColorPicker.extend
 * @function
 */

sap.ui.commons.ColorPicker.M_EVENTS = {'change':'change','liveChange':'liveChange'};


/**
 * Getter for property <code>colorString</code>.
 * This is the import-parameter of the ColorPicker.
 * As input-parameter, it can be a Hexadecimal string (#FFFFFF), a RGB-string rgb(255,255,255), a HSV-string hsv(360,100,100) or a CSS-colorname 'red'.
 * As output-parameter it is a RGB-string containing the current color.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>colorString</code>
 * @public
 * @name sap.ui.commons.ColorPicker#getColorString
 * @function
 */

/**
 * Setter for property <code>colorString</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sColorString  new value for property <code>colorString</code>
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ColorPicker#setColorString
 * @function
 */


/**
 * Value was changed. This event is fired if the value has changed by an user action. 
 *
 * @name sap.ui.commons.ColorPicker#change
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.r Parameter containing the RED value (0-255)
 * @param {int} oControlEvent.getParameters.g Parameter containing the GREEN value (0-255)
 * @param {int} oControlEvent.getParameters.b Parameter containing the BLUE value (0-255)
 * @param {int} oControlEvent.getParameters.h Parameter containing the HUE value (0-360)
 * @param {int} oControlEvent.getParameters.s Parameter containing the SATURATION value (0-100)
 * @param {int} oControlEvent.getParameters.v Parameter containing the VALUE value (0-100)
 * @param {string} oControlEvent.getParameters.hex Parameter containing the Hexadecimal string (#FFFFFF)
 * @param {string} oControlEvent.getParameters.alpha Parameter containing the alpha value (transparency)
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'change' event of this <code>sap.ui.commons.ColorPicker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.ColorPicker</code>.<br/> itself. 
 *  
 * Value was changed. This event is fired if the value has changed by an user action. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ColorPicker</code>.<br/> itself.
 *
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ColorPicker#attachChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'change' event of this <code>sap.ui.commons.ColorPicker</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ColorPicker#detachChange
 * @function
 */

/**
 * Fire event change to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'r' of type <code>int</code> Parameter containing the RED value (0-255)</li>
 * <li>'g' of type <code>int</code> Parameter containing the GREEN value (0-255)</li>
 * <li>'b' of type <code>int</code> Parameter containing the BLUE value (0-255)</li>
 * <li>'h' of type <code>int</code> Parameter containing the HUE value (0-360)</li>
 * <li>'s' of type <code>int</code> Parameter containing the SATURATION value (0-100)</li>
 * <li>'v' of type <code>int</code> Parameter containing the VALUE value (0-100)</li>
 * <li>'hex' of type <code>string</code> Parameter containing the Hexadecimal string (#FFFFFF)</li>
 * <li>'alpha' of type <code>string</code> Parameter containing the alpha value (transparency)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.ColorPicker#fireChange
 * @function
 */


/**
 * Value was changed. This event is fired during the mouse move. The normal change event ist only fired by mouseup. 
 *
 * @name sap.ui.commons.ColorPicker#liveChange
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {int} oControlEvent.getParameters.r Parameter containing the RED value (0-255)
 * @param {int} oControlEvent.getParameters.g Parameter containing the GREEN value (0-255)
 * @param {int} oControlEvent.getParameters.b Parameter containing the BLUE value (0-255)
 * @param {int} oControlEvent.getParameters.h Parameter containing the HUE value (0-360)
 * @param {int} oControlEvent.getParameters.s Parameter containing the SATURATION value (0-100)
 * @param {int} oControlEvent.getParameters.v Parameter containing the VALUE value (0-100)
 * @param {string} oControlEvent.getParameters.hex Parameter containing the Hexadecimal string (#FFFFFF)
 * @param {string} oControlEvent.getParameters.alpha Parameter containing the alpha value (transparency)
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'liveChange' event of this <code>sap.ui.commons.ColorPicker</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.ColorPicker</code>.<br/> itself. 
 *  
 * Value was changed. This event is fired during the mouse move. The normal change event ist only fired by mouseup. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.ColorPicker</code>.<br/> itself.
 *
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ColorPicker#attachLiveChange
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'liveChange' event of this <code>sap.ui.commons.ColorPicker</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.ColorPicker#detachLiveChange
 * @function
 */

/**
 * Fire event liveChange to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'r' of type <code>int</code> Parameter containing the RED value (0-255)</li>
 * <li>'g' of type <code>int</code> Parameter containing the GREEN value (0-255)</li>
 * <li>'b' of type <code>int</code> Parameter containing the BLUE value (0-255)</li>
 * <li>'h' of type <code>int</code> Parameter containing the HUE value (0-360)</li>
 * <li>'s' of type <code>int</code> Parameter containing the SATURATION value (0-100)</li>
 * <li>'v' of type <code>int</code> Parameter containing the VALUE value (0-100)</li>
 * <li>'hex' of type <code>string</code> Parameter containing the Hexadecimal string (#FFFFFF)</li>
 * <li>'alpha' of type <code>string</code> Parameter containing the alpha value (transparency)</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.ColorPicker} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.ColorPicker#fireLiveChange
 * @function
 */


/**
 * This method delivers the current RGB-values
 *
 * @name sap.ui.commons.ColorPicker.prototype.getRGB
 * @function

 * @type object
 * @public
 */


// Start of sap\ui\commons\ColorPicker.js
/**
 * This file defines behavior for the control sap.ui.commons.ColorPicker
 */


/**
 * Initialization hook... creating composite parts
 */
sap.ui.commons.ColorPicker.prototype.init = function(){

	//	declare global variable for the ColorObject
	this.Color = {
			r   :  255,
			g   :  255,
			b   :  255,
			h   :  0,
			s   :  0,
			v   :  100,
			a	:  1,
			a_old: 1,
			hex :  "#FFFFFF",
			old :  "#FFFFFF"
	};

	//	create global variables
	this.HexString = "FFFFFF";
	this.rgbString = "";
	this.$cpBox = null;
	this.$cpCur = null;
	this.RGB = {
			r : 0,
			g : 0,
			b : 0
	};

	//	check if we are in RTL mode
	this.bRtl  = sap.ui.getCore().getConfiguration().getRTL();

	//	create Matrix layout (outer control)
	this.oMatrix = new sap.ui.commons.layout.MatrixLayout({
		layoutFixed : true,
		columns : 3,
		width : "270px",
		widths : [ "117px", "84px", "69px"]
	});
	this.oMatrix.setParent(this);
	this.oMatrix.addStyleClass("sapUiColorPicker-ColorPickerMatrix");

	//	HTML-Control containing the ColorPickerBox
	var cpBoxID = this.getId() + '-cpBox';
	var cpCurID = this.getId() + '-cpCur';
	this.oHtmlBox = new sap.ui.core.HTML({
		content : "<DIV id=" + cpBoxID + " class=sapUiColorPicker-ColorPickerBox><DIV id=" + cpCurID + " class=sapUiColorPicker-ColorPickerCircle></DIV></DIV>"
	});

	//	HTML-Control containing the Old Color Box
	var ocBoxID = this.getId() + '-ocBox';
	this.oHtmlOldCol = new sap.ui.core.HTML({
		content : "<DIV id=" + ocBoxID + " class=sapUiColorPicker-ColorPickerOldColor></DIV>"
	});

	//	HTML-Control containing the New Color Box
	var ncBoxID = this.getId() + '-ncBox';
	this.oHtmlNewCol = new sap.ui.core.HTML({
		content : "<DIV id=" + ncBoxID + " class=sapUiColorPicker-ColorPickerNewColor></DIV>"
	});

	//	label and input field for Hexadecimal value
	var inpID = this.getId() + '-hxF';
	var hexValue = this.Color.hex.substr(1);
	this.oHexField = new sap.ui.commons.TextField({id: inpID, value : hexValue});
	this.oHexField.addStyleClass("sapUiColorPicker-ColorPickerHexField");
	this.oHexLabel = new sap.ui.commons.Label();
	this.oHexLabel.addStyleClass("sapUiColorPicker-ColorPickerLabels");
	this.oHexLabel.setText("#:");
	this.oHexLabel.setLabelFor(this.oHexField);

	//	label and input field for Red Value
	inpID = this.getId() + '-rF';
	this.oRedField = new sap.ui.commons.TextField({id: inpID, value: this.Color.r, width:"3em"});
	this.oRedField.addStyleClass("sapUiColorPicker-ColorPickerInputFieldsLeft");
	this.oRedLabel = new sap.ui.commons.Label();
	this.oRedLabel.addStyleClass("sapUiColorPicker-ColorPickerLabels");
	this.oRedLabel.setText("R:");
	this.oRedLabel.setLabelFor(this.oRedField);

	//	label and input field for Green Value
	inpID = this.getId() + '-gF';
	this.oGreenField = new sap.ui.commons.TextField({id: inpID, value : this.Color.g, width:"3em"});
	this.oGreenField.addStyleClass("sapUiColorPicker-ColorPickerInputFieldsLeft");
	this.oGreenLabel = new sap.ui.commons.Label();
	this.oGreenLabel.addStyleClass("sapUiColorPicker-ColorPickerLabels");
	this.oGreenLabel.setText("G:");
	this.oGreenLabel.setLabelFor(this.oGreenField);

	//	label and input field for Blue Value
	inpID = this.getId() + '-bF';
	this.oBlueField = new sap.ui.commons.TextField({id: inpID, value : this.Color.b, width:"3em"});
	this.oBlueField.addStyleClass("sapUiColorPicker-ColorPickerInputFieldsLeft");
	this.oBlueLabel = new sap.ui.commons.Label();
	this.oBlueLabel.addStyleClass("sapUiColorPicker-ColorPickerLabels");
	this.oBlueLabel.setText("B:");
	this.oBlueLabel.setLabelFor(this.oBlueField);

	//	label and input field for Hue Value
	inpID = this.getId() + '-hF';
	this.oHueField = new sap.ui.commons.TextField({id: inpID, value : this.Color.h, width:"3em"});
	this.oHueField.addStyleClass("sapUiColorPicker-ColorPickerInputFieldsRight");
	this.oHueLabel = new sap.ui.commons.Label();
	this.oHueLabel.addStyleClass("sapUiColorPicker-ColorPickerLabels");
	this.oHueLabel.setText("H:");
	this.oHueLabel.setLabelFor(this.oHueField);

	//	label and input field for Saturation Value
	inpID = this.getId() + '-sF';
	this.oSatField = new sap.ui.commons.TextField({id: inpID, value : this.Color.s, width:"3em"});
	this.oSatField.addStyleClass("sapUiColorPicker-ColorPickerInputFieldsRight");
	this.oSatLabel = new sap.ui.commons.Label();
	this.oSatLabel.addStyleClass("sapUiColorPicker-ColorPickerLabels");
	this.oSatLabel.setText("S:");
	this.oSatLabel.setLabelFor(this.oSatField);

	//	label and input field for Value
	inpID = this.getId() + '-vF';
	this.oValField = new sap.ui.commons.TextField({id: inpID, value : this.Color.v, width:"3em"});
	this.oValField.addStyleClass("sapUiColorPicker-ColorPickerInputFieldsRight");
	this.oValLabel = new sap.ui.commons.Label();
	this.oValLabel.addStyleClass("sapUiColorPicker-ColorPickerLabels");
	this.oValLabel.setText("V:");
	this.oValLabel.setLabelFor(this.oValField);

	//	slider
	inpID = this.getId() + '-hSLD';
	this.oSlider = new sap.ui.commons.Slider({id: inpID});
	this.oSlider.setMax(360);
	this.oSlider.setValue(parseInt(this.oHueField.getValue()),10);
	this.oSlider.addStyleClass("sapUiColorPicker-ColorPickerSlider");

	// alpha slider
	inpID = this.getId() + '-aSLD';
	this.oAlphaSlider = new sap.ui.commons.Slider({id: inpID});
	this.oAlphaSlider.setMax(1);
	this.oAlphaSlider.setValue(1);
	this.oAlphaSlider.setSmallStepWidth(.01);
	this.oAlphaSlider.addStyleClass("sapUiColorPicker-ColorPickerAlphaSlider");

	//	1.Horizontal Layout
	this.oHLayout1 = new sap.ui.layout.HorizontalLayout({
		content: [this.oRedLabel, this.oRedField]
	});

	//	2.Horizontal Layout
	this.oHLayout2 = new sap.ui.layout.HorizontalLayout({
		content: [this.oGreenLabel, this.oGreenField]
	});

	//	3.Horizontal Layout
	this.oHLayout3 = new sap.ui.layout.HorizontalLayout({
		content: [this.oBlueLabel, this.oBlueField]
	});

	//	4.Horizontal Layout
	this.oHLayout4 = new sap.ui.layout.HorizontalLayout({
		content: [this.oHexLabel, this.oHexField]
	});

	//	5.Horizontal Layout
	this.oHLayout5 = new sap.ui.layout.HorizontalLayout({
		content: [this.oHueLabel, this.oHueField]
	});

	//	6.Horizontal Layout
	this.oHLayout6 = new sap.ui.layout.HorizontalLayout({
		content: [this.oSatLabel, this.oSatField]
	});

	//	7.Horizontal Layout
	this.oHLayout7 = new sap.ui.layout.HorizontalLayout({
		content: [this.oValLabel, this.oValField]
	});

	//	8.Horizontal Layout
	this.oHLayout8 = new sap.ui.layout.HorizontalLayout({
		content: [this.oHtmlOldCol, this.oHtmlNewCol]
	});
	
	//	Vertical Layout1 containing first four horizontal layouts
	this.oVLayout1 = new sap.ui.layout.VerticalLayout({
		content:[ this.oHLayout1, this.oHLayout2, this.oHLayout3, this.oHLayout4]
	});

	//	Vertical Layout2 containing 2.nd four horizontal layouts
	this.oVLayout2 = new sap.ui.layout.VerticalLayout({
		content:[ this.oHLayout5, this.oHLayout6, this.oHLayout7, this.oHLayout8]
	});
	this.oVLayout2.addStyleClass("sapUiColorPicker-ColorPickerLastColumn");

	//	add first Row to the Matrix Layout
	this.oMatrix.createRow(this.oHtmlBox, this.oVLayout1, this.oVLayout2);

	//	create second Row containing slider
	this.oRow2 = new sap.ui.commons.layout.MatrixLayoutRow();
	this.oCell = new sap.ui.commons.layout.MatrixLayoutCell({ colSpan : 3 });
	this.oCell.addContent(this.oSlider);
	this.oRow2.addCell(this.oCell);

	//	add second Row to the Matrix Layout
	this.oMatrix.addRow(this.oRow2);

	// add another row for the alpha slider
	this.oRow3 = new sap.ui.commons.layout.MatrixLayoutRow();
	this.oCell = new sap.ui.commons.layout.MatrixLayoutCell({ colSpan : 3 });
	this.oCell.addContent(this.oAlphaSlider);
	this.oRow3.addCell(this.oCell);

	//	add third Row to the Matrix Layout
	this.oMatrix.addRow(this.oRow3);

	//	attach Eventhandler
	this.oHexField.attachChange(jQuery.proxy(this._handleHexValueChange,this));
	this.oRedField.attachChange(jQuery.proxy(this._handleRedValueChange,this));
	this.oGreenField.attachChange(jQuery.proxy(this._handleGreenValueChange,this));
	this.oBlueField.attachChange(jQuery.proxy(this._handleBlueValueChange,this));
	this.oHueField.attachChange(jQuery.proxy(this._handleHueValueChange,this));
	this.oSatField.attachChange(jQuery.proxy(this._handleSatValueChange,this));
	this.oValField.attachChange(jQuery.proxy(this._handleValValueChange,this));
	this.oSlider.attachLiveChange(jQuery.proxy(this._handleSliderLiveChange,this));
	this.oSlider.attachChange(jQuery.proxy(this._handleSliderChange,this));
	this.oAlphaSlider.attachLiveChange(jQuery.proxy(this._handleAlphaSliderLiveChange,this));
	this.oAlphaSlider.attachChange(jQuery.proxy(this._handleAlphaSliderChange,this));
}



/**
 * Clean-up hook... destroying composite parts.
 */
sap.ui.commons.ColorPicker.prototype.exit = function(){

	//	unbind Mouse-Event-Handler
	if (this.$cpBox) {
		this.$cpBox.unbind("mousedown", this.handleMouseDown);
	}

	jQuery(document)
	.unbind("mousemove", this.handleMousePos)
	.unbind("mouseup", this.handleMouseUp);

	//	destroy Objects
	this.oMatrix.destroy();
}



/**
 * Evaluate parameter values
 */
sap.ui.commons.ColorPicker.prototype.setColorString = function(iColorString) {

	//	parse string; get the color object
	this._parseColorString(iColorString);

	//	update UI
	this.oHexField.setValue(this.Color.hex.substr(1));
	this.oRedField.setValue(this.Color.r);
	this.oGreenField.setValue(this.Color.g);
	this.oBlueField.setValue(this.Color.b);
	this.oHueField.setValue(this.Color.h);
	this.oSatField.setValue(this.Color.s);
	this.oValField.setValue(this.Color.v);
	this.oSlider.setValue(this.Color.h);
	this.oAlphaSlider.setValue(this.Color.a);

	//	fire events & update property
	this.fireLiveChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.fireChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Event handler of the mouse down event
 */
sap.ui.commons.ColorPicker.prototype.handleMouseDown = function(e) {

	//	exit if the HEXfield is errorneous
	if (this.oHexField.getValueState() == sap.ui.core.ValueState.Error) return;

	//	call mouse position handler
	this.handleMousePos(e);
	jQuery(document)
	.bind("mousemove", jQuery.proxy(this.handleMousePos, this))
	.bind("mouseup", jQuery.proxy(this.handleMouseUp, this));
}



/**
 * Event handler of the mouse up event
 */
sap.ui.commons.ColorPicker.prototype.handleMouseUp = function(e) {

	//	exit if the HEXfield is errorneous
	if (this.oHexField.getValueState() == sap.ui.core.ValueState.Error) return;

	//	call mouse position handler
	this.handleMousePos(e);
	jQuery(document)
	.unbind("mousemove", this.handleMousePos)
	.unbind("mouseup", this.handleMouseUp);

	this.fireChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Event handler for the mouse position
 */
sap.ui.commons.ColorPicker.prototype.handleMousePos = function(e) {

	//	get offset of the colorpicker box
	var cpBoxOffset = this.$cpBox.offset();

	//	get width & height if the colorpicker box
	var cpBoxWidth  = this.$cpBox.width();
	var cpBoxHeight = this.$cpBox.height();

	//	calculate the hue and saturation values from the mouse position
	var x = e.pageX - cpBoxOffset.left;
	var y = e.pageY - cpBoxOffset.top;
	x = Math.min(Math.max(x, 0), cpBoxWidth);
	//	handle RTL - mode
	if(this.bRtl){
		var rX = cpBoxWidth - x;
		x = rX;
	};
	y = Math.min(Math.max(y, 0), cpBoxHeight);
	var valValue = parseInt(x/cpBoxWidth * 100,10);
	var satValue = parseInt((1 - y/cpBoxHeight) * 100,10);

	//	set the new values
	this.oSatField.setValue(satValue);
	this.oValField.setValue(valValue);

	//	process changes
	this._processHSVchanges();

	//	fire events & update property
	this.fireLiveChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Event handler for Slider LIVE changes
 */
sap.ui.commons.ColorPicker.prototype._handleSliderLiveChange = function() {

	//	get the new value
	var sliderValue = parseInt(this.oSlider.getValue(),10);

	//	set the new hue value in the hue inut field
	this.oHueField.setValue(sliderValue);

	//	process changes
	this._processHSVchanges();

	//	fire events & update property
	this.fireLiveChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Event handler for Slider changes
 */
sap.ui.commons.ColorPicker.prototype._handleSliderChange = function() {

	//	get the new value
	var sliderValue = parseInt(this.oSlider.getValue(),10);

	//	set the new hue value in the hue inut field
	this.oHueField.setValue(sliderValue);

	//	process changes
	this._processHSVchanges();

	//	fire Change event
	this.fireChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
* Event handler for Alpha-Slider LIVE changes
*/
sap.ui.commons.ColorPicker.prototype._handleAlphaSliderLiveChange = function() {

	// get the new value
	this.Color.a = this.oAlphaSlider.getValue();
	
	//	process changes
	this._processHSVchanges();

	//	fire events & update property
	this.fireLiveChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Event handler for Alpha-Slider changes
 */
sap.ui.commons.ColorPicker.prototype._handleAlphaSliderChange = function() {

	//	get the new value
	this.Color.a = this.oAlphaSlider.getValue();
	
	//	process changes
	this._processHSVchanges();

	//	fire Change event
	this.fireChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Event handler for changes of hue input field
 */
sap.ui.commons.ColorPicker.prototype._handleHueValueChange = function(){

	//	get the new value
	var hueValue = parseInt(this.oHueField.getValue(),10);

	//	check for correct value (0 - 360)
	if (hueValue < 0 || isNaN(hueValue)) hueValue = 0;
	if (hueValue > 360) hueValue = 359.9;

	//	set the new value (maybe the value has been changed in the above lines)
	this.oHueField.setValue(hueValue);

	//	update slider value
	this.oSlider.setValue(hueValue);

	//	process Changes
	this._processHSVchanges();

	//	fire events & update property
	this.fireLiveChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.fireChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Event handler for changes of saturation input field
 */
sap.ui.commons.ColorPicker.prototype._handleSatValueChange =  function(){

	//	get the new value
	var satValue = parseInt(this.oSatField.getValue(),10);

	//	check for correct value (0-100)
	if (satValue < 0 || isNaN(satValue)) satValue = 0;
	if (satValue > 100) satValue = 100;

	//	set the new value (maybe the value has been changed in the above lines)
	this.oSatField.setValue(satValue);

	//	process Changes
	this._processHSVchanges();

	//	fire events & update property
	this.fireLiveChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.fireChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Event handler for changes of value input field
 */
sap.ui.commons.ColorPicker.prototype._handleValValueChange = function(){

	//	get the new value
	var valValue = parseInt(this.oValField.getValue(),10);

	//	check for correct value (0-100)
	if (valValue < 0 || isNaN(valValue)) valValue = 0;
	if (valValue > 100) valValue = 100;

	//	set the new value (maybe the value has been changed in the above lines)
	this.oValField.setValue(valValue);

	//	process Changes
	this._processHSVchanges();

	//	fire events & update property
	this.fireLiveChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.fireChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Event handler for changes of RED input field
 */
sap.ui.commons.ColorPicker.prototype._handleRedValueChange = function(){

	//	get the new value
	var redValue = parseInt(this.oRedField.getValue(),10);

	//	check for correct value (0-255)
	if (redValue < 0 || isNaN(redValue)) redValue = 0;
	if (redValue > 255) redValue = 255;

	//	set the new value (maybe the value has been changed in the above lines)
	this.oRedField.setValue(redValue);

	//	process changes
	this._processRGBchanges();

	//	fire events & update property
	this.fireLiveChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.fireChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Event handler for changes of GREEN input field
 */
sap.ui.commons.ColorPicker.prototype._handleGreenValueChange = function(){

	//	get the new value
	var greenValue = parseInt(this.oGreenField.getValue(),10);

	//	check for correct value
	if (greenValue < 0 || isNaN(greenValue)) greenValue = 0;
	if (greenValue > 255) greenValue = 255;

	//	set the new value (maybe the value has been changed in the above lines)
	this.oGreenField.setValue(greenValue);

	//	process changes
	this._processRGBchanges();

	//	fire events & update property
	this.fireLiveChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.fireChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Event handler for changes of BLUE input field
 */
sap.ui.commons.ColorPicker.prototype._handleBlueValueChange = function(){

	//	get the new value
	var blueValue = parseInt(this.oBlueField.getValue(),10);

	//	check for correct value
	if (blueValue < 0 || isNaN(blueValue)) blueValue = 0;
	if (blueValue > 255) blueValue = 255;

	//	set the new value (maybe the value has been changed in the above lines)
	this.oBlueField.setValue(blueValue);

	//	process changes
	this._processRGBchanges();

	//	fire events & update property
	this.fireLiveChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.fireChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Process changes of Hue, Value and Saturation
 */
sap.ui.commons.ColorPicker.prototype._processHSVchanges = function(){

	//	get HSV-values
	var hueValue   = parseInt(this.oHueField.getValue(),10);
	var satValue   = parseInt(this.oSatField.getValue(),10);
	var valValue   = parseInt(this.oValField.getValue(),10);

	//	calculate and set new RGB-values
	this._calculateRGB(hueValue, satValue, valValue);
	this.Color.r = this.RGB.r;
	this.Color.g = this.RGB.g;
	this.Color.b = this.RGB.b;
	this.oRedField.setValue(this.Color.r);
	this.oGreenField.setValue(this.Color.g);
	this.oBlueField.setValue(this.Color.b);

	//	calculate and set HEX-values from the RGB-values
	this._calculateHEX(this.Color.r,this.Color.g,this.Color.b);
	this.oHexField.setValue(this.HexString);
	this.Color.hex =  "#" + this.oHexField.getValue();

	//	set HSV-values
	this.Color.h = hueValue;
	this.Color.s = satValue;
	this.Color.v = valValue;
	this.oHueField.setValue(this.Color.h);
	this.oSatField.setValue(this.Color.s);
	this.oValField.setValue(this.Color.v);

	//	update gradient box background
	this._updateGradientBoxBackground(this.Color.h);

	//	update cursor position
	this._updateCursorPosition();

	//	update selected color background
	this._updateSelColorBackground();
}



/**
 * Process changes of Red, Green and Blue values
 */
sap.ui.commons.ColorPicker.prototype._processRGBchanges = function(){

	//	calculate and set HEX-value from the RGB-values
	var redValue   = Math.round(parseInt(this.oRedField.getValue(),10));
	var greenValue = Math.round(parseInt(this.oGreenField.getValue(),10));
	var blueValue  = Math.round(parseInt(this.oBlueField.getValue(),10));
	this._calculateHEX(redValue, greenValue, blueValue);
	this.oHexField.setValue(this.HexString);

	//	calculate and set HSV-values from the RGB-values
	this._calculateHSV(redValue, greenValue, blueValue);
	this.oHueField.setValue(this.Color.h);
	this.oSatField.setValue(this.Color.s);
	this.oValField.setValue(this.Color.v);

	//	update slider value
	this.oSlider.setValue(parseInt(this.oHueField.getValue(),10));

	//	store the values in variable
	this.Color.r   = redValue;
	this.Color.g   = greenValue;
	this.Color.b   = blueValue;
	this.Color.hex =  "#" + this.oHexField.getValue();

	//	update gradient box background
	this._updateGradientBoxBackground(this.Color.h);

	//	update cursor position
	this._updateCursorPosition();

	//	update selected color background
	this._updateSelColorBackground();
}



/**
 * Event handler for changes of HEX input field
 */
sap.ui.commons.ColorPicker.prototype._handleHexValueChange = function(){

	//	get the new value and convert to uppercase
	var hexValue = this.oHexField.getValue().toUpperCase();

	//	check for correct value
	if (hexValue.substr(0, 1) == '#') hexValue = hexValue.substr(1);
	var re=/^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
	if (re.test(hexValue) == false){
		this.oHexField.setValueState(sap.ui.core.ValueState.Error);
		this.oSlider.setEnabled(false);
		this.oAlphaSlider.setEnabled(false);
		this.oHueField.setEnabled(false);
		this.oRedField.setEnabled(false);
		this.oGreenField.setEnabled(false);
		this.oBlueField.setEnabled(false);
		this.oSatField.setEnabled(false);
		this.oValField.setEnabled(false);
		return false;
	} else if(this.oHexField.getValueState()  == sap.ui.core.ValueState.Error){
		this.oHexField.setValueState(sap.ui.core.ValueState.None);
		this.oSlider.setEnabled(true);
		this.oAlphaSlider.setEnabled(true);
		this.oHueField.setEnabled(true);
		this.oRedField.setEnabled(true);
		this.oGreenField.setEnabled(true);
		this.oBlueField.setEnabled(true);
		this.oSatField.setEnabled(true);
		this.oValField.setEnabled(true);
	};

	//	convert from short to long hex (if needed)
	if (hexValue.length == 3){
		var tempValue = hexValue.charAt(0)+hexValue.charAt(0)+hexValue.charAt(1)+hexValue.charAt(1)+hexValue.charAt(2)+hexValue.charAt(2);
		hexValue = tempValue;
	};

	//	process Changes
	this._processHexChanges(hexValue);

	//	update UI
	this.oHexField.setValue(hexValue);
	this.oRedField.setValue(this.Color.r);
	this.oGreenField.setValue(this.Color.g);
	this.oBlueField.setValue(this.Color.b);
	this.oHueField.setValue(this.Color.h);
	this.oSatField.setValue(this.Color.s);
	this.oValField.setValue(this.Color.v);
	this.oSlider.setValue(parseInt(this.oHueField.getValue(),10));
	this.oAlphaSlider.setValue(1);

	//	update gradient box background
	this._updateGradientBoxBackground(this.Color.h);

	//	update cursor position
	this._updateCursorPosition();

	//	update selected color background
	this._updateSelColorBackground();

	//	fire events & update property
	this.fireLiveChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.fireChange({r:this.Color.r, g:this.Color.g, b:this.Color.b, h:this.Color.h, s:this.Color.s, v:this.Color.v, alpha:this.Color.a, hex:this.Color.hex});
	this.setProperty('colorString', this._getRGBString(), true); // No re-rendering!
}



/**
 * Hex-Values have changed ==> process changes
 */
sap.ui.commons.ColorPicker.prototype._processHexChanges = function (ihexValue){

	//	convert RGB-values
	this._convertRGB(ihexValue);

	//	calculate and set HSV-values from the RGB-values
	this._calculateHSV(this.Color.r, this.Color.g, this.Color.b);

	//	all values except hex set; set the hex value
	this.Color.hex = "#" + ihexValue.toUpperCase();
}



/**
 * Update Cursor position in the ColorPicker Box
 */
sap.ui.commons.ColorPicker.prototype._updateCursorPosition = function(){

	//	get the width & height
	var cpCurWidth  = this.$cpCur.width();
	var cpCurHeight = this.$cpCur.height();
	var cpBoxWidth  = this.$cpBox.width();
	var cpBoxHeight = this.$cpBox.height();

	//	get the saturation and value
	var satValue = this.oSatField.getValue();
	var valValue = this.oValField.getValue();

	//	calculate the x and y values
	var x = parseInt(valValue * cpBoxWidth /100,10);
	//	calculate x if we are in RTL mode
	if(this.bRtl){
		var rX = cpBoxWidth - x;
		x = rX;
	};
	var y = parseInt((1-satValue/100)*cpBoxHeight,10);
	x = Math.min(Math.max(x, 0), cpBoxWidth-cpCurWidth/2) -cpCurWidth/2;
	y = Math.min(Math.max(y, 0), cpBoxHeight-cpCurHeight/2) -cpCurHeight/2;

	//	set the new cursor position
	this.$cpCur.css("left", x).css("top", y);
}



/**
 * Calculate RGB-Values from Hue/Saturation/Value
 */
sap.ui.commons.ColorPicker.prototype._calculateRGB = function( hue, sat, val){

	//	easy case: value = 0
	if (val == 0 ){
		this.RGB.r = Math.round(sat*2.55);
		this.RGB.g = Math.round(sat*2.55);
		this.RGB.b = Math.round(sat*2.55);

		// calculate values
	} else {
		hue = hue / 60;
		//hue value is cyclic, so 360 = 0
		if (hue == 6) {
			hue = 0;
		}
		sat = sat / 100;
		val = val / 100;
		var redValue, greenValue, blueValue;
		var i = Math.floor(hue);
		var f = hue - i;
		var p = val * (1 - sat);
		var q = val * (1 - sat * f);
		var t = val * (1 - sat * (1 - f));
		switch (i) {
		case 0:
			redValue   = val;
			greenValue = t;
			blueValue  = p;
			break;
		case 1:
			redValue   = q;
			greenValue = val;
			blueValue  = p;
			break;
		case 2:
			redValue   = p;
			greenValue = val;
			blueValue  = t;
			break;
		case 3:
			redValue   = p;
			greenValue = q;
			blueValue  = val;
			break;
		case 4:
			redValue   = t;
			greenValue = p;
			blueValue  = val;
			break;
		default:
			redValue   = val;
		greenValue = p;
		blueValue  = q;
		break;
		}
		this.RGB.r = Math.round(redValue*255);
		this.RGB.g = Math.round(greenValue*255);
		this.RGB.b = Math.round(blueValue*255);
	}
}



/**
 * Get RGB-String from the current RGB-Values
 */
sap.ui.commons.ColorPicker.prototype._getRGBString = function( ){
	if(this.Color.a < 1){
		return "rgba(" + this.Color.r + "," + this.Color.g + "," + this.Color.b + ", " + this.Color.a + ")";
	} else {
		return "rgb(" + this.Color.r + "," + this.Color.g + "," + this.Color.b + ")";
	}
}



/**
 * Calculate HEX-Values when RGB-values change
 */
sap.ui.commons.ColorPicker.prototype._calculateHEX = function(red,green,blue){

	//	convert values
	var redStr     = red.toString(16);
	var greenStr   = green.toString(16);
	var blueStr    = blue.toString(16);
	if (redStr.length == 1)   redStr   = '0' + redStr;
	if (greenStr.length == 1) greenStr = '0' + greenStr;
	if (blueStr.length == 1)  blueStr  = '0' + blueStr;

	//	return the HexValue
	this.HexString = (redStr + greenStr + blueStr).toUpperCase();
}



/**
 * Calculate HSV-Values from RGB-values
 */
sap.ui.commons.ColorPicker.prototype._calculateHSV = function (red, green, blue){

	//	calculate values
	var max			= Math.max(Math.max(red, green), blue);
	var min			= Math.min(Math.min(red, green), blue);
	var delta		= (max - min);
	var valValue	= Math.round(max*100/255);
	var satValue = (max==0.0)?0:(100*delta/max);
	var hueValue = 0;
	if (satValue==0) hueValue=0;
	else if (red==max)   hueValue=60.0*(green-blue)/delta;
	else if (green==max) hueValue=120.0+60.0*(blue-red)/delta;
	else if (blue==max)  hueValue=240.0+60.0*(red-green)/delta;
	if (hueValue<0.0) hueValue+=359.9;
	hueValue=Math.round(hueValue);
	satValue=Math.round(satValue);

	//	store the new values
	this.Color.h = hueValue;
	this.Color.s = satValue;
	this.Color.v = valValue;
}



/**
 * Convert HEX-Value to RGB-Values
 */
sap.ui.commons.ColorPicker.prototype._convertRGB = function(hex){

	//	calculate the new values
	var red   = parseInt(hex.substr(0, 2), 16);
	var green = parseInt(hex.substr(2, 2), 16);
	var blue  = parseInt(hex.substr(4, 2), 16);

	//	return the new values
	this.Color.r = red;
	this.Color.g = green;
	this.Color.b = blue;
}



/**
 * Update GradientBox Background
 */
sap.ui.commons.ColorPicker.prototype._updateGradientBoxBackground = function(hue){

	//	calculate RGB-values
	this._calculateRGB(hue, 100, 100);

	//	calculate Hex-value
	this._calculateHEX(this.RGB.r,this.RGB.g,this.RGB.b);
	var hexCol    =  "#" + this.HexString;

	//	set backgroundColor
	this.$cpBox.css('background-color','rgb(' + this.RGB.r + ', '  + this.RGB.g + ', ' + this.RGB.b + ')');
}



/**
 * Update background of "new color box"
 */
sap.ui.commons.ColorPicker.prototype._updateSelColorBackground = function(){

	//	set the new color
	this.$("ncBox").css('background-color',this._getRGBString());

}



/**
 * Parse Input Parameter; evaluate color
 */
sap.ui.commons.ColorPicker.prototype._parseColorString = function(iColorString){

	//	delete #, trim and convert to lower case
	if (iColorString.substr(0, 1) == '#') iColorString = iColorString.substr(1);
	iColorString = iColorString.replace(/ /g,'');
	iColorString = iColorString.toLowerCase();

	//	parse Names
	var searchKey = "";
	var hexValue = "";
	var colorNames = {
			aliceblue: 				'f0f8ff',
			antiquewhite: 			'faebd7',
			aqua: 					'00ffff',
			aquamarine: 			'7fffd4',
			azure: 					'f0ffff',
			beige: 					'f5f5dc',
			bisque: 				'ffe4c4',
			black: 					'000000',
			blanchedalmond:			'ffebcd',
			blue: 					'0000ff',
			blueviolet:				'8a2be2',
			brown:					'a52a2a',
			burlywood: 				'deb887',
			cadetblue: 				'5f9ea0',
			chartreuse: 			'7fff00',
			chocolate: 				'd2691e',
			coral: 					'ff7f50',
			cornflowerblue: 		'6495ed',
			cornsilk: 				'fff8dc',
			crimson: 				'dc143c',
			cyan: 					'00ffff',
			darkblue: 				'00008b',
			darkcyan: 				'008b8b',
			darkgoldenrod: 			'b8860b',
			darkgray: 				'a9a9a9',
			darkgreen: 				'006400',
			darkkhaki: 				'bdb76b',
			darkmagenta: 			'8b008b',
			darkolivegreen: 		'556b2f',
			darkorange: 			'ff8c00',
			darkorchid: 			'9932cc',
			darkred: 				'8b0000',
			darksalmon: 			'e9967a',
			darkseagreen: 			'8fbc8f',
			darkslateblue: 			'483d8b',
			darkslategray: 			'2f4f4f',
			darkturquoise: 			'00ced1',
			darkviolet: 			'9400d3',
			deeppink: 				'ff1493',
			deepskyblue: 			'00bfff',
			dimgray: 				'696969',
			dodgerblue: 			'1e90ff',
			feldspar: 				'd19275',
			firebrick: 				'b22222',
			floralwhite: 			'fffaf0',
			forestgreen: 			'228b22',
			fuchsia: 				'ff00ff',
			gainsboro: 				'dcdcdc',
			ghostwhite: 			'f8f8ff',
			gold: 					'ffd700',
			goldenrod: 				'daa520',
			gray: 					'808080',
			green: 					'008000',
			greenyellow: 			'adff2f',
			honeydew: 				'f0fff0',
			hotpink: 				'ff69b4',
			indianred : 			'cd5c5c',
			indigo : 				'4b0082',
			ivory: 					'fffff0',
			khaki: 					'f0e68c',
			lavender: 				'e6e6fa',
			lavenderblush: 			'fff0f5',
			lawngreen: 				'7cfc00',
			lemonchiffon: 			'fffacd',
			lightblue: 				'add8e6',
			lightcoral: 			'f08080',
			lightcyan: 				'e0ffff',
			lightgoldenrodyellow:	'fafad2',
			lightgrey: 				'd3d3d3',
			lightgreen: 			'90ee90',
			lightpink: 				'ffb6c1',
			lightsalmon: 			'ffa07a',
			lightseagreen: 			'20b2aa',
			lightskyblue: 			'87cefa',
			lightslateblue: 		'8470ff',
			lightslategray: 		'778899',
			lightsteelblue: 		'b0c4de',
			lightyellow: 			'ffffe0',
			lime: 					'00ff00',
			limegreen: 				'32cd32',
			linen: 					'faf0e6',
			magenta: 				'ff00ff',
			maroon: 				'800000',
			mediumaquamarine: 		'66cdaa',
			mediumblue: 			'0000cd',
			mediumorchid: 			'ba55d3',
			mediumpurple: 			'9370d8',
			mediumseagreen: 		'3cb371',
			mediumslateblue: 		'7b68ee',
			mediumspringgreen: 		'00fa9a',
			mediumturquoise: 		'48d1cc',
			mediumvioletred:		'c71585',
			midnightblue: 			'191970',
			mintcream: 				'f5fffa',
			mistyrose: 				'ffe4e1',
			moccasin: 				'ffe4b5',
			navajowhite: 			'ffdead',
			navy: 					'000080',
			oldlace: 				'fdf5e6',
			olive: 					'808000',
			olivedrab: 				'6b8e23',
			orange: 				'ffa500',
			orangered: 				'ff4500',
			orchid: 				'da70d6',
			palegoldenrod: 			'eee8aa',
			palegreen: 				'98fb98',
			paleturquoise: 			'afeeee',
			palevioletred: 			'd87093',
			papayawhip: 			'ffefd5',
			peachpuff: 				'ffdab9',
			peru: 					'cd853f',
			pink: 					'ffc0cb',
			plum: 					'dda0dd',
			powderblue: 			'b0e0e6',
			purple: 				'800080',
			red: 					'ff0000',
			rosybrown: 				'bc8f8f',
			royalblue: 				'4169e1',
			saddlebrown: 			'8b4513',
			salmon: 				'fa8072',
			sandybrown: 			'f4a460',
			seagreen: 				'2e8b57',
			seashell: 				'fff5ee',
			sienna: 				'a0522d',
			silver: 				'c0c0c0',
			skyblue: 				'87ceeb',
			slateblue: 				'6a5acd',
			slategray: 				'708090',
			snow: 					'fffafa',
			springgreen: 			'00ff7f',
			steelblue: 				'4682b4',
			tan: 					'd2b48c',
			teal: 					'008080',
			thistle: 				'd8bfd8',
			tomato: 				'ff6347',
			turquoise: 				'40e0d0',
			violet: 				'ee82ee',
			violetred: 				'd02090',
			wheat: 					'f5deb3',
			white: 					'ffffff',
			whitesmoke: 			'f5f5f5',
			yellow: 				'ffff00',
			yellowgreen: 			'9acd32'
	};

	for (searchKey in colorNames) {
		if (iColorString == searchKey) {
			hexValue = colorNames[searchKey].toUpperCase();
		}
	};

	if (hexValue !=""){
		//Found a name; get RGB and HSV values
		this._processHexChanges(hexValue);
		this.Color.old = this.Color.hex;
	};


	//	parse HEX
	//	allowed input: #aabbcc, aabbcc, #abc, abc
	//	'#' has already been deleted, search only for values
	//  check for correct value using regular expression
	var re=/^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
	if (re.test(iColorString) == true){
		//it's a hex value; check if its aabbcc or abc
		if (iColorString.length == 3){
			var hexValue = iColorString.charAt(0)+iColorString.charAt(0)+iColorString.charAt(1)+iColorString.charAt(1)+iColorString.charAt(2)+iColorString.charAt(2);
		}
		else {
			hexValue = iColorString;
		};
		//get RGB and HSV values
		this._processHexChanges(hexValue);
		this.Color.old = this.Color.hex;
	};


	//	parse RGBA
	//	allowed input: rgba(255,255,255,0.3); rgba255,255,255,0.3
	//	check if the string begins with "rgba"
	if (iColorString.substr(0, 4) == 'rgba'){
		// remove rgba, "(", ")" and blanks
		iColorString = iColorString.substr(4);
		iColorString = iColorString.replace("(",'');
		iColorString = iColorString.replace(")",'');
		iColorString = iColorString.split(' ').join('');
		var re=/^(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5])),){2}(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5])),){1}(([0]\.[0-9]*)|(\.[0-9]{2})|[1]){1}$/;
		if (re.test(iColorString) == true){
			//it's a rgba string, get the values and convert to Hex
			var RGBColor = iColorString.split(",");
			var sAlpha = iColorString.substr(iColorString.lastIndexOf(",")+1, (iColorString.length-iColorString.lastIndexOf(",")));
			this._calculateHEX(parseInt(RGBColor[0],10), parseInt(RGBColor[1],10), parseInt(RGBColor[2],10));
			//get HSV values
			this._processHexChanges(this.HexString);
			this.Color.old = this.Color.hex;
			this.Color.a = this.Color.a_old = parseFloat(sAlpha);
		};
	};

	
	//	parse RGB
	//	allowed input: rgb(255,255,255); rgb255,255,255
	//	check if the string begins with "rgb"
	if (iColorString.substr(0, 3) == 'rgb'){
		// remove rgb, "(", ")" and blanks
		iColorString = iColorString.substr(3);
		iColorString = iColorString.replace("(",'');
		iColorString = iColorString.replace(")",'');
		iColorString = iColorString.split(' ').join('');
		var re=/^(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5])),){2}(((\d{1,2})|(1\d{2})|(2[0-4]\d)|(25[0-5]))){1}$/;
		if (re.test(iColorString) == true){
			//it's a rgb string, get the values and convert to Hex
			var RGBColor = iColorString.split(",");
			this._calculateHEX(parseInt(RGBColor[0],10), parseInt(RGBColor[1],10), parseInt(RGBColor[2],10));
			//get HSV values
			this._processHexChanges(this.HexString);
			this.Color.old = this.Color.hex;
		};
	};


	//	parse HSV
	//	allowed input: hsv(360,100,100); hsv360,100,100; [hsv(360,0.5,0.5); hsv360,0.5,0.5 later]
	//	check if the string begins with "rgb"
	if (iColorString.substr(0, 3) == 'hsv'){
		// remove hsv, "(", ")" and blanks
		iColorString = iColorString.substr(3);
		iColorString = iColorString.replace("(",'');
		iColorString = iColorString.replace(")",'');
		iColorString = iColorString.split(' ').join('');
		var re=/^(((\d{1,2})|([1,2]\d{2})|(3[0-5]\d)|(360)),){1}(((\d{1,2})|(100)),){1}((\d{1,2})|(100)){1}$/;
		if (re.test(iColorString) == true){
			//it's a hsv string, get the values
			var HSVColor = iColorString.split(",");
			//get RGB values
			this._calculateRGB(parseInt(HSVColor[0],10), parseInt(HSVColor[1],10), parseInt(HSVColor[2],10));
			//get Hex values
			this._calculateHEX(this.RGB.r, this.RGB.g, this.RGB.b);
			//store the values
			this.Color.r   = this.RGB.r;
			this.Color.g   = this.RGB.g;
			this.Color.b   = this.RGB.b;
			this.Color.h   = parseInt(HSVColor[0],10);
			this.Color.s   = parseInt(HSVColor[1],10);
			this.Color.v   = parseInt(HSVColor[2],10);
			this.Color.hex = "#" + this.HexString;
			this.Color.old = this.Color.hex;
		};
	}
	else return false;
}



/**
 * Event after rendering the page
 */
sap.ui.commons.ColorPicker.prototype.onAfterRendering = function (){

	// get the jQuery-Object for cpBox and cpCur
	this.$cpBox = this.$("cpBox");
	this.$cpCur = this.$("cpCur");

	//	add Mousehandler for ColorPickerBox
	this.$cpBox.bind("mousedown", jQuery.proxy(this.handleMouseDown, this));

	//	set the background color of the Color Boxes
	this.$("ncBox").css('background-color',this._getRGBString());
	this.$("ocBox").css('background-color',this._getRGBString());

	//	update the background color of the 'new color box'
	this._updateGradientBoxBackground(this.Color.h);

	//	update cursor position
	this._updateCursorPosition();
}



/**
 * Event before rendering the page
 */
sap.ui.commons.ColorPicker.prototype.onBeforeRendering = function (){

	//	unbind Mousehandler for ColorPickerBox
	this.$("cpBox").unbind("mousedown", this.handleMouseDown);

}



/**
 * Deliver current RGB-values
 */
sap.ui.commons.ColorPicker.prototype.getRGB = function (){

	return {r:this.Color.r, g:this.Color.g, b:this.Color.b};

}
