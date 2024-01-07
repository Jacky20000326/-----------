import { Card } from './ShowdownCard.js'
import { Duck as ModelDuck}  from './model/Duck.js'
export class Duck extends ModelDuck<Card>{


    constructor(cardList: Card[]){
        super(cardList)

    }

    // addCardList(card:Card):void{
    //     this.cardList.push(card)
    // }

    // drawCard():Card {

    //     let TopCard = this.cardList[0]
    //     this.cardList.splice(0,1)
    
    //     return TopCard

    // };
    // shuffle():Card[]{
    //     // 洗牌函數
    //     for (let i = this.cardList.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1)); // 生成隨機索引
    //         [this.cardList[i], this.cardList[j]] = [this.cardList[j], this.cardList[i]]; // 交换元素位置
    //     }
    //     return this.cardList;        
    // };

}
