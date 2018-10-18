var eventCode = (function(){

	return {

		getCode: function(array){
			//incomming array: url, text, category, action, label
			return this.getFullCode(array[0], array[1], array[2], array[3], array[4]);
		},

		getFullCode : function(url, text, category, action, label){
			return '<a href="' + url + '" class="gtmclick" onClick="' + this.getEventCode(category, action, label) + '">' + text + '</a>';
		},

		getEventCode : function(category, action, label){

			var onClick = "ga('send', {   hitType: 'event',   eventCategory: '" 
							+ category.replace("'", "") + "',   eventAction: '" 
							+ action.replace("'", "") + "',   eventLabel: '" 
							+ label.replace("'", "") + "' });";

			return onClick;

		}

	}

});

// for testing:
try{
	module.exports.eventCode = eventCode();
}catch(err){}
