const cols = document.querySelectorAll(".col");

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  // console.log(event.code);
  if (event.code.toLowerCase() === "space") {
    setRendomColors();
  }
});

document.addEventListener("click", (event) => {
  const type = event.target.dataset.type;

  if (type === "lock") {
    // console.log(event.target);
    const node =
      event.target.tagName.toLowerCase() === "i"
        ? event.target
        : event.target.children[0];
    console.log(node);
    node.classList.toggle("fa-lock-open");
    node.classList.toggle("fa-lock");
  } else if (type === "copy") {
    copyToClickboard(event.target.textContent);
  }
});

function generateRandomColor() {
  //RGB
  //FF0000
  //00FF00
  //0000FF

  const hexCodes = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }

  return "#" + color;
}

function copyToClickboard(text) {
  return navigator.clipboard.writeText(text);

}

function setRendomColors() {
  cols.forEach((col) => {
    const isLocked = col.querySelector("i").classList.contains("fa-lock");
    const text = col.querySelector("h2");
    const button = col.querySelector("button");
    const color = chroma.random();

    if (isLocked) {
      return;
    }

    text.textContent = color;
    col.style.background = color;

    setTextColor(text, color);
    setTextColor(button, color);
  });
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "black" : "white";
}

setRendomColors();
