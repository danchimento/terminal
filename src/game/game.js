import { Terminal } from "./terminal";
import { Level1 } from "./level1";
import { DELAY_LONG, DELAY_MEDIUM, DELAY_SHORT, DELAY_NONE } from "./constants"

export default class Game {

    constructor(element) {
        this.terminal = new Terminal(element);

        this.start();
    }

    async start() {
        await this.terminal.addText("Initializing");
        await this.terminal.addText("Opening connection at port 5561", DELAY_MEDIUM);
        await this.terminal.addText("Connection open", DELAY_MEDIUM);
        await this.terminal.addNewLine();
        await this.terminal.addNewLine();
        await this.terminal.addNewLine();

        var level1 = new Level1(this.terminal);

        await level1.start();
    }
    
}