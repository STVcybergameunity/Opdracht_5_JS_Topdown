
import { canvas } from "./canvas.js";
import { player } from "./player.js";
import { spriteAnimations, PlayerSize } from './constants.js'

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

        // sets a index for the y axis

        for (let j = 0; j < state.frames; j++){

            let positionX = j * PlayerSize._WIDTH;
            let positionY = index * PlayerSize._HEIGHT;

            frames.loc.push({x: positionX, y: positionY});

        }

        this._SPRITE_ANIMATION[state.name] = frames;

        });
    }

    animate(){

        const _PLAYERSPAWNHEIGHT = this.playerCharacter._DRAW_HEIGHT*1.5
        const _SPRITE_WIDTH = PlayerSize._WIDTH
        const _SPRITE_HEIGHT = PlayerSize._HEIGHT

        if(!this.initialize){

            this.initializeAnimation()

        }

        this.canvas._CTX.clearRect(0, 0, this.canvas._CANVAS_WIDTH, this.canvas._CANVAS_HEIGHT);

        this.position = Math.floor(this.gameFrame/this._STAGGER_FRAMES) % this._SPRITE_ANIMATION[this.playerCharacter.entityState].loc.length;
        
        this.frameX = _SPRITE_WIDTH * this.position;
        this.frameY = this._SPRITE_ANIMATION[this.playerCharacter.entityState].loc[this.position].y;

        this.canvas._CTX.drawImage(this.playerCharacter._PLAYERIMAGE, this.frameX, this.frameY,
        _SPRITE_WIDTH, _SPRITE_HEIGHT, 0, window.innerHeight - _PLAYERSPAWNHEIGHT,
        this.playerCharacter._DRAW_WIDTH, this.playerCharacter._DRAW_HEIGHT);

        this.initialize = true

        this.gameFrame++;    

        requestAnimationFrame(() => this.animate());
    
    }

}