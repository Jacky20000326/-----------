import { Card } from "../ShowdownCard";
import { Duck } from "./Duck";
import { Player } from "./Player";

export abstract class GameTemplate{
    private playerList:Player[];
    private winner:Player[]
    private duck:Duck
    private currTableCard:Card[]
    constructor(duck:Duck,playerList:Player[]){
        this.duck = duck;
        this.playerList = playerList;
        this.currTableCard = []
    }

    start(){

    };

    protected setMaxHandCard():number{
        let defaultNum = 13
        return defaultNum
    }
    protected gameFirst():void{
    }

    // 出牌規則
    protected abstract showCard(compareCard?:Card):Card;

    // 遊戲玩法
    protected abstract playingGame():void

    //遊戲結束條件
    protected abstract gameFinishingCondition():boolean;

    // 遊戲獲勝條件
    protected abstract gameWinner()



}