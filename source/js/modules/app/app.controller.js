(function () {
    'use strict';

    var appController = angular.module('app.controller', []);

    appController.controller('AppController', ['$state', '$scope', 'AuthFactory', 'user', function ($state, $scope, AuthFactory, user) {

        $scope.user = user;

        $scope.logout = function () {

            AuthFactory.logout().then(function() {

                // do some stuff
                $state.go('app.home');

            });

        }

    }]);

    appController.controller('HomeController', ['$state', '$scope', '$window', '$timeout', 'workshops', function ($state, $scope, $window, $timeout, workshops) {

        // Nothing to do just yet
        $scope.workshops = workshops;
        console.log(workshops);

    }]);

})();
