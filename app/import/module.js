"use strict";

angular.module('app.import', ['ui.router']);

angular.module('app.import').config(function ($stateProvider)
{
    $stateProvider
        .state('app.import', {
            url: '/import',
            data: {
                title: 'Import'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/import/views/import.html',
                    controller: function ($scope, $state) {
                        var screenWidth = screen.width;

                        if (screenWidth < 800) {
                            $state.go('app.mobile-import')
                        } else {
                            $state.go('app.import')
                        }

                    }
                }
            }
        })
        .state('app.mobile-import', {
            url: '/mobile-import',
            data: {
                title: 'Import'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/import/mobile-views/mobile-import.html',
                    controller: function ($scope, $state) {
                        var screenWidth = screen.width;

                        if (screenWidth > 800)
                        {
                            $state.go('app.import')
                        } else
                        {
                            $state.go('app.mobile-import')
                        }

                    }
                }
            }
        });

});