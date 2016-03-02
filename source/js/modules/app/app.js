(function () {
    'use strict';

    // Bootstrap angular when ready
    angular.element(document).ready(function() {

        angular.module('app', [ 'ui.router', 'LocalForageModule', 'app.config', 'auth.config', 'user.config']);

        angular.bootstrap(document, ['app']);

    });

})();
