let box = document.body.getElementsByClassName("red-box");

let z = document.createElement("h3");
document.body.append(z);

box[0].addEventListener("mousemove", function(e){
  x = e.clientX;
  y = e.clientY;
  z.textContent = "X Coords: " + x + "Y Coords: " + y;
});

box[0].addEventListener("mouseout", function(e){
  z.textContent = "";
});