sap.ui.define([], function (){
    'use strict';
    return {
        model:{
            app: "App",
            application: "Application",
            products:"products",
            selectedItem:"selectedItem",
            productsTable: "productsTable",
            langModel: "langModel",
            module: "flexiblecolumnlayout"
        },
        viewModel: {
            appView: "appView"
        },
        productModel:{
            products: "products",            
        },
        error:{
            message: "No se ha seleccionado ningún elemento.",
            alert: "error"
        },
        layout: {
            oneColumn: "OneColumn",
            twoColumnsMidExpanded: "TwoColumnsMidExpanded"
        },
        urls:{
            baseURL: "flexiblecolumnlayout",
            northWind: '/northwind/northwind.svc'
        },
        routes:{
            products: "/Products"
        },
        params: {
            mode: "mode",
            max: "max"
        },
        search:{
            filters:"filters",
            productName: "ProductName",
            productID: "ProductID",
            items:"items"
        },
        i18n:{
            i18n:"i18n",
            i18n_route: ".i18n",
            lang_es:"es",
            lang_en:"en"
        }
    }
}, true)