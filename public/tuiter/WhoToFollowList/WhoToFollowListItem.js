const WhoToFollowListItem = (who) => {
    return (`
            <div class="list-group-item d-flex align-items-center">
                <div class="col-2 d-flex align-items-center justify-content-center">
                    <img class="wd-circle-icon"
                         src="${who.avatarIcon}"
                         width="50px" height="50px"/>
                </div>
                <div class="ms-2 col-7">
                    <p class="wd-title wd-font-white wd-font-bold wd-font-size-15px wd-font-family-arial">
                        <span class="">${who.userName}&nbsp;<i class="fas fa-check-circle"></i></span>
                    </p>
                    <p class="wd-title wd-font-black wd-font-size-15px wd-font-family-arial">
                        @${who.handle}</p>
                </div>
                <a href="#" class="btn wd-follow-btn rounded-pill ">Follow</a>
            </div>        
    `);
}
export default WhoToFollowListItem;