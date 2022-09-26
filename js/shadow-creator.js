const joystickContainer = document.getElementById("joystick-container");
const joystick = document.getElementById("joystick");
const inputs = document.getElementById("inputs");
const blur = document.getElementById("blur");
const spread = document.getElementById("spread");
const color = document.getElementById("color");
const preview = document.getElementById("preview");
const output = document.getElementById("output");

const minX = joystickContainer.clientLeft;
const maxX = minX + joystickContainer.clientWidth - joystick.clientWidth;
const minY = joystickContainer.clientTop;
const maxY = minY + joystickContainer.clientHeight - joystick.clientWidth;

console.log(joystick.clientTop);
console.log(joystick.clientLeft);
console.log(joystick);

console.log("minX", minX, "maxX", maxX, "minY", minY, "maxY", maxY);

const onChangeInput = () => {
  //   if (e) {
  //     e.preventDefault();
  //   }

  const joystickX = 5;
  const joystickY = 5;

  const shadow = `${joystickX}px ${joystickY}px ${blur.value}px ${spread.value}px ${color.value}`;
  output.textContent = `box-shadow: ${shadow};`;
  preview.style.boxShadow = shadow;
};

document.addEventListener("mousemove", (e) => {
  if (e.target !== this) {
    onChangeInput();
  }
});

joystick.addEventListener("drag", (e) => {
  console.log(e);
});
joystickContainer.addEventListener("drop", (e) => {
  console.log("dropped");
});
joystickContainer.addEventListener("dragover", (e) => {
  e.preventDefault();
});
