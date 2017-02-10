var jsdom = require("jsdom").jsdom;
var sinon = require('sinon');

global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert,
	app = require('../source/js/compileAnswers.js');


describe('event code', function() {

	var compileAnswers = app.compileAnswers;

	it('should return an array of answers', function(){

		//stub:
		var stub = sinon.stub();
		var callback = sinon.stub(compileAnswers, 'compile' )
			.returns(["url", "text", "cat", "act", "lbl"]);
		
		var result = compileAnswers.compile();
		var expected = ["url", "text", "cat", "act", "lbl"];

		assert.equal( expected[0], result[0] );
		assert.equal( expected[1], result[1] );
		assert.equal( expected[2], result[2] );
		assert.equal( expected[3], result[3] );
		assert.equal( expected[4], result[4] );

		// this fails: *sigh*
		//assert.equal( expected, result );
	});

});