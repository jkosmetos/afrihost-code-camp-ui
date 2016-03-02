(function () {

    var appFactory = angular.module('app.factory', []);
    
    appFactory.factory('HttpInterceptor', ['$injector', '$q', 'UserFactory', function ($injector, $q, UserFactory) {
        return {
            request: function (config) {

                var deferred = $q.defer();

                // show loading for everything except templates
                if (config.url.indexOf('.html') <= 0) {
                    // TODO Show loading
                }

                UserFactory.getToken().then(function (token) {

                    if (token) {
                        config.headers.Authorization = 'Bearer ' + token;
                    }

                    deferred.resolve(config);

                }, function (err) {

                    deferred.reject(err);

                });

                return deferred.promise;
            },
            requestError: function (rejection) {

                return $q.reject(rejection);
            },
            response: function (response) {

                return response;
            },
            responseError: function (rejection) {

                if (rejection.status === 401) {
                    //unauthorised, redirect to login
                    $injector.get('$state').go('app.login');
                }

                return $q.reject(rejection);
            }
        };

    }]);

})();