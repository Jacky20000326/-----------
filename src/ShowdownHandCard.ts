import { Card } from "./ShowdownCard.js";
import { HandCard as ModelHandCard } from "./model/HandCard.js";
export class HandCard extends ModelHandCard<Card>{

    constructor(){
        super()
    }

    showCard():Card{
        let card = this.getHand()[0]
        this.getHand().splice(0,1)
        return card
    }
}