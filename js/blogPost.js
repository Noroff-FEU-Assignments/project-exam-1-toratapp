const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
if (!id) {
    location.href = "/";
}
const url = "https://teidsvag.com/onthebias-cms/wp-json/wp/v2/posts/" + id + "?_embed";
const urlCategories = "https://teidsvag.com/onthebias-cms/wp-json/wp/v2/categories";
const loader = document.querySelector(".loader");
const h1 = document.querySelector("h1");
const publishedDate = document.querySelector(".published-date");
const postCategories = document.querySelector(".post-categories");
const postContentContainer = document.querySelector(".post-content");
const categoriesContainer = document.querySelector(".category-links");
const blogPostContainer = document.querySelector(".blog-post-container");

async function getPost() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        loader.style.display = "none";
        
        const date = results.date;
        const shorterDate = date.substring(0,10);
        const title = results.title.rendered;
        const content = results.content.rendered;
        const excerpt = results.excerpt.rendered;
        const plainExcerpt = excerpt.replace(/<[^>]+>/g, '');

        document.title = `${title} - On the bias`;
        document.querySelector('meta[name="description"]').content += `${plainExcerpt}`;
        h1.innerHTML = title;
        publishedDate.innerHTML = shorterDate;
        postContentContainer.innerHTML = content;

        const categoriesArray1 = results['_embedded']['wp:term'];
        const categoriesArray2 = categoriesArray1[0];

        for(let i = 0; i < categoriesArray2.length; i++) {

            const categories = categoriesArray2[i].name;

            postCategories.innerHTML += `<a>${categories}</a>`;
        }

        makeModal();
    } catch(error) {
        console.warn(error);
        return postContentContainer.innerHTML = errorMessage("An error occured while fetching the posts");
    }
}

getPost();

function makeModal() {
    const allImages = document.querySelectorAll("img");
    const backdropContainer = document.querySelector(".backdrop-container");
    const closeButton = document.querySelector(".close-button");

    allImages.forEach((image) => {
        image.onclick = function (event) {
            event.target.classList.add("modal");
            backdropContainer.classList.add("modal-backdrop");
            closeButton.style.display = "block";
            
            document.onkeydown = function (e) {
                if (e.key === "Escape") {
                    closeButton.style.display = "none";
                    event.target.classList.remove("modal");
                    backdropContainer.classList.remove("modal-backdrop");
                }
            }

            closeButton.onclick = function () {
                closeButton.style.display = "none";
                event.target.classList.remove("modal");
                backdropContainer.classList.remove("modal-backdrop");
            }

            document.onclick = function (click) {
                const containsImage = image.contains(click.target);
                if (!containsImage) {
                closeButton.style.display = "none";
                event.target.classList.remove("modal");
                backdropContainer.classList.remove("modal-backdrop");
                }
            }
        }
    });
}

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
