import { Card } from './UnoCard.js'
import { Duck as ModelDuck } from './model/Duck.js';
export class Duck extends ModelDuck<Card>{

    constructor(cardList: Card[]){
        super(cardList)

    }

}
