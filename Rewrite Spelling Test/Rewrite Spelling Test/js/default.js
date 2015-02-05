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
    var w2 = document.getElementById("w2").value;
    var w3 = document.getElementById("w3").value;
    var w4 = document.getElementById("w4").value;
    var w5 = document.getElementById("w5").value;
    var w6 = document.getElementById("w6").value;
    var w7 = document.getElementById("w7").value;
    var w8 = document.getElementById("w8").value;
    var w9 = document.getElementById("w9").value;
    var w10 = document.getElementById("w10").value;
    var w11 = document.getElementById("w11").value;
    var w12 = document.getElementById("w12").value;
    var w13 = document.getElementById("w13").value;
    var w14 = document.getElementById("w14").value;
    var w15 = document.getElementById("w15").value;
    var w16 = document.getElementById("w16").value;
    print();

}
