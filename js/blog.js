const url = "https://teidsvag.com/onthebias-cms/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".blog-posts-section");

async function getPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        for(let i = 0; i < results.length; i++) {

            const title = results[i].title.rendered;
            const excerpt = results[i].excerpt.rendered;
            const postId = results[i].id;
            const featuredMedia = results[i]['_embedded']['wp:featuredmedia'];

            for(let i = 0; i < featuredMedia.length; i++) {

                const featuredImage = featuredMedia[i].source_url;
                const altText = featuredMedia[i].alt_text;

            }
        }
    } catch(error) {
        console.warn(error);
        return postsContainer.innerHTML = errorMessage("An error occured while fetching the posts");
    }
}

getPosts();
