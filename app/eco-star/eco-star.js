(function () {
    'use strict';

    const app = angular.module('eco-star', []);

    app.component('ecoStar', {
       template: 'kiki',
       controller: class EcoStar {
           $onInit() {
               console.log('ecostar init');
           }
       }
    });

  
})();