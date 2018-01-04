(function() {
    'use strict';

    const app = angular.module('eco-layout', []);

    app.directive('ecoHeader', () => {
        return {
            restrict: 'E',
            templateUrl: 'eco-layout/tmpl/eco-header.html',
        }
    });

    app.directive('ecoBody', () => {
        return {
            restrict: 'E',
            templateUrl: 'eco-layout/tmpl/eco-body.html',
        }
    });

    app.directive('ecoFooter', () => {
        return {
            restrict: 'E',
            templateUrl: 'eco-layout/tmpl/eco-footer.html',
        }
    });
})();