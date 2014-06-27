/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.ui.commons.TreeNode.
jQuery.sap.declare("sap.ui.commons.TreeNode");
jQuery.sap.require("sap.ui.commons.library");
jQuery.sap.require("sap.ui.core.Element");


/**
 * Constructor for a new TreeNode.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getHasExpander hasExpander} : boolean (default: false)</li>
 * <li>{@link #getIcon icon} : sap.ui.core.URI</li>
 * <li>{@link #getIsSelected isSelected} : boolean (default: false)</li>
 * <li>{@link #getSelectable selectable} : boolean (default: true)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getNodes nodes} <strong>(default aggregation)</strong> : sap.ui.commons.TreeNode[]</li></ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaDescribedBy ariaDescribedBy} : string | sap.ui.core.Control</li>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : string | sap.ui.core.Control</li></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.commons.TreeNode#event:toggleOpenState toggleOpenState} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.commons.TreeNode#event:selected selected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 *
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * Tree node element
 * @extends sap.ui.core.Element
 *
 * @author  
 * @version 1.20.7
 *
 * @constructor   
 * @public
 * @name sap.ui.commons.TreeNode
 */
sap.ui.core.Element.extend("sap.ui.commons.TreeNode", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"select", "expand", "collapse"
	],

	// ---- control specific ----
	library : "sap.ui.commons",
	properties : {
		"text" : {type : "string", group : "Misc", defaultValue : null},
		"expanded" : {type : "boolean", group : "Misc", defaultValue : true},
		"hasExpander" : {type : "boolean", group : "Misc", defaultValue : false},
		"icon" : {type : "sap.ui.core.URI", group : "Misc", defaultValue : null},
		"isSelected" : {type : "boolean", group : "Misc", defaultValue : false},
		"selectable" : {type : "boolean", group : "Misc", defaultValue : true}
	},
	defaultAggregation : "nodes",
	aggregations : {
    	"nodes" : {type : "sap.ui.commons.TreeNode", multiple : true, singularName : "node"}
	},
	associations : {
		"ariaDescribedBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaDescribedBy"}, 
		"ariaLabelledBy" : {type : "sap.ui.core.Control", multiple : true, singularName : "ariaLabelledBy"}
	},
	events : {
		"toggleOpenState" : {}, 
		"selected" : {}
	}
}});


/**
 * Creates a new subclass of class sap.ui.commons.TreeNode with name <code>sClassName</code> 
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
 * @name sap.ui.commons.TreeNode.extend
 * @function
 */

sap.ui.commons.TreeNode.M_EVENTS = {'toggleOpenState':'toggleOpenState','selected':'selected'};


/**
 * Getter for property <code>text</code>.
 * Node text
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>text</code>
 * @public
 * @name sap.ui.commons.TreeNode#getText
 * @function
 */

/**
 * Setter for property <code>text</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sText  new value for property <code>text</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#setText
 * @function
 */


/**
 * Getter for property <code>expanded</code>.
 * Node is expanded
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>expanded</code>
 * @public
 * @name sap.ui.commons.TreeNode#getExpanded
 * @function
 */

/**
 * Setter for property <code>expanded</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bExpanded  new value for property <code>expanded</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#setExpanded
 * @function
 */


/**
 * Getter for property <code>hasExpander</code>.
 * Should the node has an expander.
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>hasExpander</code>
 * @public
 * @name sap.ui.commons.TreeNode#getHasExpander
 * @function
 */

/**
 * Setter for property <code>hasExpander</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bHasExpander  new value for property <code>hasExpander</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#setHasExpander
 * @function
 */


/**
 * Getter for property <code>icon</code>.
 * Icon to display in front of the node
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {sap.ui.core.URI} the value of property <code>icon</code>
 * @public
 * @name sap.ui.commons.TreeNode#getIcon
 * @function
 */

/**
 * Setter for property <code>icon</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {sap.ui.core.URI} sIcon  new value for property <code>icon</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#setIcon
 * @function
 */


/**
 * Getter for property <code>isSelected</code>.
 * Node is selected
 * 
 *
 * Default value is <code>false</code>
 *
 * @return {boolean} the value of property <code>isSelected</code>
 * @public
 * @name sap.ui.commons.TreeNode#getIsSelected
 * @function
 */

/**
 * Setter for property <code>isSelected</code>.
 *
 * Default value is <code>false</code> 
 *
 * @param {boolean} bIsSelected  new value for property <code>isSelected</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#setIsSelected
 * @function
 */


