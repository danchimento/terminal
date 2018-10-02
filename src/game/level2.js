import { DELAY_LONG, DELAY_MEDIUM, DELAY_SHORT, DELAY_NONE, COMMISSIONER_COLOR } from "./constants"
import { DecryptionGame } from "./decryptionGame";
export class Level2 {

    constructor(terminal) {
        this.terminal = terminal;
    }

    async start() {
        await this.messageFromCommissioner("Perfect.", DELAY_LONG);
        await this.messageFromCommissioner("To win the game you must unlock three doors.", DELAY_MEDIUM);
        await this.messageFromCommissioner("The first door is a simple decryption. Try 'M' to get started", DELAY_MEDIUM);
        

        var decryptionGame = new DecryptionGame(this.terminal, "MAUGRYYI");
        await decryptionGame.start();
    }
    

    async messageFromCommissioner(text, delay, speed) {
        var x = await this.terminal.addText(text, delay, "green", speed);
        return x;
    }
}