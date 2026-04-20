export const KEYS ={
    
    _MOVEDOWN: "S",
    _MOVERIGHT: "D",
    _JUMP: "Space",
    _CHANGE: "Shift",
    _ATTACK:  0,
    _PAUSE: "Escape",

}

export const _GRAVITY = 1
export const _SKILLCOOLDOWNT = 5000;

export const _ELEMENTS = {
    _COOLDOWN_ELEMENT: document.querySelector(".feedback"),
    _START_SCREEN_ELEMENT: document.querySelector("header"),
    _GAME_SCREEN_ELEMENT: document.querySelector("main"),
    _GAME_CANVAS_ELEMENT: document.querySelector("#game"),
    _SCORE_SCREEN_ELEMENT: document.querySelector(".score"),
    _AMMO_ELEMENT: document.querySelector(".ammo"),
    _BACKGROUND_ELEMENT: document.querySelector("#background")
}

/*****************************************
 * Allows you to input the location of   *
 * the correct image of the sprite sheet *
 *****************************************/
export const PlayerSize = {
    _WIDTH: 575,
    _HEIGHT: 523
}

export const Enemy = {
    _ENEMY_WIDTH: 213,
    _ENEMY_HEIGHT: 212,
    _ENEMY_IMG: 'img/enemy4.png',
    _ENTITY_STATE_ENEMY: 'enemy'
}

export const HitDetection = {
    _PLAYER_DIAMETER: 150,
    _ENEMY_DIAMETER:  100,
}

function getSpriteLoc(amountOfFrames, spritesheet_row, startFrame = 0){
    let returnarr = [];
    for (let i = 0 + startFrame;i<=amountOfFrames;i++){
        returnarr[i]={
            x: PlayerSize._WIDTH*i,
            y: PlayerSize._HEIGHT*spritesheet_row
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
        loc: getSpriteLoc(7,2)
    },
    "run": {
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
    "boom": {
        loc: getSpriteLoc(5,10)
    },
}