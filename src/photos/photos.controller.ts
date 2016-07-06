'use strict';

import { IScope } from 'angular';
import { Cat } from '../models/cat.model';

const deps: string[] = [
    '$scope',
    '$http',
    '$mdDialog'
];

export class PhotosCtrl {
    catList: Cat[] = [];
    photo1: Cat;
    photo2: Cat;
    max: number = 30;
    min: number = 0;

    constructor(
        private $scope: IScope, private $http: ng.IHttpService, private $mdDialog: ng.material.IDialogService
    ) {

        this.$http.get('http://thecatapi.com/api/images/get?format=xml&size=small&results_per_page=' + this.max)
            .then((response: any) => {
                this.$http.get('https://randomuser.me/api/?results=' + this.max + 1 + '&nat=gb')
                    .then((nameResponse: any) => {
                        let regexp = new RegExp('<url>(.*?)<\/url>', "g");
                        let matches;
                        let name = nameResponse.data.results[0].name.first;
                        let index = 0;
                        while (matches = regexp.exec(response.data)) {
                            this.catList.push(new Cat(nameResponse.data.results[index].name.first, matches[1], 0, index));
                            index++;
                        }
                        console.log(index)
                        this.photo1 = this.catList[0];
                        this.photo2 = this.catList[1];
                    });
            });
    }

    public voteLeft() {
        this.photo2.increaseScore();
        let newIndex: number = Math.floor(Math.random() * this.max);
        while (newIndex == this.photo2.index || newIndex == this.photo1.index) {
            newIndex = Math.floor(Math.random() * this.max);
        }
        this.photo1 = this.catList[newIndex];
    }

    public voteRight() {
        this.photo1.increaseScore();
        let newIndex: number = Math.floor(Math.random() * this.max);
        while (newIndex == this.photo1.index || newIndex == this.photo2.index) {
            newIndex = Math.floor(Math.random() * this.max);
        }
        this.photo2 = this.catList[newIndex];
    }

    showAlert = function (ev, pic) {
        var currentPhoto;
        if(pic == 1){
            currentPhoto = this.photo1;
        }
        else{
            currentPhoto = this.photo2;
        }
        this.$mdDialog.show(
            this.$mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title(currentPhoto.name)
                .textContent(currentPhoto.description)
                .ariaLabel('Cat bio')
                .ok('Meow!')
                .targetEvent(ev)
        );
    };
}

PhotosCtrl.$inject = deps;