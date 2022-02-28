const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 10;
ctx.strokeRect(75, 140, 150, 110);

ctx.fillRect(130, 190, 40, 60);
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
