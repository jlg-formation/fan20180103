(function() {
    'use strict';

    var app = angular.module('main', []);

    app.run(($rootScope) => {
        $rootScope.name = 'Jean-Louis';
    });
})();