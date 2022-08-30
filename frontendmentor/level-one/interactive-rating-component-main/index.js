const submitHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  const ratingValue = formProps?.rating;

  if (ratingValue != null) {
    const card = document.getElementsByClassName("rating-card")[0];
    card.classList.add("thanks-card");

    const thanksIllustration = document.createElement("img");
    thanksIllustration.src = "./images/illustration-thank-you.svg";
    thanksIllustration.alt = "";
    thanksIllustration.ariaHidden = true;
    card.prepend(thanksIllustration);

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
  }
};

const form = document.getElementById("form");
form.addEventListener("submit", submitHandler, { once: true });

const fieldset = document.getElementsByClassName("ratings")[0];
fieldset.addEventListener(
  "click",
  function (event) {
    if (event.target !== this) {
      const button = document.getElementById("submit");
      button.removeAttribute("disabled");
    }
  },
  { once: true }
);
