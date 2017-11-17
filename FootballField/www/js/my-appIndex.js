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
  console.log("--");
}

function miFunc() {
  if(localStorage.getItem("usr") != null || localStorage.getItem("pss" != null)){
    document.location = "pPrincipal2.html";
  }else {
    document.location = "index2.html";
  }
}
