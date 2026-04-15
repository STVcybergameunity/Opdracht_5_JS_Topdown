import { Enemy } from "./constants.js"
export class enemy{

    constructor(){

        this.speedModifier = 1
        this.enemyWidth = Enemy._ENEMY_WIDTH
        this.enemyHeight = Enemy._ENEMY_HEIGHT
        this.currentEnemyHeight = 0
        this.currentEnemyDistanceFromSide = 0

    }



}