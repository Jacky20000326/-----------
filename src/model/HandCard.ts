export class HandCard<Card> {
    private handCard:Card[] = []

    public setHand(card:Card){
        this.handCard.push(card)
    }

    public getHand():Card[]{
        return this.handCard
    }

    public showCard(index:number):Card{
        
        console.log(this.getHand())
        this.getHand().splice(index,1)
        return this.getHand()[index]

        
    }

    public getHandLen():number{

        return this.handCard.length
    }

}