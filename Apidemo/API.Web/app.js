var myApp = angular.module('myApp', ['ui.router']); // muCtrl- main module - depend on ui.router module

myApp.config(function ($stateProvider) {
    $stateProvider
        .state('product', {
            url: '/products',
            templateUrl: 'Modules/Product/Product.html',
            controller: 'productsCtrl'
        })
    $stateProvider
        .state('customer', {
            url: '/customers',
            templateUrl: 'Modules/Customer/Customer.html',
            controller: 'customersCtrl'
        })      
});

