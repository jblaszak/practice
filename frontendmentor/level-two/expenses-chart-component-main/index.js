const jsonData = await fetch("./data.json")
  .then((response) => response.json())
  .then((json) => json);

const maxSpend = jsonData.reduce(
  (acc, curr) => (acc = curr.amount > acc.amount ? curr : acc)
).amount;

// Get today's date mon-sun 0 indexed
let today = new Date(Date.now()).getDay();
if (today === 0) today = 7;
today--;

const dailyChart = document.getElementsByClassName("daily-chart")[0];
for (let i = 0; i < dailyChart.children.length; i++) {
  const spend = jsonData[i].amount;
  const day = jsonData[i].day;
  const listItem = dailyChart.children[i];
  listItem.textContent = day;
  listItem.ariaLabel = `Spent $${spend} on ${day}`;

  const bar = document.createElement("span");
  bar.style.height = `${Math.round((spend / maxSpend) * 150)}px`;
  if (today === i) bar.classList.add("today");
  listItem.prepend(bar);

  const spendContainer = document.createElement("span");
  spendContainer.textContent = `$${spend}`;
  listItem.prepend(spendContainer);
}
