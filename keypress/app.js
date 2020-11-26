/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
let output = document.getElementById("output");

window.addEventListener("keypress", function(event){
  let chCode = event.key + "    " + event.code;
  output = "This is the key and keycode you pressed: " + chCode;
  document.body.append(output);
});