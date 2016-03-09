(function () {
    'use strict';

    var workshopController = angular.module('workshop.controller', []);

    workshopController.controller('WorkshopsController', ['$state', '$scope', '$sce', 'workshops', 'newsItems', function ($state, $scope, $sce, workshops, newsItems) {

        console.log(workshops);
        console.log(newsItems);

        $scope.sce = $sce;
        $scope.workshops = workshops;
        $scope.newsItems = newsItems;

    }]);

    workshopController.controller('WorkshopController', ['$state', '$scope', '$sce', 'WorkshopFactory', 'workshop', function ($state, $scope, $sce, WorkshopFactory, workshop) {

        console.log(workshop);

        $scope.sce = $sce;
        $scope.workshop = workshop;
        $scope.sending = false;

        $scope.commentForm = {
            workshop_id: workshop.id
        };

        $scope.replyForm = {
            workshop_id: workshop.id
        };

        $scope.addComment = function (form) {

            if(form.$invalid) {

                alert('Form invalid, please try again.');

                return false;
            }

            $scope.sending = true;

            WorkshopFactory.addComment($scope.commentForm).then(function(data){

                $scope.workshop.comments.push(data);
                $scope.commentForm.comment = '';
                $scope.sending = false;

            });

            return false;

        };

        $scope.addReply = function (form) {

            if(form.$invalid) {

                alert('Form invalid, please try again.');

                return false;
            }

            $scope.sending = true;

            WorkshopFactory.addComment($scope.replyForm).then(function(data){

                $scope.workshop.comments.push(data);
                $scope.commentForm.comment = '';
                $scope.sending = false;

            });

            return false;

        }

    }]);

})();
