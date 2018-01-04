(function() {
    'use strict';

    var app = angular.module('main', ['eco-layout']);

    app.run(($rootScope) => {
        $rootScope.name = 'Jean-Louis';
    });
})();