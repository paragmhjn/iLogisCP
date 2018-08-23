"use strict";

angular.module('app.cp-dashboard', ['ui.router']);

angular.module('app.cp-dashboard').config(function ($stateProvider) {
    $stateProvider
        .state('app.cp-dashboard', {
            url: '/cp-dashboard',
            data: {
                title: 'Dashboard'
            },
            views: {
                "content@app": {
                    controller: 'cpDashboardController',
                    templateUrl: 'app/dashboard/cp-dashboard.html'
                }
            }
        })
        .state('app.cp-service-notification', {
            url: '/cp-service-notification',
            data: {
                title: 'Service & Notification'
            },
            views: {
                "content@app": {
                    controller: 'cpDashboardController',
                    templateUrl: 'app/dashboard/cp-service-notification.html'
                }
            }
        })
        .state('app.cp-export-import', {
            url: '/cp-export-import',
            data: {
                title: 'Export & Import'
            },
            views: {
                "content@app": {
                    controller: 'cpDashboardController',
                    templateUrl: 'app/dashboard/cp-export-import.html'
                }
            }
        })
        .state('app.cp-mydocument', {
            url: '/cp-mydocument',
            data: {
                title: 'My Documents'
            },
            views: {
                "content@app": {
                    controller: 'cpDashboardController',
                    templateUrl: 'app/dashboard/cp-mydocument.html'
                }
            }
        })
        .state('app.cp-mybooks', {
            url: '/cp-mybooks',
            data: {
                title: 'My Books'
            },
            views: {
                "content@app": {
                    controller: 'cpDashboardController',
                    templateUrl: 'app/dashboard/cp-mybooks.html'
                }
            }
        });

});