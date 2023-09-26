sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "flexiblecolumnlayout/util/Constants",
  ],
  function (BaseController, JSONModel,Constants) {
    "use strict";

    return BaseController.extend("flexiblecolumnlayout.controller.App", {
      onInit: function () {
        let oViewModel = new JSONModel({
          layout: Constants.layout.oneColumn //layout: "TwoColumnsMidExpanded"
        });

        this.getOwnerComponent().setModel(oViewModel, Constants.viewModel.appView);

        const url = sap.ui.require.toUrl(Constants.urls.baseURL) + Constants.urls.northWind;
        this._model = new sap.ui.model.odata.v2.ODataModel(url, {
          json: true,
          headers: {
            "DataServiceVersion": "2.0",
            "Cache-Control": "no-cache, no-store",
            "Pragma": "no-cache"
          },
          useBatch: false
        });

        this._model.read(Constants.routes.products, {
          async: true,
          success: jQuery.proxy(this.success, this),
          error: jQuery.proxy(this.error, this)
        })
      },

      success: function (oData) {
        const oModel = new JSONModel(oData.results);        
        this.getOwnerComponent().setModel(oModel, Constants.productModel.products);
      },

      error: function () {
        alert(Constants.error.alert)
      }

    });
  }
);
