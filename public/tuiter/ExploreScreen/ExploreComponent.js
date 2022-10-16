import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="border-1">
            <div class="wd-search-panel">
                <span class="wd-search-icon wd-font-grey">
                    <i class="fas fa-search "></i>
                </span>
                <input class="wd-search-panel-input wd-rounded-corners-all-around wd-font-grey"
                       type="text"
                       placeholder="Search Twitter">
                <span class="wd-gear-icon wd-font-blue wd-font-size-20px">
                    <a href="#"><i class="fas fa-cog"></i></a>
                </span>
            </div>
            <div class="nav nav-tabs mb-2 justify-content-between">
                <div class="nav-item">
                    <a class="nav-link active" aria-current="page" href="for-you.html">For you</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </div>
                <div class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </div>
                <div class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </div>
            </div>
    
        </div>
        <div class="position-relative mb-2">
            <img class="img-fluid" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1" />
            <div class="wd-picture-title fs-2 text-light">SpaceX's Starship</div>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;