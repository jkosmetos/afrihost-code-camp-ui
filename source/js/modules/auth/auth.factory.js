(function () {
    'use strict';

    var authFactory = angular.module('auth.factory', []);

    authFactory.factory('AuthFactory', ['CONFIG', '$http', 'UserFactory',  function (CONFIG, $http, UserFactory) {

        var self = {};

        self.register = function (data) {

            var url = CONFIG.api_url + '/api/user/register';

            return $http({
                url: url,
                method: 'POST',
                cache: false,
                data: data
            }).then(function(data){

                return data.data;

            });

        };

        self.login = function (data) {

            var url = CONFIG.api_url + '/api/login_check';

            return $http({
                url: url,
                method: 'POST',
                cache: false,
                data: data
            }).then(function(data){

                return data.data;

            });

        };

        self.logout = function () {
            return UserFactory.remove();
        };

        return self;

    }]);
  
})();