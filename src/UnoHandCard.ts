import { Card } from "./UnoCard.js";

export class HandCard {
    public hand:Card[];

    constructor(){
        this.hand = [];
    }

    setHand(card:Card):void{
        this.hand.push(card)
    }

}