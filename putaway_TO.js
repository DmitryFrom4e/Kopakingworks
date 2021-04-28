const url = "https://script.google.com/macros/s/AKfycbyHHYfQ9o25lqE_TUFK01-12wYGdI3_TkcDgBpZxbAAupak3lxXFH9wpbzAwzNXWxTw7w/exec";
    // Это, при клике на кнопку, проставить трем полям зеленую рамку
    /*$('#send').click(function () {
        $('#PLACE').addClass('is-valid');
        $('#SSCC').addClass('is-valid');
        $('#LOGIN').addClass('is-valid');
    });*/

    // Это, при клике на кнопку, проставить трем полям красную рамку

    // $('#send').click(function (){
    //     $('#place').addClass('is-invalid');
    //     $('#sscc').addClass('is-invalid');
    //     $('#login').addClass('is-invalid');
    // });

function addGS(){

    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name: "olivia"}) // body data type must match "Content-Type" header
      });

      document.getElementById("send").addEventListener("Click", addGS);


}

    var allValid = true;
    var elemLOGIN = document.getElementById("LOGIN");
    var elemSSCC = document.getElementById("SSCC");
    var elemPLACE = document.getElementById("PLACE");

    window.onload = function() {
        var input = document.getElementById("LOGIN").focus();
      }

      function refreshQ() {
        userInfo.zLOGIN = elemLOGIN.value;
        userInfo.zSSCC = elemSSCC.value;
        userInfo.zPLACE = elemPLACE.value;
        console.log(userInfo);
        google.script.run.withSuccessHandler(callback).GetQ(userInfo);
      }
    
      function callback(e) {
        console.log(e.QPLAN);
        document.getElementById('QPLAN').innerHTML = e.QPLAN;
        console.log(e.QPLAN);
        document.getElementById('QFACT').innerHTML = e.QFACT;
        console.log(e.QFACT);
        document.getElementById('QREF').innerHTML = e.QREF;
        console.log(e.QREF);
      }
    
      function setFocus(){
        userInfo.zLOGIN = document.getElementById("LOGIN").value;
        userInfo.zSSCC = document.getElementById("SSCC").value;
        userInfo.zPLACE = document.getElementById("PLACE").value;
        refreshQ();
        document.getElementById(idElem).focus();
      }      