export class Block {
  constructor(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.maxX = width + x;
    this.maxY = height + y;
  }
  draw(ctx) {
    const xGap = 80;
    const yGap = 60;

    // 상자
    ctx.fillStyle = "#ff384e";
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();

    // 아래 쉐도우
    ctx.fillStyle = "#190f3a";
    ctx.beginPath();
    ctx.moveTo(this.maxX, this.maxY); // 시작점 (꼭지점1)
    ctx.lineTo(this.maxX - xGap, this.maxY + yGap); // 꼭지점2
    ctx.lineTo(this.x - xGap, this.maxY + yGap); // 꼭지점3
    ctx.lineTo(this.x, this.maxY); // 꼭지점4
    ctx.fill();

    // 옆 쉐도우
    ctx.fillStyle = "#9d0919";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.height);
    ctx.lineTo(this.x - xGap, this.y + this.height + yGap);
    ctx.lineTo(this.x - xGap, this.y + yGap);
    ctx.fill();
  }
}
