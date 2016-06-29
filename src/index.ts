'use strict';

import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material-icons';
import 'angular-aria';
import 'angular-animate';

import 'angular-material/angular-material.css';

import { routing } from './index.config';

import { homeModule } from './Home'; // import the module
import { photosModule } from './photos'; // import the module
import { scoreboardModule } from './scoreboard'; // import the module

const requires: string[] = [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ngMdIcons',
    homeModule, // add it to the app module
    photosModule,
    scoreboardModule
];

angular.module('app', requires).config(routing);

angular.bootstrap(document, ['app'], {
    strictDi: true
});