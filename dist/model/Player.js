export class Player {
    constructor(handCard) {
        this.handCard = handCard;
    }
    getHandCard() {
        return this.handCard;
    }
    NameHimself(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
