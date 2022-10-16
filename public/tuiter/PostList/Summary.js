const SummaryPicture = (post) => {
    if (post.title === undefined) {
        return(`
            <!--summary picture-->
            <div class="col-12">
                <div class="wd-border-1px wd-rounded-corners-all-around">
                    <img class="img-fluid wd-rounded-corners-all-around" src="${post.image}"/>
                </div>
            </div>
        `);
    } else {
        return(`
            <!--summary picture-->
            <div class="col-12">
                <div class="wd-border-1px wd-rounded-corners-top">
                    <img class="img-fluid wd-rounded-corners-top" src="${post.image}"/>
                </div>
            </div>
            <!--summary text-->
            <div class="col-12">
                <div class=" wd-padding-12px wd-border-1px wd-rounded-corners-bottom">
                    <p class="wd-bookmark-title wd-font-white wd-font-size-15px wd-font-family-arial">${post.title}</p>
                    <p class="wd-title wd-font-grey wd-font-size-15px wd-font-family-arial">${post.summary}</p>
                    <p class="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial"><i
                            class="fas fa-link fa-xs"></i>&nbsp;${post.link}</p>
                </div>
            </div>
        `);
    }
}
export default SummaryPicture;