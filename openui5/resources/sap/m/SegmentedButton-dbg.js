/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.SegmentedButton.
jQuery.sap.declare("sap.m.SegmentedButton");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new SegmentedButton.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getButtons buttons} <strong>(default aggregation)</strong> : sap.m.Button[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getSelectedButton selectedButton} : string | sap.m.Button</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.SegmentedButton#event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * A SegmentedButton Control is a horizontal control made of multiple buttons which can display a title or an image. It automatically resizes the buttons to fit proportionally within the control. When no width is set, the control uses the available width.
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.m.SegmentedButton
 */
sap.ui.core.Control.extend("sap.m.SegmentedButton", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"createButton"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : null},
		"visible" : {type : "boolean", group : "Appearance", defaultValue : true},
		"enabled" : {type : "boolean", group : "Behavior", defaultValue : true}
	},
	defaultAggregation : "buttons",
	aggregations : {
    	"buttons" : {type : "sap.m.Button", multiple : true, singularName : "button"}
	},
	associations : {
		"selectedButton" : {type : "sap.m.Button", multiple : false}
	},
	events : {
		"select" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.SegmentedButton with name <code>sClassName</code> 
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
 * @name sap.m.SegmentedButton.extend
 * @function
 */

sap.m.SegmentedButton.M_EVENTS = {'select':'select'};


/**
 * Getter for property <code>width</code>.
 * Set the width of the SegmentedButton control. If not set, it uses the minimum required width to make all buttons inside of the same size (based on the biggest button).
 * 
 * 
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.m.SegmentedButton#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SegmentedButton#setWidth
 * @function
 */


/**
 * Getter for property <code>visible</code>.
 * boolean property to make the control visible or invisible
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>visible</code>
 * @public
 * @name sap.m.SegmentedButton#getVisible
 * @function
 */

/**
 * Setter for property <code>visible</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bVisible  new value for property <code>visible</code>
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SegmentedButton#setVisible
 * @function
 */


/**
 * Getter for property <code>enabled</code>.
 * If disabled all buttons look grey, you cannot focus on them, you can not even click on them.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>enabled</code>
 * @public
 * @name sap.m.SegmentedButton#getEnabled
 * @function
 */

/**
 * Setter for property <code>enabled</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bEnabled  new value for property <code>enabled</code>
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SegmentedButton#setEnabled
 * @function
 */


/**
 * Getter for aggregation <code>buttons</code>.<br/>
 * Buttons of the SegmentedButton control
 * 
 * <strong>Note</strong>: this is the default aggregation for SegmentedButton.
 * @return {sap.m.Button[]}
 * @public
 * @name sap.m.SegmentedButton#getButtons
 * @function
 */


/**
 * Inserts a button into the aggregation named <code>buttons</code>.
 *
 * @param {sap.m.Button}
 *          oButton the button to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the button should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the button is inserted at 
 *             the last position        
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SegmentedButton#insertButton
 * @function
 */

/**
 * Adds some button <code>oButton</code> 
 * to the aggregation named <code>buttons</code>.
 *
 * @param {sap.m.Button}
 *            oButton the button to add; if empty, nothing is inserted
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SegmentedButton#addButton
 * @function
 */

/**
 * Removes an button from the aggregation named <code>buttons</code>.
 *
 * @param {int | string | sap.m.Button} vButton the button to remove or its index or id
 * @return {sap.m.Button} the removed button or null
 * @public
 * @name sap.m.SegmentedButton#removeButton
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>buttons</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.Button[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.SegmentedButton#removeAllButtons
 * @function
 */

/**
 * Checks for the provided <code>sap.m.Button</code> in the aggregation named <code>buttons</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.Button}
 *            oButton the button whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.SegmentedButton#indexOfButton
 * @function
 */
	

/**
 * Destroys all the buttons in the aggregation 
 * named <code>buttons</code>.
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SegmentedButton#destroyButtons
 * @function
 */


/**
 * Pointer to the selected button of a SegmentedButton control.
 *
 * @return {string} Id of the element which is the current target of the <code>selectedButton</code> association, or null
 * @public
 * @name sap.m.SegmentedButton#getSelectedButton
 * @function
 */

/**
 * Pointer to the selected button of a SegmentedButton control.
 *
 * @param {string | sap.m.Button} vSelectedButton 
 *    Id of an element which becomes the new target of this <code>selectedButton</code> association.
 *    Alternatively, an element instance may be given.
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SegmentedButton#setSelectedButton
 * @function
 */


	
/**
 * Event is fired when the user selects a button, which returns the id and button object 
 *
 * @name sap.m.SegmentedButton#select
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.Button} oControlEvent.getParameters.button Reference to the button that has just been selected
 * @param {string} oControlEvent.getParameters.id Id of the button which has just been selected
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'select' event of this <code>sap.m.SegmentedButton</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.SegmentedButton</code>.<br/> itself. 
 *  
 * Event is fired when the user selects a button, which returns the id and button object 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.m.SegmentedButton</code>.<br/> itself.
 *
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SegmentedButton#attachSelect
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'select' event of this <code>sap.m.SegmentedButton</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.SegmentedButton#detachSelect
 * @function
 */

/**
 * Fire event select to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'button' of type <code>sap.m.Button</code> Reference to the button that has just been selected</li>
 * <li>'id' of type <code>string</code> Id of the button which has just been selected</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.SegmentedButton} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.SegmentedButton#fireSelect
 * @function
 */


/**
 * Convenient method to add a button with a text as title OR an URI for an icon. Using both is not supported.
 *
 * @name sap.m.SegmentedButton.prototype.createButton
 * @function
 * @param {string} 
 *         sText
 *         Set the text of a SegmentedButton button.
 * @param {sap.ui.core.URI} 
 *         sIcon
 *         Icon to be displayed as graphical element within the button.
 * 
 * Density related image will be loaded if image with density awareness name in format [imageName]@[densityValue].[extension] is provided.
 * @param {boolean} 
 *         bEnabled
 *         Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings

 * @type void
 * @public
 */


// Start of sap\m\SegmentedButton.js
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("sap.ui.core.EnabledPropagator");
sap.ui.core.EnabledPropagator.call(sap.m.SegmentedButton.prototype);

sap.m.SegmentedButton.prototype.init = function() {
	if(sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version <= 10) {
		this._isMie = true;
	}
	this._aButtonWidth = [];
	this._oGhostButton;
	var self = this;
	
	//create the ghost button which is used to get the actual width of each button
	this._createGhostButton();
	
	// Delegate keyboard processing to ItemNavigation, see commons.SegmentedButton
	this._oItemNavigation = new sap.ui.core.delegate.ItemNavigation();
	this._oItemNavigation.setCycling(true);
	this.addDelegate(this._oItemNavigation);
	
	//Make sure when a button gets removed to reset the selected button
	this.removeButton = function(sButton) {
		sap.m.SegmentedButton.prototype.removeButton.call(this, sButton)
		this.setSelectedButton(this.getButtons()[0]);
	};
};

sap.m.SegmentedButton.prototype._createGhostButton = function(oButton) {
	if(jQuery("#segMtBtn_calc").length == 0) {
		this._oGhostButton = document.createElement("Button");
		var span = document.createElement("span");
		jQuery(span).addClass("sapMBtnContent");
		this._oGhostButton.appendChild(span);
		this._oGhostButton.setAttribute("id", "segMtBtn_calc");
		jQuery(this._oGhostButton).addClass("sapMBtn sapMBtnDefault sapMBtnPaddingLeft sapMSegBBtn");
		this._oGhostButton = jQuery(this._oGhostButton);
	}else {
		this._oGhostButton = jQuery("#segMtBtn_calc");
	}
}

sap.m.SegmentedButton.prototype._setGhostButtonText = function(oButton) {
	var sText = oButton.getText();
	//refresh the dom pointer
	var ghostButton = jQuery("#segMtBtn_calc")
	if(oButton.getIcon().length == 0 && oButton.getWidth().length == 0) {
		ghostButton.find("span").text(sText);
		this._aButtonWidth.push(ghostButton.width());
	}else {
		this._aButtonWidth.push(0);
	}
};

sap.m.SegmentedButton.prototype._getButtonWidths = function() {
	var aButtons = this.getButtons();
	var self = this;
	if(self._oGhostButton.length == 0) {
		return;
	}else {
		for(var i=0; i<aButtons.length; i++) {
			self._setGhostButtonText(aButtons[i]);
		}
	}
}

sap.m.SegmentedButton.prototype.onBeforeRendering = function() {
	this._aButtonWidth = [];
	var oStatiAreaDom = sap.ui.getCore().getStaticAreaRef();
	if(this._sResizeListenerId){
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	
	if(jQuery("#segMtBtn_calc").length == 0) {
		oStatiAreaDom.appendChild(this._oGhostButton[0]);
	}
};

sap.m.SegmentedButton.prototype.onAfterRendering = function() {
	//register resize listener on parent
	if(!this._sResizeListenerId){
		var oParent = this.getParent(), 
			oParentDom;
		if(oParent instanceof sap.ui.core.Control){
			oParentDom = oParent.getDomRef();
		}else if(oParent instanceof sap.ui.core.UIArea){
			oParentDom = oParent.getRootNode();
		}
		if(oParentDom){
			this._sResizeListenerId = sap.ui.core.ResizeHandler.register(oParentDom,  jQuery.proxy(this._fHandleResize, this));
		}
	}
	//get the size of each button
	this._getButtonWidths();
	
	//Flag if control is inside the bar. If inside bar the buttons always use the width they need.
	this._bInsideBar = (this.$().closest('.sapMBar').length > 0) ? true : false;
	//Flag if control is inside a popup
	this._bInsidePopup = (this.$().closest(".sapMPopup-CTX").length > 0);

	var aButtons = this.getButtons();
	var bAllIcons = true;
	var self = this;
	for(var i=0; i < aButtons.length; i++) {
		if(aButtons[i].getIcon() == "") {
			bAllIcons = false;
		}
	}
	if(bAllIcons) {
		this.$().toggleClass("sapMSegBIcons", true);
	}
	if(this._isMie) {
		setTimeout(function() {
			self._fCalcBtnWidth();
		},0);
	}else {
		self._fCalcBtnWidth();
	}
	this.$().removeClass("sapMSegBHide");
	// Keyboard
	this._setItemNavigation();
};

/**
 * Called after the theme has been switched, required for new width calc
 * @private
 */
sap.m.SegmentedButton.prototype.onThemeChanged = function(oEvent){
	//this._fCalcBtnWidth();
};
/**
 * This function is called to manually set the width of each segmentedbutton button 
 * on the basis of the widest item after they have been rendered or an orientation change/theme change
 * took place. 
 * @private
 */
sap.m.SegmentedButton.prototype._fCalcBtnWidth = function() {
	var iItm = this.getButtons().length;
	if (iItm === 0 || !this.$().is(":visible"))  {
		return;
	}
	var iMaxWidth = 5,
		$this = this.$(),
		iParentWidth = 0,
		iCntOutWidth = $this.outerWidth(true) - $this.width(),
		iInnerWidth = $this.children('#' + this.getButtons()[0].getId()).outerWidth(true)-$this.children('#' + this.getButtons()[0].getId()).width();
		// If parent width is bigger than actual screen width set parent width to screen width => android 2.3
		iParentWidth = (jQuery(window).width() < $this.parent().outerWidth())
							? jQuery(window).width() :
								(this._bInsideBar ? $this.closest('.sapMBar').width() : $this.parent().width());
	if(this.getWidth() && this.getWidth().indexOf("%") === -1) {
		iMaxWidth = parseInt(this.getWidth());
		var iCustomBtnWidths = iItm; 
		for (var i=0; i < iItm; i++) {
			var sWidth = this.getButtons()[i].getWidth();
			if(sWidth.length > 0 && sWidth.indexOf("%") === -1) {
				iMaxWidth = iMaxWidth - parseInt(sWidth);
				iCustomBtnWidths--;
			}
		}
		iMaxWidth = iMaxWidth / iCustomBtnWidths;
		iMaxWidth = iMaxWidth - iInnerWidth;
	} else {
		iMaxWidth = Math.max.apply(null, this._aButtonWidth);
		// If buttons' total width is still less than the available space and
		// buttons shouldn't occupy the whole space (not set with 100%)
		if (((iParentWidth -iCntOutWidth) > iMaxWidth * iItm) && this.getWidth().indexOf("%") === -1) {
			iMaxWidth = iMaxWidth;
		} else {
			// otherwise each button gets the same size available
			iMaxWidth = (iParentWidth-iCntOutWidth) / iItm;
			iMaxWidth = iMaxWidth - iInnerWidth;
		}
	}

	for(var i = 0; i < iItm; i++) {
		if (!isNaN(iMaxWidth) && iMaxWidth > 0) {
			// Bug: +2px for IE9(10)
			// When segmentedButton is in popup, its size can't be increased because otherwise it triggers resize of the dialog again.
			iMaxWidth = this._isMie && !this._bInsidePopup ? iMaxWidth + 2 : iMaxWidth;
			// Use the given width of the button (when present)
			if(this.getButtons()[i].getWidth().length > 0) {
				var sBtnWidth = this.getButtons()[i].getWidth();
				var iWidth = sBtnWidth.indexOf("%") == -1 ? ( parseInt(sBtnWidth) - iInnerWidth ) : sBtnWidth
				$this.children('#' + this.getButtons()[i].getId()).width(iWidth);
			}else {
				$this.children('#' + this.getButtons()[i].getId()).width(iMaxWidth);
			}
		}
	}
};
/**
 * The orientationchange event listener
*/
sap.m.SegmentedButton.prototype._fHandleResize = function() {
	this._fCalcBtnWidth();
};

sap.m.SegmentedButton.prototype.exit = function() {
	if (this._sResizeListenerId) {
		sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);
		this._sResizeListenerId = null;
	}
	if(this._oGhostButton) {
		jQuery("#segMtBtn_calc").remove();
		this._oGhostButton = null;
	}

	if (this._oItemNavigation) {
		this.removeDelegate(this._oItemNavigation);
		this._oItemNavigation.destroy();
		delete this._oItemNavigation;
	}
};

sap.m.SegmentedButton.prototype._setItemNavigation = function() {
	var aButtons,
		oDomRef = this.getDomRef();

	if (oDomRef) {
		this._oItemNavigation.setRootDomRef(oDomRef);
		aButtons = oDomRef.getElementsByTagName("li");
		this._oItemNavigation.setItemDomRefs(aButtons);
		this._focusSelectedButton();
	}
};

/**
 * Convenient method to add a button with a text as title or an uri for an icon. 
 * Only one is allowed.
 *
 * @param {string}
 *         sText defines the title text of the newly created button
 * @param {sap.ui.core.URI}
 *        sURI defines the icon uri of the button
 * @param {boolean}
 *        [bEnabled] sets the enabled status of the button
 * @return
 * @type {sap.m.Button}
 * @public
 */
sap.m.SegmentedButton.prototype.createButton = function(sText, sURI, bEnabled) {
	var oButton = new sap.m.Button();
	
	if(sURI === null && sText !== null){
		oButton.setText(sText);
	}else if(sURI !== null && sText === null){
		oButton.setIcon(sURI);
	}else
		throw new Error("in control: " + this.toString() + ": method createButton() just accepts text or icon");
	if(bEnabled || bEnabled === undefined) {
		oButton.setEnabled(true);
	}else {
		oButton.setEnabled(false);
	}
	this.addButton(oButton);

	return oButton;
};


(function(){
	sap.m.SegmentedButton.prototype.addButton = function(oButton) {
		if(oButton){
			processButton(oButton, this);
			
			this.addAggregation('buttons', oButton);
			return this;
		}
		
	};

	sap.m.SegmentedButton.prototype.insertButton = function(oButton) {
		if(oButton){
			processButton(oButton, this);
			
			this.insertAggregation('buttons', oButton);
			return this;
		}
		
	};

	function processButton(oButton, oParent){
		oButton.attachPress(function(oEvent) {
			oParent._buttonPressed(oEvent);
		});

		var fnOriginalSetEnabled = sap.m.Button.prototype.setEnabled;
		oButton.setEnabled = function(bEnabled) {
			oButton.$().toggleClass("sapMSegBBtnDis", !bEnabled)
					   .toggleClass("sapMFocusable", bEnabled);

			fnOriginalSetEnabled.apply(oButton, arguments);
		}
		
	};
	
})();

sap.m.SegmentedButton.prototype.removeButton = function(oButton) {
	if(oButton){
		delete oButton.setEnabled;
		this.removeAggregation("buttons", oButton);
	}
	
};

sap.m.SegmentedButton.prototype.removeAllButtons = function() {
	var aButtons = this.getButtons();
	if(aButtons){
		for ( var i = 0; i < aButtons.length; i++) {
			var oButton = aButtons[i];
			if(oButton){
				delete oButton.setEnabled;
				this.removeAggregation("buttons", oButton);
			}
			
		}
	}
	
};

sap.m.SegmentedButton.prototype._buttonPressed = function(oEvent) {
	var sLastSelBtnId = this.getSelectedButton(),
		oControl = oEvent.getSource();
	
	if (sLastSelBtnId !== oControl.getId()) {
		oControl.$().addClass("sapMSegBBtnSel");
		sap.ui.getCore().byId(sLastSelBtnId).$().removeClass("sapMSegBBtnSel");
		
		this.setAssociation('selectedButton', oControl, true);
		this.fireSelect({button:oControl, id: oControl.getId()});
	}
};

sap.m.SegmentedButton.prototype.setSelectedButton = function(vButton) {
	var sOldSelectedButton = this.getSelectedButton();

	this.setAssociation("selectedButton", vButton, true);

	// CSN# 1143859/2014: update selection state in DOM when calling API method to change the selection
	if (sOldSelectedButton !== this.getSelectedButton()) {
		if (typeof vButton === "string") {
			vButton = sap.ui.getCore().byId(vButton);
		}
		this.getButtons().forEach(function (oButton) {
			oButton.$().removeClass("sapMSegBBtnSel");
		});
		if (vButton) {
			vButton.$().addClass("sapMSegBBtnSel");
		}
		this._focusSelectedButton();
	}
};

sap.m.SegmentedButton.prototype._focusSelectedButton = function() {
	var aButtons = this.getButtons();
	var selectedButtonId = this.getSelectedButton();
	for (var i = 0; i < aButtons.length; i++) {
		if (aButtons[i] && aButtons[i].getId() === selectedButtonId) {
			this._oItemNavigation.setFocusedIndex(i);
			break;
		}
	}
};