/**
 * Getter for property <code>selectable</code>.
 * The node is selectable. If true, clicking on the node text triggers "selected" event
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>selectable</code>
 * @public
 * @name sap.ui.commons.TreeNode#getSelectable
 * @function
 */

/**
 * Setter for property <code>selectable</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bSelectable  new value for property <code>selectable</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#setSelectable
 * @function
 */


/**
 * Getter for aggregation <code>nodes</code>.<br/>
 * Subnodes for the current node
 * 
 * <strong>Note</strong>: this is the default aggregation for TreeNode.
 * @return {sap.ui.commons.TreeNode[]}
 * @public
 * @name sap.ui.commons.TreeNode#getNodes
 * @function
 */


/**
 * Inserts a node into the aggregation named <code>nodes</code>.
 *
 * @param {sap.ui.commons.TreeNode}
 *          oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the node should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the node is inserted at 
 *             the last position        
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#insertNode
 * @function
 */

/**
 * Adds some node <code>oNode</code> 
 * to the aggregation named <code>nodes</code>.
 *
 * @param {sap.ui.commons.TreeNode}
 *            oNode the node to add; if empty, nothing is inserted
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#addNode
 * @function
 */

/**
 * Removes an node from the aggregation named <code>nodes</code>.
 *
 * @param {int | string | sap.ui.commons.TreeNode} vNode the node to remove or its index or id
 * @return {sap.ui.commons.TreeNode} the removed node or null
 * @public
 * @name sap.ui.commons.TreeNode#removeNode
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>nodes</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.ui.commons.TreeNode[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.TreeNode#removeAllNodes
 * @function
 */

/**
 * Checks for the provided <code>sap.ui.commons.TreeNode</code> in the aggregation named <code>nodes</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.ui.commons.TreeNode}
 *            oNode the node whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.ui.commons.TreeNode#indexOfNode
 * @function
 */
	

/**
 * Destroys all the nodes in the aggregation 
 * named <code>nodes</code>.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#destroyNodes
 * @function
 */


/**
 * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.TreeNode#getAriaDescribedBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaDescribedBy
 *    Id of a ariaDescribedBy which becomes an additional target of this <code>ariaDescribedBy</code> association.
 *    Alternatively, a ariaDescribedBy instance may be given. 
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#addAriaDescribedBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaDescribedBy the ariaDescribedBy to remove or its index or id
 * @return {string} the id of the removed ariaDescribedBy or null
 * @public
 * @name sap.ui.commons.TreeNode#removeAriaDescribedBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.TreeNode#removeAllAriaDescribedBy
 * @function
 */

	
/**
 * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
 * 
 * @return {string[]}
 * @public
 * @name sap.ui.commons.TreeNode#getAriaLabelledBy
 * @function
 */

	
/**
 *
 * @param {string | sap.ui.core.Control} vAriaLabelledBy
 *    Id of a ariaLabelledBy which becomes an additional target of this <code>ariaLabelledBy</code> association.
 *    Alternatively, a ariaLabelledBy instance may be given. 
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#addAriaLabelledBy
 * @function
 */

/**
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to remove or its index or id
 * @return {string} the id of the removed ariaLabelledBy or null
 * @public
 * @name sap.ui.commons.TreeNode#removeAriaLabelledBy
 * @function
 */

/**
 * @return {string[]} an array with the ids of the removed elements (might be empty)
 * @public
 * @name sap.ui.commons.TreeNode#removeAllAriaLabelledBy
 * @function
 */

	
/**
 * Node state has changed. 
 *
 * @name sap.ui.commons.TreeNode#toggleOpenState
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {boolean} oControlEvent.getParameters.opened Node has been opened if true
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'toggleOpenState' event of this <code>sap.ui.commons.TreeNode</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.TreeNode</code>.<br/> itself. 
 *  
 * Node state has changed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TreeNode</code>.<br/> itself.
 *
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#attachToggleOpenState
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'toggleOpenState' event of this <code>sap.ui.commons.TreeNode</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#detachToggleOpenState
 * @function
 */

/**
 * Fire event toggleOpenState to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'opened' of type <code>boolean</code> Node has been opened if true</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.TreeNode#fireToggleOpenState
 * @function
 */


/**
 * Node is selected 
 *
 * @name sap.ui.commons.TreeNode#selected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'selected' event of this <code>sap.ui.commons.TreeNode</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.commons.TreeNode</code>.<br/> itself. 
 *  
 * Node is selected 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.commons.TreeNode</code>.<br/> itself.
 *
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#attachSelected
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'selected' event of this <code>sap.ui.commons.TreeNode</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 * @name sap.ui.commons.TreeNode#detachSelected
 * @function
 */

