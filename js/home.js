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
                                                <div>
                                                    <img src="${firstFeaturedImage}" alt="${firstAltText}">
                                                </div>
                                                <h2>${firstTitle}</h2>
                                                ${firstExcerpt}
                                            </div>
                                            <div>
                                                <div>
                                                    <img src="${secondFeaturedImage}" alt="${secondAltText}">
                                                </div>
                                                <h2>${secondTitle}</h2>
                                                ${secondExcerpt}
                                            </div>
                                            <div>
                                                <div>
                                                    <img src="${thirdFeaturedImage}" alt="${thirdAltText}">
                                                </div>
                                                <h2>${thirdTitle}</h2>
                                                ${thirdExcerpt}
                                            </div>
                                            <div>
                                                <div>
                                                    <img src="${fourthFeaturedImage}" alt="${fourthAltText}">
                                                </div>
                                                <h2>${fourthTitle}</h2>
                                                ${fourthExcerpt}
                                            </div>`;
    } catch(error) {
        console.warn(error);
        return postsMobileContainer.innerHTML = errorMessage("An error occured while fetching the posts")
    }
}

getPosts();
