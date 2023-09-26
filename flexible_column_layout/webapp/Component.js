/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/base/util/UriParameters",
        "sap/ui/core/UIComponent",        
        "sap/f/library",
        "sap/f/FlexibleColumnLayoutSemanticHelper",
        "flexiblecolumnlayout/util/Constants",
    ],
    function (UriParameters, UIComponent, library, FlexibleColumnLayoutSemanticHelper,Constants) {
        "use strict";

        var LayoutType = library.LayoutType;
        
        return UIComponent.extend("flexiblecolumnlayout.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                // this.setModel(models.createDeviceModel(), "device");
            },
            getHelper: function () {
                var oFCL = this.getRootControl().byId(Constants.model.app),
                    oParams = UriParameters.fromQuery(location.search),
                    oSettings = {
                        defaultTwoColumnLayoutType: LayoutType.TwoColumnsMidExpanded,
                        defaultThreeColumnLayoutType: LayoutType.ThreeColumnsMidExpanded,
                        mode: oParams.get(Constants.params.mode),
                        maxColumnsCount: oParams.get(Constants.params.max)
                    };
    
                return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
            }

        });
    }
);