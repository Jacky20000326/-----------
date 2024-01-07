import { Card } from "./UnoCard.js";
import { Duck } from "./UnoDuck.js";
import { Player } from "./UnoPlayer.js";
import { GameTemplate } from "./model/Game.js";
export class Game extends GameTemplate<Player,Card>{

    private currTableCard:Card[]
    constructor(duck:Duck,playerList:Player[]){
        super(duck,playerList)
        this.currTableCard = []
    }

    playingGame(currPlayerIndex:number){
        // 玩家開始輪流出牌
            let currPlayer = this.playerList[currPlayerIndex]
            let currHandCard = currPlayer.showCard(this.currTableCard[this.currTableCard.length-1])
            if(currHandCard){
                this.currTableCard.push(currHandCard)
                console.log(`玩家：${currPlayer.getName()} 出牌:`)
                console.log(currHandCard)
            }else{

                if(currPlayer.getHandCard().getHandLen() == 0) return
                // 需判斷duck裡面是否還有牌,若牌則會先把檯面上除了最新的牌以外的牌放回牌堆中進行洗牌。
                if(this.duck.getCardListLen() == 0){
                    console.log("=== 牌堆內沒牌拉,將桌上的牌放入牌堆並重新洗牌 ===")
                    console.log(this.duck.getCardList())
                    this.currTableCard.forEach(card => this.duck.addCardList(card))
                    this.duck.shuffle();
                    this.currTableCard
                    console.log("=== 洗完牌後當前牌堆 ===")
                    console.log(this.duck.getCardList())
                }
                    

                    let drawCardResult = this.duck.drawCard()
                    currPlayer.getHandCard().setHand(drawCardResult)

                    console.log(`玩家：${currPlayer.getName()} 當前沒又可以出的牌,只能抽牌`)
                    console.log(drawCardResult)
                    console.log('=== 當起堆勝於牌數為 ===')
                    console.log(this.duck.getCardListLen())
                
            }
    }

    // 遊戲開始行為
    gameFirst():void{
        let getTopCard = this.duck.drawCard();
        this.currTableCard.push(getTopCard)
    }

    // 玩家抽牌最大張數
    protected setMaxHandCard():number{
        let drawCardMax =  5
        return drawCardMax
    }

     // 遊戲玩法
    // playingGame(currPlayerIndex:number):void{}

     //遊戲結束條件
    gameFinishingCondition():boolean{
        let isEnd = this.playerList.findIndex(player => player.getHandCard().getHandLen() === 0)
        return !isEnd
    }

     // 遊戲獲勝條件
    gameWinner():Player{
        let winnerIndex =  this.playerList.findIndex(player => player.getHandCard().getHandLen() === 0)

        return this.playerList[winnerIndex];
    }

}