import {UnoColor,UnoNumber} from './type/Type.js'
export class Card {
    public color:UnoColor;
    public number:UnoNumber;

    constructor(color:UnoColor,number:UnoNumber){
        this.color = color;
        this.number = number;
    }
}