const NavigationSidebar = (active) => {
    return(`
            <div class="rounded list-group">
                <a href="#" class="list-group-item list-group-item-action">
                    <span class="me-3"><i class="fa-brands fa-twitter"></i></span>
                </a>
                <a href="../HomeScreen/index.html" class="d-flex list-group-item list-group-item-action ${active === 'Home'?'active':''}">
                    <span class="me-3"><i class="fas fa-solid fa-house-chimney"></i></span>
                    <span class="d-none d-xl-block">Home</span>
                </a>
                <a href="../ExploreScreen/index.html" class="d-flex list-group-item list-group-item-action ${active === 'Explore'?'active':''}">
                    <span class="me-3"><i class="fa-solid fa-hashtag"></i></span>
                    <span class="d-none d-xl-block">Explore</span>
                </a>
                <a href="#" class="d-flex list-group-item list-group-item-action">
                    <span class="me-3"><i class="fa-solid fa-bell"></i></span>
                    <span class="d-none d-xl-block">Notifications</span>
                </a>
                <a href="#" class="d-flex list-group-item list-group-item-action">
                    <span class="me-3"><i class="fa-solid fa-envelope"></i></span>
                    <span class="d-none d-xl-block">Messages</span>
                </a>
                <a href="#" class="d-flex list-group-item list-group-item-action">
                    <span class="me-3"><i class="fa-solid fa-bookmark"></i></span>
                    <span class="d-none d-xl-block">Boodmarks</span>
                </a>
                <a href="#" class="d-flex list-group-item list-group-item-action">
                    <span class="me-3"><i class="fa-solid fa-list"></i></span>
                    <span class="d-flex d-none d-xl-block">Lists</span>
                </a>
                <a href="#" class="d-flex  list-group-item list-group-item-action">
                    <span class="me-3"><i class="fa-solid fa-user"></i></span>
                    <span class="d-none d-xl-block">Profile</span>
                </a>
                <a href="#" class="d-flex list-group-item list-group-item-action">
                    <span class="me-3 fa-stack">
                        <i class="fa-regular fa-circle fa-stack-1x"></i>
                        <i class="fa-solid fa-ellipsis fa-stack-1x"></i>
                    </span>
                    <span class="d-none d-xl-block">More</span>
                </a>
                <a class="btn btn-primary mt-2 rounded-pill" href="#" role="button">
                    <span class="d-block d-xl-none wd-font-size-12px">Tweet</span>
                    <span class="d-none d-xl-block">Tweet</span>
                </a>
            </div>
    `);
}
export default NavigationSidebar;