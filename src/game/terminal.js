import Typed from "typed.js";
import { TERMINAL_TEXT_COLOR, TYPE_SPEED } from "./constants.js";

export class Terminal {

    constructor() {
        this.cursorElement = '<span id="cursor">_</span>';
        this.textElement = '<div>{{text}}</div>';

        this.inputElement = document.createElement('input');
        this.inputElement.style.background = "none";
        this.inputElement.style.color = "white";
        this.inputElement.style.fontFamily = "Courier New, Courier, monospace";
        this.inputElement.style.fontSize = "16px";
        this.inputElement.style.border = "none";
        this.inputElement.style.outline = "none";
        this.inputElement.style.width = "670px";
        this.inputElement.autofocus = true;
        this.inputElement.spellcheck = false;
        this.inputElement.onkeydown = (e) => { this.onInputKeyDown(e) };
        
        var inputContainer = document.createElement('div');
        inputContainer.style.position = "absolute";
        inputContainer.style.bottom = "0";
        inputContainer.style.left = "0";
        inputContainer.style.padding = "10px";
        inputContainer.style.marginRight = "10px";
        inputContainer.style.width = "700px";
        inputContainer.innerHTML = '> ';
        inputContainer.appendChild(this.inputElement);

        this.contentElement = document.createElement("div");
        this.contentElement.style.height = "200px";
        this.contentElement.style.overflowY = "hidden";
        this.contentElement.style.color = "white";
        this.contentElement.style.fontFamily = "Courier New, Courier, monospace";
        this.contentElement.style.lineHeight = "20px";
        this.contentElement.style.fontSize = "16px";

        this.terminalElement = document.createElement('terminal');
        this.terminalElement.style.background = "#111";
        this.terminalElement.style.width = "700px";
        this.terminalElement.style.height = "400px";
        this.terminalElement.style.borderRadius = "10px";
        this.terminalElement.style.marginTop = "100px";
        this.terminalElement.style.padding = "20px";
        this.terminalElement.style.position = "relative";
        this.terminalElement.style.color = "white";

        this.terminalElement.appendChild(inputContainer);
        this.terminalElement.appendChild(this.contentElement);

        document.body.appendChild(this.terminalElement);
    }

    userCommand(command) {
        this.userCommand = command;
    }

    waitForUserCommand(command) {
        var p = new Promise((resolve) => {
            this.userCommandPoll = setInterval(() => {
                if (this.userCommand == command.textContent) {
                    resolve();
                    clearInterval(this.userCommandPoll);
                }
            }, 10);
        });

        return p;
    }

    onInputKeyDown(e) {
        if (e.keyCode == 13) {
            this.userCommand = this.inputElement.value;
            this.inputElement.value = '';
        }
    }

    addNewLine() {
        var textElement = document.createElement("br");
        this.contentElement.appendChild(textElement);
    }

    addElementToTerminal(element) {
        this.contentElement.appendChild(element);
        
        setTimeout(() => {
            this.contentElement.scrollTop = 999999
        }, 30);
    }

    async addText(text, delay, color, speed) {
        
        var textColor = color ? color : "#FFF";
        var delayTime = delay ? delay : 0;

        var delay = (delayTime) => {
            var p = new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, delayTime);
            });

            return p;
        }

        var type = (speed) => {
            var typeSpeed = speed ? speed : TYPE_SPEED;
            var lineTypeTime = typeSpeed * text.length;

            var p = new Promise((resolve) => {
                
                var options = {
                    strings: [this.textElement.replace("{{text}}", text)],
                    typeSpeed: typeSpeed,
                    showCursor: false
                }
                
                var textElement = document.createElement("div");
                textElement.textContent = "asdf";
                textElement.style.color = textColor;
                this.addElementToTerminal(textElement);
                
                new Typed(textElement, options);
                
                setTimeout(() => {
                    resolve(textElement);
                }, lineTypeTime);
            });

            return p;
        }

        await delay(delayTime);
        var textElement = await type(speed);

        return textElement;
    }
}