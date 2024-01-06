import { Card } from "./Card";
import { HandCard } from "./HandCard";

export abstract class Player {
    private handCard:HandCard

    constructor(handCard:HandCard){
        this.handCard = handCard
    }

    public getHandCard():HandCard{
        return this.handCard
    }

}