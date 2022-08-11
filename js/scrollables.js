const body = document.querySelector("body");
const scrollable = document.getElementsByClassName("scrollable")[0];
const scrollable2 = document.getElementsByClassName("scrollable")[1];
const scrollableRelative = document.getElementsByClassName(
  "scrollable-relative"
)[0];

const fragment = document.createDocumentFragment();

const p = document.createElement("p");
const p1 = document.createElement("p");
const p2 = document.createElement("p");

p.textContent = `scrollable.clientHeight = ${
  scrollable.clientHeight
} (visible size of container with padding) \r
scrollable.offsetHeight = ${
  scrollable.offsetHeight
} (visible size of container with border) \r
scrollable.scrollHeight = ${
  scrollable.scrollHeight
} (size of all scrollable content in container) \r
scrollable.getElementsByTagName('p')[3].offsetTop = ${
  scrollable.getElementsByTagName("p")[3].offsetTop
} (distance to top of closest relative ancestor)`;
p1.textContent = `scrollable2.clientHeight = ${
  scrollable2.clientHeight
} (visible size of container with padding) \r
scrollable2.offsetHeight = ${
  scrollable2.offsetHeight
} (visible size of container with border) \r
scrollable2.scrollHeight = ${
  scrollable2.scrollHeight
} (size of all scrollable content in container) \r
scrollable2.getElementsByTagName('p')[3].offsetTop = ${
  scrollable2.getElementsByTagName("p")[3].offsetTop
} (distance to top of closest relative ancestor)`;
p2.textContent = `scrollableRelative.clientHeight = ${
  scrollableRelative.clientHeight
} (visible size of container with padding) \r
scrollableRelative.offsetHeight = ${
  scrollableRelative.offsetHeight
} (visible size of container with border) \r
scrollableRelative.scrollHeight = ${
  scrollableRelative.scrollHeight
} (size of all scrollable content in container) \r
scrollableRelative.getElementsByTagName('p')[3].offsetTop = ${
  scrollableRelative.getElementsByTagName("p")[3].offsetTop
} (distance to top of closest relative ancestor)`;
fragment.append(p, p1, p2);
body.append(fragment);
