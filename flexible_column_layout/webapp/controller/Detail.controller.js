sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller",
	"flexiblecolumnlayout/util/Constants",
], function (JSONModel, Controller,Constants) {
	"use strict";

	return Controller.extend("flexiblecolumnlayout.controller.Detail", {
		handleClose: function () {
			let oViewModel = new JSONModel({
				layout: Constants.layout.oneColumn //layout: "TwoColumnsMidExpanded"
			  });
	  
			  this.getOwnerComponent().setModel(oViewModel, Constants.viewModel.appView);
		},
	});
});
