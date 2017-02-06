var jsdom = require("jsdom").jsdom;
global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert,
	app = require('../source/js/eventCode.js');


describe('event code', function() {

	var eventCode = app.eventCode;

	it('should return full code with event when an array', function(){

		var result = eventCode.getCode(["http://unco.edu", "taco", "cat", "act", "lbl"]);
		var expected = '<a href="http://unco.edu" onClick="ga(\'send\', {   hitType: \'event\',   eventCategory: \'cat\',   eventAction: \'act\',   eventLabel: \'lbl\' });">taco</a>';

		assert.equal( expected, result );

	});

	it('should return full code with event when passed variables', function(){
		var result = eventCode.getFullCode("http://unco.edu", "taco", "cat", "act", "lbl");
		var expected = '<a href="http://unco.edu" onClick="ga(\'send\', {   hitType: \'event\',   eventCategory: \'cat\',   eventAction: \'act\',   eventLabel: \'lbl\' });">taco</a>';

		assert.equal( expected, result );

	});

	it('should return event code', function(){

		var result = eventCode.getEventCode("cat", "act", "lbl");
		var expected = "ga('send', {   hitType: 'event',   eventCategory: 'cat',   eventAction: 'act',   eventLabel: 'lbl' });";
		
		assert.equal( expected, result );

	});

	it('should return event code and encode qutotes', function(){
		var result = eventCode.getEventCode("cat's", "act's", "lbl's");
		var expected = "ga('send', {   hitType: 'event',   eventCategory: 'cats',   eventAction: 'acts',   eventLabel: 'lbls' });";

		assert.equal( expected, result );

	});


});