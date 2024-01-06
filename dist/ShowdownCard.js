export class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    setShow(isShow) {
        this.isShow = isShow;
    }
    compare(vsCard) {
        // 先比較牌的階級，此時階級較大者勝，如果階級相同則比較花色，此時花色較大者勝,回傳最大卡牌。
        let allRank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let allSuit = ["Club", "Diamond", "Heart", "Spade"];
        // myself
        let myselfRankIndex = allRank.findIndex(item => item == this.rank);
        let myselfSuitIndex = allSuit.findIndex(item => item == this.suit);
        // vsCard
        let vsCardRankIndex = allRank.findIndex(item => item == vsCard.rank);
        let vsCardSuitIndex = allSuit.findIndex(item => item == vsCard.suit);
        // calculate result
        let resultRankIndex = myselfRankIndex - vsCardRankIndex;
        let resultSuitIndex = myselfSuitIndex - vsCardSuitIndex;
        if (resultRankIndex == 0) {
            return resultSuitIndex > 0;
        }
        return resultRankIndex > 0;
    }
}
