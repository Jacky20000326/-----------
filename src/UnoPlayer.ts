import { HandCard } from "./UnoHandCard.js";
import { Card } from "./UnoCard.js";
import { Player as modelPlayer } from "./model/Player.js";
export class Player extends modelPlayer<Card>{

    
    constructor(name:string){
        super(new HandCard())
    }

    takeTurn():void{};





    showCard(currTableCard:Card):Card | null{
        let playerHandCards = this.handCard.getHand()
        let result = playerHandCards.findIndex(card => currTableCard.color == card.color || currTableCard.number == card.number)
        if(result != -1){
            let Card  = playerHandCards[result]
            playerHandCards.splice(result,1)
            return Card
        }else{
            return null
        }
    }


}

export class HumanPlayer extends Player{}

export class AiPlayer extends Player{}