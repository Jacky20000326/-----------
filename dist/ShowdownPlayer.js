import { HandCard } from "./ShowdownHandCard.js";
export class Player {
    constructor(name) {
        this.name = name;
        this.count = 0;
        this.hand = new HandCard();
    }
    nameHimself(name) {
        this.name = name;
    }
    takeTurn() {
    }
    show() {
        if (this.hand.handCard.length != 0) {
            // 隨機出牌,目前指出最上面的一張
            let showTopCard = this.hand.handCard[0];
            this.hand.handCard.splice(0, 1);
            return showTopCard;
        }
    }
    gainCount() {
        this.count++;
    }
}
export class HumanPlayer extends Player {
}
export class AiPlayer extends Player {
}
