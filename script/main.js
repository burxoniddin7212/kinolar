let elPokimonsList = $(".js-list");
let elFindNameFilm = $(".js-film-name-input");
let elRezultFind = $(".js-result-fil-name");
let elForm = $(".js-form");

let elList = document.createElement("ul");


elList.classList.add("list-unstyled");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  elList.innerHTML = "";
  
  let findFilmIndex = kinolar.findIndex((name) => {
    if(name.title == elFindNameFilm.value){
    return name.title == elFindNameFilm.value;
    }
    else{
      return undefined;
    }
  })

  console.log(findFilmIndex);
  
  if(findFilmIndex != null){
    let newLiTemplate = document.querySelector(".item").content;
    let elNewLi = newLiTemplate.cloneNode(true);
    elNewLi.querySelector(".heading").textContent = kinolar[findFilmIndex].title.toString();
    elNewLi.querySelector(".film-genres").textContent = kinolar[findFilmIndex].genres.toString();
    elNewLi.querySelector(".film-year").textContent = kinolar[findFilmIndex].year.toString();
    elList.append(elNewLi);
    elRezultFind.append(elList);
  }
  else if(findFilmIndex == undefined){
    let newLiTemplate = document.querySelector(".item").content;
    let elNewLi = newLiTemplate.cloneNode(true);
    elNewLi.querySelector(".heading").textContent = "Bunday kino yo'q";
  }

})

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