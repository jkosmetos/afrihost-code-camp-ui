(function () {

    var workshopFactory = angular.module('workshop.factory', []);
    
    workshopFactory.factory('WorkshopFactory', ['CONFIG', '$http', function (CONFIG, $http) {

        var self = {};

        self.getNewsItems = function () {

            var url = CONFIG.api_url + '/api/news';

            return $http({
                url: url,
                method: 'GET',
                cache: false
            }).then(function(data){

                return data.data;

            });

        };

        self.getWorkshops = function () {

            var url = CONFIG.api_url + '/api/workshops';

            return $http({
                url: url,
                method: 'GET',
                cache: false
            }).then(function(data){

                return data.data;

            });

        };

        self.getWorkshop = function (id) {

            var url = CONFIG.api_url + '/api/workshop/' + id;

            return $http({
                url: url,
                method: 'GET',
                cache: false
            }).then(function(data){

                return data.data;

            });

        };

        self.addComment = function (data) {

            var url = CONFIG.api_url + '/api/comment/add';

            return $http({
                url: url,
                method: 'POST',
                cache: false,
                data: data
            }).then(function(data){

                return data.data;

            });

        };

        return self;

    }]);

})();