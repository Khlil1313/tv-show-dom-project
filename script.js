//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

}

const rootElem = document.getElementById("root");

// this function will create a page to show the different eposides and seasons 

function makePageForEpisodes(episodeList) {
  
  episodeList.map(el => {
    let episodeDivContainer = document.createElement("div");
    let episodeTitleElement = document.createElement("h3");
    let episodeImageElement = document.createElement("img");
    let episodeSummary = document.createElement("span");

    episodeDivContainer.classList.add("divClass");
    
    if(el.season < 10) {
      el.season = `0${el.season}`
    } 
    if (el.number < 10) {
      el.number = `0${el.number}`
    }

    episodeTitleElement.innerHTML = `${el.name} - S${el.season}E${el.number}`;
    episodeImageElement.src = `${el.image.medium}`;
    episodeSummary.innerHTML = `${el.summary}`;

    document.getElementById("root").appendChild(episodeDivContainer);
    episodeDivContainer.appendChild(episodeTitleElement);
    episodeDivContainer.appendChild(episodeImageElement);
    episodeDivContainer.appendChild(episodeSummary);
  })
    
}



// window.onload = setup;

function searchShow(query) {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(url)
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response.json();
      } else {
        throw "HTTP ERROR";
      }
    })
    .then((jasonData) => {
      console.log(jasonData)
      const results = jasonData.map((element) => ({
        name: element.show.name,
        image: element.show.image.medium,
        summary: element.show.summary
      }));
      renderResults(results);
      document.getElementById("errorMessage").innerHTML = "";
    })
    .catch((error) => {
      document.getElementById("errorMessage").innerHTML = error;
      renderResults([]);
    });
}

function renderResults(results) {
  const list = document.getElementById("resultsList");
  list.innerHTML = "";
  results.forEach((result) => {
    const elementDiv = document.createElement("div");
    const elementName = document.createElement("li");
    const elementImage = document.createElement("img");
    const elementSummary = document.createElement("span");
    let newResult = JSON.parse(JSON.stringify(result));

    elementName.innerText = newResult.name;
    elementImage.src = `${newResult.image}`
    elementSummary.innerHTML = newResult.summary;
    list.appendChild(elementDiv);
    elementDiv.appendChild(elementName);
    elementDiv.appendChild(elementImage);
    elementDiv.appendChild(elementSummary);
  });
}

let searchTimeoutToken = 0;

window.onload = () => {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

  const searchFieldElement = document.getElementById("searchField");
  searchFieldElement.onkeyup = (event) => {
    clearTimeout(searchTimeoutToken);

    if (searchFieldElement.value.trim().length === 0) {
      return;
    }
    searchTimeoutToken = setTimeout(() => {
      searchShow(searchFieldElement.value);
    }, 250);
  };
};


