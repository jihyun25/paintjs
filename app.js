const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = canvas.offsetWidth; // 작업할 캔버스의 너비
canvas.height = canvas.offsetHeight; // 작업할 캔버스의 높이

ctx.strokeStyle = "#2c2c2c"; //strokeStyle : 라인의 색상이나 스타일
ctx.lineWidth = 2.5; //lineWidth : 라인의 굵기

let painting = false;

function stopPinting() {
	painting = false;
}

function startPainting() {
	painting = true;
}

function onMouseMove(event) {
	const x = event.offsetX; // 캔버스 안에서의 마우스  x좌표값
	const y = event.offsetY; // 캔버스 안에서의 마우스 y좌표값
	if(!painting) { // if(painting === false)
		ctx.beginPath() // beginPath() : 라인 경로 생성
		ctx.moveTo(x, y); // moveTo(x, y) : 선(path)의 시작 좌표
	} else { 
		ctx.lineTo(x, y); // lineTo() : 선(path)의 끝 좌표
		ctx.stroke(); // stroke() : 선 그리기
	}
}

function onMouseDown(event) {
	painting = true;
}

function handleColorClick(event) {
	const color = event.target.style.backgroundColor;
	ctx.strokeStyle = color;
}

if(canvas) {
	canvas.addEventListener("mousemove", onMouseMove); // 마우스가 캔버스 내에서 움직였을 때 onMouseMove 함수 실행
	canvas.addEventListener("mousedown", startPainting); // 마우스가 캔버스 내부를 클릭하는 순간(마우스 버튼이 눌리는 순간) onMouseDown 함수 실행
	canvas.addEventListener("mouseup", stopPinting); // 마우스가 캔버스 내부를 클릭했다 떼는 순간(마우스 버튼이 눌렸다 떼지는 순간) onMouseDown 함수 실행
	canvas.addEventListener("mouseLeave", stopPinting); // 마우스가 캔버스 영역을 벗어났을 때 onMouseLeave 함수 실행
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));