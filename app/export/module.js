"use strict";

angular.module('app.export', ['ui.router']);

angular.module('app.export').config(function ($stateProvider) {
    $stateProvider
        .state('app.export', {
            url: '/export',
            data: {
                title: 'Export'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/export/views/export.html'
                }
            }
        });
});