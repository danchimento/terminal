import Typed from "typed.js";

export class Terminal {

    constructor(element) {
        this.cursorElement = '<span id="cursor">_</span>';
        this.textElement = '<div>{{text}}</div>';

        this.terminalElement = document.getElementById(element);
    }

    addText(text, delay) {
        setTimeout(() => {

            var options = {
                strings: [this.textElement.replace("{{text}}", text)],
                typeSpeed: 40,
                showCursor: false
            }
            
            var textElement = document.createElement("div");
            this.terminalElement.appendChild(textElement);

            var typed = new Typed(textElement, options);
        }, delay ? delay : 0)
    }
}