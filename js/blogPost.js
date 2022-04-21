const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://teidsvag.com/onthebias-cms/wp-json/wp/v2/posts/" + id + "?_embed";
const urlCategories = "https://teidsvag.com/onthebias-cms/wp-json/wp/v2/categories";
const loader = document.querySelector(".loader");
const h1 = document.querySelector("h1");
const publishedDate = document.querySelector(".published-date");
const postCategories = document.querySelector(".post-categories");
const postContentContainer = document.querySelector(".post-content");
const categoriesContainer = document.querySelector(".category-links");

async function getPost() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        loader.style.display = "none";
        
        const date = results.date;
        const shorterDate = date.substring(0,10);
        const title = results.title.rendered;
        const content = results.content.rendered;

        document.title = `${title} - On the bias`;
        h1.innerHTML = title;
        publishedDate.innerHTML = shorterDate;
        postContentContainer.innerHTML = content;

        const categoriesArray1 = results['_embedded']['wp:term'];
        const categoriesArray2 = categoriesArray1[0];

        for(let i = 0; i < categoriesArray2.length; i++) {

            const categories = categoriesArray2[i].name;

            postCategories.innerHTML += `<a>${categories}</a>`;
        }
    } catch(error) {
        console.warn(error);
        return postsContainer.innerHTML = errorMessage("An error occured while fetching the posts");
    }
}

getPost();

async function getCategories() {
    try {
        const response = await fetch(urlCategories);
        const results = await response.json();

        for(let i = 0; i < results.length; i++) {

            const categoryName = results[i].name;

            categoriesContainer.innerHTML += `<a class="text-link display-block">${categoryName} &gt;</a>`;
        }
    } catch(error) {
        console.warn(error);
        return postsContainer.innerHTML = errorMessage("An error occured while fetching the posts");
    }
}

getCategories();