/**
 * Fire event selected to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @protected
 * @name sap.ui.commons.TreeNode#fireSelected
 * @function
 */


/**
 * Select the node, and if any, deselects the previously selected node
 *
 * @name sap.ui.commons.TreeNode.prototype.select
 * @function

 * @type void
 * @public
 */


/**
 * Expands the node
 *
 * @name sap.ui.commons.TreeNode.prototype.expand
 * @function

 * @type void
 * @public
 */


/**
 * Collapses the node
 *
 * @name sap.ui.commons.TreeNode.prototype.collapse
 * @function

 * @type void
 * @public
 */


// Start of sap\ui\commons\TreeNode.js
sap.ui.commons.TreeNode.ANIMATION_DURATION	 = 600;

jQuery.sap.require("sap.ui.core.CustomStyleClassSupport");
sap.ui.core.CustomStyleClassSupport.apply(sap.ui.commons.TreeNode.prototype);

//***********************************************************************************
//* PUBLIC METHODS
//***********************************************************************************

/**Expands the node
 * @public
 */

sap.ui.commons.TreeNode.prototype.expand = function(bExpandChildren){

	var oDomNode = this.$();

	if(oDomNode.hasClass("sapUiTreeNodeCollapsed")){
		//If not, not an expandable node
		oDomNode.toggleClass("sapUiTreeNodeCollapsed");
		oDomNode.toggleClass("sapUiTreeNodeExpanded");

		var oDomChildrenNodes = this.$("children");
		if(oDomChildrenNodes){
			oDomChildrenNodes.stop(true, true);
			oDomChildrenNodes.show(sap.ui.commons.TreeNode.ANIMATION_DURATION,this.getCallbackFunction(this,oDomNode,false));
		}
		oDomNode.attr("aria-expanded", "true");
		this.fireToggleOpenState({opened:true});

	}
	//Change property anyway. (Even if node has no expander)
	this.setProperty("expanded", true, true); //Suppress Re-rendering

	if(bExpandChildren){
		var aNodes = this.getNodes();
		for(var i=0;i<aNodes.length;i++){
			aNodes[i].expand(bExpandChildren);
		}
	}

};



/**Collapses the node
 * @public
 */
sap.ui.commons.TreeNode.prototype.collapse = function(bCollapseChildren){

	var oDomNode = this.$();

	if(oDomNode.hasClass("sapUiTreeNodeExpanded")){
		//If not, not a collapsable node

		oDomNode.toggleClass("sapUiTreeNodeCollapsed");
		oDomNode.toggleClass("sapUiTreeNodeExpanded");

		var oDomChildrenNodes = this.$("children");
		if(oDomChildrenNodes){
			oDomChildrenNodes.stop(true, true);
			oDomChildrenNodes.hide(sap.ui.commons.TreeNode.ANIMATION_DURATION,this.getCallbackFunction(this,oDomNode,true));
		}
		oDomNode.attr("aria-expanded", "false");
		this.fireToggleOpenState({opened:false});

	}
	//Change property anyway. (Even if node has no expander)
	this.setProperty("expanded", false, true); //Suppress Re-rendering

	if(bCollapseChildren){
		var aNodes = this.getNodes();
		for(var i=0;i<aNodes.length;i++){
			aNodes[i].collapse(bCollapseChildren);
		}
	}

};

/**Select the node, and if any, deselects the previously selected node
 * @public
 */
sap.ui.commons.TreeNode.prototype.select = function(bSuppressEvent) {
	var oTree = this.getTree(),
		$Tree;

	this.setProperty("isSelected", true, true);

	// If not connected to a tree or not rendered yet, return here
	if (!oTree || !this.getDomRef()) {
		return;
	}

	$Tree = oTree.$();

	//Remove selection elsewhere
	var oDomSelectedNode = $Tree.find(".sapUiTreeNodeSelected");
	oDomSelectedNode.removeClass("sapUiTreeNodeSelected").removeAttr("aria-selected");
	$Tree.find(".sapUiTreeNodeSelectedParent").removeClass("sapUiTreeNodeSelectedParent");

	if(oDomSelectedNode.length){
		//Any Selection found
		var oSelectedNode = sap.ui.getCore().getControl(oDomSelectedNode[0].id);
		oSelectedNode.setProperty("isSelected", false, true); //Suppress Re-rendering
	}

	//Set selection on clicked node
	this.$().closest(".sapUiTreeNode").addClass("sapUiTreeNodeSelected").attr("aria-selected", "true");

	if (!bSuppressEvent) {
		this.fireSelected();
	}

	this.scrollIntoView();

};

