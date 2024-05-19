function changeUni() {
  var number = Math.floor(Math.random() * 12);
  var gif = '<img id="eeaao_img" onmouseover="changeUni()" src="assets/' + number + '.gif"/>'
  document.getElementById("eeaao_GIF").innerHTML = gif;
}


var eyes = []
// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
addEventListener("click", (event) => {});

onclick = (event) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
  eyes.push([event.clientX, event.clientY]);
  
  var display_eyes = "";
  
  for (var i = 0; i < eyes.length; i++) {
    display_eyes += '<img id="googlyEye" style="left: ' +  eyes[i][0] + 'px; top: ' +  eyes[i][1] + 'px;" src="assets/icon.png"/>'
  }
  document.getElementById("googly_eyes").innerHTML = display_eyes;
};