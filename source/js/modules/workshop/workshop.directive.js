(function () {
    'use strict';

    var workshopDirective = angular.module('workshop.directive', []);

    workshopDirective.directive('comment', ['CONFIG', 'WorkshopFactory', function(CONFIG, WorkshopFactory){

        return {
            restrict: 'E',
            templateUrl: CONFIG.base_url + '/workshop/views/partials/comment.html',
            scope: {
                workshop: '=',
                parent: '='
            },

            link: function (scope, element, attrs) {

                scope.sending = false;

                scope.commentForm = {
                    workshop_id: (typeof scope.workshop === 'undefined' ? null : scope.workshop.id),
                    parent_id: (typeof scope.parent === 'undefined' ? null : scope.parent.id)
                };

                scope.addComment = function (form) {

                    if(form.$invalid) {

                        alert('Form invalid, please try again.');

                        return false;
                    }

                    scope.sending = true;

                    WorkshopFactory.addComment(scope.commentForm).then(function(data){

                        if(scope.parent) {

                            scope.parent.replies.push(data.comment);

                        } else {

                            scope.workshop.comments.push(data.comment);
                            scope.commentForm.comment = '';

                        }

                        scope.sending = false;

                    });


                }

            }

        }

    }]);

})();