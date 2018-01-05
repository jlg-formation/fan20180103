const app = angular.module('eco-route', ['ui.router']);

import homeHtml from './tmpl/home.html';
import productsHtml from './tmpl/products.html';
import servicesHtml from './tmpl/services.html';
import contactHtml from './tmpl/contact.html';


app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider.state({
        name: 'home',
        url: '/',
        template: homeHtml
    });
    $stateProvider.state({
        name: 'products',
        url: '/products',
        template: productsHtml,
        controller: ProductCtrl,
        controllerAs: '$ctrl'
    });
    $stateProvider.state({
        name: 'services',
        url: '/services',
        template: servicesHtml
    });
    $stateProvider.state({
        name: 'contact',
        url: '/contact',
        template: contactHtml
    });
});

function ProductCtrl($http, $q) {
    'ngInject';

    this.start = () => {
        console.log('start');
        $http.get('../ws/s1').then(response => {
            console.log('response', response);
            return $q.all([
                $http.get('../ws/s2').then(response => {
                    console.log('response', response);
                    return $http.get('../ws/s5')
                }),
                $http.get('../ws/s3'),
                $http.get('../ws/s4'),
            ]);
        }).then(responses => {
            console.log('responses', responses);
            return $http.get('../ws/s6');
        }).then(response => {
            console.log('response', response);            
        }).catch(error => {
            console.error('error', error);
        });
    };
}