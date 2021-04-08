// 가장자리 따라 움직이는 사각형
// let x = 0;
// let y = 0;
// let speed = 10;
// let state = 0;

// function setup() {
//     createCanvas(800, 800);
// }

// function draw() {
//     background(255);
//     stroke(0);
//     fill(175);
//     rect(x, y, 19, 19);

//     if (state == 0) {
//         x = x + speed;
//         if (x > width - 20) {
//             x = width - 20;
//             state = 1;
//         }
//     } else if (state == 1) {
//         y = y + speed;
//         if (y > height - 20) {
//             y = height - 20;
//             state = 2;
//         }
//     } else if (state == 2) {
//         x = x - speed;
//         if (x < 0) {
//             x = 0;
//             state = 3;
//         }
//     } else if (state == 3) {
//         y = y - speed;
//         if (y < 0) {
//             y = 0;
//             state = 0;
//         }
//     }
// }

//하늘색바탕, 원 딜레이 움직이기
let x = 0;
let y = 0;
let easing = 0.2; // 1~0 0에 가까울수록 천천히

function setup() {
    createCanvas(windowWidth, windowHeight);
    
}

function draw() {
    background(3, 244, 252, 20);
    let targetX = mouseX;
    x += (targetX - x) * easing;

    let targetY = mouseY;
    y += (targetY - y) * easing;

    ellipse(x, y, 50, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}