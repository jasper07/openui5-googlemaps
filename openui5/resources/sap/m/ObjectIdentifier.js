/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.ObjectIdentifier");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.ObjectIdentifier",{metadata:{library:"sap.m",properties:{"title":{type:"string",group:"Misc",defaultValue:null},"text":{type:"string",group:"Misc",defaultValue:null},"badgeNotes":{type:"boolean",group:"Misc",defaultValue:null},"badgePeople":{type:"boolean",group:"Misc",defaultValue:null},"badgeAttachments":{type:"boolean",group:"Misc",defaultValue:null}}}});jQuery.sap.require("sap.ui.core.IconPool");
sap.m.ObjectIdentifier.prototype.exit=function(){if(this._attachmentsIcon){this._attachmentsIcon.destroy();this._attachmentsIcon=null}if(this._peopleIcon){this._peopleIcon.destroy();this._peopleIcon=null}if(this._notesIcon){this._notesIcon.destroy();this._notesIcon=null}};
sap.m.ObjectIdentifier.prototype._getAttachmentsIcon=function(){if(!this._attachmentsIcon){this._attachmentsIcon=this._getIcon(sap.ui.core.IconPool.getIconURI("attachment"),this.getId()+"-attachments")}return this._attachmentsIcon};
sap.m.ObjectIdentifier.prototype._getPeopleIcon=function(){if(!this._peopleIcon){this._peopleIcon=this._getIcon(sap.ui.core.IconPool.getIconURI("group"),this.getId()+"-people")}return this._peopleIcon};
sap.m.ObjectIdentifier.prototype._getNotesIcon=function(){if(!this._notesIcon){this._notesIcon=this._getIcon(sap.ui.core.IconPool.getIconURI("notes"),this.getId()+"-notes")}return this._notesIcon};
sap.m.ObjectIdentifier.prototype._getIcon=function(u,i){var s=sap.ui.Device.system.phone?"1em":"1em";var I;I=this._icon||sap.ui.core.IconPool.createControlByURI({src:u,id:i+"-icon",size:s},sap.m.Image);I.setSrc(u);return I};
