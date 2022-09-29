let sequences = [];
const usedSequences = [];
const guesses = [];
const entry = document.getElementById("entry");

const start = () => {
  while (sequences.length < 20) {
    // Generate new 3 digit hexadecimal number
    const newSequence = Math.floor(Math.random() * 4096).toString(16);
    if (!sequences.includes(newSequence)) {
      sequences.push(newSequence);
    }
  }

  let intervalCount = 0;

  const interval = setInterval(() => {
    intervalCount++;
    if (intervalCount === 6) {
      entry.textContent = "";
      clearInterval(interval);
    } else {
      const entryIndex = Math.floor(Math.random() * sequences.length);
      entry.textContent = sequences[entryIndex];
      usedSequences.push(sequences[entryIndex]);
      sequences = sequences.filter((val, index) => index !== entryIndex);
    }
  }, 1000);
};

start();

console.log(sequences);
