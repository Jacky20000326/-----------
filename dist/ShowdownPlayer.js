import { HandCard } from "./ShowdownHandCard.js";
import { Player as ModelPlayer } from './model/Player.js';
export class Player extends ModelPlayer {
    constructor(name) {
        super(new HandCard());
        this.count = 0;
    }
    getCount() {
        return this.count;
    }
    gainCount() {
        this.count++;
    }
}
export class HumanPlayer extends Player {
}
export class AiPlayer extends Player {
}
