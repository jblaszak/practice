const submitHandler = (event) => {
  event.preventDefault();

  const card = document.getElementsByClassName("rating-card")[0];
  card.classList.add("thanks-card");

  const thanksIllustration = document.createElement("img");
  thanksIllustration.src = "./images/illustration-thank-you.svg";
  thanksIllustration.alt = "";
  thanksIllustration.ariaHidden = true;
  card.prepend(thanksIllustration);

  const ratingValue = new URLSearchParams(window.location.search).get("rating");

  const rating = document.getElementsByClassName("star")[0];
  rating.classList.remove("star");
  rating.classList.add("final-rating");
  rating.textContent = `You selected ${ratingValue} out of 5`;

  const heading = document.getElementById("heading");
  heading.textContent = `Thank you!`;
  heading.classList.add("final-heading");

  const text = document.getElementById("text");
  text.textContent = `We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!`;

  form.remove();
};

const form = document.getElementById("form");
form.addEventListener("submit", submitHandler);
