'use strict';

import { IScope } from 'angular';

const deps: string[] = [
    '$scope',
    '$http'
];

export class PhotosCtrl {
    photo1: any = null;
    photo2: any = null;
    score: { [key:string]:number; } = {};
    scoreArr: any[] = null;
    id_photo1: any = null;
    id_photo2: any = null;
    name1: string = null;
    testObj: { photo:string, score:number, name:string };
    scoreBoard: Object[];
    

    constructor(
        private $scope: IScope, private $http: ng.IHttpService
    ) {
        //Putting pic in photo1
         this.$http.get('http://thecatapi.com/api/images/get?format=xml&size=small')
            .then((response) => {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(String(response.data),"text/xml");
                this.photo1 = xmlDoc.getElementsByTagName("url")[0].childNodes[0].nodeValue;
                this.id_photo1 = xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue;
            });
        //Putting pic in photo2 and declaring the first id
        this.$http.get('http://thecatapi.com/api/images/get?format=xml&size=small')
            .then((response) => {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(String(response.data),"text/xml");
                this.photo2 = xmlDoc.getElementsByTagName("url")[0].childNodes[0].nodeValue;
                this.id_photo2 = xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue;
            });


    }

    

    left(){
        this.$http.get('http://thecatapi.com/api/images/get?format=xml&size=small')
            .then((response) => {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(String(response.data),"text/xml");
                this.photo2 = xmlDoc.getElementsByTagName("url")[0].childNodes[0].nodeValue;
                this.id_photo2 = xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue;

                if(this.score[this.id_photo1] == null){
                    this.score[this.id_photo1] = 0;
                }
                this.score[this.id_photo1] = this.score[this.id_photo1] + 1; 
            });
    }

    right(){
        this.$http.get('http://thecatapi.com/api/images/get?format=xml&size=small')
            .then((response) => {
	            var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(String(response.data),"text/xml");
                this.photo1 = xmlDoc.getElementsByTagName("url")[0].childNodes[0].nodeValue;
                this.id_photo1 = xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue;
                if(this.score[this.id_photo2] == null){
                    this.score[this.id_photo2] = 0;
                }
                this.score[this.id_photo2] = this.score[this.id_photo2] + 1; 
            });
    }

    //convert the map to an array of objects so i can use orderBy
    createArr(){
        this.scoreArr = null;
        for(var key in this.score){
            this.scoreArr.push()
        }
    }

    sortMe(){
        return function sara(params:any) {
            return params.value.order;
        }
    }


    next(){
        this.$http.get('http://thecatapi.com/api/images/get?format=xml&size=small')
            .then((response) => {
                this.parse(response.data);
            });
    }
    
    parse(inp: Object){
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(String(inp),"text/xml");
        this.photo1 = xmlDoc.getElementsByTagName("url")[0].childNodes[0].nodeValue;
    }
    
}

PhotosCtrl.$inject = deps;