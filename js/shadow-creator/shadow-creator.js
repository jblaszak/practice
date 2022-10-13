const joystickContainer = document.getElementById("joystick-container");
const joystick = document.getElementById("joystick");
const inputs = document.getElementById("inputs");
const blur = document.getElementById("blur");
const spread = document.getElementById("spread");
const color = document.getElementById("color");
const preview = document.getElementById("preview");
const output = document.getElementById("output");

const minX = joystickContainer.offsetLeft;
const maxX = minX + joystickContainer.clientWidth - joystick.clientWidth;
const minY = joystickContainer.offsetTop;
const maxY = minY + joystickContainer.clientHeight - joystick.clientHeight;

const joystickXInit = (minX + maxX) / 2 - minX;
const joystickYInit = (minY + maxY) / 2 - minY;
let joystickX = joystickXInit;
let joystickY = joystickYInit;

const onChangeInput = () => {
  const shadow = `${joystickX - joystickXInit}px ${joystickY - joystickYInit}px ${blur.value}px ${
    spread.value
  }px ${color.value}`;
  output.textContent = `box-shadow: ${shadow};`;
  preview.style.boxShadow = shadow;
};

document.addEventListener("input", (e) => {
  // if (e.target !== this) {
  onChangeInput();
  // }
});

document.addEventListener("mousemove", (e) => {
  if (e.target !== this) {
    onChangeInput();
  }
});

const moveJoystick = (e) => {
  e.preventDefault();
  const currX = e.clientX - joystick.clientWidth / 2;
  const currY = e.clientY - joystick.clientWidth / 2;
  joystickX = currX <= minX ? -1 : currX > maxX ? maxX - minX - 1 : currX - minX;
  joystickY = currY <= minY ? -1 : currY > maxY ? maxY - minY - 1 : currY - minY;

  joystick.style.left = `${joystickX}px`;
  joystick.style.top = `${joystickY}px`;
};

joystick.addEventListener("mousedown", (e) => {
  e.preventDefault();
  joystick.style.cursor = "grabbing";
  document.addEventListener("mousemove", moveJoystick);
});

document.addEventListener("mouseup", (e) => {
  joystick.style.cursor = "grab";
  document.removeEventListener("mousemove", moveJoystick);
});
