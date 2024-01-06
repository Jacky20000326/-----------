import { Card } from "./ShowdownCard.js";
import { HandCard } from "./ShowdownHandCard.js";
import { Player as ModelPlayer} from './model/Player.js'

export abstract class Player {
    public name:string;
    public count:number;
    public hand:HandCard;
    constructor(name:string){
        this.name = name;
        this.count = 0;
        this.hand = new HandCard()
    }

    


    nameHimself(name:string):void{
        this.name = name;
    }

    takeTurn():void{

    }
    show():Card{
        if(this.hand.handCard.length != 0){
            // 隨機出牌,目前指出最上面的一張
            
            let showTopCard = this.hand.handCard[0]
            this.hand.handCard.splice(0,1)
            return showTopCard
        }
    }


    gainCount():void{
        this.count ++
    }
}

export class HumanPlayer extends Player{}

export class AiPlayer extends Player{}