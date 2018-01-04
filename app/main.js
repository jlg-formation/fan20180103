(function () {
    'use strict';

    var app = angular.module('main', ['eco-layout', 'eco-star']);

    app.run(($rootScope) => {
        $rootScope.name = 'Jean-Louis';

        $rootScope.hello = () => {
            console.log('hello');
        };
    });

    
})();