
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


        this.player._PLAYER_IMAGE = 'img/shadow_dog.png';

        this._ANIMATION_STATE.forEach((state, index) => {

        let frames = {
            loc: [],
        }

        for (let j = 0; j < state.frames; j++){

            let positionX = j * this.player._SPRITE_WIDTH;
            let positionY = index * this.player._SPRITE_HEIGHT;

            frames.loc.push({x: positionX, y: positionY});

        }

        this._SPRITE_ANIMATION[state.name] = frames;

        });
    }

    animate(){

        if(!this.initialize)(

            this.initializeAnimation()

        )

        this.canvas._CTX.clearRect(0, 0, this.canvas._CANVAS_WIDTH, this.canvas._CANVAS_HEIGHT);

        this.position = Math.floor(this.gameFrame/this._STAGGER_FRAMES) % this._SPRITE_ANIMATION[this.player.playerState].loc.length;
        this.frameX = this.player._SPRITE_WIDTH * this.position;
        this.frameY = this._SPRITE_ANIMATION[this.player.playerState].loc[this.position].y;

        this.canvas._CTX.drawImage(this.player._PLAYERIMAGE, this.frameX, this.frameY,
        this.player._SPRITE_WIDTH, this.player._SPRITE_HEIGHT, 0, 0, this.player._SPRITE_WIDTH, this.player._SPRITE_HEIGHT);

        this.checkHitDetection();

        this.initialize = true

        this.gameFrame++;    

        requestAnimationFrame(() => this.animate());
    
    }

}