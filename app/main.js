import './eco-layout/eco-layout.js';
import './eco-star/eco-star.js';

import './style.scss';

const app = angular.module('main', ['eco-layout', 'eco-star']);

app.run(($rootScope) => {
    $rootScope.name = 'Jean-Louis';

    $rootScope.hello = () => {
        console.log('hello');
    };
});

