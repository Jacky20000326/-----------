import { Card } from "./ShowdownCard.js";
import { HandCard } from "./ShowdownHandCard.js";
import { Player as ModelPlayer} from './model/Player.js'

export abstract class Player extends ModelPlayer<Card>{

    private count:number;

    constructor(name:string){
        super(new HandCard())
        this.count = 0;
    }


    public getCount():number{
        return this.count;
    }

    public gainCount():void{
        this.count ++;
    }
}

export class HumanPlayer extends Player{}

export class AiPlayer extends Player{}