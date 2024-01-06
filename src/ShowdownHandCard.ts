import { Card } from "./ShowdownCard";

export class HandCard {
    public handCard:Card[];

    constructor(){
        this.handCard = [];
    }

    setHand(card:Card):void{
        this.handCard.push(card)
    }

}