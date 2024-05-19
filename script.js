// const btn = document.querySelector("button"); // Get the button from the page
// // Detect clicks on the button
// if (btn) {
//   btn.onclick = function() {
//     // The JS works in conjunction with the 'dipped' code in style.css
//     var number = Math.floor(Math.random() * 12);
//     var gif = '<img src="https://cdn.glitch.global/c4be26a2-ff84-4e3e-a8ff-60d78823621a/' + number + '.gif"/>'
//     document.getElementById("eeaao_GIF").innerHTML = gif;
//   };
// }

function changeUni() {
  var number = Math.floor(Math.random() * 12);
  var gif = '<img id="eeaao_img" onmouseover="changeUni()" src="https://cdn.glitch.global/c4be26a2-ff84-4e3e-a8ff-60d78823621a/' + number + '.gif"/>'
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
    display_eyes += '<img id="googlyEye" style="left: ' +  eyes[i][0] + 'px; top: ' +  eyes[i][1] + 'px;" src="https://cdn.glitch.global/c4be26a2-ff84-4e3e-a8ff-60d78823621a/icon.png?v=1708594443137"/>'
  }
  document.getElementById("googly_eyes").innerHTML = display_eyes;
};