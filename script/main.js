let elPokimonsList = $(".js-list");

let creatItem = function(kino){
  let newLi  = document.createElement("li");
  let newHeading = document.createElement("h2");
  let newp = document.createElement("p");
  let newPTitle = document.createElement("p");
  newPTitle.textContent = kino.genres.toString();
  newHeading.textContent = kino.title.toString();
  newp.textContent = kino.year.toString()
  newLi.append(newHeading, newp, newPTitle);
  newLi.className = "js-border";
  newLi.classList.add("my-2");
  newHeading.className = "text-center";
  newp.className = "text-center";
  newPTitle.className = "text-center";
  return newLi
}

let fragment = document.createDocumentFragment();

kinolar.forEach(function(kino){
  fragment.append(creatItem(kino));
})

elPokimonsList.append(fragment);
console.log(elPokimonsList);