//***********************************************************************************
//* SELECTION PRIVATE METHODS
//***********************************************************************************

/**Deselect the node
 * @private
 */
sap.ui.commons.TreeNode.prototype.deselect = function(bSuppressEvent) {
	var oTree = this.getTree();

	this.setProperty("isSelected", false, true);

	// If not connected to a tree or not rendered yet, return here
	if (!oTree || !this.getDomRef()) {
		return;
	}

	this.$().removeClass("sapUiTreeNodeSelected").removeAttr("aria-selected");
};

/**Returns true if the node has a selected child node, which is not visible
 * @returns True if the node has such child node
 * @private
 */
sap.ui.commons.TreeNode.prototype.hasSelectedHiddenChild = function(){
	var aNodes = this.getNodes();
	for(var i=0;i<aNodes.length;i++){

		if((!aNodes[i].isVisible() && aNodes[i].getIsSelected()) || aNodes[i].hasSelectedHiddenChild()){
			return true;
		}
	}
	return false;
};

/**
 * Redefinition of Setter for property <code>isSelected</code> for validation purpose
 *
 * Default value is empty/<code>undefined</code>
 *
 * @param {boolean} bIsSelected  new value for property <code>isSelected</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.setIsSelected = function(bIsSelected) {

	if(!this.getSelectable()){
		//Node is not selectable.
		return this;
	}

	if (bIsSelected) {
		this.select(true);
	}
	else {
		this.deselect();
	}
	return this;
};

/**
 * Redefinition of Setter for property <code>selectable</code> for validation purpose.
 *
 * Default value is <code>true</code>
 *
 * @param {boolean} bSelectable  new value for property <code>selectable</code>
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @public
 */
sap.ui.commons.TreeNode.prototype.setSelectable = function(bSelectable) {

	if(!bSelectable && this.getIsSelected()){
		//Setting the node to not selectable: remove selection
		this.setIsSelected(false);
	}

	this.setProperty("selectable", bSelectable);
	return this;
};

//***********************************************************************************
//* EVENTS HANDLING
//***********************************************************************************

/** The mouse click event, which will expand/collapse the node
 * @param {event} oEvent The click event object
 * @private
 */
sap.ui.commons.TreeNode.prototype.onclick = function(oEvent){

	var oDomClicked = oEvent.target,
		oTree = this.getTree();

	if(jQuery(oDomClicked).is(".sapUiTreeNode") || jQuery(oDomClicked).is(".sapUiTreeNodeNotSelectable") ){
		//When user click a Not-Selectable node text, it behaves as clicking on the node itself
		if(jQuery(oDomClicked).is(".sapUiTreeNodeNotSelectable")){
			//Get the node itself
			oDomClicked = jQuery(oDomClicked).closest(".sapUiTreeNode")[0];
		}
		//Expand/Collapse
		if(jQuery(oDomClicked).hasClass("sapUiTreeNodeExpanded")){
			this.collapse();
		}
		else{
			this.expand();
		}

		oTree.placeFocus(oDomClicked);
		oDomClicked.focus();

	}
	else if(jQuery(oDomClicked).is(".sapUiTreeNodeContent") || jQuery(oDomClicked).is(".sapUiTreeIcon")){

		oTree.setSelection(this);

		//Set focus
		oDomClicked = jQuery(oDomClicked).closest(".sapUiTreeNode")[0];
		oTree.placeFocus(oDomClicked);
		oDomClicked.focus();
	}

};


//***********************************************************************************
//* KEYBOARD NAVIGATION
//***********************************************************************************
/** The generic selection event (ENTER or SPACE)
* @param {event} oEvent The sapselect event object
 * @private
 */
sap.ui.commons.TreeNode.prototype.onsapselect = function(oEvent){

	if(this.getSelectable()){
		this.getTree().setSelection(this);
	}
	else if(this.getExpanded()){
		this.collapse();
	}
	else{
		this.expand();
	}


};

/**
 * The numpad + key event, which will expand the current node
 * @param {event} oEvent The sapexpand event object
 * @private
 */
sap.ui.commons.TreeNode.prototype.onsapexpand = function(oEvent) {
	this.expand();
};

/**
 * The numpad - key event, which will expand the current node
 * @private
 * @param {event} oEvent The sapcollapse event object
 */
sap.ui.commons.TreeNode.prototype.onsapcollapse = function(oEvent) {
	this.collapse();

};

