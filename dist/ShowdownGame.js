import { GameTemplate } from "./model/Game.js";
export class Game extends GameTemplate {
    constructor(playerList, duck) {
        super(duck, playerList);
        this.currTableCard = [];
        this.currRoundWinner = null;
    }
    // 遊戲玩法
    playingGame(currPlayerIndex) {
        // 當局比牌參與陣列
        // let currTableCard = [];
        // --- 玩牌階段 ---
        // 1. 各玩家輪流出牌,但此時不知道各家的牌是什麼
        // 2. 將當局的比牌資料放入currTableCard
        // 3. 直到手上沒牌結束遊戲(default = 13局)
        // for(let i = 0 ;i< this.playerList.length;i++){
        let currPlayer = this.playerList[currPlayerIndex];
        let Card = currPlayer.getHandCard().showCard(0);
        console.log(` === 玩家： ${currPlayer.getName()} 出了: ===`);
        console.log(Card);
        // 不顯示牌
        this.currTableCard.push({ Card, player: currPlayer });
        // }
        //  1. 顯示各家的牌
        //  2. 比牌
        if (this.currTableCard.length == this.playerList.length) {
            console.log("=== 當局各家玩家都已出牌結束 , 當前牌桌上有： ===");
            console.log(this.currTableCard);
            for (let i = 0; i < this.currTableCard.length; i++) {
                let currCardInfo = this.currTableCard[i];
                // 顯示牌
                // currCardInfo.Card.setShow(true)
                if (!this.currRoundWinner) {
                    this.currRoundWinner = currCardInfo;
                }
                else {
                    let compareResult = this.currRoundWinner.Card.compare(currCardInfo.Card);
                    this.currRoundWinner = compareResult ? this.currRoundWinner : currCardInfo;
                }
            }
            console.log("=== 各家比牌完顯示結果,贏家為：===");
            console.log(this.currRoundWinner);
            // 勝出後count ++
            console.log("=== 勝出後贏家count ++ ===");
            this.currRoundWinner.player.gainCount();
            // 清空當局比牌參與陣列
            this.currTableCard = [];
            this.currRoundWinner = null;
        }
    }
    // 抽牌最大張數
    setMaxHandCard() {
        return 13;
    }
    // 遊戲開始操作
    gameFirst() {
        // 預設無動作
    }
    //遊戲結束條件
    gameFinishingCondition() {
        // 遊戲結束條件：4位玩家手牌為0時
        let isEnd = this.playerList.findIndex(player => player.getHandCard().getHandLen() == 0);
        return !isEnd;
    }
    // 遊戲獲勝條件
    gameWinner() {
        let winner = this.playerList.sort((pre, curr) => curr.getCount() - pre.getCount())[0];
        return winner;
    }
}
;
