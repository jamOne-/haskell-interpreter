declare const CodeFlask;

export const flask = new CodeFlask;
flask.run('#code-editor', {
	language: 'haskell'
});

flask.update(localStorage.getItem('sourceCode') || '-- enter code here');
