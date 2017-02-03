var eventCode = (function(){

	return {

		getFullCode : function(text, category, action, label){
			return '<a href="#" onClick="' + this.getEventCode(category, action, label) + '">' + text + '</a>';
		},

		getEventCode : function(category, action, label){

			var onClick = "ga('send', {   hitType: 'event',   eventCategory: '" + category + "',   eventAction: '" + action + "',   eventLabel: '" + label + "' });";

			return onClick;

		}

	}

});

// for testing:
try{
	module.exports.eventCode = eventCode();
}catch(err){}
