//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);

}
 
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
 
  episodeList.map(el => {
    let episodeDivContainer = document.createElement("div");
    let episodeTitleElement = document.createElement("h3");
    let episodeImageElement = document.createElement("img");
    let episodeSummary = document.createElement("span");

    episodeDivContainer.classList.add("divClass");
    

    episodeTitleElement.innerHTML = `${el.name}`;
    episodeImageElement.src = `${el.image.medium}`;
    episodeSummary.innerHTML = `${el.summary}`;

    document.getElementById("root").appendChild(episodeDivContainer);
    episodeDivContainer.appendChild(episodeTitleElement);
    episodeDivContainer.appendChild(episodeImageElement);
    episodeDivContainer.appendChild(episodeSummary);
  })
    
}

window.onload = setup;


