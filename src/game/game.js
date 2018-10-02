import { Terminal } from "./terminal";
import { Level1 } from "./level1";
import { Level2 } from "./level2";
import { DELAY_LONG, DELAY_MEDIUM, DELAY_SHORT, DELAY_NONE, TYPE_SPEED, TERMINAL_TEXT_COLOR } from "./constants"

export default class Game {

    constructor(element) {
        this.terminal = new Terminal();

        document.documentElement.margin = "0px";
        document.documentElement.padding = "0px";
        document.documentElement.height = "100%";

        document.body.style.background = "#222";
        document.body.style.display = "flex";
        document.body.style.justifyContent = "center";
        document.body.style.alignItems = "middle";

        this.start();
    }

    async start() {
        await this.terminal.addText("Initializing", DELAY_NONE );
        await this.terminal.addText("Opening connection at port 5561", DELAY_MEDIUM);
        await this.terminal.addText("Connection open", DELAY_MEDIUM);
        await this.terminal.addNewLine();
        await this.terminal.addNewLine();
        await this.terminal.addNewLine();

        var level1 = new Level1(this.terminal);
        var level2 = new Level2(this.terminal);

     //   await level1.start();
        await level2.start();
    }
    
}