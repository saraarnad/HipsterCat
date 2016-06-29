'use strict';

import { IScope } from 'angular';

const deps: string[] = [
    '$scope'
];

export class HomeCtrl {
    public sara = 'yoyo';
    arni: string = 'http://www.laughspark.info/thumbfiles/705X705/cute-cat-with-beanie-and-glasses-635731307117442594-13752.jpg'
    jokeArr: string[] = ['Q: What do you call a pile of kittens? \n A: a meowntain',
                         'Q: What is it called when a cat wins a dog show? \n A: A CAT-HAS-TROPHY!',
                         'Q: What did the cat say when he lost all his money? \n A: I\'m paw!',
                         'Q: Why did the cat put the letter "M" into the fridge? \n A: Because it turns "ice" into "mice"!',
                         'Q. What kind of sports car does a cat drive? A. \n A Furrari.',
                         'Q: What do cats wear at night? \n A: paw-jamas!'
                        ];
    currentJoke: string = '';

    constructor(
        private $scope: IScope
    ) {

    }

    joke(){
        var rnd: number = Math.floor(Math.random() * (this.jokeArr.length));
        //console.log(this.jokeArr.length);
        //console.log(rnd);
        this.currentJoke = this.jokeArr[rnd];
    }
}

HomeCtrl.$inject = deps;