console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {

  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  const EmptyImgSrc = "assets/star-empty.svg";
  const filledImgSrc = "assets/star-filled.svg";
  for (let i = 1; i <= 5; i++) {
    let star = document.createElement("img");
    if (filledStars >= i) {
      console.log("if");
      star.src = filledImgSrc;
    } else {
      star.src = EmptyImgSrc;
    }
    star.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(star);
  }

  //--^-- your code here --^--
}

renderStars();
