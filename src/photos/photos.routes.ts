'use strict';

import { IStateProvider } from 'angular-ui-router';

routes.$inject = ['$stateProvider'];

export function routes($stateProvider: IStateProvider) {
    $stateProvider
        .state('photos', {
            url: '/photos',
            template: require('./photos.html'),
            controller: 'PhotosCtrl as vm'
        });
}