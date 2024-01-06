import { HandCard } from "./UnoHandCard.js";
export class Player {
    constructor(name) {
        this.name = name;
        this.handCard = new HandCard();
    }
    nameHimself(name) {
        this.name = name;
    }
    takeTurn() { }
    ;
    showCard(currTableCard) {
        let playerHandCards = this.handCard.hand;
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
