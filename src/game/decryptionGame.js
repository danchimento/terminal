import { DELAY_LONG, DELAY_MEDIUM, DELAY_SHORT, DELAY_NONE, COMMISSIONER_COLOR, TERMINAL_MODE_KEYPRESS, TERMINAL_MODE_RETURN } from "./constants"
export class DecryptionGame {

    constructor(terminal, secret) {
        this.terminal = terminal;
        this.secret = secret;
    }
    
    async start() {
        this.terminal.mode = TERMINAL_MODE_KEYPRESS;
        
        var mask = "";

        for (var i = 0; i < this.secret.length; i ++) {
            mask += "X";
        }

        await this.terminal.addNewLine();
        var maskedElement = await this.terminal.addText(mask);


        this.terminal.mode = TERMINAL_MODE_RETURN;
    }
}