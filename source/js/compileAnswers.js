var compileAnswers = (function(){

	return {

		compile: function(){

			var array = [
				$("#url").val(),
				$("#link-text").val(),
				$("#category").val(),
				$("#action").val(),
				$("#label").val()
			];

			return array;

		}

	}

});

// for testing:
try{
	module.exports.compileAnswers = compileAnswers();
}catch(err){}