/**
* LEFT key behavior
* Opens the section or activates the UI element on LEFT key
* @private
* @param oEvent Browser event
*/
sap.ui.commons.TreeNode.prototype.onsapleft = function(oEvent){
	if (sap.ui.getCore().getConfiguration().getRTL()) {
		this.expand();
	}
	else {
		this.collapse();
	}
	oEvent.preventDefault();
};

/**
* RIGHT key behavior
* Opens the section or activates the UI element on RIGHT key
* @private
* @param oEvent Browser event
*/
sap.ui.commons.TreeNode.prototype.onsapright = function(oEvent){
	if (sap.ui.getCore().getConfiguration().getRTL()) {
		this.collapse();
	}
	else {
		this.expand();
	}
	oEvent.preventDefault();
};

//***********************************************************************************
//* FOCUS HANDLING
//***********************************************************************************

/**Focuses the node
 * @private
 */
sap.ui.commons.TreeNode.prototype.focus = function () {
	var domFocus = this.getFocusDomRef();
	if(domFocus){
		domFocus.setAttribute("tabindex", "0");
		domFocus.focus();
	}
};

/**Removes focus from the node
 * @private
 */
sap.ui.commons.TreeNode.prototype.blur = function () {
	var domFocus = this.getFocusDomRef();
	if(domFocus){
		domFocus.setAttribute("tabindex", "-1");
	}
};



//***********************************************************************************
//* HELPER METHODS
//***********************************************************************************

/** Returns the parent tree control. Not necessarily the direct parent if the node is a subnode.
 * @returns The parent tree control
 * @private
 */
sap.ui.commons.TreeNode.prototype.getTree = function() {
	var parent = this.getParent();

	while(parent instanceof sap.ui.commons.TreeNode){
		parent = parent.getParent();
	}
	return parent;
};

/** Returns true if the node has any subnodes.
 * @returns True if the node has any subnode
 * @private
 */
sap.ui.commons.TreeNode.prototype.hasChildren = function(){
	var aSubNodes = this.getNodes();
	if(aSubNodes.length){
		return true;
	}
	return false;
};

/** Returns true if the node is visible(parent and all grand parent expanded).
 * @returns True if the node is visible
 * @private
 */
sap.ui.commons.TreeNode.prototype.isVisible = function(){
	var parent = this.getParent();
	while(parent instanceof sap.ui.commons.TreeNode){
		if(!parent.getExpanded()){
			return false;
		}

		parent = parent.getParent();
	}
	return true;
};


/**
* Used for Javascript closure.
* @private
* @return	Returns a function to be called as callback function for jQuery animation
*/
sap.ui.commons.TreeNode.prototype.getCallbackFunction = function(oNode,oDomNode,bCollapsing){
	var oTree = oNode.getTree();
	if(bCollapsing){
		return function(){
			oTree.adjustFocus();
			oTree.adjustSelectionOnCollapsing(oDomNode);
		};
	}
	else{
		return function(){
			oTree.adjustSelectionOnExpanding(oDomNode);
		};
	}
};

/**
 * In case the selected node is not visible, change the scroll position of the
 * tree to get it into view.
 *
 * @return {sap.ui.commons.TreeNode} <code>this</code> to allow method chaining
 * @private
 */
sap.ui.commons.TreeNode.prototype.scrollIntoView = function() {
	var $Node = this.$(),
		$Tree = this.getTree().$(),
		$TreeCont = $Tree.find(".sapUiTreeCont"),
		iOffsetTop = $Node[0].offsetTop,
		iScrollTop = $TreeCont.scrollTop(),
		iHeight = $TreeCont.height(),
		iNewScrollTop;

	if (iOffsetTop > iScrollTop + iHeight) {
		iNewScrollTop = iOffsetTop - Math.floor(iHeight * 0.8);
		$TreeCont.animate({scrollTop:iNewScrollTop});
	}
	else if (iOffsetTop < iScrollTop) {
		iNewScrollTop = iOffsetTop - Math.floor(iHeight * 0.2);
		$TreeCont.animate({scrollTop:iNewScrollTop});
	}
};

//***********************************************************************************
//* REDEFINITIONS
//***********************************************************************************

/**
 * Returns the regular tooltip. If empty, returns the text
* @private
 * @return {string} string tooltip
 */
sap.ui.commons.TreeNode.prototype.getTooltip_AsString = function() {
	var sTooltip;
	var oTooltip = this.getTooltip();
	if (typeof oTooltip === "string" || oTooltip instanceof String ) {
		sTooltip = oTooltip;
	}

	if(!sTooltip){
		sTooltip = this.getText();
	}
	return sTooltip;
};
