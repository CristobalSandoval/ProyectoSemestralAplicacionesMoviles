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
  $$('#btnPantallaPrincipal').on('click', abrirPantallaPrincipal);
  $$('#btnCanchas').on('click', abrirCanchas);
  $$('#btnPerfil').on('click', abrirPerfil);
  $$('#btnAjustes').on('click', abrirAjustes);
  $$('#btnAyuda').on('click', abrirAyuda);
  $$('#btnInfo').on('click', abrirInfo);
  $$('#btnCerrarMenu').on('click', cerrarMenu);
  $$('#btnCerrarSesion').on('click', cerrarSesion);
  document.addEventListener("backbutton", volverPPrincipal, false);
}

function miFuncion() {
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
          $$('#Nombre').html(data.data.nombres);
          $$('#apellido').html(data.data.apellidos);
          $$('#Email').html(data.data.email);
          $$('#Nick').html(data.data.nick);
  			}
  		});
}

function volverPPrincipal(e){
   document.location="pPrincipal.html"
}


function cerrarMenu() {
  myApp.closePanel("left");
}

function abrirPantallaPrincipal() {
  myApp.showPreloader("Abriendo Pantalla Principal");
  document.location="pPrincipal.html"
}

function abrirCanchas() {
  myApp.showPreloader("Abriendo Canchas");
  document.location="canchas.html"
}

function abrirPerfil() {
  myApp.closePanel("left");
}

function abrirAjustes() {
  myApp.showPreloader("Abriendo Ajustes");
  document.location="ajustes.html"
}

function abrirAyuda() {
  myApp.showPreloader("Abriendo Ayuda");
  document.location="ayuda.html"
}

function abrirInfo() {
  myApp.showPreloader("Abriendo Información");
  document.location="info.html"
}

function cerrarSesion() {
  myApp.showPreloader("Cerrando Sesión");
  //por ahora solo va al principio, despues hay que usar flag y token
  localStorage.clear();
  document.location="index.html"
}
