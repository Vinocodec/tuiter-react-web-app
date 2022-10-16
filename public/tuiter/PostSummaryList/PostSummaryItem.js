const PostSummaryItem = (post) => {
    return (`
        <div class="rounded wd-background-grey row m-0 ps-2 pe-2 pt-2 pb-2 ">
            <div class="col-8 col-sm-8 col-lg-9">
                <p class="wd-title wd-font-grey wd-font-size-15px wd-font-family-arial">
                    ${post.topic}</p>
                <p class="wd-title wd-font-white wd-font-bold wd-font-size-15px wd-font-family-arial">
                    <span class="">${post.userName}&nbsp;<i class="fas fa-check-circle"></i></span>
                    <span class="wd-font-grey">&nbsp;-&nbsp;${post.time}</span></p></p>
                <p class="wd-title wd-font-white wd-font-bold wd-font-size-15px wd-font-family-arial">
                    <a>
                    ${post.title}
                    </a>
                </p>
            </div>
            <div class="col-4 col-sm-4 col-lg-3 d-flex align-items-center justify-content-center">
                <img class="wd-rounded-corners-all-around"
                     src="${post.image}"
                     width="100px" height="100px"/>
            </div>
        </div>
    `);
}
export default PostSummaryItem;