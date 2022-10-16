import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return (`
            <div class="list-group wd-follow-panel wd-rounded-corners-all-around">
                <div class="list-group-item d-flex justify-content-between align-items-center">
                    <a class="fw-bold wd-font-white" href="#">Who to follow</a>
                </div>
                ${who.map((item) => WhoToFollowListItem(item)).join('')}
            </div>
    `);
}
export default WhoToFollowList;