import Summary from "./Summary.js";
const PostItem = (post) => {
    return (`
        <div class="rounded wd-background-grey row m-0 ps-2 pe-2 pt-2 pb-2">
            <div class="col-1 justify-content-center">
                <img class="wd-circle-icon" src="${post.icon}">
            </div>
        
            <div class="col-11 row ms-2">
                <div class="col-11 mb-2">
                    <p class="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
                        <span class="wd-font-white wd-font-bold">${post.userName}&nbsp;<i
                                class="fas fa-check-circle"></i></span>&nbsp;@${post.handle}&nbsp;•&nbsp;${post.time}</p>
                    <p class="wd-title wd-font-white wd-font-size-15px wd-font-family-arial">${post.content}</p>
                </div>
                <div class="col-1">
                    <a href="#" class="wd-font-white">...</a>
                </div>
                
                ${Summary(post)}
                
                <div class="col-12 d-flex pt-2 pe-5 justify-content-between">
                    <div class="">
                        <a href="#" class="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
                            <span class="wd-margin-right-12px"><i class="far fa-comment fa-flip-horizontal"></i></span>${post.comment_count}</a>
                    </div>
                    <div class="">
                        <a href="#" class="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
                            <span class="wd-margin-right-12px"><i class="fas fa-retweet"></i></span>${post.retweet_count}</a>
                    </div>
                    <div class="">
                        <a href="#" class="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
                            <span class="wd-margin-right-12px"><i class="fas fa-heart"></i></span>${post.like_count}</a>
                    </div>
                    <div class="">
                        <a href="#" class="wd-bookmark-title wd-font-grey wd-font-size-15px wd-font-family-arial">
                            <span class="wd-margin-right-12px"><i class="fas fa-external-link-alt"></i></span></a>
                    </div>
                </div>
            </div>
        </div>
    `);
}
export default PostItem;