/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides default renderer for the sap.m.FeedListItem
jQuery.sap.declare("sap.m.FeedListItemRenderer");
jQuery.sap.require("sap.ui.core.Renderer");
jQuery.sap.require("sap.m.ListItemBaseRenderer");

/**
 * @class FeedListItem renderer.
 * @static
 */
sap.m.FeedListItemRenderer = sap.ui.core.Renderer.extend(sap.m.ListItemBaseRenderer);

/**
 * Make sure that parent li is displayed as a horizontal webkit-box.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the
 *            Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oFeedListItem an object representation of the feed list item that
 *            should be rendered
 */
sap.m.FeedListItemRenderer.renderLIAttributes = function (rm, oFeedListItem) {
	rm.addClass("sapMFeedListItemTitleDiv");
	if (oFeedListItem._showSeparators === sap.m.ListSeparators.None) {
		rm.addClass("sapMFeedListShowSeparatorsNone");
	} else {
		rm.addClass("sapMFeedListShowSeparatorsAll");
	}
	
};

/**
 * Renders the HTML for the given control, using the provided
 * {@link sap.ui.core.RenderManager}.
 * 
 * @param {sap.ui.core.RenderManager}
 *            rm the RenderManager that can be used for writing to the
 *            Render-Output-Buffer
 * @param {sap.ui.core.Control}
 *            oFeedListItem an object representation of the feed list item that
 *            should be rendered
 */
sap.m.FeedListItemRenderer.renderLIContent = function (rm, oFeedListItem) {
	// convenience variable
	var sMyId = oFeedListItem.getId(),
		bIsPhone = sap.ui.Device.system.phone;

	rm.write('<article');
	rm.writeControlData(oFeedListItem);
	rm.addClass('sapMFeedListItem');

	rm.writeClasses();
	rm.write('>');

	// icon
	if (!!oFeedListItem.getShowIcon()) {
		rm.write('<figure id="' + sMyId + '-figure" class ="sapMFeedListItemFigure');
		if (!!oFeedListItem.getIcon()) {
			rm.write('">');
		} else {
			rm.write(' sapMFeedListItemIsDefaultIcon">');
		}
		if (!!oFeedListItem.getIconActive()) {
			
			rm.write('<a id="' + sMyId + '-iconRef" ');
			rm.writeAttribute('href', 'javascript:void(0);');
			rm.write('>');
		} 
		rm.renderControl(oFeedListItem._getImageControl());	
		if (!!oFeedListItem.getIconActive()) {
			rm.write('</a>');
		}
		rm.write('</figure>');
	}

	// text (starting with sender)
	

	
	if (bIsPhone) {
		rm.write('<div class= "sapMFeedListItemHeader ');
		if (!!oFeedListItem.getShowIcon()) {
			rm.write('sapMFeedListItemHasFigure ');
		}
		if (!!oFeedListItem.getSender() && !!oFeedListItem.getTimestamp()) {
			rm.write('sapMFeedListItemFullHeight');
		}
		rm.write('" >');
			if (!!oFeedListItem.getSender()) {
				rm.write('<p id="' + sMyId + '-name" class="sapMFeedListItemTextName">');
				rm.renderControl(oFeedListItem._getLinkControl());
				rm.write('</p>');
			}
			if (!!oFeedListItem.getTimestamp()) {
				//write date
				rm.write('<p class="sapMFeedListItemTimestamp">');
				rm.writeEscaped(oFeedListItem.getTimestamp());
				rm.write('</p>');
			}
		
		rm.write('</div>');
		rm.write('<p class="sapMFeedListItemText">');
		rm.writeEscaped(oFeedListItem.getText(), true);
		rm.write('</p>');
		if (!!oFeedListItem.getInfo()) {
			// info
			rm.write('<p class="sapMFeedListItemFooter">');
			if (!!oFeedListItem.getInfo()) {
				rm.write('<span class="sapMFeedListItemInfo">');
				rm.writeEscaped(oFeedListItem.getInfo());
				rm.write('</span>');
			}
		}
	} else {
		rm.write('<div class= "sapMFeedListItemText ');
		if (!!oFeedListItem.getShowIcon()) {
			rm.write('sapMFeedListItemHasFigure ');
		}
		rm.write('" >');
		rm.write('<p id="' + sMyId + '-text" class="sapMFeedListItemTextText">');
		if (!!oFeedListItem.getSender()) {
			rm.write('<span id="' + sMyId + '-name" class="sapMFeedListItemTextName">');
			rm.renderControl(oFeedListItem._getLinkControl());
			rm.write(': ');
			rm.write('</span>');
		}
		rm.writeEscaped(oFeedListItem.getText(), true);
		if (!!oFeedListItem.getInfo() || !!oFeedListItem.getTimestamp()) {
			if(!sap.ui.getCore().getConfiguration().getRTL()){
				// info and date
				rm.write('<p class="sapMFeedListItemFooter">');
				if (!!oFeedListItem.getInfo()) {
					rm.writeEscaped(oFeedListItem.getInfo());
					//Write Interpunct separator if necessary (with spaces before and after)
					if (!!oFeedListItem.getTimestamp()) {
						rm.write("<span>&#160&#160&#x00B7&#160&#160</span>");
					}
				}
				if (!!oFeedListItem.getTimestamp()) {
					rm.writeEscaped(oFeedListItem.getTimestamp());
				}
			} else {
				// info and date
				rm.write('<p class="sapMFeedListItemFooter">');
				if (!!oFeedListItem.getTimestamp()) {
					rm.writeEscaped(oFeedListItem.getTimestamp());
				}
				if (!!oFeedListItem.getInfo()) {
					//Write Interpunct separator if necessary (with spaces before and after)
					if (!!oFeedListItem.getTimestamp()) {
						rm.write("<span>&#160&#160&#x00B7&#160&#160</span>");
					}
					rm.writeEscaped(oFeedListItem.getInfo());
				}
				
			}
			
		}
		rm.write('</p>');
		rm.write('</div>');
	}
	rm.write('</article>');
};
