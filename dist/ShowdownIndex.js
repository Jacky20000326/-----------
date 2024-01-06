import { AiPlayer, HumanPlayer } from "./ShowdownPlayer.js";
import { Duck } from "./ShowdownDuck.js";
import { Card } from "./ShowdownCard.js";
import { Game } from "./ShowdownGame.js";
let p1 = new HumanPlayer('Herry');
let p2 = new HumanPlayer('Bonnie');
let p3 = new HumanPlayer('Cady');
let p4 = new AiPlayer('Jack');
export let PlayerList = [p1, p2, p3, p4];
// 所有撲克牌 (花色)(數字)
let rankCategory = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K'];
let suitCategory = ['club', 'diamond', 'heart', 'spade'];
let AllCardList = [];
function getAllCardList() {
    for (let i = 0; i < rankCategory.length; i++) {
        for (let k = 0; k < suitCategory.length; k++) {
            let rank = rankCategory[i];
            let suit = suitCategory[k];
            AllCardList.push(new Card(rank, suit));
        }
    }
}
function init() {
    getAllCardList();
}
init();
let completeDuck = new Duck(AllCardList);
let completeGame = new Game(PlayerList, completeDuck);
completeGame.start();
