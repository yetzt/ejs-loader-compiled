const ejs = require('ejs');
const terser = require('terser');

module.exports = function (source) {
	this.cacheable && this.cacheable();

	return 'module.exports = ' + terser.minify(ejs.compile(source, {
		client: true,
		filename: '.',
		webpack: this
	}).toString(), {
		output: {
			beautify: true
		}
	}).code;
		
	var result = template.toString();
};
