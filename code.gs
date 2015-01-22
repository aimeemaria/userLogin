// Main Html Service function for GUI
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index.html');
}

// Function to validate email address and password
function login(index){
   try { 
      var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1tozVWHRnMwYfvT3f8X86pbru-yOtynApyCUO4ZIitJo/edit#gid=0');
     SpreadsheetApp.setActiveSpreadsheet(ss);
     
     var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     sheet1.activate();
     

 var range = SpreadsheetApp.getActive().getRange('C2:C4');
 var values = range.getValues();

 for (var i = 0; i < values.length; i++) {
   for (var j = 0; j < values[i].length; j++) {
     if (values[i][j]==index.email & index.pswd=="UVI-CSM") {
       return "Login was successful!" ;
     }
   }
 }
  return "Sorry, you entered an invlaid email address or password. Please refresh the page to try again." 
  } catch (error) {
    
    return error.toString();
  }
}
