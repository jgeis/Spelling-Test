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
                //document.getElementById("resultHead").hidden = "true"
                //document.getElementById("resultList").hidden = "true"
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
    // Setup Scoring
    var score = 16;
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
    


    // Hide and Show
    var inputList = document.getElementById("inputList");
    inputList.hidden = "true"
    document.getElementById("goTest").hidden = "true"
    document.getElementById("headTest").hidden = "true"
    document.getElementById("resultStyle").innerHTML = ""

    // Check the words
    if (w1 !== "wear") {
        //score--;
        document.getElementById("c1").innerHTML("<str>"+ w1 +"</str> wear");
    }
    if (w2 !== "put") {
        //score--;
        document.getElementById("c2").innerHTML("<str>" + w2 + "</str> put");
    }
    if (w3 !== "end") {
        //score--;
        document.getElementById("c3").innerHTML("<str>" + w3 + "</str> end");
    }
    if (w4 !== "does") {
        //score--;
        document.getElementById("c4").innerHTML("<str>" + w4 + "</str> does");
    }
    if (w5 !== "another") {
        //score--;
        document.getElementById("c5").innerHTML("<str>" + w5 + "</str> word");
    }
    if (w6 !== "head") {
        //score--;
        document.getElementById("c6").innerHTML("<str>" + w1 + "</str> word");
    }
    if (w7 !== "bread") {
        //score--;
        document.getElementById("c7").innerHTML("<str>" + w1 + "</str> word");
    }
    if (w8 !== "dead") {
        //score--;
        document.getElementById("c8").innerHTML("<str>" + w1 + "</str> word");
    }
    if (w9 !== "sweat") {
        //score--;
        document.getElementById("c9").innerHTML("<str>" + w1 + "</str> word");
    }
    if (w10 !== "deaf") {
        //score--;
        document.getElementById("c10").innerHTML("<str>" + w1 + "</str> word");
    }
    if (w11 !== "spread") {
        //score--;
        document.getElementById("c11").innerHTML("<str>" + w1 + "</str> word");
    }
    if (w12 !== "deal") {
        //score--;
        document.getElementById("c12").innerHTML("<str>" + w1 + "</str> word");
    }
    if (w13 !== "room") {
        //score--;
        document.getElementById("c13").innerHTML("<str>" + w1 + "</str> word");
    }
    if (w14 !== "break") {
        //score--;
        document.getElementById("c14").innerHTML("<str>" + w1 + "</str> word");
    }
    if (w15 !== "weather") {
        //score--;
        document.getElementById("c15").innerHTML("<str>" + w1 + "</str> word");
    }
    if (w16 !== "soil") {
        //score--;
        document.getElementById("c16").innerHTML("<str>" + w1 + "</str> word");
    }

}