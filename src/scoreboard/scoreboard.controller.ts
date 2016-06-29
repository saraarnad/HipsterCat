'use strict';

import { IScope } from 'angular';

const deps: string[] = [
    '$scope'
];

export class ScoreboardCtrl {

    constructor(
        private $scope: IScope
    ) {

    }
}

ScoreboardCtrl.$inject = deps;