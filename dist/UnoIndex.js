import { HumanPlayer, AiPlayer } from './UnoPlayer.js';
import { Card } from './UnoCard.js';
import { Duck } from './UnoDuck.js';
import { Game } from './UnoGame.js';
let p1 = new HumanPlayer('Herry');
let p2 = new HumanPlayer('Bonnie');
let p3 = new HumanPlayer('Cady');
let p4 = new AiPlayer('Jack');
export let PlayerList = [p1, p2, p3, p4];
let color = ['red', 'blue', 'yellow', 'green'];
let number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let AllCardList = [];
function getAllCardList() {
    for (let i = 0; i < color.length; i++) {
        for (let k = 0; k < number.length; k++) {
            let rank = color[i];
            let suit = number[k];
            AllCardList.push(new Card(rank, suit));
        }
    }
}
getAllCardList();
let completeDuck = new Duck(AllCardList);
let completeGame = new Game(completeDuck, PlayerList);
completeGame.start();
