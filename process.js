var url = "https://docs.google.com/spreadsheets/d/1s8l-8N8dI-GGJi_mmYs2f_88VBcnzWfv3YHgk1HvIh0/edit?usp=sharing";
var sprSRCH = SpreadsheetApp.openByUrl(url);
let sheetSRCHSSCC = sprSRCH.getSheetByName("PUTAWAY_TO");
let sheetTSD = sprSRCH.getSheetByName("ПРИВЯЗКА МЕСТ");
let findingRSSCC = sheetSRCHSSCC.getRange("M:M").getValues();

  function scannerWorking(userInfo) {

    let valToFind = userInfo.zSSCC;

    for (let i = 0; i < findingRSSCC.length; i++){
      if(findingRSSCC[i].indexOf(valToFind)!==-1){
        row = i + 1;
        sheetSRCHSSCC.getRange(row, 15).setValue(userInfo.zPLACE);
        sheetSRCHSSCC.getRange(row, 16).setValue(new Date());
        sheetSRCHSSCC.getRange(row, 17).setValue(userInfo.zLOGIN);
        break;
      }
    };
  }

function GetQ(userInfo){

/*userInfo= {};

userInfo.zLOGIN = "0001";
userInfo.zSSCC = "00340455750112158498";
userInfo.zPLACE = "sddssdsdsd";*/
  
  var searchArray = sheetSRCHSSCC.getRange("M2:M").getValues();
  var QPLANv = searchArray.filter(String).length;
  var myArray = sheetSRCHSSCC.getRange("O2:O" + (QPLANv + 1)).getValues();
  
  var QFACTv = 0;
   for (i = 0; i < myArray.length; i++) { 
     if (myArray[i] != "") {
       QFACTv += 1
     }
   }
   
   var row = 0;
   let valToFind = userInfo.zSSCC;

    for (let i = 0; i < findingRSSCC.length; i++){
      if(findingRSSCC[i].indexOf(valToFind)!==-1){
        row = i + 1;
        var QREFv = sheetSRCHSSCC.getRange(row, 2).getValue();
        break;
      }
    };
   
   var obj = {};
   obj.QPLAN = QPLANv;
   obj.QFACT = QFACTv;
   obj.QREF = QREFv;
   return obj;
   
}

    function searchLogins(userInfo){
        
        let sheetSRCHLGN = sprSRCH.getSheetByName("ЛОГИНЫ");
        let findingRLGN = sheetSRCHLGN.getRange("A:A").getValues();
        let valToFind = userInfo.zLOGIN;
       
        for (let i = 0; i < findingRLGN.length; i++){
          if(findingRLGN[i].indexOf(valToFind)!==-1){
            return true;
            break;
          }
        };
        return false;
        
    }

    function searchSSCC(userInfo){
        
        let valToFind = userInfo.zSSCC;
      
        for (let i = 0; i < findingRSSCC.length; i++){
          if(findingRSSCC[i].indexOf(valToFind)!==-1){
            return true;
            break;
          }
        };
        return false;
    }
