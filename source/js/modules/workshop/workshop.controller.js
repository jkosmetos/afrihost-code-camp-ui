(function () {
    'use strict';

    var workshopController = angular.module('workshop.controller', []);

    workshopController.controller('WorkshopsController', ['$state', '$scope', '$sce', 'moment', 'workshops', 'newsItems', function ($state, $scope, $sce, moment, workshops, newsItems) {

        $scope.sce = $sce;
        $scope.workshops = workshops;
        $scope.newsItems = newsItems;
        $scope.moment = moment;

    }]);

    workshopController.controller('WorkshopController', ['$state', '$scope', '$sce', 'moment', 'WorkshopFactory', 'workshop', 'user', function ($state, $scope, $sce, moment, WorkshopFactory, workshop, user) {

        $scope.sce = $sce;
        $scope.moment = moment;
        $scope.workshop = workshop;

        $scope.rsvp = function () {

            WorkshopFactory.rsvp({ workshop_id: workshop.id }).then(function(data){

                if(data.workshop) {

                    $scope.workshop.students.push(data.user);

                } else {

                    _.remove($scope.workshop.students, { username: data.user.username });

                }

            });

        };

        $scope.hasRsvpd = function (user) {

            var val = false;

            _.each($scope.workshop.students, function (student, index) {

                if (student.username === user.username) {
                    val = true;
                }

            });

            return val;
        }

    }]);

})();
