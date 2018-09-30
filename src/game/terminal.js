import Typed from "typed.js";
import { TERMINAL_TEXT_COLOR } from "./constants.js";

export class Terminal {

    constructor(element) {
        this.cursorElement = '<span id="cursor">_</span>';
        this.textElement = '<div>{{text}}</div>';

        this.terminalElement = document.getElementById(element);
    }

    addNewLine() {
        var textElement = document.createElement("br");
        this.terminalElement.appendChild(textElement);
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
            var typeSpeed = speed ? speed : 40;
            var lineTypeTime = typeSpeed * text.length;

            var p = new Promise((resolve) => {
                
                var options = {
                    strings: [this.textElement.replace("{{text}}", text)],
                    typeSpeed: typeSpeed,
                    showCursor: false
                }
                
                var textElement = document.createElement("div");
                textElement.style.color = textColor;
                this.terminalElement.appendChild(textElement);
                
                new Typed(textElement, options);
                
                setTimeout(() => {
                    resolve();
                }, lineTypeTime);
            });

            return p;
        }

        await delay(delayTime);
        await type(speed);
    }
}