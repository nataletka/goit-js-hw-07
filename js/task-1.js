const categEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categEl.length}`);
categEl.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elenents: ${category.querySelectorAll("li").length}`);
});
