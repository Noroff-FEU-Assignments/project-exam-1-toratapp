const url = "https://teidsvag.com/onthebias-cms/wp-json/wp/v2/posts?_embed&per_page=12";
const postsMobileContainer = document.querySelector(".latest-posts__mobile");
const carouselRowOne = document.querySelector(".row-one");
const carouselRowTwo = document.querySelector(".row-two");
const carouselRowThree = document.querySelector(".row-three");

async function getPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        postsMobileContainer.innerHTML = "";
        carouselRowOne.innerHTML = "";

        for(let i = 0; i < results.length; i++) {
            if (i === 6) {
                break;
            }
            const title = results[i].title.rendered;
            const excerpt = results[i].excerpt.rendered;
            const postId = results[i].id;
            const featuredMedia = results[i]['_embedded']['wp:featuredmedia'];

            for(let i = 0; i < featuredMedia.length; i++) {

                const featuredImage = featuredMedia[i].source_url;
                const altText = featuredMedia[i].alt_text;

                postsMobileContainer.innerHTML += ` <div class="latest-posts-mobile-container">
                                                        <div>
                                                            <a class="blog-post-clickable" href="blog-post.html?id=${postId}">
                                                                <div class="margin-13">
                                                                    <img src="${featuredImage}" alt="${altText}">
                                                                </div>
                                                                <h3>${title}</h3>
                                                                ${excerpt}
                                                            </a>
                                                        </div>
                                                    </div>`;
            }
        }

        for(let i = 0; i < results.length; i++) {
            if (i === 4) {
                break;
            }
            const title = results[i].title.rendered;
            const excerpt = results[i].excerpt.rendered;
            const postId = results[i].id;
            const featuredMedia = results[i]['_embedded']['wp:featuredmedia'];

            for(let i = 0; i < featuredMedia.length; i++) {
                const featuredImage = featuredMedia[i].source_url;
                const altText = featuredMedia[i].alt_text;

                carouselRowOne.innerHTML += `   <div>
                                                    <a class="blog-post-clickable" href="blog-post.html?id=${postId}">
                                                        <div>
                                                            <img src="${featuredImage}" alt="${altText}">
                                                        </div>
                                                        <h3>${title}</h3>
                                                        ${excerpt}
                                                    </a>
                                                </div>`;
            }
        }

        for(let i = 4; i < results.length; i++) {
            if (i === 8) {
                break;
            }
            const title = results[i].title.rendered;
            const excerpt = results[i].excerpt.rendered;
            const postId = results[i].id;
            const featuredMedia = results[i]['_embedded']['wp:featuredmedia'];

            for(let i = 0; i < featuredMedia.length; i++) {
                const featuredImage = featuredMedia[i].source_url;
                const altText = featuredMedia[i].alt_text;

                carouselRowTwo.innerHTML += `   <div>
                                                    <a class="blog-post-clickable" href="blog-post.html?id=${postId}">
                                                        <div>
                                                            <img src="${featuredImage}" alt="${altText}">
                                                        </div>
                                                        <h3>${title}</h3>
                                                        ${excerpt}
                                                    </a>
                                                </div>`;
            }
        }

        for(let i = 8; i < results.length; i++) {
            if (i === 12) {
                break;
            }
            const title = results[i].title.rendered;
            const excerpt = results[i].excerpt.rendered;
            const postId = results[i].id;
            const featuredMedia = results[i]['_embedded']['wp:featuredmedia'];

            for(let i = 0; i < featuredMedia.length; i++) {
                const featuredImage = featuredMedia[i].source_url;
                const altText = featuredMedia[i].alt_text;

                carouselRowThree.innerHTML += `   <div>
                                                    <a class="blog-post-clickable" href="blog-post.html?id=${postId}">
                                                        <div>
                                                            <img src="${featuredImage}" alt="${altText}">
                                                        </div>
                                                        <h3>${title}</h3>
                                                        ${excerpt}
                                                    </a>
                                                </div>`;
            }
        }
    } catch(error) {
        console.warn(error);
        return postsMobileContainer.innerHTML = errorMessage("An error occured while fetching the posts");
    }
}

getPosts();
