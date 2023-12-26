import { Ball } from "./ball.js";
import { Block } from "./block.js";
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    // func.bind(obj) 를 통해서 func 의 this의 값을 obj로 고정하고 this 바인딩이 된 함수를 리턴함.
    // false를 지정하면 아무것도 설정하지 않은 것과 동일함.
    // resize 이벤트가 일어날 떄마다 새로운 값으로 프로퍼티를 업데이트한다.
    window.addEventListener("resize", this.resize.bind(this), false);

    // 실행해서 App 인스턴스의 프로퍼티에 body의 크기를 가져온다.
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);
    this.block = new Block(300, 450, 700, 30);
    window.requestAnimationFrame(this.animate.bind(this));
  }
  resize() {
    this.stageWidth = document.body.clientWidth; // DOM 요소의 크기를 가져오는 가장 보편적인 방법
    this.stageHeight = document.body.clientHeight; // DOM 요소의 크기를 가져오는 가장 보편적인 방법

    this.canvas.width = this.stageWidth * 2; // 고해상도를 위해서 두배로 설정하여 더 많은 픽셀 사용
    this.canvas.height = this.stageHeight * 2; // 고해상도를 위해서 두배로 설정하여 더 많은 픽셀 사용
    this.ctx.scale(2, 2); // 캔버스의 크기를 늘린 뒤에 스케일을 조정하여 고해상도 그림을 그릴 때 사용
  }
  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.block.draw(this.ctx);
    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
  }
}

// HTML 의 다른 모든 콘텐츠가 로드되고 DOM트리가 준비되면 동작
window.onload = () => {
  new App();
};
