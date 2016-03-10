(function () {
    'use strict';

    var workshopConfig = angular.module('workshop.config', ['workshop.controller', 'workshop.factory', 'workshop.directive']);

    workshopConfig.config(['CONFIG', '$stateProvider', function (CONFIG, $stateProvider) {

        $stateProvider

        .state('app.workshops', {
            url: '/workshops',
            resolve: {
                newsItems: ['WorkshopFactory', function(WorkshopFactory){
                    return WorkshopFactory.getNewsItems();
                }],
                workshops: ['WorkshopFactory', function(WorkshopFactory){
                    return WorkshopFactory.getWorkshops();
                }]
            },
            views: {
                'main@app': {
                    templateUrl: CONFIG.base_url + '/workshop/views/workshops.html',
                    controller: 'WorkshopsController'
                }
            }

        })

        .state('app.workshop', {
            url: '/workshop/:id',
            resolve: {
                workshop: ['WorkshopFactory', '$stateParams', function(WorkshopFactory, $stateParams){
                    return WorkshopFactory.getWorkshop($stateParams.id);
                }]
            },
            views: {
                'main@app': {
                    templateUrl: CONFIG.base_url + '/workshop/views/workshop.html',
                    controller: 'WorkshopController'
                }
            }
        });

    }]);

})();
