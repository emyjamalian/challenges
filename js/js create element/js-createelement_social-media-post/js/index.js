console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector("body");

const newPost = document.createElement("section");
newPost.classList.add("post");
body.append(newPost);

const p = document.createElement("p");
p.classList.add("post__content");
p.textContent = "This is a new post and I have to make it long to look nice!";
newPost.append(p);

const footer = document.createElement("footer");
footer.classList.add("post__footer");
newPost.append(footer);

const username = document.createElement("span");
username.classList.add("post__username");
username.textContent = "@username";
footer.append(username);

const like = document.createElement("button");
like.classList.add("post__button");
like.textContent = "♥ Like";
footer.append(like);

like.addEventListener("click", handleLikeButtonClick);
