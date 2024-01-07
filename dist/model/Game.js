export class GameTemplate {
    constructor(duck, playerList) {
        this.duck = duck;
        this.playerList = playerList;
        this.winner = [];
    }
    start() {
        this.playerNameHimself();
        this.shuffle();
        this.drawCard();
        this.gameFirst();
        this.gameStart();
    }
    ;
    // 玩家取名
    playerNameHimself() {
        for (let i = 0; i < this.playerList.length; i++) {
            let player = this.playerList[i];
            player.NameHimself(`player${i + 1}`);
        }
    }
    // 抽牌
    drawCard() {
        for (let i = 0; i < this.playerList.length; i++) {
            let player = this.playerList[i];
            let handCard = player.getHandCard();
            if (handCard.getHandLen() < this.setMaxHandCard()) {
                let drawCardResult = this.duck.drawCard();
                handCard.setHand(drawCardResult);
            }
            if (i == this.playerList.length - 1 && handCard.getHandLen() != this.setMaxHandCard()) {
                i = -1;
            }
        }
    }
    // 洗牌
    shuffle() {
        this.duck.shuffle();
        console.log("=== 洗牌 ===");
        console.log(this.duck.getCardList());
    }
    gameStart() {
        for (let i = 0; i < this.playerList.length; i++) {
            this.playingGame(i);
            if (this.gameFinishingCondition()) {
                this.setWinner(this.gameWinner());
                return;
            }
        }
        this.gameStart();
    }
    // 獲取贏家
    setWinner(winner) {
        this.winner.push(winner);
        console.log("=== 贏家是： ===");
        console.log(winner);
    }
    // 抽牌最大張數
    setMaxHandCard() {
        let defaultNum = 13;
        return defaultNum;
    }
    // 遊戲開始操作
    gameFirst() {
        // 預設無動作
    }
}
