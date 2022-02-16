interface Point {
    x: number,
    y: number
}

abstract class MyGraphicsPrimitive2D {
  constructor(protected leftTop?: Point, protected rightBottom?: Point) {
  }
  public offset(offset: Point): void {
    this.leftTop.x += offset.x;
    this.leftTop.y += offset.y;
    this.rightBottom.x += offset.x;
    this.rightBottom.y += offset.y;
  }
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
    public abstract area(): number
}

class MyCircle extends MyAreaPrimitive2D {
  private center: Point
  constructor(center: Point, private r: number) {
    super();
    this.center = { ...center };
  }

  public area(): number {
    return Math.PI * this.r ** 2;
  }
}

class MyRectangle extends MyAreaPrimitive2D {
  constructor(leftTop: Point, rightBottom: Point) {
    super(leftTop, rightBottom);
  }

  public width(): number {
    return this.rightBottom.x - this.leftTop.x;
  }

  public height(): number {
    return this.rightBottom.y - this.leftTop.y;
  }

  public area(): number {
    return this.width() * this.height();
  }
}