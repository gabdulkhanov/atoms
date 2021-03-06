var btn = document.getElementById('btn');

btn.addEventListener("click",on_timer);

var canv = document.getElementById('animation');
ctx = canv.getContext("2d");
canv.width = window.innerWidth - 500;
canv.height = window.innerHeight - 200;
canv.style.border = "1px solid #f00";

var pt_x = [], pt_y = [], dx = [], dy = [], r = [], color = [];
var on_off_timer = true, handle = setInterval(circles, 100);

for (let i = 0; i < 30; i++) {
	pt_x[i] = Math.round(Math.random()*200)+200;
	pt_y[i] = Math.round(Math.random()*200)+100;
	dx[i] = Math.floor(Math.random()*10)-5;
	dy[i] = Math.floor(Math.random()*10)-5;
	r[i] = Math.round(Math.random()*30)+5;
	color[i] = rnd_color();
}	
circles();

function on_timer() {
	on_off_timer = !on_off_timer;
	if (on_off_timer) {		
		handle = setInterval(circles, 100);
		btn.value = "Стоп";
	}
	else {
		clearInterval(handle);
		btn.value = "Старт";
	}
};	

function circles() {
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, canv.width, canv.height);		
		
	for (let i = 0; i < 30; i++) {
		ctx.fillStyle = color[i];
		ctx.beginPath();			
		ctx.arc(pt_x[i]+=dx[i], pt_y[i]+=dy[i], r[i], 0, 2 * Math.PI, false);		
		ctx.stroke();
		ctx.fill();
		ctx.closePath();		
	
		if ((pt_x[i] >= canv.width - r[i])||(pt_x[i] <= r[i])) dx[i] = -dx[i];
		if ((pt_y[i] >= canv.height - r[i])||(pt_y[i] <= r[i])) dy[i] = -dy[i];
	}
}

function rnd_color() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

