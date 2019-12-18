// ----------
// Eye blink
// ----------

const eyeBlink = gsap.timeline({ paused: true, repeat: 0 });

eyeBlink.set(".eyelids", { transformOrigin: "center center" });
eyeBlink.to(".eyelids", { duration: 0.2, y: 27 });
eyeBlink.to(".eyelids", { duration: 0.2, y: 0 });
window.setInterval(() => eyeBlink.play(0), 2000 + getRandomInt(2000));

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// ----------
// Ear wiggle
// ----------

const earWiggleRight = gsap.timeline({ paused: true, repeat: 2 });

earWiggleRight.set(".ear-right", { transformOrigin: "left center" });
earWiggleRight.to(".ear-right", { duration: 0.1, rotation: 15 });
earWiggleRight.to(".ear-right", { duration: 0.1, rotation: 0 });
window.setInterval(() => earWiggleRight.play(0), 2500);

const earWiggleLeft = gsap.timeline({ paused: true, repeat: 1 });

earWiggleLeft.set(".ear-left", { transformOrigin: "right center" });
earWiggleLeft.to(".ear-left", { duration: 0.1, rotation: -10 });
earWiggleLeft.to(".ear-left", { duration: 0.1, rotation: 0 });
window.setInterval(() => earWiggleLeft.play(0), 4500);

// ------------
// Eye tracking
// ------------

// const eyeLook = gsap.timeline({ paused: true, repeat: 2 });

// eyeLook.set(".pupils", { transformOrigin: "center center" });
// eyeLook.to(".pupils", { duration: 0.1, rotation: -10 });
// eyeLook.to(".pupils", { duration: 0.1, rotation: 0 });
// window.setInterval(() => eyeLook.play(0), 4500);

const svg = document.querySelector("svg");
const eyeRightPupil = document.querySelector(".pupil-right");
const eyeLeftPupil = document.querySelector(".pupil-left");
const eyeLeftInner = document.querySelector(".eye-left-inner");
const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
const section = document.querySelector(".section-game");
const sectionHeight = section.getBoundingClientRect().height;
const svgHeight = svg.viewBox.baseVal.height;
const copo = document.querySelector(".cow-position");
const cowHeight = copo.viewBox.baseVal.height;
const cowScale = svgHeight / cowHeight;
const xMovement = ((innerEyeWidth - pupilWidth) * cowScale) / 4;
const yMovement = ((innerEyeHeight - pupilHeight) * cowScale) / 4;

window.addEventListener("mousemove", updateEyePosition);

function updateEyePosition(e) {
  const mousePercentX = e.clientX / document.body.clientWidth;
  const mousePercentY = Math.min(e.clientY / sectionHeight, 1);
  const normalisedPercentageX = mousePercentX * 2 - 1;
  const normalisedPercentageY = mousePercentY * 2 - 1;
  const posX = normalisedPercentageX * xMovement;
  const posY = normalisedPercentageY * yMovement;
  console.log(mousePercentY);
  Math.max(0, posY);

  eyeRightPupil.style.transform = `translate(${posX}px, ${posY}px)`;
  eyeLeftPupil.style.transform = `translate(${posX}px, ${posY}px)`;
}
