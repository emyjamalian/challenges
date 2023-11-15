console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id === "2";
});
console.log(onlyCardWithIdTwo);
console.log("----------------");

const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length === 3;
});

console.log(allCardsWith3Tags);
console.log("----------------");

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return !card.isBookmarked;
});

console.log(allCardsThatAreNotBookmarked);
console.log("----------------");

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  return (
    card.isBookmarked &&
    card.tags.filter((tag) => {
      return tag === "js" || tag === "html";
    }).length > 0
  );
});

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);
console.log("----------------");

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
