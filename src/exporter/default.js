var Path = require('path-extra');
var Fs   = require('fs');
var _    = require('underscore');

module.exports = function (options) {
    this.export = function (data, opts) {
	if (opts && typeof opts.callback != "undefined")
            opts.callback(null, true);
	return true;
    }
}