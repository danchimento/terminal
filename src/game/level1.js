import { DELAY_LONG, DELAY_MEDIUM, DELAY_SHORT, DELAY_NONE, COMMISSIONER_COLOR } from "./constants"
export class Level1 {

    constructor(terminal) {
        this.terminal = terminal;
    }

    async start() {
        await this.messageFromCommissioner("Welcome to The Game.", 4000);
    }
    

    async messageFromCommissioner(text, delay, speed) {
        await this.terminal.addText(text, delay, "green", speed);
    }
}