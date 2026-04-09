
import { player } from "./player.js";
export const KEYS ={
    
    _MOVELEFT: "A",
    _MOVERIGHT: "D",
    _JUMP: "Space",
    _CHANGE: "Shift",
    _ATTACK:  0,
    _PAUSE: "Escape",

}

export const _GRAVITY = 1

export const PlayerAnimations = {

}

/*****************************************
 * Allows you to input the location of   *
 * the correct image of the sprite sheet *
 *****************************************/
export const PlayerSize = {
    _WIDTH: 575,
    _HEIGHT: 523
}

function getSpriteLoc(amountOfFrames, spritesheet_row, startFrame = 0){
    let returnarr = [];
    for (let i = 0 + startFrame;i<=amountOfFrames;i++){
        returnarr[i]={
            x: PlayerSize._WIDTH*i,
            y: PlayerSize._WIDTH*spritesheet_row
        };
    }
    return returnarr;
}

/*********************************************
 * Set locations of the sprites and how wide *
 *********************************************/

export const spriteAnimations = {
    "idle": {
        loc: getSpriteLoc(7,0)
    },
    "jump": {
        loc: getSpriteLoc(7,1)
    },
    "fall": {
        loc: getSpriteLoc(7,1,3)
    },
    "run": {
        loc: getSpriteLoc(7,2)
    },
    "fall": {
        loc: getSpriteLoc(7,3)
    },
    "dizzy": {
        loc: getSpriteLoc(11,4)
    },
    "sit": {
        loc: getSpriteLoc(5,5)
    }, 
    "roll": {
        loc: getSpriteLoc(7,6)
    },
    "bite": {
        loc: getSpriteLoc(7,7)
    },
    "ko": {
        loc: getSpriteLoc(12,8)
    },
    "getHit": {
        loc: getSpriteLoc(4,9)
    },
}