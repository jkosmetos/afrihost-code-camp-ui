(function () {
    'use strict';

    var userFactory = angular.module('user.factory', []);

    userFactory.factory('UserFactory', ['$localForage', function ($localForage) {

        var self = {};
        var collection = 'user';

        self.create = function (username, password, roles, remember, token) {

            var user = {
                username: username,
                password: ( remember ? password : '' ),
                roles: roles,
                token: token,
                remember: remember
            };

            return $localForage.setItem(collection, user);
        };

        self.remove = function () {

            return $localForage.removeItem(collection);

        };

        // getters
        self.getUser = function () {

            return $localForage.getItem(collection).then(function(user){
                return (_.isEmpty(user) ? '' : user);
            });

        };

        self.getUsername = function () {

            return $localForage.getItem(collection).then(function(user){
                return (_.isEmpty(user) ? '' : user.username);
            });

        };

        self.getPassword = function () {

            return $localForage.getItem(collection).then(function(user){
                return (_.isEmpty(user) ? '' : user.password);
            });

        };

        self.getToken = function () {

            return $localForage.getItem(collection).then(function(user){
                return (_.isEmpty(user) ? '' : user.token);
            });

        };

        self.getRoles = function () {

            return $localForage.getItem(collection).then(function(user){
                return (_.isEmpty(user) ? '' : user.roles);
            });

        };

        self.getRemember = function () {

            return $localForage.getItem(collection).then(function(user){
                return (_.isEmpty(user) ? '' : user.remember);
            });

        };

        return self;

    }]);

})();
