class Page {
    constructor(title) {
        this.title = title;
        this.setNavbar();
        this.setContent();
    }

    setContent() {
        const h1DOM = document.createElement('h1');
        h1DOM.innerHTML = this.title;
        document.body.appendChild(h1DOM);
    }

    setNavbar() {
        const headerDOM = document.createElement('header');
        headerDOM.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="index.html">Shoppable</a>
            <div class="navbar-nav ms-auto me-4 btn-nav-search">
                <a href="#" class="nav-link">
                    <i class="bi bi-search"></i>
                </a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="products.html">Men</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="products.html">Women</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="products.html">Kids</a>
                    </li>
                </ul>
                <form class="d-none d-lg-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
                <ul class="navbar-nav ms-lg-3 mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link nav-icon" href="#">
                            <i class="bi bi-person"></i>
                            <span class="small">Profile</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-icon" href="#">
                            <i class="bi bi-heart"></i>
                            <span class="small">Wishlist</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-icon" href="#">
                            <i class="bi bi-bag"></i>
                            <span class="small">Bag</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>`;
        document.body.appendChild(headerDOM);
    }
}