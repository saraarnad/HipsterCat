'use strict';

import * as angular from 'angular';

import { routes } from './scoreboard.routes';
import { ScoreboardCtrl } from './scoreboard.controller';

export const scoreboardModule = angular.module('scoreboard', [])
    .config(routes)
    .controller('ScoreboardCtrl', ScoreboardCtrl)
    .name;