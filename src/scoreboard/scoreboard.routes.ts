'use strict';

import { IStateProvider } from 'angular-ui-router';

routes.$inject = ['$stateProvider'];

export function routes($stateProvider: IStateProvider) {
    $stateProvider
        .state('scoreboard', {
            url: '/scoreboard',
            template: require('./scoreboard.html'),
            controller: 'ScoreboardCtrl as vm'
        });
}