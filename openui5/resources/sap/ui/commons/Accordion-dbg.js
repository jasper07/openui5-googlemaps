/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.Accordion.
jQuery.sap.declare("sap.ui.commons.Accordion");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new Accordion.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '200px')</li>
 * <li>{@link #getOpenedSectionsId openedSectionsId} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSections sections} <strong>(default aggregation)</strong> : sap.ui.commons.AccordionSection[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.Accordion#event:sectionOpen sectionOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.Accordion#event:sectionClose sectionClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.Accordion#event:sectionsReorder sectionsReorder} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Contains N sections which act as containers for any library controls
 * @extends sap.ui.core.Control
 *
 * @author SAP AG 
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.Accordion
 */
sap.ui.core.Control.extend("sap.ui.commons.Accordion", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"openSection", "closeSection"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"width" : {type : "sap.ui.core.CSSSize", group : "Misc", defaultValue : '200px'},
		"openedSectionsId" : {type : "string", group : "Misc", defaultValue : null}
	},
	defaultAggregation : "sections",
	aggregations : {
    	"sections" : {type : "sap.ui.commons.AccordionSection", multiple : true, singularName : "section"}
	},
	events : {
		"sectionOpen" : {}, 
		"sectionClose" : {}, 
		"sectionsReorder" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.Accordion with name <code>sClassName</code> 
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
 * @name sap.ui.commons.Accordion.extend
 * @function
 */

sap.ui.commons.Accordion.M_EVENTS = {'sectionOpen':'sectionOpen','sectionClose':'sectionClose','sectionsReorder':'sectionsReorder'};


/**
 * Getter for property <code>width</code>.
 * When the width specified is smaller than a section content, a horizontal scroll bar is provided.
 *
 * Default value is <code>200px</code>
 *
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * @name sap.ui.commons.Accordion#getWidth
 * @function
 */

/**
 * Setter for property <code>width</code>.
 *
 * Default value is <code>200px</code> 
 *
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Accordion#setWidth
 * @function
 */


/**
 * Getter for property <code>openedSectionsId</code>.
 * Section IDs that shall be opened by default at application start.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>openedSectionsId</code>
 * @public
 * @name sap.ui.commons.Accordion#getOpenedSectionsId
 * @function
 */

/**
 * Setter for property <code>openedSectionsId</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sOpenedSectionsId  new value for property <code>openedSectionsId</code>
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Accordion#setOpenedSectionsId
 * @function
 */


/**
 * Getter for aggregation <code>sections</code>.<br/>
 * Empty container used to display any library controls.
 * 
 * <strong>Note</strong>: this is the default aggregation for Accordion.
 * @return {sap.ui.commons.AccordionSection[]}
 * @public
 * @name sap.ui.commons.Accordion#getSections
 * @function
 */


/**
 * Inserts a section into the aggregation named <code>sections</code>.
 *
 * @param {sap.ui.commons.AccordionSection}
 *          oSection the section to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the section should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the section is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the section is inserted at 
 *             the last position        
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Accordion#insertSection
 * @function
 */

/**
 * Adds some section <code>oSection</code> 
 * to the aggregation named <code>sections</code>.
 *
 * @param {sap.ui.commons.AccordionSection}
 *            oSection the section to add; if empty, nothing is inserted
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Accordion#addSection
 * @function
 */

/**
 * Removes an section from the aggregation named <code>sections</code>.
 *
 * @param {int | string | sap.ui.commons.AccordionSection} vSection the section to remove or its index or id
 * @return {sap.ui.commons.AccordionSection} the removed section or null
 * @public
 * @name sap.ui.commons.Accordion#removeSection
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>sections</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.AccordionSection[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.Accordion#removeAllSections
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.AccordionSection</code> in the aggregation named <code>sections</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.AccordionSection}
 *            oSection the section whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.Accordion#indexOfSection
 * @function
 */
	

/**
 * Destroys all the sections in the aggregation 
 * named <code>sections</code>.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Accordion#destroySections
 * @function
 */


/**
 * Event is triggered when the user opens a section. 
 *
 * @name sap.ui.commons.Accordion#sectionOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.openSectionId ID of the opened section
 * @param {string[]} oControlEvent.getParameters.closeSectionIds IDs of the sections that shall be closed. Can be initial in the case of no previously opened section.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'sectionOpen' event of this <code>sap.ui.commons.Accordion</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Accordion</code>.<br/> itself. 
 *  
 * Event is triggered when the user opens a section. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Accordion</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Accordion#attachSectionOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'sectionOpen' event of this <code>sap.ui.commons.Accordion</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Accordion#detachSectionOpen
 * @function
 */

/**
 * Fire event sectionOpen to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'openSectionId' of type <code>string</code> ID of the opened section</li>
 * <li>'closeSectionIds' of type <code>string[]</code> IDs of the sections that shall be closed. Can be initial in the case of no previously opened section.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.Accordion#fireSectionOpen
 * @function
 */


/**
 * Event is triggered when the user closes a section. 
 *
 * @name sap.ui.commons.Accordion#sectionClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.closeSectionId ID of the closed section
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'sectionClose' event of this <code>sap.ui.commons.Accordion</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Accordion</code>.<br/> itself. 
 *  
 * Event is triggered when the user closes a section. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Accordion</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Accordion#attachSectionClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'sectionClose' event of this <code>sap.ui.commons.Accordion</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Accordion#detachSectionClose
 * @function
 */

/**
 * Fire event sectionClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'closeSectionId' of type <code>string</code> ID of the closed section</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.Accordion#fireSectionClose
 * @function
 */


/**
 * Triggered when the user changes the position of a section. 
 *
 * @name sap.ui.commons.Accordion#sectionsReorder
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {string} oControlEvent.getParameters.movedSectionId ID of the moved section.
 * @param {int} oControlEvent.getParameters.newIndex New index of the moved section.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'sectionsReorder' event of this <code>sap.ui.commons.Accordion</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.Accordion</code>.<br/> itself. 
 *  
 * Triggered when the user changes the position of a section. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.Accordion</code>.<br/> itself.
 *
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Accordion#attachSectionsReorder
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'sectionsReorder' event of this <code>sap.ui.commons.Accordion</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.Accordion#detachSectionsReorder
 * @function
 */

/**
 * Fire event sectionsReorder to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'movedSectionId' of type <code>string</code> ID of the moved section.</li>
 * <li>'newIndex' of type <code>int</code> New index of the moved section.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.Accordion} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.Accordion#fireSectionsReorder
 * @function
 */


/**
 * Opens a section.
 *
 * @name sap.ui.commons.Accordion.prototype.openSection
 * @function
 * @param {string} 
 *         sSectionId
 *         Id of the section that shall be opened

 * @type void
 * @public
 */


/**
 * Closes a section, and opens the default one
 *
 * @name sap.ui.commons.Accordion.prototype.closeSection
 * @function
 * @param {string} 
 *         sSectionId
 *         Id of the section that shall be closed

 * @type void
 * @public
 */


// Start of sap\ui\commons\Accordion.js
/***************************************************
* ACCORDION CONTROL - JAVASCRIPT FUNCTIONS
*
* An accordion is a control that applications can use
* to define N sections in which they can display N
* elements of X types. One section can be opened at
* once and one section is always opened. If the application
* does not provide a default section to be opened,
* the first enabled section is opened by default.
****************************************************/
jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");
jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-core");
jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-widget");
jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-mouse");
jQuery.sap.require("sap.ui.thirdparty.jqueryui.jquery-ui-sortable");

//*"*************************************************
//* CONSTANTS DECLARATION - CLASS ATTRIBUTES
//***************************************************
sap.ui.commons.Accordion.CARD_1   = 1;
sap.ui.commons.Accordion.CARD_0_1 = 2;
sap.ui.commons.Accordion.CARD_0_N = 3;
sap.ui.commons.Accordion.CARD_1_N = 4;
sap.ui.commons.Accordion.KEY_TIMEOUT = 500;

sap.ui.commons.Accordion.aAccordionsToReplace = [];
sap.ui.commons.Accordion.aAccordions = [];

//***************************************************
//* INITIALIZATION
//***************************************************
/**
* Initialization of the Accordion control
* @private
*/
sap.ui.commons.Accordion.prototype.init = function(){

   this.bInitialRendering = true;

   // By default, only one section is opened
   this.activationMode = sap.ui.commons.Accordion.CARD_1;

   // Get messagebundle.properties for sap.ui.commons
   this.rb = sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");

   // Array used to store all section titles
   this.aSectionTitles = [];

   sap.ui.commons.Accordion.aAccordions.push(this);

};

/***********************************************************************************
* KEYBOARD NAVIGATION
* Note that we rely on 2 mechanisms to support all keyboard shortcuts needed.
* First, for control activation (open/close sections), we rely on UI5 pseudo-events
* which are called before the browser event. These events all start with onsap_xyz.
* For other navigation purposes such as next/previous element, we use itemNavigation.
* Note that to enter the section's content, one needs to use the TAB key which
* will take the browser's default behavior.
***********************************************************************************/

/**
 * SPACE key behavior
 * Opens the section or activates the UI element on SPACE key
 * @param {jQuery.Event} oEvent Browser event
 * @private
 */
sap.ui.commons.Accordion.prototype.onsapspace = function(oEvent){

	this.onclick(oEvent);

};

/**
 * PAGE DOWN key behavior
 * Beware that these shortcuts are used by FF3.6 to navigate between opened tabs in the browsers.
 * So this is declared as a limitation, but behaves as expected in Safari 5
 * Opens the next section and focuses the first element of this opened section
 * @param {jQuery.Event} oEvent Browser event
 * @private
 */
sap.ui.commons.Accordion.prototype.onsappagedownmodifiers = function(oEvent){

	// Get all the sections
	var target = jQuery(oEvent.target);
	var aParents = target.parentsUntil('.sapUiAcd');

	// Get the next section
	var oDOMSection = aParents[aParents.length - 1];
	var oNextSection = jQuery(oDOMSection).next();

	// Skip all disabled sections
	while(!this.getCorrespondingSection(oNextSection[0]).getEnabled()){
		oNextSection = oNextSection.next();
	}
	oNextSection = oNextSection[0];


	// Open the next enabled section
	this.openSection(oNextSection.id);

	// Drill down the DOM to get the next section and focus on its first active element
	var oSection = this.getCorrespondingSection(oNextSection);
	oSection.focusFirstControl();

	// Stop the event
	oEvent.preventDefault();
	oEvent.stopPropagation();

};

/**
 * PAGE UP key behavior
 * Beware that these shortcuts are used by FF3.6 to navigate between opened TABS in the browsers.
 * So this is declared as a limitation, but behaves as expected in Safari 5
 * Opens the previous section and focuses the first element of this opened section
 * @param [jQuery.Event} oEvent Browser event
 * @private
 */
sap.ui.commons.Accordion.prototype.onsappageupmodifiers = function(oEvent){

	// Get all the sections
	var target = jQuery(oEvent.target);
	var aParents = target.parentsUntil('.sapUiAcd');

	// Get the previous section
	var oSection = aParents[aParents.length - 1];
	var oNextSection = jQuery(oSection).prev();

	// Skip all disabled sections
	while(!this.getCorrespondingSection(oNextSection[0]).getEnabled()){
		oNextSection = oNextSection.prev();
	}
	oNextSection = oNextSection[0];

	// Open the previously enabled section
	this.openSection(oNextSection.id);

	// Drill down the DOM to get the previous section and focus its first active element
	var oSection = this.getCorrespondingSection(oNextSection);
	if(oSection){
		oSection.focusFirstControl();
	}

	// Stop the event
	oEvent.preventDefault();
	oEvent.stopPropagation();

};

sap.ui.commons.Accordion.prototype.onsapupmodifiers = function(oEvent){

	// Stop the event
	oEvent.preventDefault();
	oEvent.stopPropagation();

	// Get the section to move
	var aParents	= jQuery(oEvent.target).parentsUntil('.sapUiAcd');
	var oDomSection = aParents[aParents.length - 1];

	// Is the section if the first one. if so, no up possible!
	if(this.__idxOfSec(oDomSection.id)==0){
		return;
	}

	var oDomTargetSection = jQuery(oDomSection).prev().first()[0];
	var bInsertFirst = false;
	if(this.__idxOfSec(oDomTargetSection.id)==0){
		bInsertFirst = true;
	}

	this.dropSection(oDomSection,oDomTargetSection,bInsertFirst);

	// Ensure the focus is on the right section
	var aSections = this.getSections();
	aSections[this.__idxOfSec(oDomSection.id)].focus();

};

sap.ui.commons.Accordion.prototype.onsapdownmodifiers = function(oEvent){

	// Stop the event
	oEvent.preventDefault();
	oEvent.stopPropagation();

	//Get the section to move
	var aParents	= jQuery(oEvent.target).parentsUntil('.sapUiAcd');
	var oDomSection = aParents[aParents.length - 1];

	//Is the section if the first one. if so, no up possible!
	if(this.__idxOfSec(oDomSection.id)==this.getSections().length-1){
		return;
	}

	var oDomTargetSection = jQuery(oDomSection).next().first()[0];
	this.dropSection(oDomSection,oDomTargetSection,false);

	//Ensure the focus is on the right section
	var aSections = this.getSections();
	aSections[this.__idxOfSec(oDomSection.id)].focus();

};

/**
 * Called when the user presses the UP arrow key
 * @param oEvent The event triggered by the user
 * @private
 */
sap.ui.commons.Accordion.prototype.onsapprevious = function(oEvent){

	if (oEvent.srcControl.getMetadata().getName() != "sap.ui.commons.AccordionSection" ) {
		return;
	}

	// Stop the event
	oEvent.preventDefault();
	oEvent.stopPropagation();

	//Get the current section
	var oCurrentSection = this.getCurrentSection(oEvent.target);

	//Extra check to see of we are on the first section, if yes, set the focus on this one
	if (oCurrentSection.id == this.getSections()[0].getId()){
		var oNextFocusableElement = jQuery(oCurrentSection).find("div.sapUiAcdSectionHdr");
		if (oNextFocusableElement){
			oNextFocusableElement.focus();
		}
	}

	//Simply set the focus on the next section if any
	if (oCurrentSection){

		//Get the previous section that is enabled, disregard disabled sections
		var oPreviousSection = jQuery(oCurrentSection).prev();
		while (oPreviousSection && jQuery(oPreviousSection).hasClass("sapUiAcdSectionDis")){
			oPreviousSection = jQuery(oPreviousSection).prev();
		}
		if (oPreviousSection){
			var oNextFocusableElement = jQuery(oPreviousSection).find("div.sapUiAcdSectionHdr");
			if (oNextFocusableElement){
				oNextFocusableElement.focus();
			}
		}
	}

};

/**
 * Called when the user presses the down arrow key
 * @param {jQuery.Event} oEvent The event triggered by the user
 * @private
 */
sap.ui.commons.Accordion.prototype.onsapnext = function(oEvent){

	if (oEvent.srcControl.getMetadata().getName() != "sap.ui.commons.AccordionSection" ) {
		return;
	}

	// Stop the event
	oEvent.preventDefault();
	oEvent.stopPropagation();

	//Get the current section
	var oCurrentSection = this.getCurrentSection(oEvent.target);

	//Simply set the focus on the next section if any
	if (oCurrentSection){

		//Get the next section that is enabled, disregard disabled sections
		var oNextSection = jQuery(oCurrentSection).next();
		while (oNextSection && jQuery(oNextSection).hasClass("sapUiAcdSectionDis")){
			oNextSection = jQuery(oNextSection).next();
		}
		if (oNextSection){
			var oNextFocusableElement = jQuery(oNextSection).find("div.sapUiAcdSectionHdr");
			if (oNextFocusableElement){
				oNextFocusableElement.focus();
			}
		}
	}

};

/**
 * Called when the user presses the home key
 * @param oEvent The event triggered by the user
 * @private
 */
sap.ui.commons.Accordion.prototype.onsaphome = function(oEvent){

	// Stop the event
	oEvent.preventDefault();
	oEvent.stopPropagation();

	//Get the current first section id
	var oFocusableSection = this.getSections()[0].getDomRef();

	//If the section is disabled, get the next section that is enabled, disregard disabled sections
	if (jQuery(oFocusableSection).hasClass("sapUiAcdSectionDis")){
		oFocusableSection = jQuery(oFocusableSection).next();
		while (oFocusableSection && jQuery(oFocusableSection).hasClass("sapUiAcdSectionDis")){
			oFocusableSection = jQuery(oFocusableSection).next();
		}
	}

	//We found one focusable section
	if (oFocusableSection){
		var oNextFocusableElement = jQuery(oFocusableSection).find("div.sapUiAcdSectionHdr");
		if (oNextFocusableElement){
			oNextFocusableElement.focus();
		}
	}

};

/**
 * Called when the user presses the end key
 * @param oEvent The event triggered by the user
 * @private
 */
sap.ui.commons.Accordion.prototype.onsapend = function(oEvent){

	// Stop the event
	oEvent.preventDefault();
	oEvent.stopPropagation();

	//Get the last section
	var iNbSections = this.getSections().length;
	var oFocusableSection = this.getSections()[iNbSections-1].getDomRef();

	//If the section is disabled, get the previous section that is enabled, disregard disabled sections
	if (jQuery(oFocusableSection).hasClass("sapUiAcdSectionDis")){
		oFocusableSection = jQuery(oFocusableSection).prev();
		while (oFocusableSection && jQuery(oFocusableSection).hasClass("sapUiAcdSectionDis")){
			oFocusableSection = jQuery(oFocusableSection).prev();
		}
	}

	//We found one focusable section
	if (oFocusableSection){
		var oNextFocusableElement = jQuery(oFocusableSection).find("div.sapUiAcdSectionHdr");
		if (oNextFocusableElement){
			oNextFocusableElement.focus();
		}
	}

};

/**
 * Utility to get the current section
 * @param {Element} oDomElement The current DOM element from which an event is triggered
 * @private
 */
sap.ui.commons.Accordion.prototype.getCurrentSection = function(oDomElement){

	//Use jQuery to get the parent section
	var oCurrentSection = oDomElement;
	while (!jQuery(oCurrentSection).hasClass("sapUiAcdSection")){
		oCurrentSection = jQuery(oCurrentSection).parent();
	}
	return oCurrentSection[0];

};

/***********************************************************************************
 * DRAG AND DROP
 * Drag and drop is used to move a single section at once up/down in the accordion
 * This can be achieved via a mouse click (down/up) and also via some keyboard
 * shortcuts (Ctrl-up and Ctrl-down)
 ***********************************************************************************/
/**
 * Drops a section to a new index
 * @param {Element} oDomSection	Section to drop to a new index
 * @param {Element} oDomTargetSection Section after which to drop the section
 * @param {boolean} bDropFirst If true, drop at first place
 * @private
 */
sap.ui.commons.Accordion.prototype.dropSection = function(oDomSection, oDomTargetSection, bDropFirst){

	//Get accordion DOM object
	var oDomAccordion = jQuery(oDomSection).parent()[0];

	//We substract 1 as the first child is the drop target and the should not be considered
	var aChildren = jQuery(oDomAccordion).children(".sapUiAcdSection").toArray();
	var iIndexToInsert = jQuery.inArray(oDomTargetSection, aChildren);

	if(bDropFirst){
		iIndexToInsert -= 1;
	}

	//Update accordion with the change
	this.moveSection(oDomSection.id,iIndexToInsert);

};

/**
 * Moves one section to a given new index by adjusting all internal information
 * @param {string} sSectionId The current section ID being moved
 * @param {int} iTargetIndex Where the section is dropped
 * @private
 */
sap.ui.commons.Accordion.prototype.moveSection = function(sSectionId, iTargetIndex){

	//Get previous index
	var iOldIndex = this.__idxOfSec(sSectionId);


	if(iTargetIndex==iOldIndex){
		 //Nothing to do
		 return;
	}


	/****Remove section from arrays*********************************/

	//Remove title for the list
	var sSectionTitle = this.aSectionTitles[iOldIndex];
	this.aSectionTitles.splice(iOldIndex,1);

	//Remove section aggregation
	var aSections = this.getSections();
	var oSection = aSections[iOldIndex];
	this.removeSection(iOldIndex, true);


	/****Add section to new index*********************************/
	if(iTargetIndex != -1){
		this.aSectionTitles.splice(iTargetIndex,0,sSectionTitle);
	}
	else{
		this.aSectionTitles.splice(0,0,sSectionTitle);
	}

	//Update aggregation
	this.insertSection(oSection,iTargetIndex, true);

	//Trigger event for application to react
	this.fireSectionsReorder({movedSectionId:sSectionId, newIndex:iTargetIndex});

};

sap.ui.commons.Accordion.prototype._onSortChange = function(oEvent, oUi){

	oEvent.preventDefault();
	oEvent.stopPropagation();

	var oDomSection = oUi.item[0];
	var SectionId = oUi.item[0].getAttribute("Id");

	//Get accordion DOM object
	var oDomAccordion = jQuery(oDomSection).parent()[0];

	var aChildren = jQuery(oDomAccordion).children(".sapUiAcdSection").toArray();
	var iIndexToInsert = jQuery.inArray(oDomSection, aChildren);

	this.moveSection(SectionId,iIndexToInsert);
};

/***********************************************************************************
 * FUNCTIONALITIES
 * Available functionalities in the Accordion are the following:
 * - Open a section
 * - Close a section
 ***********************************************************************************/

/**
 * Activation of the section - Opens or closes a section.
 * If the focus is on a collapsed section, it will close the currently opened section, and open this one.
 * If the focus is on an expanded section, it will collapse the section and open the default section.
 * This function is called onClick by the mouse, or via ENTER/SPACE keys
 * @param {jQuery.Event} oEvent Browser event
 * @private
 */
sap.ui.commons.Accordion.prototype.onclick = function(oEvent){

	//Click on the accordion itself are not considered
	if(oEvent.srcControl.getId() ==  this.getId()){
		return;
	}

	//Move up in the DOM to get the section (click occurs on the arrow which is an inner html element)
	var target = jQuery(oEvent.target);

	//Disable the possibility to click on the content to open/close a section
	if(target.hasClass("sapUiAcdSectionCont")){
		return;
	}

	if ( !(jQuery(oEvent.target).control(0) instanceof sap.ui.commons.AccordionSection) ) {
		return;
	}

	var oDomSection = oEvent.srcControl.getDomRef();

	//If the section is disabled, we cannot open/close it.
	var oSection = this.getCorrespondingSection(oDomSection);
	if(oSection && !oSection.getEnabled()){
		return;
	}

	//If the section is closed, open it
	if(oEvent.srcControl && oEvent.srcControl.getCollapsed() == true){
		this.openSection(oDomSection.id);
	}
	//If it is opened, close it
	else{
		if (oEvent.srcControl){
			this.closeSection(oDomSection.id);
		}
	}

	//Stop the event here
	oEvent.preventDefault();
	oEvent.stopPropagation();

	//Ensure the focus is on the right section
	var aSections = this.getSections();
	aSections[this.__idxOfSec(oDomSection.id)].focus();

};

/**
 * Opens a given section
 * @param {string} sSectionId, The given section ID
 * @private
 */
sap.ui.commons.Accordion.prototype.openSection = function(sSectionId){

	//Map the section ID to its internal index
	var iIndex = this.__idxOfSec(sSectionId);

	//Get all accordion's sections
	var aSections = this.getSections();

	//Close all sections currently opened
	if (this.activationMode == sap.ui.commons.Accordion.CARD_0_1 || this.activationMode == sap.ui.commons.Accordion.CARD_1){
	  var aClosedSections = this.closeOpenedSections();
	}

	//Open the section with the index retrieved from the importing section ID
	aSections[iIndex]._setCollapsed(false);

	//Trigger event for application to react
	this.fireSectionOpen({openSectionId:sSectionId, closeSectionIds:aClosedSections});

};

/**
 * Closes a given section
 * @param {string} sSectionId, The given section ID
 * @private
 */
sap.ui.commons.Accordion.prototype.closeSection = function(sSectionId){

	//Get the corresponding mapping index
	var iIndex = this.__idxOfSec(sSectionId);

	//Get all accordion's sections
	var aSections = this.getSections();
	var oCurrentSection = aSections[iIndex];

	//Get all default sections that should be opened
	var aDefaultSections = this.getOpenedSectionsId().split(",");

	//If we are in a context that one opened section is required and that the section we are about to
	//close is the default one, we avoid closing and reopening it.
	/**
	if ((	this.activationMode == sap.ui.commons.Accordion.CARD_1_N || this.activationMode == sap.ui.commons.Accordion.CARD_1) &&
			this.getNumberOfOpenedSections() == 1 && jQuery.inArray(oCurrentSection.getId(),aDefaultSections) != -1) {
			return;
	}
	*/

	//Close the given section
	aSections[iIndex]._setCollapsed(true);
	//If there is no section opened and at least one is required to be, we open the default one to respect activationMode
	//if ((this.activationMode == sap.ui.commons.Accordion.CARD_1_N || this.activationMode == sap.ui.commons.Accordion.CARD_1) && this.getNumberOfOpenedSections() == 0){
	//this.openDefaultSections();
	//}

	//Trigger event for application to react
	this.fireSectionClose({closeSectionId:sSectionId});

};

/**
 * Closes all opened sections
 * @private
 */
sap.ui.commons.Accordion.prototype.closeOpenedSections = function(){

	var aClosedSections = [];
	var aSections = this.getSections();

	//Simply loop and close the sections already opened
	for(var i=0;i<aSections.length;i++){
		if ( aSections[i].getCollapsed() == false ){
			aSections[i]._setCollapsed(true);
			aClosedSections.push(aSections[i].getId());
		}
	}

	//Return all sections that were closed
	return aClosedSections;

};

/**
 * Opens the default section; consider activationMode
 * @private
 */
sap.ui.commons.Accordion.prototype.openDefaultSections = function(){

	//Get all accordion's sections
	var aSections = this.getSections();

	//Loop trough all defaulted opened section and open them
	var aDefaultSections = this.getOpenedSectionsId().split(",");
	for(var i=0 ; i<aDefaultSections.length ; i++){
	  //From the default section ID to open, we retrieve the index
	  var oActiveSection = aSections[this.__idxOfSec(aDefaultSections[i])];
	  oActiveSection._setCollapsed(false);
	}

};

/**
 * Returns the number of currently opened sections
 * @return The number of currently opened sections
 * @private
 */
sap.ui.commons.Accordion.prototype.getNumberOfOpenedSections = function(){

	//Initialize the return parameter
	var openedSections  = 0;

	//Get all accordion's sections
	var aSections		= this.getSections();

	//Loop and sum up all opened sections
	for(var i=0;i<aSections.length;i++){
		if ( aSections[i].getCollapsed() == false ){
			openedSections++;
		}
	}
	return openedSections;
};


//*************************************************************************************
// * UTILITIES FUNCTIONS
// * List of all Javascript utilities functions needed to achieve the required behavior
// ************************************************************************************

sap.ui.commons.Accordion.prototype.addSection = function(oSection) {

	this.addAggregation("sections", oSection);

	//Add a default opened section id
	if ( (this.getOpenedSectionsId() == null || this.getOpenedSectionsId() == "" ) && oSection.getEnabled()){
		this.setOpenedSectionsId(oSection.getId());
	}

	this.aSectionTitles.push(oSection.getTitle());

};

/**
 * Returns the index of the given section or Id of a section.
 * @private
 */
sap.ui.commons.Accordion.prototype.__idxOfSec = function(oSection){
	if(typeof(oSection) == "string"){
		oSection = sap.ui.getCore().byId(oSection);
	}
	return this.indexOfSection(oSection);
};

/**
 * Redefinition of the method to add additional handling
 *
 * @param {string} sOpenedSectionsId  New value for property openedSectionsId
 * @return {sap.ui.commons.Accordion} 'this' to allow method chaining
 * @public
 */
sap.ui.commons.Accordion.prototype.setOpenedSectionsId = function(sOpenedSectionsId) {

	var aSections = this.getSections();

	var aDefaultSections = sOpenedSectionsId.split(",");


	if(aDefaultSections.length==1){
		//it can be that the method is called from method AddSection. We don't want to intefere with those
		// call.
		if(this.__idxOfSec(sOpenedSectionsId) < 0){
			this.setProperty("openedSectionsId", sOpenedSectionsId);
			return this;
		}

		if(aSections[this.__idxOfSec(sOpenedSectionsId)].getEnabled()){
			//If the provided section is enabled
			this.setProperty("openedSectionsId", sOpenedSectionsId);
		}
		else{

			//If the provided section is disabled, the open section will be the first enable section starting for the top
			for(var i=0;i<aSections.length;i++){
				if(aSections[i].getEnabled()){
					this.setProperty("openedSectionsId", aSections[i].getId());
					return this;
				}
			}
		}


	}
	else if(aDefaultSections.length==0){
		//If the empty string is provided, we keep the automatically selected section(as selected in method AddSection).
		return this;

	}
	//Several sections were provided, but some can be disabled. Check each of them
	else{
		var sCheckIndices;

		for(var i=0;i<aDefaultSections.length;i++){
			if(aSections[this.__idxOfSec(aDefaultSections[i])].getEnabled()){

				if(sCheckIndices){
					sCheckIndices += "," + aDefaultSections[i];

					//only one section should be opened at once, so return after the first is set
					return;
				}
				else{
					sCheckIndices = aDefaultSections[i];
				}

			}
		}

		if(sCheckIndices){
			//If at least one section remains
			this.setProperty("openedSectionsId", sCheckIndices);
		}


	}

	return this;

};


/**
 * Returns AccordionSection Object corresponding to a given Section DOM Object
 * @param oDomSection The section in a DOM representation object
 * @return The current section control
 * @private
 */
sap.ui.commons.Accordion.prototype.getCorrespondingSection = function (oDomSection) {

	//Look for section index within accordion
	if(jQuery(oDomSection).hasClass("sapUiAcdSection") ){
		var aAccordion	= jQuery(oDomSection).parent();
		var oAccordion  = aAccordion[0];
		var aSections	= jQuery(oAccordion).children();
		var iIndex		= aSections.index( oDomSection );
		var aoSections	= this.getSections();
		//Remove 1 as we have the target div as first child
		return aoSections[iIndex-1];
	}

};

/**
 * Returns true if the current section being processed is the last one of the Accordion
 * @param oSection The current section being processed
 * @return true If the current section being processed is the last one of the Accordion
 * @private
 */
sap.ui.commons.Accordion.prototype.isLastSection = function(oSection) {

	//Get all accordion's sections
	var aSections = this.getSections();

	//Simply check in our internal array containing all titles
	/*if(aSections.indexOf(oSection) == aSections.length-1 ){*/
	if(jQuery.inArray(oSection,aSections) == aSections.length-1 ){
		return true;
	}
	else{
		return false;
	}

};

/**
 * Once the Accordion is rendered, build the list of active controls that will be included
 * in the item navigation object. This support arrow keys navigation.
 * @private
 */
sap.ui.commons.Accordion.prototype.onAfterRendering = function() {

	// Collect the dom references of the items
	var accordion = this.getDomRef();
	var leftBorder = "0px";
	var rightBorder = "0px";
	//neccessary to make sure IE8 does not deliver medium if no border width is set
	if (jQuery(accordion).css("borderLeftStyle") !== "none") {
		leftBorder = jQuery(accordion).css("border-left-width");
	}
	if (jQuery(accordion).css("borderRightStyle") !== "none") {
		rightBorder = jQuery(accordion).css("border-right-width");
	}
	var borderTotal = parseFloat(leftBorder.substring(0, leftBorder.indexOf("px"))) + parseFloat(rightBorder.substring(0, rightBorder.indexOf("px")));
	accordion.style.height = accordion.offsetHeight - borderTotal - 7 + "px";

	this.$().sortable({
		handle: "> div.sapUiAcdSectionHdr > div",
		stop: jQuery.proxy(this._onSortChange, this)
	});
};
