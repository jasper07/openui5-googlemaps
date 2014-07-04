/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.ux3.Feed");jQuery.sap.require("sap.ui.ux3.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.ui.ux3.Feed",{metadata:{library:"sap.ui.ux3",properties:{"feederThumbnailSrc":{type:"sap.ui.core.URI",group:"Data",defaultValue:null},"feederSender":{type:"string",group:"Data",defaultValue:null},"live":{type:"boolean",group:"Behavior",defaultValue:true},"title":{type:"string",group:"Data",defaultValue:null}},aggregations:{"filterItems":{type:"sap.ui.core.ListItem",multiple:true,singularName:"filterItem",bindable:"bindable"},"chunks":{type:"sap.ui.ux3.FeedChunk",multiple:true,singularName:"chunk",bindable:"bindable"},"toolsMenuItems":{type:"sap.ui.commons.MenuItem",multiple:true,singularName:"toolsMenuItem",bindable:"bindable"}},events:{"filterChange":{},"search":{},"chunkAdded":{},"toolsItemSelected":{},"toggleLive":{}}}});sap.ui.ux3.Feed.M_EVENTS={'filterChange':'filterChange','search':'search','chunkAdded':'chunkAdded','toolsItemSelected':'toolsItemSelected','toggleLive':'toggleLive'};jQuery.sap.require("sap.ui.commons.MenuButton");jQuery.sap.require("sap.ui.commons.ToggleButton");jQuery.sap.require("sap.ui.commons.DropdownBox");jQuery.sap.require("sap.ui.commons.SearchField");jQuery.sap.require("sap.ui.ux3.Feeder");
sap.ui.ux3.Feed.prototype.init=function(){this.rb=sap.ui.getCore().getLibraryResourceBundle("sap.ui.ux3");this.oFeeder=new sap.ui.ux3.Feeder(this.getId()+'-Feeder',{type:sap.ui.ux3.FeederType.Medium}).setParent(this);this.oFeeder.attachEvent('submit',this.handleFeederSubmit,this);this.oLiveButton=new sap.ui.commons.ToggleButton(this.getId()+'-liveButton',{text:this.rb.getText('FEED_LIVE'),pressed:this.getLive(),lite:true}).setParent(this);this.oLiveButton.attachEvent('press',this.handleLiveButtonPress,this);this.oFilter=new sap.ui.commons.DropdownBox(this.getId()+'-filter').setParent(this);this.oFilter.attachEvent('change',this.handleFilterChange,this);this.oSearchField=new sap.ui.commons.SearchField(this.getId()+'-search',{enableListSuggest:false}).setParent(this);this.oSearchField.attachEvent('search',this.handleSearchFieldSearch,this)};
sap.ui.ux3.Feed.prototype.initToolsButton=function(){if(!this.oToolsButton){this.oToolsButton=new sap.ui.commons.MenuButton(this.getId()+'-toolsButton',{tooltip:this.rb.getText('FEED_TOOLS'),lite:true,menu:new sap.ui.commons.Menu(this.getId()+'-toolsMenu')}).setParent(this);this.oToolsButton.attachEvent('itemSelected',this.handleLtoolsButtonSelected,this);var i=sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feed:sapUiFeedToolsIconUrl');var I=sap.ui.core.theming.Parameters.get('sap.ui.ux3.Feed:sapUiFeedToolsIconHoverUrl');if(i){this.oToolsButton.setProperty('icon',jQuery.sap.getModulePath("sap.ui.ux3",'/')+"themes/"+sap.ui.getCore().getConfiguration().getTheme()+i,true)}if(I){this.oToolsButton.setProperty('iconHovered',jQuery.sap.getModulePath("sap.ui.ux3",'/')+"themes/"+sap.ui.getCore().getConfiguration().getTheme()+I,true)}}};
sap.ui.ux3.Feed.prototype.exit=function(){if(this.oFeeder){this.oFeeder.destroy();delete this.oFeeder}if(this.oLiveButton){this.oLiveButton.destroy();delete this.oLiveButton}if(this.oToolsButton){this.oToolsButton.destroy();delete this.oToolsButton}if(this.oFilter){this.oFilter.destroy();delete this.oFilter}if(this.oSearchField){this.oSearchField.destroy();delete this.oSearchField}this.rb=undefined};
sap.ui.ux3.Feed.prototype.handleFeederSubmit=function(e){var d=new Date();var D=String(d);var n=new sap.ui.ux3.FeedChunk(this.getId()+'-new-'+this.getChunks().length,{text:e.getParameter('text'),commentChunk:false,deletionAllowed:true,timestamp:D,sender:this.getFeederSender(),thumbnailSrc:this.getFeederThumbnailSrc()});this.insertChunk(n,0);this.fireChunkAdded({chunk:n})};
sap.ui.ux3.Feed.prototype.setLive=function(l){this.setProperty("live",l,true);if(this.oLiveButton){this.oLiveButton.setPressed(l)}return this};
sap.ui.ux3.Feed.prototype.handleLiveButtonPress=function(e){var p=e.getParameter("pressed");this.setProperty("live",p,true);this.fireToggleLive({live:p})};
sap.ui.ux3.Feed.prototype.handleLtoolsButtonSelected=function(e){this.fireToolsItemSelected(e.mParameters)};
sap.ui.ux3.Feed.prototype.handleFilterChange=function(e){this.fireFilterChange(e.mParameters)};
sap.ui.ux3.Feed.prototype.handleSearchFieldSearch=function(e){this.fireSearch(e.mParameters)};
sap.ui.ux3.Feed.prototype.setFeederThumbnailSrc=function(f){this.setProperty("feederThumbnailSrc",f,true);this.oFeeder.setThumbnailSrc(f);return this};
sap.ui.ux3.Feed.prototype.setLive=function(l){this.setProperty("live",l,true);this.oLiveButton.setPressed(l);return this};
sap.ui.ux3.Feed.prototype.getToolsMenuItems=function(){if(this.oToolsButton){return this.oToolsButton.getMenu().getItems()}};
sap.ui.ux3.Feed.prototype.insertToolsMenuItem=function(t,i){this.initToolsButton();this.oToolsButton.getMenu().insertItem(t,i);return this};
sap.ui.ux3.Feed.prototype.addToolsMenuItem=function(t){this.initToolsButton();this.oToolsButton.getMenu().addItem(t);return this};
sap.ui.ux3.Feed.prototype.removeToolsMenuItem=function(t){if(this.oToolsButton){return this.oToolsButton.getMenu().removeItem(t)}};
sap.ui.ux3.Feed.prototype.removeAllToolsMenuItems=function(){if(this.oToolsButton){return this.oToolsButton.getMenu().removeAllItems()}};
sap.ui.ux3.Feed.prototype.indexOfToolsMenuItem=function(t){if(this.oToolsButton){return this.oToolsButton.getMenu().indexOfItem(t)}};
sap.ui.ux3.Feed.prototype.destroyToolsMenuItems=function(){if(this.oToolsButton){this.oToolsButton.getMenu().destroyItems()}return this};
sap.ui.ux3.Feed.prototype.bindToolsMenuItems=function(p,t,s,f){this.initToolsButton();this.oToolsButton.getMenu().bindItems(p,t,s,f);return this};
sap.ui.ux3.Feed.prototype.unbindToolsMenuItems=function(){if(this.oToolsButton){this.oToolsButton.getMenu().unbindItems()}return this};
sap.ui.ux3.Feed.prototype.getFilterItems=function(){return this.oFilter.getItems()};
sap.ui.ux3.Feed.prototype.insertFilterItem=function(f,i){this.oFilter.insertItem(f,i);return this};
sap.ui.ux3.Feed.prototype.addFilterItem=function(f){this.oFilter.addItem(f);return this};
sap.ui.ux3.Feed.prototype.removeFilterItem=function(f){return this.oFilter.removeItem(f)};
sap.ui.ux3.Feed.prototype.removeAllFilterItems=function(){return this.oFilter.removeAllItems()};
sap.ui.ux3.Feed.prototype.indexOfFilterItem=function(f){return this.oFilter.indexOfItem(f)};
sap.ui.ux3.Feed.prototype.destroyFilterItems=function(){this.oFilter.destroyItems();return this};
sap.ui.ux3.Feed.prototype.bindFilterItems=function(p,t,s,f){this.oFilter.bindItems(p,t,s,f);return this};
sap.ui.ux3.Feed.prototype.unbindFilterItems=function(){this.oFilter.unbindItems();return this};
