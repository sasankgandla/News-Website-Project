# News-Website-Project
Hey guys, I built a News Website using HTML, CSS and Javascript

The code you provided consists of an HTML file (index.html), a JavaScript file (script.js), and a CSS file (style.css). Here's an overview of what each file contains:

**index.html:**
- The HTML file defines the structure of the web page.
- It includes meta tags for character encoding, viewport configuration, and the page title.
- It links the CSS file (style.css) for styling.
- The body of the page contains a navigation bar, a main section with a container for news cards, and a template for news cards.

**script.js:**
- The JavaScript file defines the behavior and functionality of the website.
- It sets the `API_KEY` variable to store the News API key and the `url` variable for the News API endpoint.
- The `window.addEventListener("load", ...)` event listener fetches news articles on the initial page load, calling the `fetchNews()` function with a default query of "adipurush".
- The `fetchNews(query)` function makes an API request to the News API using the provided query and API key.
- The `bindData(articles)` function populates the news articles in the cards container by cloning the news card template and filling it with data from the API response.
- The `fillDataInCard(cardClone, article)` function fills the data from an article into the cloned news card template.
- The `onNavItemClick(query)` function is called when a navigation item is clicked and fetches news articles based on the selected category.
- The `searchButton.addEventListener("click", ...)` event listener fetches news articles based on the search input when the search button is clicked.

**style.css:**
- The CSS file contains styling rules for various elements on the page.
- It defines styles for the main navigation, logo, navigation links, search bar, cards container, and news cards.

Please note that without a live server or a backend service, the code you provided won't be able to fetch actual news articles from the News API. However, you can use this code as a starting point and modify it to work with a backend service or replace the API with a different data source.

If you have any specific questions or need further assistance with any part of the code, feel free to ask!
