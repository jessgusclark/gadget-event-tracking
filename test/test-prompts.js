	var jsdom = require("jsdom").jsdom;
	global.window = jsdom().defaultView;
	global.jQuery = global.$ = require("jquery"); 


	var assert = require('chai').assert
		promptjs = require('../source/js/prompts.js');


	describe('event code', function() {

		it('should return true', function(){
			
			assert.equal(true, true);

		});

	});