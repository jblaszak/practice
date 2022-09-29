let sequences;
let usedSequences;
let guesses;

const entry = document.getElementById("entry");
const form = document.getElementById("answer-form");
const result = document.getElementById("result");
const startButton = document.getElementById("start");
const delay = document.getElementById("delay");
const characters = document.getElementById("characters");
const controls = document.getElementById("controls");
const instructions = document.getElementById("instructions");
const resultSection = document.getElementsByClassName("results")[0];
const entrySection = document.getElementsByClassName("entries")[0];
const answerSection = document.getElementById("answers");
const error = document.getElementById("error");

let interval;

const updateInstructions = () => {
  instructions.textContent = `You have ${delay.value} ${
    +delay.value === 1 ? "second" : "seconds"
  } to remember each ${characters.value} character sequence!`;
};

const start = () => {
  sequences = [];
  usedSequences = [];
  guesses = [];
  result.textContent = "";
  startButton.textContent = "Restart Test";
  fillAnswers(false);
  clearInterval(interval);

  answerSection.classList.add("hidden");
  error.classList.add("hidden");
  resultSection.classList.add("hidden");
  entrySection.classList.remove("hidden");

  while (sequences.length < 20) {
    // Generate new N digit hexadecimal number
    const newSequence = Math.floor(Math.random() * 16 ** characters.value)
      .toString(16)
      .padStart(characters.value, "0");
    if (!sequences.includes(newSequence)) {
      sequences.push(newSequence);
    }
  }

  const getSequence = () => {
    const entryIndex = Math.floor(Math.random() * sequences.length);
    if (usedSequences.includes(sequences[entryIndex])) {
      return getSequence();
    }
    return sequences[entryIndex];
  };

  let newSequence = getSequence();
  usedSequences.push(newSequence);
  entry.textContent = newSequence;

  let intervalCount = 1;

  interval = setInterval(() => {
    intervalCount++;

    if (intervalCount < 6) {
      newSequence = getSequence();
      usedSequences.push(newSequence);
      entry.textContent = newSequence;
    } else {
      entry.textContent = "\xa0";
      answerSection.classList.remove("hidden");
      entrySection.classList.add("hidden");
      clearInterval(interval);
      fillAnswers();
    }
  }, +delay.value * 1000);
};

const fillAnswers = (filled = true) => {
  const answerList = document.getElementById("answer-list");
  if (!filled) {
    for (let i = 0; i < answerList.children.length; i++) {
      answerList.children[i].children[0].textContent = "\xa0";
      answerList.children[i].children[1].checked = false;
    }
    return;
  }

  for (let i = 0; i < answerList.children.length; i++) {
    answerList.children[i].children[0].textContent = sequences[i];
    answerList.children[i].children[1].name = sequences[i];
  }
};

const checkAnswers = (e) => {
  e.preventDefault();
  const formValues = [...new FormData(form).entries()];
  const answers = formValues.map((entry) => entry[0]);

  // only do stuff if no blank entries
  if (!!answers.length) {
    if (answers.length > 5) {
      error.classList.remove("hidden");
    } else {
      const numCorrect = answers.reduce((acc, curr) => {
        return acc + usedSequences.includes(curr);
      }, 0);
      error.classList.add("hidden");
      resultSection.classList.remove("hidden");
      result.textContent = `You got ${numCorrect} / 5 correct!`;
    }
  }
};

form.addEventListener("submit", checkAnswers);
startButton.addEventListener("click", start);
controls.addEventListener("change", updateInstructions);

updateInstructions();
