(function () {
    'use strict';

    var appConfig = angular.module('app.config', ['app.controller', 'app.factory']);

    appConfig.run(['$rootScope', function ($rootScope) {
        // Once the app gets run, do stuff... nothing to do just yet
    }]);

    appConfig.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$localForageProvider', 'CONFIG', function ($stateProvider, $urlRouterProvider, $httpProvider, $localForageProvider, CONFIG) {

        //////////////////////////////////////////////////////
        //               local forage config                //
        //////////////////////////////////////////////////////
        $localForageProvider.config({
            name        : 'afrihost_code_camp', // name of the database and prefix for your data, it is "lf" by default
            version     : 1.0, // version of the database, you shouldn't have to use this
            storeName   : 'data', // name of the table
            description : 'Afrihost Code Camp Data Store'
        });

        //////////////////////////////////////////////////////
        //                   HTTP config                    //
        //////////////////////////////////////////////////////
        $httpProvider.defaults.headers.common.Authorization = 'Bearer null';
        $httpProvider.interceptors.push('HttpInterceptor');

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('app', {
                abstract: true,
                templateUrl: CONFIG.base_url + '/app/views/main.html',
                controller: 'AppController',
                resolve: {
                    user: ['UserFactory', function(UserFactory){
                        return UserFactory.getUser();
                    }]
                }
            })

            .state('app.home', {
                url: '/',
                views: {
                    'main@app': {
                        templateUrl: CONFIG.base_url + '/app/views/home.html',
                        controller: 'HomeController'
                    }
                }
            });

    }]);

    // Global constants
    appConfig.constant('CONFIG', {
        dev_mode: 0,
        base_url: 'js/modules',
        api_url: 'http://api.afrihostcodecamp.com'
    });

})();
