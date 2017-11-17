// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

$$(document).on('deviceready',initapp);

function initapp(){
  console.log("dispositivo listo!!!");

  $$("#iniciar").on("click", click_btn);
  $$("#registrar").on("click", click_regis);
  $$("#mPral").on("click", click_ui);
  //document.addEventListener("backbutton", onBackKeyDown, false);
  document.addEventListener("backbutton", volverPPrincipal, false);
}

//Solo de prueba
function click_ui() {
  document.location = "index2.html";
}


//Solo de prueba
/*
function onBackKeyDown(){
 navigator.notification.confirm("Desea salir de FootballField?", cerrarAPP,"ADVERTENCIA!", "Si,No");
}
function cerrarAPP(e){
  if(e==1){
   navigator.app.exitApp();
  }else{
    return;
  }
}
*/
function volverPPrincipal(e){
 document.location="index.html"
}

function miFunc() {
  if(localStorage.getItem("usr") != null || localStorage.getItem("pss" != null)){
    myApp.hidePreloader();
    var usuario = localStorage.getItem("usr");
    var pass = localStorage.getItem("pss");
    $$.ajax({
      url: 'http://servicioswebmoviles.hol.es/index.php/LOGIN_UBB',
      method: 'POST',
      dataType: 'json',
      data: {
        login: usuario,
        pass: pass
      },
      success: function(data){
        myApp.hidePreloader();
        if(data.resp){
          document.location = "pPrincipal2.html";
          }else{
            myApp.alert(data.info,"Advertencia");
          }
      },
      error: function(){
        myApp.hidePreloader();
        myApp.alert("El WS no ha respondido","Error");
      }
    });
  }else{
    return;
  }
}


function click_btn(){
  var usuario = $$('#username').val();
  var pass = $$('#password').val();

  myApp.showPreloader("Iniciando sesion");

  if(usuario.length > 0 && pass.length > 0){
    $$.ajax({
      url: 'http://servicioswebmoviles.hol.es/index.php/LOGIN_UBB',
      method: 'POST',
      dataType: 'json',
      data: {
        login: usuario,
        pass: pass
      },
      success: function(data){
        myApp.hidePreloader();
        if(data.resp){
          document.location = "pPrincipal2.html";
          localStorage.setItem("usr", $$('#username').val());
          localStorage.setItem("pss", $$('#password').val());
          }else{
            myApp.alert(data.info,"Advertencia");
          }
      },
      error: function(){
        myApp.hidePreloader();
        myApp.alert("El WS no ha respondido","Error");
      }
    });
  }else{
    myApp.hidePreloader();
    myApp.alert("Debe llenar los campos","Advertencia");
  }
}

function click_regis() {
  myApp.showPreloader("Cargando");
  document.location="signinD.html"
}
