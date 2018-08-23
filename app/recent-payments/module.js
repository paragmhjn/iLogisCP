"use strict";

angular.module('app.recent-payment', ['ui.router']);

angular.module('app.recent-payment')
    .config(function ($stateProvider) {
    $stateProvider
        .state('app.recent-payment', {
            url: '/recent-payment',
            data: {
                title: 'My Ledger'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/recent-payments/views/recent-payment.html'
                    
                }
            }
        })
        .state('app.add-money', {
            url: '/add-money',
            data: {
                title: 'Make Payment'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/recent-payments/views/add-money.tpl.html'
                }
            }
        });
        
});