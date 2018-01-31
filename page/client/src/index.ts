import "./prismjs/prism.js";
import "./codeflask/src/codeflask.js"

import { SocketManager } from "./sockets";
import { flask } from "./flask";

const socketManager = new SocketManager();
let sourceCode = '';

flask.onUpdate(code => { 
	sourceCode = code;
	localStorage.setItem('sourceCode', sourceCode);
});

document.onkeydown = (event: KeyboardEvent) => {
	if (event.keyCode === 116) {
		event.preventDefault();
		event.stopPropagation();
		socketManager.sendCode(sourceCode);
	}
};
