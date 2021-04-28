var startForm = document.getElementById("START_FORM");
var putawayStart = document.getElementById("PUTAWAY_START");


function afterStartPutaway(){
    document.open("putaway_TO.html");
}

startForm.addEventListener("sbtStartPutaway", afterStartPutaway)

/*function doGet(e){
    var params = JSON.stringify(e);
    console.log(params);
    console.log(e.parameter.page);
    if(!e.parameter.page){
      return HtmlService.createTemplateFromFile("MAIN_MENU").evaluate();
    }
    else if(e.parameter['page'] == 'Link1'){
      return HtmlService.createTemplateFromFile("PUTAWAY_TO").evaluate();
    }
    else if(e.parameter['page'] == 'Main'){
      return HtmlService.createTemplateFromFile("MAIN_MENU").evaluate();
    }
  }
  
    function getUrl() {
      var url = ScriptApp.getService().getUrl();
      return url;
    }
  
  function include(filename){
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  }
  
  function addMenu(){
    var menu = SpreadsheetApp.getUi().createMenu('Custom');
    menu.addItem('add', 'startForm');
    menu.addToUi;
  }
  
  function startForm(){
    var form = HtmlService.createHtmlOutputFromFile('Custom');
    SpreadsheetApp.getUi().showModalDialog(form, 'ALERT_FORM')
  }
  
  function onOpen(){
    addMenu();
  }*/