// Animate the box being picked up and moved
const box = document.getElementById('box');

function animateBox() {
  let posX = 250;
  let posY = 160;
  let frame = 0;

  const animation = setInterval(() => {
    if (frame < 50) {
      posX -= 2;
      posY -= 1;
    } else if (frame < 100) {
      posX -= 2;
      posY += 1;
    } else {
      clearInterval(animation);
    }

    box.setAttribute('x', posX);
    box.setAttribute('y', posY);

    frame++;
  }, 20);
}

// Start animation when the page loads
window.onload = animateBox;
