
export class Duck<Card> {
    protected cardList:Card[];

    constructor(cardList: Card[]){
        this.cardList = cardList
    }

    shuffle():Card[]{
        // 洗牌函數
        for (let i = this.cardList.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // 生成隨機索引
            [this.cardList[i], this.cardList[j]] = [this.cardList[j], this.cardList[i]]; // 交换元素位置
        }
        // console.log('=== 洗牌後的結果 ===')
        // console.log(this.cardList)
        return this.cardList;        
    };

    drawCard():Card {
        let TopCard = this.cardList[0]
        this.cardList.splice(0,1)
    
        return TopCard
    };

    addCardList(card:Card):void{
        this.cardList.push(card)
    }

    getCardListLen():number{
        return this.cardList.length
    }

    getCardList():Card[]{
        return this.cardList
    }
}