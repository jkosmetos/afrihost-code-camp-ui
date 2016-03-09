(function () {
    'use strict';

    var authController = angular.module('auth.controller', []);

    authController.controller('LoginController', ['$rootScope', '$scope', '$state', 'AuthFactory', 'UserFactory', function ($rootScope, $scope, $state, AuthFactory, UserFactory) {

        $scope.loginForm = {};

        $scope.login = function (form){

            if(form.$invalid) {

                alert('Form invalid, please try again.');

                return false;
            }

            AuthFactory.login($scope.loginForm).then(function(data){

                if(data.hasOwnProperty('token')) {
                    // save the User object

                    console.log('Submitted: ', data);

                    // TODO store 'remember me' and make it function correctly
                    UserFactory.create($scope.loginForm._username, $scope.loginForm._password, data.user.roles, false, data.token).then(function(){

                        $state.go('app.home');

                    });

                }
            });

        };

    }]);

    authController.controller('RegisterController', ['$state', '$scope', 'AuthFactory', function ($state, $scope, AuthFactory) {

        $scope.registerForm = {};

        $scope.register = function (form){

            if(form.$invalid) {

                alert('Form invalid, please try again.');

                return false;
            }

            AuthFactory.register($scope.registerForm).then(function(data){

                // do some stuff
                console.log(data);

            });
        };


    }]);

})();
