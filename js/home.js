const url = "https://teidsvag.com/onthebias-cms/wp-json/wp/v2/posts?_embed&per_page=4";
const postsMobileContainer = document.querySelector(".latest-posts__mobile");

async function getPosts() {
    try {
        const response = await fetch(url);
        const results = await response.json();

        postsMobileContainer.innerHTML = "";

        const firstFeaturedImage = results[0]._embedded['wp:featuredmedia']['0'].source_url;
        const firstAltText = results[0]._embedded['wp:featuredmedia']['0'].alt_text;
        const firstTitle = results[0].title.rendered;
        const firstExcerpt = results[0].excerpt.rendered;
        const secondFeaturedImage = results[1]._embedded['wp:featuredmedia']['0'].source_url;
        const secondAltText = results[1]._embedded['wp:featuredmedia']['0'].alt_text;
        const secondTitle = results[1].title.rendered;
        const secondExcerpt = results[1].excerpt.rendered;
        const thirdFeaturedImage = results[2]._embedded['wp:featuredmedia']['0'].source_url;
        const thirdAltText = results[2]._embedded['wp:featuredmedia']['0'].alt_text;
        const thirdTitle = results[2].title.rendered;
        const thirdExcerpt = results[2].excerpt.rendered;
        const fourthFeaturedImage = results[3]._embedded['wp:featuredmedia']['0'].source_url;
        const fourthAltText = results[3]._embedded['wp:featuredmedia']['0'].alt_text;
        const fourthTitle = results[3].title.rendered;
        const fourthExcerpt = results[3].excerpt.rendered;

        postsMobileContainer.innerHTML += ` <div>
                                                <div class="margin-13">
                                                    <img src="${firstFeaturedImage}" alt="${firstAltText}">
                                                </div>
                                                <h3>${firstTitle}</h3>
                                                ${firstExcerpt}
                                            </div>
                                            <div>
                                                <div class="margin-13">
                                                    <img src="${secondFeaturedImage}" alt="${secondAltText}">
                                                </div>
                                                <h3>${secondTitle}</h3>
                                                ${secondExcerpt}
                                            </div>
                                            <div>
                                                <div class="margin-13">
                                                    <img src="${thirdFeaturedImage}" alt="${thirdAltText}">
                                                </div>
                                                <h3>${thirdTitle}</h3>
                                                ${thirdExcerpt}
                                            </div>
                                            <div>
                                                <div class="margin-13">
                                                    <img src="${fourthFeaturedImage}" alt="${fourthAltText}">
                                                </div>
                                                <h3>${fourthTitle}</h3>
                                                ${fourthExcerpt}
                                            </div>`;
    } catch(error) {
        console.warn(error);
        return postsMobileContainer.innerHTML = errorMessage("An error occured while fetching the posts")
    }
}

getPosts();
