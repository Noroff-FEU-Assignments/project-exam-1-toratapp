const url = "https://teidsvag.com/onthebias-cms/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".blog-posts-container");
const urlPageTwo = "https://teidsvag.com/onthebias-cms/wp-json/wp/v2/posts?_embed&page=2";
const postsContainerPageTwo = document.querySelector(".blog-posts-page-2-container");
const earlierPostsLink = document.querySelector(".earlier-posts-link");

async function getPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        postsContainer.innerHTML = "";

        for(let i = 0; i < results.length; i++) {

            const title = results[i].title.rendered;
            const excerpt = results[i].excerpt.rendered;
            const postId = results[i].id;
            const featuredMedia = results[i]['_embedded']['wp:featuredmedia'];

            for(let i = 0; i < featuredMedia.length; i++) {

                const featuredImage = featuredMedia[i].source_url;
                const altText = featuredMedia[i].alt_text;

                postsContainer.innerHTML += `   <a class="blog-post-clickable" href="blog-post.html?id=${postId}"><div class="blog__blog-post">
                                                    <div>
                                                        <img src="${featuredImage}" alt="${altText}" />
                                                    </div>                                   
                                                    <div class="post-heading-and-excerpt">
                                                        <h2>${title}</h2>
                                                        ${excerpt}
                                                    </div>
                                                </div></a>`;
            }
        }
    } catch(error) {
        console.warn(error);
        return postsContainer.innerHTML = errorMessage("An error occured while fetching the posts");
    }
}

getPosts();

async function getNextPosts() {
    try {
        const response = await fetch(urlPageTwo);
        const results = await response.json();

        postsContainerPageTwo.innerHTML ="";

        for(let i = 0; i < results.length; i++) {

            const title = results[i].title.rendered;
            const excerpt = results[i].excerpt.rendered;
            const postId = results[i].id;
            const featuredMedia = results[i]['_embedded']['wp:featuredmedia'];

            for(let i = 0; i < featuredMedia.length; i++) {

                const featuredImage = featuredMedia[i].source_url;
                const altText = featuredMedia[i].alt_text;

                postsContainerPageTwo.innerHTML += `   <a class="blog-post-clickable" href="blog-post.html?id=${postId}"><div class="blog__blog-post">
                                                    <div>
                                                        <img src="${featuredImage}" alt="${altText}" />
                                                    </div>                                   
                                                    <div class="post-heading-and-excerpt">
                                                        <h2>${title}</h2>
                                                        ${excerpt}
                                                    </div>
                                                </div></a>`;
            }
        }
    } catch(error) {
        console.warn(error);
        return postsContainer.innerHTML = errorMessage("An error occured while fetching the posts");
    }
}

earlierPostsLink.onclick = function(event){
    postsContainerPageTwo.classList.remove('display-none');
    getNextPosts();
}
