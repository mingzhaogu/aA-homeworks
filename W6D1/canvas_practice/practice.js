document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('myCanvas');
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgb(245,220,80)';
  ctx.fillRect(0, 0, 500, 500);

  // ctx.strokeStyle = 'rgb(0,0,0)';
  // ctx.strokeRect(0, 225, 500, 50);
  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fillRect(0, 225, 500, 50);

  ctx.beginPath();
  ctx.arc(250, 250, 100, 0, 2 * Math.PI);
  ctx.strokeStyle = 'rgb(0,0,0)';
  ctx.lineWidth = 100;
  ctx.stroke();

  ctx.fillStyle = 'rgb(250,250,250)';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(250, 250, 25, 0, 6.28);
  ctx.strokeStyle = 'rgb(0,0,0)';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = 'rgb(0,0,0)';
  ctx.fill();
});
