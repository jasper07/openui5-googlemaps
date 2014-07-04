jQuery.sap.registerResourcePath('thirdparty', '../thirdparty');
sap.ui.define(['jquery.sap.global', 'sap/ui/core/Control', 'thirdparty/d3', 'thirdparty/c3'],
    function(jQuery, Control, d3, c3) {
        "use strict";

        c3 = window.c3;

        var C3Chart = Control.extend('C3Chart', {
            metadata: {
                properties: {
                    'width': {
                        type: 'sap.ui.core.CSSSize',
                        group: 'Dimension',
                        defaultValue: 'auto'
                    },
                    'height': {
                        type: 'sap.ui.core.CSSSize',
                        group: 'Dimension',
                        defaultValue: '10rem'
                    },
                    "visible": {
                        type: "boolean",
                        group: "Appearance",
                        defaultValue: true
                    },
                    'columns': {
                        type: 'object',
                        bindable: 'bindable',
                        defaultValue: []
                    },
                    'type': {
                        type: 'string',
                        bindable: 'bindable',
                        defaultValue: 'line'
                    },
                    'randomType': {
                        type: 'boolean',
                        defaultValue: true
                    }
                }
            },
            renderer: function(oRm, oControl) {
                if (!oControl.getVisible()) {
                    return;
                }
                oRm.write('<div ');
                oRm.writeControlData(oControl);
                oRm.addStyle("width", oControl.getWidth());
                oRm.addStyle("height", oControl.getHeight());
                oRm.writeClasses();
                oRm.writeStyles();
                oRm.write('>');

                oRm.write("<div");
                oRm.writeAttribute("id", oControl.getId() + "-chart");
                oRm.addStyle("width", "100%");
                oRm.addStyle("height", "100%");
                oRm.writeStyles();
                oRm.write(">");
                oRm.write('</div>');
            }
        });
        C3Chart.prototype.init = function() {
            jQuery.sap.includeStyleSheet("../thirdparty/c3.css", "c3");
            this.chartId = '#' + this.getId() + "-chart";
        };


        C3Chart.prototype.getColumns = function() {
            return this.getProperty('columns');
        };

        C3Chart.prototype.setColumns = function(aValue) {
            this.setProperty('columns', aValue, true);
            if (this.chart) {
                this.chart.load({
                    columns: aValue,
                    type: this.getRandomType() ? this.getRandomType() : this.getType()
                });
            }
        };

        C3Chart.prototype.onAfterRendering = function() {
            this.chart = c3.generate({
                bindto: this.chartId,
                data: {
                    columns: this.getColumns(),
                    type: this.getType()
                },
                bar: {
                    width: 30
                }
            });

        };

        C3Chart.prototype.getRandomType = function() {
            var type = Math.floor((Math.random() * 4) + 1);

            switch (type) {
                case 1:
                    return 'bar';
                case 2:
                    return 'line';
                case 3:
                    return 'pie';
                case 4:
                    return 'donut';
            }

        };
        return C3Chart;

    }, /* bExport= */ true);