var infected = 0;
var clickpower = 1;
var idlepower = 0;
var idleswitch = false;
function Update(){
  document.getElementById("counter").innerHTML = infected;
}
Update();
function idlecount(){
  infected=infected+idlepower;
  Update();
}
function switchon(){
  if (idleswitch==false){
  setInterval(idlecount,1000);
  }
}
function commonclick() {
    infected=infected+clickpower;
    Update();
  }
function powerclick(){
  clickpower++;
}
function autoclick(){
  idlepower=idlepower+clickpower;
  switchon();
  idleswitch=true;
}
function batclick(){
  idlepower=idlepower+2;
  switchon();
  idleswitch=true;
}
function carclick(){
  idlepower=idlepower+4;
  switchon();
  idleswitch=true;
}
function airplaneclick(){
  idlepower=idlepower+8;
  switchon();
  idleswitch=true;
}
function reset(){
  var infected = 0;
  var clickpower = 1;
  var idlepower = 0;
  var idleswitch = false;
  Update();
}