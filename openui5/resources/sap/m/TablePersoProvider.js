/*
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.TablePersoProvider");jQuery.sap.require("sap.ui.base.ManagedObject");sap.ui.base.ManagedObject.extend("sap.m.TablePersoProvider",{constructor:function(i,s){sap.ui.base.ManagedObject.apply(this,arguments)},metadata:{"abstract":true,library:"sap.m"}});
sap.m.TablePersoProvider.prototype.init=function(){jQuery.sap.log.warning("This is the abstract base class for a TablePersoProvider. Do not create instances of this class, but use a concrete sub class instead.");jQuery.sap.log.debug("TablePersoProvider init")};
sap.m.TablePersoProvider.prototype.getPersData=function(){jQuery.sap.log.debug("TablePersoProvider getPersData")};
sap.m.TablePersoProvider.prototype.setPersData=function(b){jQuery.sap.log.debug("TablePersoProvider setPersData")};
sap.m.TablePersoProvider.prototype.delPersData=function(){jQuery.sap.log.debug("TablePersoProvider delPersData")};
sap.m.TablePersoProvider.prototype.getCaption=function(c){return null};
