import { canvas } from "./canvas.js";
import { player } from "./player.js";
import { enemy } from "./enemy.js";
import { spriteAnimations, KEYS, PlayerSize, Enemy } from './constants.js'
import { movement } from "./parser.js";

export class animation {

    constructor(canvasInstance, playerCharacter) {

        this.canvas = canvasInstance;
        this.playerCharacter = playerCharacter;
        this.gameFrame = 0;
        this._STAGGER_FRAMES = 5;
        this._SPRITE_ANIMATION = [];
        this._ANIMATION_STATE = [
            { name: 'idle',   frames: 7  },
            { name: 'jump',   frames: 7  },
            { name: 'fall',   frames: 7  },
            { name: 'run',    frames: 9  },
            { name: 'dizzy',  frames: 11 },
            { name: 'sit',    frames: 5  },
            { name: 'roll',   frames: 7  },
            { name: 'bite',   frames: 7  },
            { name: 'ko',     frames: 12 },
            { name: 'getHit', frames: 4  },
            { name: 'boom',   frames: 5  },
            { name: 'enemy',  frames: 9  },
        ];

    }

    initializeAnimation() {

        this.playerCharacter._PLAYERIMAGE.src = 'img/shadow_dog_with_boom.png'

        this._ANIMATION_STATE.forEach((state, index) => {

            let frames = { loc: [] };

            for (let j = 0; j < state.frames; j++) {
                let positionX = j * PlayerSize._WIDTH;
                let positionY = index * PlayerSize._HEIGHT;
                frames.loc.push({ x: positionX, y: positionY });
            }

            this._SPRITE_ANIMATION[state.name] = frames;

        });

        this.initialize = true;

    }

    animate(entityState) {

        const _SPRITE_WIDTH = PlayerSize._WIDTH;
        const _SPRITE_HEIGHT = PlayerSize._HEIGHT;
        

        if (!this.initialize) {

            this.initializeAnimation();

        }

        if (this.lastEntityState !== entityState) {

            this.gameFrame = 0;
            this.lastEntityState = entityState;
            
        }

        const animateFrame = Math.floor(this.gameFrame / this._STAGGER_FRAMES)

        this.canvas._CTX.clearRect(0, 0, this.canvas._CANVAS_WIDTH, this.canvas._CANVAS_HEIGHT);

        const state = entityState;

        const spriteFrames = this._SPRITE_ANIMATION[state];

        if (!spriteFrames) return;

        const lastFrame = spriteFrames.loc.length - 1;

        const isOneShot = this.playerCharacter.oneShotAnimations.has(entityState);

        if (isOneShot) {

            this.position = Math.min(animateFrame, lastFrame);
 
            if (this.position === lastFrame) {
                this.playerCharacter.onOneShotComplete(entityState);
            }
        } else {

            this.position = animateFrame % spriteFrames.loc.length;

        }


        this.frameX = _SPRITE_WIDTH * this.position
        this.frameY = spriteFrames.loc[this.position].y
        this.frameXEnemy = Enemy._ENEMY_WIDTH * this.position
        this.frameYEnemy =  spriteFrames.loc[this.position].y

        this.canvas._CTX.drawImage(
            this.playerCharacter._PLAYERIMAGE,
            this.frameX, this.frameY,
            _SPRITE_WIDTH, _SPRITE_HEIGHT,
            this.playerCharacter.distanceFromSide,
            window.innerHeight - this.playerCharacter.currentHeight,
            this.playerCharacter._DRAW_WIDTH,
            this.playerCharacter._DRAW_HEIGHT
        );

        this.gameFrame++;

    }

}