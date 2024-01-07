
import { HandCard } from "./HandCard";

export abstract class Player<Card> {
    protected handCard:HandCard<Card>
    protected name:string
    constructor(handCard:HandCard<Card>){
        this.handCard = handCard;
    }

    public getHandCard():HandCard<Card>{
        return this.handCard;
    }

    public NameHimself(name:string){
        this.name = name;
    }

    public getName():string{
        return this.name;
    }

}