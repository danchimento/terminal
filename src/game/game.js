import { Terminal } from "./terminal";

export default class Game {

    constructor(element) {
        this.terminal = new Terminal(element);

        this.initialize();
    }

    async initialize() {
        await this.terminal.addText("Initializing");
        await this.terminal.addText("Opening connection at port 5561", 2000);
        await this.terminal.addText("Connection open", 3000);
        await this.terminal.addNewLine();
        await this.terminal.addNewLine();
        await this.terminal.addNewLine();
        await this.terminal.addText("Welcome to The Game.", 4000);
    }
    
}