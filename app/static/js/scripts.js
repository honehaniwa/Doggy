var infected = 0;
// function Update(){
//   document.getElementById("counter").value = num.toString(infected);
// }
// Update();
function commonclick() {
  // window.alert('ba');
  console.log(infected++);
  if(infected >=10){
    document.getElementById('bat').disabled=false;
  }
  // Update();
}
function batclick(){
  if(infected>=10){
    console.log('loop');
    var bat=function(){
      infected++;
      console.log(infected);
    }
    setInterval(bat,1000);
  }
  // Update();
}
