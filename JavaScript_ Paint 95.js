var color = "black";
var size = "3px";
var borderRadius = "50%";

function draw(event) {
  var dot = document.createElement("DIV");
  var div = document.createElement("DIV");
  var x = event.pageX - this.offsetLeft + "px";
  var y = event.pageY - this.offsetTop + "px";

  dot.style.left = x;
  dot.style.top = y;
  dot.style.position = "absolute";
  dot.style.borderRadius = borderRadius;
  dot.style.background = color;
  dot.style.height = size;
  dot.style.width = size;

  div.appendChild(dot);
  document.getElementById("canvas").appendChild(div);
}

canvas.addEventListener("mousedown", function() {
  canvas.addEventListener("mousemove", draw);
});

document.addEventListener("click", function() {
  canvas.removeEventListener("mousemove", draw);
});

var sizeContainer = document.getElementById("size-container").style;
function changeCanvasSize() {
  if (document.getElementById("canvasSize").value == "small") {
    canvas.style.height = "500px";
    canvas.style.width = "500px";
    sizeContainer.height = "700px";
    sizeContainer.width = "700px";
  } else if (document.getElementById("canvasSize").value == "medium") {
    canvas.style.height = "700px";
    canvas.style.width = "700px";
    sizeContainer.height = "900px";
    sizeContainer.width = "1000px";
  } else {
    canvas.style.height = "700px";
    canvas.style.width = "1000px";
    sizeContainer.height = "900px";
    sizeContainer.width = "1450px";
  }
}
document.getElementById("canvasSize").addEventListener("change", changeCanvasSize);

function changeColor() {
  color = event.target.id;
}
colors.addEventListener("click", changeColor);

document.getElementById("sizePx").innerHTML = size;
function increaseSize() {
  size = parseInt(size) + 2 + "px";
  document.getElementById("sizePx").innerHTML = size;
}
document.getElementById("up").addEventListener("click", increaseSize);

function decreaseSize() {
  size = parseInt(size) - 2 + "px";
  document.getElementById("sizePx").innerHTML = size;
}
document.getElementById("down").addEventListener("click", decreaseSize);

function changeBrushShape() {
  if (document.getElementById("shape").value == "square") {
    borderRadius = "0%";
  } else {
    borderRadius = "50%";
  }
}
document.getElementById("shape").addEventListener("change", changeBrushShape);

function clearAll() {
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.lastChild);
  }
}
document.getElementById("clear").addEventListener("click", clearAll);

function saveDraw() {
  var drawTitle = prompt("Please enter the name of your file");
  var saveFile = canvas.innerHTML;
  localStorage.setItem(drawTitle, saveFile);
}
document.getElementById("save").addEventListener("click", saveDraw);

function loadDraw() {
  var drawToLoad = prompt("Please enter the name of your saved file");
  var loadFile = localStorage.getItem(drawToLoad);

  if (loadFile != null) {
    canvas.innerHTML = localStorage.getItem(drawToLoad);
  } else {
    alert("Not a valid Name, try again");
    loadDraw();
  }
}
document.getElementById("load").addEventListener("click", loadDraw);
