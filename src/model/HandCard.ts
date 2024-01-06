import { Card } from "./Card";

export class HandCard {
    private handCard:Card[]

    public setHand(card:Card){
        this.handCard.push(card)
    }

    public getHandLen():number{
        return this.handCard.length
    }

}