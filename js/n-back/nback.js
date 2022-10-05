let n = 2;
let currAnswer = -1;
let fastPause = 500;
let slowPause = 500;
const images = [
  "./images/rectangle.svg",
  "./images/circle.svg",
  "./images/line.svg",
  "./images/pentagon.svg",
  "./images/spikes.svg",
  "./images/star.svg",
  "./images/swirl.svg",
  "./images/triangle.svg",
];
const sounds = [
  "./sounds/a.mp3",
  "./sounds/b.mp3",
  "./sounds/f.mp3",
  "./sounds/j.mp3",
  "./sounds/k.mp3",
  "./sounds/l.mp3",
  "./sounds/o.mp3",
  "./sounds/r.mp3",
];

const playableSounds = sounds.map((sound) => new Audio(sound));

const items = document.getElementsByClassName("item");

const answers = genAnswers();

function genAnswers() {
  // 6 visual, 6 audio, 2 with both
  const answerList = Array.from({ length: 20 + n }, (v) => [null, null]);
  let visualCount = 0;
  let audioCount = 0;
  let bothCount = 0;

  const emptyMatch = (position, modality) => {
    if (modality === "visual")
      return answerList[position][0] == null && answerList[position + n][0] == null;
    if (modality === "audio")
      return answerList[position][1] == null && answerList[position + n][1] == null;
  };

  // gen visual
  while (visualCount < 4) {
    const position = Math.floor(Math.random() * 20);
    if (emptyMatch(position, "visual")) {
      const visual = Math.floor(Math.random() * 8);
      answerList[position][0] = visual;
      answerList[position + n][0] = visual;
      visualCount++;
    }
  }

  // gen audio
  while (audioCount < 4) {
    const position = Math.floor(Math.random() * 20);
    const visualMatch =
      !emptyMatch(position, "visual") && answerList[position][0] === answerList[position + n][0];
    if (emptyMatch(position, "audio") && !visualMatch) {
      const audio = playableSounds[Math.floor(Math.random() * 8)];
      answerList[position][1] = audio;
      answerList[position + n][1] = audio;
      audioCount++;
    }
  }

  // do same but check for both, preserving total counts of single modalities
  while (bothCount < 2) {
    const position = Math.floor(Math.random() * 20);
    if (emptyMatch(position, "visual") && emptyMatch(position, "audio")) {
      const visual = Math.floor(Math.random() * 8);
      const audio = playableSounds[Math.floor(Math.random() * 8)];

      // check if n-back or 2n-forward is match for either
      const nBackVisualMatch = answerList?.[position - n]?.[0] === visual;
      const nBackAudioMatch = answerList?.[position - n]?.[1] === audio;
      const doubleNForwardVisualMatch = visual === answerList?.[position + 2 * n]?.[0];
      const doubleNForwardAudioMatch = audio === answerList?.[position + 2 * n]?.[1];

      if (
        !nBackVisualMatch &&
        !nBackAudioMatch &&
        !doubleNForwardVisualMatch &&
        !doubleNForwardAudioMatch
      ) {
        answerList[position] = [visual, audio];
        answerList[position + n] = [visual, audio];
        bothCount++;
      }
    }
  }

  // fill rest of answers but check to make sure n-back and n-forward don't match
  answerList.forEach((value, index) => {
    let isDone = false;
    while (!isDone) {
      if (answerList[index][0] == null) {
        const visual = Math.floor(Math.random() * 8);
        if (answerList?.[index - n]?.[0] === visual || answerList?.[index + n]?.[0] === visual)
          continue;
        answerList[index][0] = visual;
      }
      if (answerList[index][1] == null) {
        const audio = playableSounds[Math.floor(Math.random() * 8)];
        if (answerList?.[index - n]?.[1] === audio || answerList?.[index + n]?.[1] === audio)
          continue;
        answerList[index][1] = audio;
      }
      isDone = true;
    }
  });

  return answerList;
}

function cycleAnswers() {
  slowTimerId = setInterval(() => {
    currAnswer++;
    if (currAnswer < answers.length) {
      const answer = answers[currAnswer];
      const originalColor = items[answer[0]].style.backgroundColor;
      items[answer[0]].style.backgroundColor = "transparent";
      items[answer[0]].style.backgroundImage = "url('./images/rectangle.svg')";
      answer[1].play();

      fastTimerId = setTimeout(() => {
        items[answer[0]].style.backgroundColor = originalColor;
        items[answer[0]].style.backgroundImage = "";
      }, fastPause);
    } else {
      clearInterval(slowTimerId);
    }
  }, slowPause + fastPause);
}

cycleAnswers();
