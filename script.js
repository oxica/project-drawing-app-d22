const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;
let color = 'black';
let x;
let y;

function drawCircle(x, y) {
  ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); 
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.srtokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

// drawCircle(200, 200);
// drawLine(300, 300, 300, 600);