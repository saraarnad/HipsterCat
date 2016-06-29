'use strict';

import * as angular from 'angular';

import { routes } from './photos.routes';
import { PhotosCtrl } from './photos.controller';

export const photosModule = angular.module('photos', [])
    .config(routes)
    .controller('PhotosCtrl', PhotosCtrl)
    .name;