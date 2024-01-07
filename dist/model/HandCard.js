export class HandCard {
    constructor() {
        this.handCard = [];
    }
    setHand(card) {
        this.handCard.push(card);
    }
    getHand() {
        return this.handCard;
    }
    showCard(index) {
        console.log(this.getHand());
        this.getHand().splice(index, 1);
        return this.getHand()[index];
    }
    getHandLen() {
        return this.handCard.length;
    }
}
