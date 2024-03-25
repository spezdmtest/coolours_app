const cols = document.querySelectorAll(".col");

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

  function setRendomColors() {
    cols.forEach((col) => {
      col.style.background = generateRandomColor();
    });
  }

  setRendomColors();

  return "#" + color;
}
