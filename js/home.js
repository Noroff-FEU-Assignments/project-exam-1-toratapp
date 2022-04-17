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
        const fifthFeaturedImage = results[4]._embedded['wp:featuredmedia']['0'].source_url;
        const fifthAltText = results[4]._embedded['wp:featuredmedia']['0'].alt_text;
        const fifthTitle = results[4].title.rendered;
        const fifthExcerpt = results[4].excerpt.rendered;
        const sixthFeaturedImage = results[5]._embedded['wp:featuredmedia']['0'].source_url;
        const sixthAltText = results[5]._embedded['wp:featuredmedia']['0'].alt_text;
        const sixthTitle = results[5].title.rendered;
        const sixthExcerpt = results[5].excerpt.rendered;
        const seventhFeaturedImage = results[6]._embedded['wp:featuredmedia']['0'].source_url;
        const seventhAltText = results[6]._embedded['wp:featuredmedia']['0'].alt_text;
        const seventhTitle = results[6].title.rendered;
        const seventhExcerpt = results[6].excerpt.rendered;
        const eighthFeaturedImage = results[7]._embedded['wp:featuredmedia']['0'].source_url;
        const eighthAltText = results[7]._embedded['wp:featuredmedia']['0'].alt_text;
        const eighthTitle = results[7].title.rendered;
        const eighthExcerpt = results[7].excerpt.rendered;
        const ninthFeaturedImage = results[8]._embedded['wp:featuredmedia']['0'].source_url;
        const ninthAltText = results[8]._embedded['wp:featuredmedia']['0'].alt_text;
        const ninthTitle = results[8].title.rendered;
        const ninthExcerpt = results[8].excerpt.rendered;
        const tenthFeaturedImage = results[9]._embedded['wp:featuredmedia']['0'].source_url;
        const tenthAltText = results[9]._embedded['wp:featuredmedia']['0'].alt_text;
        const tenthTitle = results[9].title.rendered;
        const tenthExcerpt = results[9].excerpt.rendered;
        const eleventhFeaturedImage = results[10]._embedded['wp:featuredmedia']['0'].source_url;
        const eleventhAltText = results[10]._embedded['wp:featuredmedia']['0'].alt_text;
        const eleventhTitle = results[10].title.rendered;
        const eleventhExcerpt = results[10].excerpt.rendered;
        const twelvthFeaturedImage = results[11]._embedded['wp:featuredmedia']['0'].source_url;
        const twelvthAltText = results[11]._embedded['wp:featuredmedia']['0'].alt_text;
        const twelvthTitle = results[11].title.rendered;
        const twelvthExcerpt = results[11].excerpt.rendered;

        postsMobileContainer.innerHTML += ` <div class="latest-posts-mobile-container">
                                                <div>
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
                                                </div>
                                            </div>`;
        carouselRowOne.innerHTML += `   <div>
                                            <div>
                                                <img src="${firstFeaturedImage}" alt="${firstAltText}">
                                            </div>
                                            <h3>${firstTitle}</h3>
                                            ${firstExcerpt}
                                        </div>
                                        <div>
                                            <div>
                                                <img src="${secondFeaturedImage}" alt="${secondAltText}">
                                            </div>
                                            <h3>${secondTitle}</h3>
                                            ${secondExcerpt}
                                        </div>
                                        <div>
                                            <div>
                                                <img src="${thirdFeaturedImage}" alt="${thirdAltText}">
                                            </div>
                                            <h3>${thirdTitle}</h3>
                                            ${thirdExcerpt}
                                        </div>
                                        <div>
                                            <div>
                                                <img src="${fourthFeaturedImage}" alt="${fourthAltText}">
                                            </div>
                                            <h3>${fourthTitle}</h3>
                                            ${fourthExcerpt}
                                        </div>`
        carouselRowTwo.innerHTML += `   <div>
                                            <div>
                                                <img src="${fifthFeaturedImage}" alt="${fifthAltText}">
                                            </div>
                                            <h3>${fifthTitle}</h3>
                                            ${fifthExcerpt}
                                        </div>
                                        <div>
                                            <div>
                                                <img src="${sixthFeaturedImage}" alt="${sixthAltText}">
                                            </div>
                                            <h3>${sixthTitle}</h3>
                                            ${sixthExcerpt}
                                        </div>
                                        <div>
                                            <div>
                                                <img src="${seventhFeaturedImage}" alt="${seventhAltText}">
                                            </div>
                                            <h3>${seventhTitle}</h3>
                                            ${seventhExcerpt}
                                        </div>
                                        <div>
                                            <div>
                                                <img src="${eighthFeaturedImage}" alt="${eighthAltText}">
                                            </div>
                                            <h3>${eighthTitle}</h3>
                                            ${eighthExcerpt}
                                        </div>`
        carouselRowThree.innerHTML += ` <div>
                                            <div>
                                                <img src="${ninthFeaturedImage}" alt="${ninthAltText}">
                                            </div>
                                            <h3>${ninthTitle}</h3>
                                            ${ninthExcerpt}
                                        </div>
                                        <div>
                                            <div>
                                                <img src="${tenthFeaturedImage}" alt="${tenthAltText}">
                                            </div>
                                            <h3>${tenthTitle}</h3>
                                            ${tenthExcerpt}
                                        </div>
                                        <div>
                                            <div>
                                                <img src="${eleventhFeaturedImage}" alt="${eleventhAltText}">
                                            </div>
                                            <h3>${eleventhTitle}</h3>
                                            ${eleventhExcerpt}
                                        </div>
                                        <div>
                                            <div>
                                                <img src="${twelvthFeaturedImage}" alt="${twelvthAltText}">
                                            </div>
                                            <h3>${twelvthTitle}</h3>
                                            ${twelvthExcerpt}
                                        </div>`
    } catch(error) {
        console.warn(error);
        return postsMobileContainer.innerHTML = errorMessage("An error occured while fetching the posts")
    }
}

getPosts();
