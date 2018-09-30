import { DELAY_LONG, DELAY_MEDIUM, DELAY_SHORT, DELAY_NONE, COMMISSIONER_COLOR } from "./constants"
export class Level1 {

    constructor(terminal) {
        this.terminal = terminal;
    }

    async start() {
        await this.messageFromCommissioner("Welcome to The Game.", DELAY_LONG);
        await this.messageFromCommissioner("I am The Commissioner.", DELAY_MEDIUM);
        await this.messageFromCommissioner("Thank you for being willing to compete with other players around the world.", DELAY_SHORT);
        await this.messageFromCommissioner("Before we get started I'd like to run a quick callibration on your machine.", DELAY_MEDIUM);
        await this.messageFromCommissioner("I'll send you a series of commands", DELAY_MEDIUM);
        await this.messageFromCommissioner("Please enter each command in The Terminal followed by the return key.", DELAY_SHORT);
        await this.messageFromCommissioner("Let's get started. I'm sending the first commands now.", DELAY_SHORT);
        await this.terminal.addNewLine();

        var command = await this.messageFromCommissioner("terminit", DELAY_LONG);
        await this.terminal.waitForUserCommand(command);

        await this.terminal.addNewLine();
        await this.messageFromCommissioner("Well done. The rest of the commands are on their way.", DELAY_SHORT);
        await this.terminal.addNewLine();

        var command = await this.messageFromCommissioner("connecttwo", DELAY_LONG);
        await this.terminal.waitForUserCommand(command);
        var command = await this.messageFromCommissioner("openauth", DELAY_LONG);
        await this.terminal.waitForUserCommand(command);
        var command = await this.messageFromCommissioner("colabinit", DELAY_LONG);
        await this.terminal.waitForUserCommand(command);

    }
    

    async messageFromCommissioner(text, delay, speed) {
        var x = await this.terminal.addText(text, delay, "green", speed);
        return x;
    }
}