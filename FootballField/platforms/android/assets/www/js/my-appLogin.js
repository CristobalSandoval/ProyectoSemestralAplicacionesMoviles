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
}

function click_btn(){
  console.log("click");
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
          document.location = "pPrincipal.html";
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
  document.location="signin.html"
}
