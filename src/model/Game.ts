
import { Duck } from "./Duck";
import { Player as modelPlayer} from "./Player";

export abstract class GameTemplate<Player extends modelPlayer<Card>,Card>{
    protected playerList:Player[];
    protected winner:Player[]
    protected duck:Duck<Card>
    constructor(duck:Duck<Card>,playerList:Player[]){
        this.duck = duck;
        this.playerList = playerList;
        this.winner = []

    }

    start(){
        this.playerNameHimself()
        this.shuffle()
        this.drawCard()
        this.gameFirst()
        this.gameStart()

    };

    // 玩家取名
    private playerNameHimself():void{
        for(let i = 0; i<this.playerList.length;i++){
            let player = this.playerList[i]
            player.NameHimself(`player${i + 1}`)
        }
    }


    // 抽牌
    private drawCard():void{
        for(let i = 0 ;i< this.playerList.length;i++){
            let player  = this.playerList[i]
            let handCard = player.getHandCard();
            if(handCard.getHandLen() < this.setMaxHandCard()){
                let drawCardResult = this.duck.drawCard()
                handCard.setHand(drawCardResult)
            }
            if(i == this.playerList.length-1 && handCard.getHandLen() != this.setMaxHandCard()){
                i = -1
            }
        }
        
    }

    // 洗牌
    private shuffle():void{
        this.duck.shuffle()
        console.log("=== 洗牌 ===")
        console.log(this.duck.getCardList())
    }

    private gameStart():void{
        for(let i = 0; i<this.playerList.length;i++){
            this.playingGame(i)
            if(this.gameFinishingCondition()){
                this.setWinner(this.gameWinner())
                return
            }
        }
        this.gameStart()
        
    }

    // 獲取贏家

    setWinner(winner:Player){
        this.winner.push(winner)
        console.log("=== 贏家是： ===")
        console.log(winner)
    }

     // 抽牌最大張數
    protected setMaxHandCard(){
        let defaultNum = 13
        return defaultNum
    }

    // 遊戲開始操作
    protected gameFirst():void{
        // 預設無動作
    }



    // 遊戲玩法
    protected abstract playingGame(currPlayerIndex:number):void

    //遊戲結束條件
    protected abstract gameFinishingCondition():boolean;

    // 遊戲獲勝條件
    protected abstract gameWinner()



}