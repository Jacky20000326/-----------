import { HandCard } from "./UnoHandCard.js";
import { Player as modelPlayer } from "./model/Player.js";
export class Player extends modelPlayer {
    constructor(name) {
        super(new HandCard());
    }
    takeTurn() { }
    ;
    showCard(currTableCard) {
        let playerHandCards = this.handCard.getHand();
        let result = playerHandCards.findIndex(card => currTableCard.color == card.color || currTableCard.number == card.number);
        if (result != -1) {
            let Card = playerHandCards[result];
            playerHandCards.splice(result, 1);
            return Card;
        }
        else {
            return null;
        }
    }
}
export class HumanPlayer extends Player {
}
export class AiPlayer extends Player {
}
