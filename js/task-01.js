const categoriesNumber = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesNumber.length);

categoriesNumber.forEach((element, i) => {
  console.log("Category:", categoriesNumber[i].querySelector("h2").textContent);
  console.log("Elements:", categoriesNumber[i].querySelectorAll("li").length);
});
