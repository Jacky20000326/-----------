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
        let currRoundCompare = [];
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
        // 2. 將當局的比牌資料放入currRoundCompare
        // 3. 直到手上沒牌結束遊戲(default = 13局)
        console.log("=== 各家出牌,當前不顯示出什麼牌 ===");
        for (let gameCount = 0; gameCount < 13; gameCount++) {
            for (let i = 0; i < this.playerList.length; i++) {
                let Card = this.playerList[i].show();
                // 不顯示牌
                Card.setShow(false);
                currRoundCompare.push({ Card, player: this.playerList[i] });
            }
            //  1. 顯示各家的牌
            //  2. 比牌
            console.log("=== 各家車牌完畢顯示各家出的牌後比牌 ===");
            let currRoundWinner = null; //當局獲勝者
            for (let i = 0; i < currRoundCompare.length; i++) {
                let currCardInfo = currRoundCompare[i];
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
            currRoundCompare = [];
        }
        // 設定最後贏家
    }
}
