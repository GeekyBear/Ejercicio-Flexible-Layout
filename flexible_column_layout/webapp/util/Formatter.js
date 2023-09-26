sap.ui.define([], function (){
    'use strict';
    return {
        formatPrice: function(price){
            return "$" + price.slice(0, -2)
        }       
    }
}, true)