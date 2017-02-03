$(document).ready(function () {
    console.log("Document Ready");

    var apihost;
    var token;
    
    gadget.ready().then(gadget.fetch).then(function () {
        
        console.log("Gadget Ready");

        // Set global variables:
        apihost = gadget.get('apihost');
        token = gadget.get('token');

    });

    $("#createLink").click(function(){
        console.log("CreateLink Clicked!");

        // Ask the questions: 
        var p = new prompts();
        var answers = p.ask();

        // Create the link code:
        var c = new eventCode();
        var code = c.getCode(answers);

        // Insert code into wysiwyg:
        console.log("code:", code);
    });

});