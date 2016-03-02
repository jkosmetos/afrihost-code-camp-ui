(function () {
    'use strict';

    var appController = angular.module('app.controller', []);

    appController.controller('AppController', ['$state', '$scope', 'user', function ($state, $scope, user) {

        $scope.user = user;

    }]);

    appController.controller('HomeController', ['$state', '$scope', '$window', '$timeout', function ($state, $scope, $window, $timeout) {


    }]);

})();
