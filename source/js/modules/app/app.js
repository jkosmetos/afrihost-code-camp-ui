(function () {
    'use strict';

    // Bootstrap angular when ready
    angular.element(document).ready(function() {

        angular.module('app', [ 'ui.router', 'LocalForageModule', 'angularMoment', 'app.config', 'auth.config', 'user.config', 'workshop.config']);

        angular.bootstrap(document, ['app']);

    });

})();
