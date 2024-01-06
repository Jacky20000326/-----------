import { HandCard } from "./UnoHandCard.js";
import { Card } from "./UnoCard.js";
export class Player {

    public name :string;
    public handCard:HandCard;
    constructor(name:string){

        this.name = name
        this.handCard = new HandCard()
    }
    nameHimself(name:string){
        this.name = name;
    }
    takeTurn():void{};





    showCard(currTableCard:Card):Card | null{
        let playerHandCards = this.handCard.hand
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