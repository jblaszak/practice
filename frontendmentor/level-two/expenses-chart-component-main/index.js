const jsonData = await fetch("./data.json")
  .then((response) => response.json())
  .then((json) => json);

const maxSpend = jsonData.reduce(
  (acc, curr) => (acc = curr.amount > acc.amount ? curr : acc)
).amount;

let today = new Date(Date.now()).getDay();
if (today === 0) today = 7;

const dailyChart = document.getElementsByClassName("daily-chart")[0];
for (let i = 0; i < dailyChart.children.length; i++) {
  dailyChart.children[i].children[0].textContent = `$${jsonData[i].amount}`;
}
