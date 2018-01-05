const app = angular.module('eco-layout', []);

import ecoHeaderHtml from './tmpl/eco-header.html';
import ecoBodyHtml from './tmpl/eco-body.html';
import ecoFooterHtml from './tmpl/eco-footer.html';

app.component('ecoHeader', {
    template: ecoHeaderHtml,
});

app.component('ecoBody', {
    bindings: {
        myFn: '&',
        n: '=',
    },
    controller: class EcoBodyCtrl {
        $onInit() {
            console.log('controller', this);
            this.myFn();
        }
    },
    template: ecoBodyHtml,
});

app.component('ecoFooter', {
    template: ecoFooterHtml,
});