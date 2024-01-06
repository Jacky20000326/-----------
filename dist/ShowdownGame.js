export class Game {
    constructor(playerList, duck) {
        this.playerList = playerList;
        this.duck = duck;
    }
    setWinner(winner) {
        this.winner.push();
    }
    start() {
        // 當局比牌參與陣列
        let currTableCard = [];
        // 手牌最大數量
        let maxHandCardLen = 13;
        // 所有玩家為自己取名
        // shuffle
        this.duck.shuffle();
        // -- 抽牌階段 --
        // 玩家手爬未滿13張需抽牌
        for (let i = 0; i < this.playerList.length; i++) {
            let player = this.playerList[i];
            let { handCard } = player.hand;
            if (handCard.length < 13) {
                let drawCardResult = this.duck.drawCard();
                player.hand.setHand(drawCardResult);
            }
            // console.log(player.name +" "+'目前的手牌為')
            // console.log(handCard)
            if (i == this.playerList.length - 1 && handCard.length != maxHandCardLen) {
                i = -1;
            }
        }
        // --- 玩牌階段 ---
        // 1. 各玩家輪流出牌,但此時不知道各家的牌是什麼
        // 2. 將當局的比牌資料放入currTableCard
        // 3. 直到手上沒牌結束遊戲(default = 13局)
        console.log("=== 各家出牌,當前不顯示出什麼牌 ===");
        for (let i = 0; i < this.playerList.length; i++) {
            // for(let i = 0 ;i< this.playerList.length;i++){
            let currPlayer = this.playerList[i];
            let Card = currPlayer.show();
            // 不顯示牌
            Card.setShow(false);
            currTableCard.push({ Card, player: currPlayer });
            // }
            //  1. 顯示各家的牌
            //  2. 比牌
            console.log("=== 各家車牌完畢顯示各家出的牌後比牌 ===");
            let currRoundWinner = null; //當局獲勝者
            if (currTableCard.length == this.playerList.length) {
                for (let i = 0; i < currTableCard.length; i++) {
                    let currCardInfo = currTableCard[i];
                    // 顯示牌
                    currCardInfo.Card.setShow(true);
                    if (!currRoundWinner) {
                        currRoundWinner = currCardInfo;
                    }
                    else {
                        let compareResult = currRoundWinner.Card.compare(currCardInfo.Card);
                        currRoundWinner = compareResult ? currRoundWinner : currCardInfo;
                    }
                }
                // 比牌結果
                console.log("=== 各家比牌完顯示結果,贏家為：===");
                console.log(currRoundWinner);
                // 勝出後count ++
                currRoundWinner.player.gainCount();
                console.log(this.playerList);
                // 清空當局比牌參與陣列
                currTableCard = [];
            }
            // 遊戲結束條件：最後一位玩家手牌為0時
            if (i == this.playerList.length - 1 && currPlayer.hand.handCard.length !== 0) {
                i = 0;
            }
            else {
                // 獲勝條件
                //...
            }
        }
        // 設定最後贏家
    }
}
