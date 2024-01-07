import { HandCard as ModelHandCard } from "./model/HandCard.js";
export class HandCard extends ModelHandCard {
    constructor() {
        super();
    }
    showCard() {
        let card = this.getHand()[0];
        this.getHand().splice(0, 1);
        return card;
    }
}
