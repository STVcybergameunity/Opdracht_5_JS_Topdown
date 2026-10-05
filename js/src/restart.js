export class restartGame {

    constructor() {
        this.deathTimer = 0;
        this.restartDelay = 1200;
        this.restartTriggered = false;
    }

    update(delta, gameInstance) {

        if (!gameInstance || !gameInstance.playerDead) {
            this.deathTimer = 0;
            this.restartTriggered = false;
            return;
        }

        if (this.restartTriggered) return;

        this.deathTimer += delta;

        if (this.deathTimer >= this.restartDelay) {
            this.restartTriggered = true;
            this.restart();
        }

    }

    restart() {
        window.location.reload();
    }

}
