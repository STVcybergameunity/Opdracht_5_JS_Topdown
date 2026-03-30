
import { canvas } from "./canvas.js";
import { player } from "./player.js";
export class animation{

    constructor(){

        this.gameFrame = 0;
        this._STAGGER_FRAMES = 5;
        this._ARRAY_STATE = ['getHit', 'idle', 'jump', 'fall', 'run', 'dizzy', 'sit', 'roll', 'bite', 'ko'];
        this._SPRITE_ANIMATION = [];
        this._ANIMATION_STATE = [
            {
                name: 'idle',
                frames: 7,
            },
            {
                name: 'jump',
                frames: 7,
            },
            {
                name: 'fall',
                frames: 7,
            },
            {
                name: 'run',
                frames: 9,
            },
            {
                name: 'dizzy',
                frames: 11,
            },
            {
                name: 'sit',
                frames: 5,
            },
            {
                name: 'roll',
                frames: 7,
            },
            {
                name: 'bite',
                frames: 7,
            },
            {
                name: 'ko',
                frames: 12,
            },
            {
                name: 'getHit',
                frames: 4,
            },
        ];

    }

    
    initializeAnimation(){


        this.playerCharacter._PLAYERIMAGE.src = 'img/shadow_dog.png';

        this._ANIMATION_STATE.forEach((state, index) => {

        let frames = {

            loc: [],

        }

        for (let j = 0; j < state.frames; j++){

            let positionX = j * this.playerCharacter._SPRITE_WIDTH;
            let positionY = index * this.playerCharacter._SPRITE_HEIGHT;

            frames.loc.push({x: positionX, y: positionY});

        }

        this._SPRITE_ANIMATION[state.name] = frames;

        });
    }

    animate(){

        if(!this.initialize){

            this.initializeAnimation()

        }

        this.canvas._CTX.clearRect(0, 0, this.canvas._CANVAS_WIDTH, this.canvas._CANVAS_HEIGHT);

        this.position = Math.floor(this.gameFrame/this._STAGGER_FRAMES) % this._SPRITE_ANIMATION[this.playerCharacter.playerState].loc.length;
        
        this.frameX = this.playerCharacter._SPRITE_WIDTH * this.position;
        this.frameY = this._SPRITE_ANIMATION[this.playerCharacter.playerState].loc[this.position].y;

        this.canvas._CTX.drawImage(this.playerCharacter._PLAYERIMAGE, this.frameX, this.frameY,
        this.playerCharacter._SPRITE_WIDTH, this.playerCharacter._SPRITE_HEIGHT, 0, window.innerHeight - this.playerCharacter._DRAW_HEIGHT,
        this.playerCharacter._DRAW_WIDTH, this.playerCharacter._DRAW_HEIGHT);

        this.initialize = true

        this.gameFrame++;    

        requestAnimationFrame(() => this.animate());
    
    }

}