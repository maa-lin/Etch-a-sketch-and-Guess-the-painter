const btn = document.createElement("button");
btn.innerHTML = "Nytt fält";
document.getElementById("app").appendChild(btn);

// input från användaren, hur många rutor som ska skapas

const getInput = () => {
  const input = prompt(
    "Välj hur många rutor ditt fält ska bestå av, exempel '12' för att få ett fält som är 12x12 stort."
  );
  return input;
};

//anropar createSquares och tar bort föregående
btn.addEventListener("click", () => {
  const size = getInput();
  // const size = 25;

  if (document.contains(document.getElementById("container"))) {
    document.getElementById("container").remove();
  }
  createSquares(size);
});

//funktion som skapar rutor
const createSquares = (size) => {
  const container = document.createElement("div");
  container.id = "container";
  document.getElementById("app").appendChild(container);

  // container.style.backgroundImage = randomImg(); //bakgrundbild

  let sqrHeight = (450 / size).toString();
  let sqrWidth = sqrHeight;
  console.log(sqrHeight);

  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    container.appendChild(row);
    for (let i = 0; i < size; i++) {
      const square = document.createElement("div");
      square.className = "square";
      square.style.height = sqrHeight + "px";
      square.style.width = sqrWidth + "px";
      square.style.backgroundColor = "black";
      row.appendChild(square);

      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = randomColor();
        square.style.opacity = (parseFloat(square.style.opacity) || 0) + 0.3;
      });
    }
  }
};

//funktion som skapar en random färg
const randomColor = () => {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
};

//funktion som ger en random bild

// const randomImg = () => {
//   const images = [
//     "assets/carl_070.jpg",
//     "assets/monet.jpg",
//     "assets/van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
//     "assets/the-scream.jpg",
//     "assets/1665_Girl_with_a_Pearl_Earring.jpg",
//   ];
//   const random = Math.floor(Math.random() * images.length);

//   return "url(" + images[random] + ")";
// };
