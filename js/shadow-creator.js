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

document.addEventListener("mousemove", (e) => {
  if (e.target !== this) {
    onChangeInput();
  }
});

const moveJoystick = (e) => {
  e.preventDefault();
  joystickX = e.clientX <= minX ? -1 : e.clientX > maxX ? maxX - minX - 1 : e.clientX - minX;
  joystickY = e.clientY <= minY ? -1 : e.clientY > maxY ? maxY - minY - 1 : e.clientY - minY;

  joystick.style.left = `${joystickX}px`;
  joystick.style.top = `${joystickY}px`;
};

joystick.addEventListener("mousedown", (e) => {
  e.preventDefault();
  joystick.style.cursor = "all-scroll";
  document.addEventListener("mousemove", moveJoystick);
});

document.addEventListener("mouseup", (e) => {
  joystick.style.cursor = "pointer";
  document.removeEventListener("mousemove", moveJoystick);
});
