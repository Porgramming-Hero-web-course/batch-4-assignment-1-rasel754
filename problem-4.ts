{
  //
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    height: number;
    width: number;
  };
  type circleAndRectangle = Circle | Rectangle;

  function calculateShapeArea(shape: circleAndRectangle): number {
    if (shape.shape === "circle") {
      const circle = Math.PI * shape.radius * shape.radius;
      const fixed = parseFloat(circle.toFixed(2));
      return fixed;
    } else {
      return shape.height * shape.width;
    }
  }

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  console.log(circleArea);

  //
}
