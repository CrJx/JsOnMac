// Enables displayDialog method for JXA.
var app = Application.currentApplication()
app.includeStandardAdditions = true

// A dialog window asking for an input value.
var theAsk = app.displayDialog('Set the Timer:', {defaultAnswer: ''}); 
var countdownTime = theAsk.textReturned;
app.displayDialog('Timer set for ' + countdownTime + ' minutes.' , {givingUpAfter: 3} /* Window auto-close after 3 seconds. */);
delay(countdownTime * 60); 
// A sidebar notification appears when the cutoff is met.
app.displayNotification("Time's up!", {withTitle: 'Timer', soundName: 'glass'}); 
