"use strict";

angular.module('app.service-request', ['ui.router']);

angular.module('app.service-request').config(function ($stateProvider) {
    $stateProvider
        .state('app.service-request', {
            url: '/service-request',
            data: {
                title: 'Service Request'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/service-request/views/service-request.html'
                }
            }
        });

    $stateProvider
        .state('app.request-inbox', {
            url: '/inbox',
            data: {
                title: 'Reqeust Inbox'
            },
            views: {
                content: {
                    templateUrl: 'app/service-request/views/request-inbox-layout.html',
                    //controller: function ($scope, config) {
                    //    $scope.config = config.data;
                    //    $scope.deleteSelected = function () {
                    //        $scope.$broadcast('$inboxDeleteMessages')
                    //    }
                    //}
                }
            }

        })
        .state('app.request-inbox.folder', {
            url: '/:folder',
            views: {
                inbox: {
                    templateUrl: 'app/service-request/views/request-inbox-folder.html',
                    controller: function ($scope, messages, $stateParams) {
                        $scope.$parent.selectedFolder = _.find($scope.$parent.config.folders, { key: $stateParams.folder });
                        $scope.messages = messages;

                        $scope.$on('$inboxDeleteMessages', function (event) {
                            angular.forEach($scope.messages, function (message, idx) {
                                if (message.selected) {
                                    message.$delete(function () {
                                        $scope.messages.splice(idx, 1);
                                    })
                                }
                            });
                        });

                    },
                    resolve: {
                        messages: function (InboxMessage, $stateParams) {
                            return InboxMessage.query({ folder: $stateParams.folder });
                        }
                    }
                }
            }
        })
        .state('app.request-inbox.folder.detail', {
            url: '/detail/:message',
            views: {
                "inbox@app.inbox": {
                    templateUrl: 'app/service-request/views/request-inbox-detail.html',
                    controller: function ($scope, message) {
                        $scope.message = message;
                    },
                    resolve: {
                        message: function (InboxMessage, $stateParams) {
                            return InboxMessage.get({ id: $stateParams.message })
                        }
                    }
                }
            }
        })
        .state('app.request-inbox.folder.replay', {
            url: '/replay/:message',
            views: {
                "inbox@app.inbox": {
                    templateUrl: 'app/service-request/views/request-inbox-replay.html',
                    controller: function ($scope, $timeout, $state, replayTo) {
                        $scope.replayTo = replayTo;
                        $scope.sending = false;
                        $scope.send = function () {
                            $scope.sending = true;
                            $timeout(function () {
                                $state.go('app.request-inbox.folder')
                            }, 1000);
                        }
                    },
                    controllerAs: 'replayCtrl',
                    resolve: {
                        replayTo: function (InboxMessage, $stateParams) {
                            return InboxMessage.get({ id: $stateParams.message })
                        }
                    }
                }
            }
        })
        .state('app.request-inbox.folder.compose', {
            url: '/compose',
            views: {
                "inbox@app.inbox": {
                    templateUrl: 'app/service-request/views/request-inbox-compose.html',
                    controller: function ($scope, $timeout, $state) {
                        $scope.sending = false;
                        $scope.send = function () {
                            $scope.sending = true;
                            $timeout(function () {
                                $state.go('app.request-inbox.folder')
                            }, 1000);
                        }
                    },
                    
                }
            }
        });



});