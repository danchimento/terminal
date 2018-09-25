import { Terminal } from "./terminal";

export default class Game {

    constructor(element) {
        this.terminal = new Terminal(element);

        this.terminal.addText("Initializing");
        this.terminal.addText("Opening connection at port 5561", 1000);
    }

    
}