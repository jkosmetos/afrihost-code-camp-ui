(function () {
    'use strict';

    var authConfig = angular.module('auth.config', ['auth.controller', 'auth.factory']);

    authConfig.config(['$stateProvider', 'CONFIG', function ($stateProvider, CONFIG) {

        $stateProvider

            .state('app.login', {
                url: '/login',
                templateUrl: CONFIG.base_url + '/auth/views/login.html',
                controller: 'LoginController'
            })

            .state('app.register', {
                url: '/register',
                templateUrl: CONFIG.base_url + '/auth/views/register.html',
                controller: 'RegisterController'
            });

    }]);

})();
