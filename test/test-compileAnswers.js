var jsdom = require("jsdom").jsdom;
global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert,
	app = require('../source/js/compileAnswers.js');


describe('event code', function() {

	var compileAnswers = app.compileAnswers;

	it('should return an array of answers', function(){

		var result = compileAnswers.compile();
		var expected = ["url", "text", "cat", "act", "lbl"];

		assert.equal( expected, result );

	});


});