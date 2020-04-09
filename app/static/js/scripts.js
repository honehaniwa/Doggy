var infected = 0;
var clickpower = 1;
var idlepower = 0;
var idleswitch = false;

function can_click(flag){
  console.log(flag);
  if(infected >= 10){
    document.getElementById('auto').disabled=flag;
    document.getElementById('power').disabled=flag;
  }
  if(infected >= 50){
    document.getElementById('bat').disabled=flag;
    document.getElementById('batsources').disabled=flag;
  }
  if(infected >= 100){
    document.getElementById('human').disabled=flag;
    document.getElementById('allergy').disabled=flag;
  }
  if(infected >= 1000){
    document.getElementById('car').disabled=flag;
    document.getElementById('elecar').disabled=flag;
  }
  if(infected >= 10000){
    document.getElementById('airplane').disabled=flag;
    document.getElementById('transatlantic').disabled=flag;
  }
}

function Update(flag){
  document.getElementById("counter").innerHTML = infected;
  can_click(flag);
}
Update(true);
function idlecount(){
  infected=infected+idlepower;
  Update(true);
}
function switchon(){
  if (idleswitch==false){
  setInterval(idlecount,1000);
  }
}
function commonclick() {
    infected=infected+clickpower;
    Update(true);
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
  infected = 0;
  clickpower = 1;
  idlepower = 0;
  idleswitch = false;
  Update(false);
}
