"use strict";

angular.module('app.cart', ['ui.router']);

angular.module('app.cart').config(function ($stateProvider) {
    $stateProvider
        .state('app.cart', {
            url: '/cart',
            data: {
                title: 'Cart'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/cart/views/cart.html'
                }
            }
        });
});