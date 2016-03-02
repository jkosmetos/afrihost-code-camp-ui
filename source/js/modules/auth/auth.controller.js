(function () {
    'use strict';

    var authController = angular.module('auth.controller', []);

    authController.controller('LoginController', ['$state', '$scope', 'AuthFactory', 'UserFactory', function ($state, $scope, AuthFactory, UserFactory) {

        $scope.loginForm = {};

        $scope.login = function (form){

            if(form.$invalid) {

                alert('invalid form');

                return false;
            }

            AuthFactory.login($scope.loginForm).then(function(data){

                if(data.hasOwnProperty('token')) {
                    // save the User object

                    // TODO store 'remember me' and make it function correctly
                    UserFactory.create($scope.loginForm._username, $scope.loginForm._password, false, data.token).then(function(){
                        // do some stuff
                    });

                }
            });
        };

        $scope.logout = function () {

            AuthFactory.logout().then(function(data) {
                // do some stuff
            });

        }

    }]);

    authController.controller('RegisterController', ['$state', '$scope', 'AuthFactory', function ($state, $scope, AuthFactory) {

        $scope.registerForm = {};

        $scope.register = function (form){

            if(form.$invalid) {

                alert('invalid form');

                return false;
            }

            AuthFactory.register($scope.registerForm).then(function(data){

                // do some stuff
                console.log(data);

            });
        };


    }]);

})();
