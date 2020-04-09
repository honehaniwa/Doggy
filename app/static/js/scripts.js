var infected = 0;
var clickpower = 1;
var idlepower = 0;
var idleswitch = false;
var startloop;

function can_click(flag){
  console.log(infected);
  if(infected >= 10){
    console.log(flag);
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

function idlecount(){
  infected += idlepower;
  Update(false);
}
function switchon(){
  if (idleswitch==false){
    idleswitch = true;
    startloop = setInterval(idlecount, 1000);
  }
}
function commonclick() {
    infected += clickpower;
    Update(false);
  }
function powerclick(){
  clickpower++;
}
function autoclick(){
  idlepower += clickpower;
  switchon();
}
function batclick(){
  idlepower=idlepower+2;
  switchon();
}
function batsourceclick(){
  clickpower+=2;
}
function humanclick(){
  idlepower+=5;
  switchon();
}
function allergyclick(){
  clickpower += 20;
}
function carclick(){
  idlepower=idlepower+4;
  switchon();
}
function elecarclick(){
  clickpower += 100;
}
function airplaneclick(){
  idlepower=idlepower+8;
  switchon();
}
function transatlanticclick(){
  clickpower += 1000;
}
function reset(){
  Update(true);
  infected = 0;
  clickpower = 1;
  idlepower = 0;
  idleswitch = false;
  clearInterval(startloop);
}
