import PostSummaryListItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
        ${posts.map((post) => PostSummaryListItem(post)).join('')}
    `);
}
export default PostSummaryList;