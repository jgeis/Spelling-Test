// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();
var testStart = function () {
    // Get values of the text boxes
    var w1 = document.getElementById("w1").value;
    console.log("Successfully imported w1!");
    var w2 = document.getElementById("w2").value;
    console.log("Successfully imported w2!");
    var w3 = document.getElementById("w3").value;
    console.log("Successfully imported w3!");
    var w4 = document.getElementById("w4").value;
    console.log("Successfully imported w4!");
    var w5 = document.getElementById("w5").value;
    console.log("Successfully imported w5!");
    var w6 = document.getElementById("w6").value;
    console.log("Successfully imported w6!");
    var w7 = document.getElementById("w7").value;
    console.log("Successfully imported w7!");
    var w8 = document.getElementById("w8").value;
    console.log("Successfully imported w8!");
    var w9 = document.getElementById("w9").value;
    console.log("Successfully imported w9!");
    var w10 = document.getElementById("w10").value;
    console.log("Successfully imported w10!");
    var w11 = document.getElementById("w11").value;
    console.log("Successfully imported w11!");
    var w12 = document.getElementById("w12").value;
    console.log("Successfully imported w12!");
    var w13 = document.getElementById("w13").value;
    console.log("Successfully imported w13!");
    var w14 = document.getElementById("w14").value;
    console.log("Successfully imported w14!");
    var w15 = document.getElementById("w15").value;
    console.log("Successfully imported w15!");
    var w16 = document.getElementById("w16").value;
    console.log("Successfully imported w16!");


    // Hide the text boxes
    var inputList = document.getElementById("inputList");
    inputList.hidden = "true"
    document.getElementById("goTest").hidden = "true"
    document.getElementById("headTest").hidden = "true"

    // Check the words
    if (w1 !== "") {
        
    }
    if (w2 !== "") {

    }
    if (w3 !== "") {

    }
    if (w4 !== "") {

    }
    if (w5 !== "") {

    }
    if (w6 !== "") {

    }
    if (w7 !== "") {

    }
    if (w8 !== "") {

    }
    if (w9 !== "") {

    }
    if (w10 !== "") {

    }
    if (w11 !== "") {

    }
    if (w12 !== "") {

    }
    if (w13 !== "") {

    }
    if (w14 !== "") {

    }
    if (w15 !== "") {

    }
    if (w16 !== "") {

    }
}
