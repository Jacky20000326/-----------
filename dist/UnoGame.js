export class Game {
    constructor(duck, playerList) {
        this.duck = duck;
        this.playerList = playerList;
        this.currTableCard = [];
    }
    start() {
        // 洗牌
        this.duck.shuffle();
        let maxHandCardLen = 5;
        // 每人輪流各抽一張直到手上有五張手牌為止
        for (let i = 0; i < this.playerList.length; i++) {
            let getCard = this.duck.drawCard();
            let currPlayer = this.playerList[i];
            let { hand } = currPlayer.handCard;
            currPlayer.handCard.setHand(getCard);
            if (hand.length < maxHandCardLen) {
                let drawCardResult = this.duck.drawCard();
                currPlayer.handCard.setHand(drawCardResult);
            }
            // console.log(player.name +" "+'目前的手牌為')
            // console.log(handCard)
            if (i == this.playerList.length - 1 && hand.length != maxHandCardLen) {
                i = -1;
            }
        }
        console.log("=== 玩家抽牌後手牌 ===");
        console.log(this.playerList);
        // 玩牌階段
        // 翻第一張牌
        let getTopCard = this.duck.openTopCard();
        this.currTableCard.push(getTopCard);
        console.log('翻第一張牌');
        console.log(getTopCard);
        // 玩家開始輪流出牌
        for (let i = 0; i < this.playerList.length; i++) {
            let currPlayer = this.playerList[i];
            let currHandCard = currPlayer.showCard(this.currTableCard[this.currTableCard.length - 1]);
            if (currHandCard) {
                this.currTableCard.push(currHandCard);
                console.log(`玩家：${currPlayer.name} 出牌:`);
                console.log(currHandCard);
            }
            else {
                // 需判斷duck裡面是否還有牌,若牌則會先把檯面上除了最新的牌以外的牌放回牌堆中進行洗牌。
                if (this.duck.cardList.length == 0) {
                    console.log("=== 牌堆內沒牌拉,將桌上的牌放入牌堆並重新洗牌 ===");
                    console.log(this.duck.cardList);
                    this.currTableCard.forEach(card => this.duck.addCardList(card));
                    this.duck.shuffle();
                    this.currTableCard;
                    console.log("=== 洗完牌後當前牌堆 ===");
                    console.log(this.duck.cardList);
                }
                let drawCardResult = this.duck.drawCard();
                currPlayer.handCard.setHand(drawCardResult);
                console.log(`玩家：${currPlayer.name} 當前沒又可以出的牌,只能抽牌`);
                console.log(drawCardResult);
                console.log('=== 當起堆勝於牌數為 ===');
                console.log(this.duck.cardList.length);
            }
            // 遊戲結束條件：有玩家手牌數為0時
            if (i == this.playerList.length - 1 && currPlayer.handCard.hand.length != 0) {
                i = 0;
            }
            else {
                // 獲勝條件
                this.setWinner(currPlayer);
                console.log('=== 獲勝主為 ===');
                console.log(this.winner);
            }
        }
    }
    setWinner(player) {
        this.winner = player;
    }
}
