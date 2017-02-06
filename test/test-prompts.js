	var jsdom = require("jsdom").jsdom;
	global.window = jsdom().defaultView;
	global.jQuery = global.$ = require("jquery"); 
	

	var assert = require('chai').assert,
		app = require('../source/js/prompts.js');

	// mock prompt:
 	global.prompt = (function(){ return "answer"; });

	describe('prompts', function() {

		var prompts = app.prompts;

		it('should return prompts', function(){

			var results = prompts.questions();
			var expected = "Event Label";
			assert.equal(expected, results[4]);

		});

		it('should return array of answers', function(){			
			var results = prompts.ask();
			var expected = "answer";		// <-mocked

			assert.equal(expected, results[1]);
		});

	});