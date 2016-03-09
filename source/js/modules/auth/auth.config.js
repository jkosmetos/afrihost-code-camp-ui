(function () {
    'use strict';

    var authConfig = angular.module('auth.config', ['auth.controller', 'auth.factory']);

    authConfig.config(['$stateProvider', 'CONFIG', function ($stateProvider, CONFIG) {

        $stateProvider

            .state('app.login', {
                url: '/login',
                views: {
                    'main@app': {
                        templateUrl: CONFIG.base_url + '/auth/views/login.html',
                        controller: 'LoginController'
                    }
                }
            })

            .state('app.register', {
                url: '/register',
                views: {
                    'main@app': {
                        templateUrl: CONFIG.base_url + '/auth/views/register.html',
                        controller: 'RegisterController'
                    }
                }
            });

    }]);

})();
