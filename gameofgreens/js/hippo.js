// ----------
// Ear wiggle
// ----------

const earWiggleRight = gsap.timeline({ paused: true, repeat: 2 });

earWiggleRight.set(".ear-right", { transformOrigin: "center center" });
earWiggleRight.to(".ear-right", { duration: 0.1, rotation: 45 });
earWiggleRight.to(".ear-right", { duration: 0.1, rotation: 0 });
window.setInterval(() => earWiggleRight.play(0), 2500);

const earWiggleLeft = gsap.timeline({ paused: true, repeat: 1 });

earWiggleLeft.set(".ear-left", { transformOrigin: "center center" });
earWiggleLeft.to(".ear-left", { duration: 0.1, rotation: -35 });
earWiggleLeft.to(".ear-left", { duration: 0.1, rotation: 0 });
window.setInterval(() => earWiggleLeft.play(0), 4500);

// ------------
// Eye tracking
// ------------

const svg = document.querySelector("svg");
const eyeRightPupil = document.querySelector(".pupil-right");
const eyeLeftPupil = document.querySelector(".pupil-left");
const eyeLeftInner = document.querySelector(".eye-left-inner");
const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
const button = document.querySelector("button");
const buttonWidth = button.getBoundingClientRect().width;
const svgWidth = svg.viewBox.baseVal.width;
const buttonScale = svgWidth / buttonWidth;
const xMovement = ((innerEyeWidth - pupilWidth) * buttonScale) / 2;
const yMovement = ((innerEyeHeight - pupilHeight) * buttonScale) / 2;

window.addEventListener("mousemove", updateEyePosition);

function updateEyePosition(e) {
  const mousePercentX = e.clientX / document.body.clientWidth;
  const mousePercentY = e.clientY / document.body.clientHeight;
  const normalisedPercentageX = mousePercentX * 2 - 1;
  const normalisedPercentageY = mousePercentY * 2 - 1;
  const posX = normalisedPercentageX * xMovement;
  const posY = normalisedPercentageY * yMovement;

  eyeRightPupil.style.transform = `translate(${posX}px, ${posY}px)`;
  eyeLeftPupil.style.transform = `translate(${posX}px, ${posY}px)`;
}

// --------------
// Hover animaton
// --------------

const mouthOpen = gsap.timeline({ paused: true });
const mouthSpeed = 0.3;
const easeType = Power2.easeOut;
const mouthMove = -81;

mouthOpen.to(
  ".mouth-back",
  { duration: mouthSpeed, ease: easeType, y: mouthMove },
  0
);
mouthOpen.to(
  ".tongue",
  { duration: mouthSpeed * 1.5, ease: easeType, y: mouthMove },
  0
);
mouthOpen.to(
  ".teeth",
  { duration: mouthSpeed, ease: easeType, y: mouthMove, scaleY: 1.5 },
  0
);
mouthOpen.to(
  ".body",
  {
    duration: mouthSpeed,
    ease: easeType,
    scaleY: 1.12,
    transformOrigin: "center bottom"
  },
  0
);
mouthOpen.to(".freckles", { duration: mouthSpeed, ease: easeType, y: -15 }, 0);
mouthOpen.to(".ears", { duration: mouthSpeed, ease: easeType, y: 4 }, 0);
mouthOpen.to(".eye-right", { duration: mouthSpeed, ease: easeType, x: -2 }, 0);
mouthOpen.to(".eye-left", { duration: mouthSpeed, ease: easeType, x: 2 }, 0);
mouthOpen.to(".eyes", { duration: mouthSpeed, ease: easeType, y: 1 }, 0);
mouthOpen.to(".nose", { duration: mouthSpeed, ease: easeType, y: -8 }, 0);
