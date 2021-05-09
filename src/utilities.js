export const drawRect = (detection, ctx) => {
  detection.forEach(prediction => {
    // a. Get prediction results
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    // b. Set styling
    const color = 'red'
    ctx.strokeStyle = color;
    ctx.font = '18px Arial';
    ctx.fillStyle = color;

    // c. Draw rectangles/text
    ctx.beginPath()
    ctx.fillText(text, x, y)
    ctx.rect(x, y, width, height)
    ctx.stroke()
  });

}
