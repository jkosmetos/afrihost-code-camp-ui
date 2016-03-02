(function () {
    'use strict';

    var userConfig = angular.module('user.config', ['user.controller', 'user.factory']);

    userConfig.config(['$stateProvider', 'CONFIG', function ($stateProvider, CONFIG) {
        // nothing yet
    }]);

})();
