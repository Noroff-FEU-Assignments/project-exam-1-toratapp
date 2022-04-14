const url = "https://teidsvag.com/onthebias-cms/wp-json/wp/v2/posts?_embed";
const postsMobileContainer = document.querySelector(".latest-posts__mobile");

async function getPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        postsMobileContainer.innerHTML = "";

        for(let i = 0; i < results.length; i++) {
        }
    } catch(error) {
        console.warn(error);
        return postsMobileContainer.innerHTML = errorMessage("An error occured while fetching the posts")
    }
}

getPosts();
