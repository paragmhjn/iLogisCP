"use strict";

angular.module('app.outstanding', ['ui.router']);

angular.module('app.outstanding').config(function ($stateProvider) {
    $stateProvider
        .state('app.outstanding', {
            url: '/outstanding',
            data: {
                title: 'Outstanding'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/outstanding/views/outstanding.html'
                }
            }
        });
});