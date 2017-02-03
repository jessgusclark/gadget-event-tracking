var prompts = (function(){

	return {

		questions: function(){

			var questionArray = [
				"Link URL",
				"Link Text",
				"Event Category",
				"Event Action",
				"Event Label"
			];

			return questionArray;

		},

		ask: function(){

			var q = this.questions();
			var answers = [];

			for (var i in q) {
				var promptWindow = prompt("What is the " + q[i] + "?", "");
			    answers.push(promptWindow);
			}
			return answers;
		}

	}

});

// for testing:
try{
	module.exports.prompts = prompts();
}catch(err){}
