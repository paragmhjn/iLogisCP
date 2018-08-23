"use strict";

angular.module('app.event-configuration', ['ui.router']);

angular.module('app.event-configuration').config(function ($stateProvider) {
    $stateProvider
        .state('app.event-configuration', {
            url: '/event-configuration',
            data: {
                title: 'My Preferences'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/event-configuration/views/event-configuration.html'
                }
            }
        });
});