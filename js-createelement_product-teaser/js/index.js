console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const body = document.querySelector("body");

const product = document.createElement("article");
product.classList.add("product");
body.append(product);

const productBody = document.createElement("div");
productBody.classList.add("product__body");
product.append(productBody);

const productTextContainer = document.createElement("div");
productTextContainer.classList.add("product__text-container");
productBody.append(productTextContainer);

const productTextHeader = document.createElement("h2");
productTextHeader.classList.add("product__name");
productTextHeader.textContent = name;
productTextContainer.append(productTextHeader);

const productCategories = document.createElement("ul");
productCategories.classList.add("product__categories");
productTextContainer.append(productCategories);

const productCategory1 = document.createElement("li");
productCategory1.classList.add("product__category");
productCategory1.textContent = category1;
productCategories.append(productCategory1);

const productCategory2 = document.createElement("li");
productCategory2.classList.add("product__category");
productCategory2.textContent = category2;
productCategories.append(productCategory2);

const productCategory3 = document.createElement("li");
productCategory3.classList.add("product__category");
productCategory3.textContent = category3;
productCategories.append(productCategory3);

const productDescription = document.createElement("p");
productDescription.classList.add("product__description");
productDescription.textContent = description;
productTextContainer.append(productDescription);

const productImageContainer = document.createElement("div");
productImageContainer.classList.add("product__image-container");
productBody.append(productImageContainer);

const productImage = document.createElement("img");
productImage.src = imageSrc;
productImage.classList.add("product__image");
productImageContainer.append(productImage);

const productFooter = document.createElement("div");
productFooter.classList.add("product__footer");
product.append(productFooter);

const productPrice = document.createElement("span");
productPrice.classList.add("product__price");
productPrice.textContent = price;
productFooter.append(productPrice);

const buyButton = document.createElement("button");
buyButton.classList.add("product__buy-button");
buyButton.textContent = "Buy";
productFooter.append(buyButton);
