(function () {
    'use strict';

    const app = angular.module('eco-layout', []);

    app.component('ecoHeader', {
        templateUrl: 'eco-layout/tmpl/eco-header.html',

    });

    app.component('ecoBody', {
        bindings: {
            myFn: '&',
            n: '=',
        },
        controller: function EcoBodyCtrl() {
            this.$onInit = () => {
                this.myFn();
            };
        },
        templateUrl: 'eco-layout/tmpl/eco-body.html',
    });

    app.component('ecoFooter', {
        templateUrl: 'eco-layout/tmpl/eco-footer.html',
    });
})();