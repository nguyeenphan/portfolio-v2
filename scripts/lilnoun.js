const leftPupil = document.querySelector('.left-pupil');
const rightPupil = document.querySelector('.right-pupil');

// Create a max value for the translation in the x and y directions
const maxTransX = 50;
const maxTransY = 20;

// Create a max distance for the mouse position to the center of the element (the viewport dimensions wouldn't be a bad choice).
let maxXDist, maxYDist;

let centerX, centerY;

function resize() {
  maxXDist = innerWidth / 2;
  maxYDist = innerHeight / 2;
  
  const leftEyeArea = leftPupil.getBoundingClientRect();
  const R1 = leftEyeArea.width/2;
  centerX = leftEyeArea.left + R1;
  centerY = leftEyeArea.top + R1;
  
  const rightEyeArea = rightPupil.getBoundingClientRect();
  const R2 = rightEyeArea.width/2;
  centerX = rightEyeArea.left + R2;
  centerY = rightEyeArea.top + R2;
}

function updateTrans(e) {
  // Calculate the distance from the mouse position to the center.
  const x = e.clientX - centerX;
  const y = e.clientY - centerY;
  const dist = Math.sqrt(Math.pow(x, 2) + Math.pow(x, 2)); // optionally use the total distance as a factor or restriction
  
  // Put that number over the max distance from 2)
  const xPercent = x / maxXDist;
  const yPercent = y / maxYDist;
  
  // Multiply that product by the max value from 1 and apply it to your element.
  const scaledXPercent = xPercent * maxTransX;
  const scaledYPercent = yPercent * maxTransY;
  
  gsap.to(leftPupil, { 
    xPercent: scaledXPercent, 
    yPercent: scaledYPercent, 
    duration: 0.2, 
    overwrite: 'auto' 
  });
  
  gsap.to(rightPupil, { 
    xPercent: scaledXPercent, 
    yPercent: scaledYPercent, 
    duration: 0.2,
    overwrite: 'auto' 
  });
}

window.addEventListener('resize', resize);
resize();

document.querySelector('body').addEventListener('mousemove', updateTrans);