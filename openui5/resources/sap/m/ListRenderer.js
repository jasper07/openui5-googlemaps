/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.require("sap.ui.core.Renderer");jQuery.sap.require("sap.m.ListBaseRenderer");jQuery.sap.declare("sap.m.ListRenderer");sap.m.ListRenderer=sap.ui.core.Renderer.extend(sap.m.ListBaseRenderer);
sap.m.ListRenderer.render=function(r,c){if(!c.getColumns().length){sap.m.ListBaseRenderer.render.call(this,r,c);return}if(c._isColumnsIncompatible()){jQuery.sap.log.warning("Does not render sap.m.List#"+c.getId()+" with columns aggregation when compatibility version is 1.16 or higher. Instead use sap.m.Table control!");return}jQuery.sap.require("sap.m.TableRenderer");var R=jQuery.extend({},this,sap.m.TableRenderer);sap.m.ListBaseRenderer.render.call(R,r,c)};
