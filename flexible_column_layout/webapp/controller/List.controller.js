sap.ui.define([
    "sap/ui/core/mvc/Controller",    
    "sap/ui/model/json/JSONModel",
    "flexiblecolumnlayout/util/Constants",
    "flexiblecolumnlayout/util/Formatter",    
	"sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    'sap/ui/model/Sorter',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Constants, Formatter,Filter,FilterOperator,Sorter) {
        "use strict";

        return Controller.extend("flexiblecolumnlayout.controller.List", {
            Formatter: Formatter,
            onInit: function () {
                var oFilters = new JSONModel({query:""});
                this.getView().setModel(oFilters,Constants.search.filters);

                 // Language 
                 var oModel = new JSONModel({
                    icon: "sap-icon://world"
                });
                this.getView().setModel(oModel, Constants.model.langModel);
            },
            onListItemPress: function (oEvent) {
                let oViewModel = new JSONModel({
                    layout: Constants.layout.twoColumnsMidExpanded
                });

                this.getOwnerComponent().setModel(oViewModel, Constants.viewModel.appView);

                var oSelectedItem = oEvent.getSource().getSelectedItem();
                if (oSelectedItem) {
                    var oBindingContext = oSelectedItem.getBindingContext(Constants.model.products);
                    var sPath = oBindingContext.getPath();
                    var oItemSelect = this.getView().getModel(Constants.model.products).getProperty(sPath);
                    var oModel = new JSONModel(oItemSelect);
                    this.getOwnerComponent().setModel(oModel, Constants.model.selectedItem);
                } else {
                    console.error(Constants.error.message);
                }
            },

            onSearch: function (oEvent) {                
                var aFilters = [];
                const query = this.getView().getModel(Constants.search.filters).getProperty("/query");
                aFilters = new Filter(Constants.search.productName,  FilterOperator.Contains, query);                                
                var oList = this.byId(Constants.model.productsTable);
                var oBinding = oList.getBinding(Constants.search.items);
                oBinding.filter(aFilters,Constants.model.application);
            },

            onSort: function (oEvent) {                
                this._bDescendingSort = !this._bDescendingSort;
                var oView = this.getView(),
                    oTable = oView.byId(Constants.model.productsTable),
                    oBinding = oTable.getBinding(Constants.search.items),
                    oSorter = new Sorter("ProductName", this._bDescendingSort);
                oBinding.sort(oSorter);
            },
             setLang: function () {
                var oResourceModel = this.getOwnerComponent().getModel(Constants.i18n.i18n);
                oResourceModel.enhance({ bundleName: Constants.model.module + Constants.i18n.i18n });
                if(sap.ui.getCore().getConfiguration().getLanguage() === Constants.i18n.lang_es){
                    sap.ui.getCore().getConfiguration().setLanguage(Constants.i18n.lang_en);
                } else {
                    sap.ui.getCore().getConfiguration().setLanguage(Constants.i18n.lang_es);

                }                
            },
        })
    });


