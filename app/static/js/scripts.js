var infected = 0;
function Update(){
  document.getElementById("counter").value = num.toString(infected);
}
Update();
function commonclick() {
  window.alert(infected);
    infected++;
    Update();
  }