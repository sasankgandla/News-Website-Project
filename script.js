const API_KEY = "e215f75be2d54255b63d41fd482bad6f";
const url = "https://newsapi.org/v2/everything?q=";

// When the website loads this content should show
window.addEventListener("load",()=>{
    fetchNews("adipurush");
})

function reload() {
    window.location.reload();
}

// fetches articles on given query
async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

// inserts the article data from api in card
function bindData(articles) {
    const cardsContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('template-news-card');

    cardsContainer.innerHTML = "";

    articles.forEach(article => {
        // If no image in article
        if(!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone,article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
    });
    newsSource.innerHTML = `${article.source.name} · ${date}`;
    cardClone.firstElementChild.addEventListener("click",()=>{
        window.open(`${article.url}`,"_blank");
    })
}

let curSelectedNav = null;
function onNavItemClick(query) {
    fetchNews(query)
    const nav = document.getElementById(query);
    curSelectedNav?.classList.remove("active")
    curSelectedNav = nav;
    curSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click",()=>{
    const query = searchText.value;
    if(!query) return;
    fetchNews(query);
    searchText.value = "";
    curSelectedNav?.classList.remove("active");
    curSelectedNav = null;
})