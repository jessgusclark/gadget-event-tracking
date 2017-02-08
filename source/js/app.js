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

        // Collect items from form:
        var a = new compileAnswers();
        answers = a.compile();

        // Create the link code:
        var c = new eventCode();
        var code = c.getCode(answers);

        // Insert code into wysiwyg:
        console.log("code:", code);
        gadget.oucInsertAtCursor(code);
    });

});