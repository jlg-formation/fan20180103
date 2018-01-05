(function () {
    'use strict';

    const app = angular.module('eco-star', []);

    app.component('ecoStar', {
        bindings: {
            note: '=?',
        },
        controller: function EcoStarCtrl($scope, $element, $compile) {
            $scope.$watch('$ctrl.note', () => {
                let note = this.note || 3;
                note = (note > 5) ? 5 : note;
                note = (note < 0) ? 0 : note;
                let html = '';
                for (let i = 0; i < note; i++) {
                    html += `<img ng-click="$ctrl.update(${i+1})" src="eco-star/img/yellow_star.png">`;
                }
                for (let i = note; i < 5; i++) {
                    html += '<img ng-click="$ctrl.update(' + (i + 1) + ')" src="eco-star/img/white_star.png">';
                }
                html = `<div>${html}</div>`;
                $element.html(html);
                $compile($element.contents())($scope);
            });

            this.update = newNote => {
                console.log('update', newNote);
                this.note = newNote;
            };
        }
    });


})();