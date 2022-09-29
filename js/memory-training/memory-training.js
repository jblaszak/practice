let sequences;
let usedSequences;
let guesses;
const entry = document.getElementById("entry");
const form = document.getElementById("answer-form");
const result = document.getElementById("result");
const startButton = document.getElementById("start");

const start = () => {
  sequences = [];
  usedSequences = [];
  guesses = [];
  result.textContent = "";

  while (sequences.length < 20) {
    // Generate new 3 digit hexadecimal number
    const newSequence = Math.floor(Math.random() * 4096)
      .toString(16)
      .padStart(3, "0");
    if (!sequences.includes(newSequence)) {
      sequences.push(newSequence);
    }
  }

  let newSequence = getSequence();
  usedSequences.push(newSequence);
  entry.textContent = newSequence;

  let intervalCount = 1;

  const interval = setInterval(() => {
    intervalCount++;

    const getSequence = () => {
      const entryIndex = Math.floor(Math.random() * sequences.length);
      if (usedSequences.includes(sequences[entryIndex])) {
        return getSequence();
      }
      return sequences[entryIndex];
    };

    if (intervalCount < 6) {
      newSequence = getSequence();
      usedSequences.push(newSequence);
      entry.textContent = newSequence;
    } else {
      entry.textContent = "\xa0";
      clearInterval(interval);
      fillAnswers();
    }
  }, 4000);
};

const fillAnswers = () => {
  const answerList = document.getElementById("answer-list");
  for (let i = 0; i < answerList.children.length; i++) {
    answerList.children[i].children[0].textContent = sequences[i];
    answerList.children[i].children[1].name = sequences[i];
  }
};

const checkAnswers = (e) => {
  e.preventDefault();
  const formValues = [...new FormData(form).entries()];
  const answers = formValues.map((entry) => entry[0]);

  const numCorrect = answers.reduce((acc, curr) => {
    return acc + usedSequences.includes(curr);
  }, 0);

  result.textContent = `You got ${numCorrect} / 5 correct!`;
};

form.addEventListener("submit", checkAnswers);
startButton.addEventListener("click", start);
