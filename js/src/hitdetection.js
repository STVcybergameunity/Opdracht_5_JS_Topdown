import { HitDetection } from "./constants.js";

export class hitdetection {

    constructor(playerCharacter, enemies, canvasInstance) {

        this.playerCharacter = playerCharacter;
        this.enemies = enemies;
        this.canvas = canvasInstance;
        this.showHitboxes = false; // toggle this to hide/show hitboxes
        this.gotHit = false;
    }

    drawHitboxes(playerCircle, hitEnemies) {

        const ctx = this.canvas._CTX;

        ctx.beginPath();
        ctx.arc(
            playerCircle.x,
            playerCircle.y,
            playerCircle.diameter / 2,
            0,
            Math.PI * 2
        );
        ctx.strokeStyle = hitEnemies.length > 0 ? "red" : "lime";
        ctx.lineWidth = 2;
        ctx.stroke();

        this.enemies.forEach(enemy => {

            const isThisEnemyHit = hitEnemies.includes(enemy);

            ctx.beginPath();
            ctx.arc(
                enemy.x + (enemy.width / 2),
                enemy.y + (enemy.height / 2),
                HitDetection._ENEMY_DIAMETER / 2,
                0,
                Math.PI * 2
            );
            ctx.strokeStyle = isThisEnemyHit ? "red" : "lime";
            ctx.lineWidth = 2;
            ctx.stroke();

        });

    }

    isHit(player, enemy) {

        const dx = player.x - enemy.x;
        const dy = player.y - enemy.y;
        const distanceSquared = dx * dx + dy * dy;

        const radiusPlayer = player.diameter / 2;
        const radiusEnemy  = enemy.diameter / 2;
        const combinedRadius = radiusPlayer + radiusEnemy;

        return distanceSquared <= combinedRadius * combinedRadius;

    }

    checkHits() {

        const playerCircle = {
            x:        this.playerCharacter.distanceFromSide + (this.playerCharacter._DRAW_WIDTH / 2),
            y:        window.innerHeight - this.playerCharacter.currentHeight + (this.playerCharacter._DRAW_HEIGHT / 2) + 50, // 50 slightly lowers the hitbox to make it feel more fair
            diameter: HitDetection._PLAYER_DIAMETER,
        };

        const hitEnemies = [];

        this.enemies.forEach(enemy => {

            const enemyCircle = {
                x:        enemy.x + (enemy.width / 2),
                y:        enemy.y + (enemy.height / 2),
                diameter: HitDetection._ENEMY_DIAMETER,
            };

            if (this.isHit(playerCircle, enemyCircle))
                hitEnemies.push(enemy);


        });


        if (this.showHitboxes) {
            this.drawHitboxes(playerCircle, hitEnemies);
        }

        if(hitEnemies.length > 0) 
            return (this.gotHit = true);
                    
        return (this.gotHit = false);

    }

    checkEnemies(enemy) {

        const enemyCircle = {
            x:        enemy.x + (enemy.width / 2),
            y:        enemy.y + (enemy.height / 2),
            diameter: HitDetection._ENEMY_DIAMETER,
        };

        if (this.isHit(playerCircle, enemyCircle)) {
            hitEnemies.push(enemy);
            console.log("Hit detected!", { player: playerCircle, enemy: enemyCircle });
            this.gotHit = true;
            return true;
            // return (this.gotHit = true)
        }else if (this.gotHit){
            return this.gotHit = false
        }
    }
}