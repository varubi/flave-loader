const flave = require('flave');
const config = {
    quote: '\'',
    stripcomments: true,
    output: '$O',
    trim: true,
    newlines: false,
    export: false,
    format: false,
}

module.exports = function flaveLoader(source) {
    this.async();
    this.callback(null, flave.transpile(source, config))
};