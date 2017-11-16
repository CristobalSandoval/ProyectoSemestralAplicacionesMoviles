// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

var cont = 0;

$$(document).on('deviceready',initapp);

function initapp(){
  console.log("dispositivo listo!!!");
  $$('#btnPantallaPrincipal').on('click', abrirPantallaPrincipal);
  $$('#btnCanchas').on('click', abrirCanchas);
  //$$('#btnAjustes').on('click', abrirAjustes);
  $$('#btnAyuda').on('click', abrirAyuda);
  $$('#btnInfo').on('click', abrirInfo);
  $$('#btnCerrarMenu').on('click', cerrarMenu);
  $$('#btnLogin').on('click', Abrirlogin);
  $$('#btnSign').on('click', AbrirSign);
  $$('#btn1').on('click', abrirCancha);
  $$('#agregar').on('click', agregarCancha);
  $$('#btn2').on('click', abrirCanchaPrueba);
  document.addEventListener("backbutton", volverPPrincipal, false);
}

function volverPPrincipal(e){
 document.location="pPrincipal.html"
}
//usar for para agregar canchas cada vez que se ingrese a la pagina canchas
function agregarCancha(){
    text_html ='<li class="item-content">';
    text_html +='<div class="item-inner">';
    text_html +='<div class="item-title">Cancha '+cont+'</div>';
    text_html +='<p class="buttons-row">';
    text_html +='<a style="background-color:white; border-color:black;" href="#" id="btn'+cont+'" class="button"><FONT COLOR="black">Ir</FONT></a>';
    text_html +='</p>';
    text_html +='</div>';
    text_html +='</li>';
    cont++;

    $$('#canchas').append(text_html);
}

function abrirCancha() {
  myApp.showPreloader("Abriendo Cancha");
  document.location="cancha.html"
}

function abrirCanchaPrueba() {
  console.log("abrio la funcion");
  myApp.showPreloader("Abriendo Cancha");
  document.location="cancha.html"
}

function cerrarMenu() {
  myApp.closePanel("left");
}

function abrirPantallaPrincipal() {
  myApp.showPreloader("Abriendo Pantalla Principal");
  document.location="index.html"
}

function abrirCanchas() {
  myApp.closePanel("left");
}
/*
function abrirAjustes() {
  myApp.showPreloader("Abriendo Ajustes");
  document.location="ajustes.html"
}
*/
function abrirAyuda() {
  myApp.showPreloader("Abriendo Ayuda");
  document.location="ayuda.html"
}

function abrirInfo() {
  myApp.showPreloader("Abriendo Información");
  document.location="info.html"
}

function Abrirlogin() {
  myApp.showPreloader("Abriendo Log In");
  document.location="login.html"
}

function AbrirSign() {
  myApp.showPreloader("Abriendo Sign In");
  document.location="signinD.html"
}
/*
function cerrarSesion() {
  myApp.showPreloader("Cerrando Sesión");
  //por ahora solo va al principio, despues hay que usar flag y token
  localStorage.clear();
  document.location="index.html"
}
*/
