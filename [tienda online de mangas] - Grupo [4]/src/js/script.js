const mangasData = [
    { id: 1, title: "Jujutsu Kaisen Vol. 25", author: "Gege Akutami", description: "La batalla por el destino del mundo de la hechicería continúa.", img: "../img-icons/download (7).jpg", price: 15.99, category: "Shonen", tags: "jujutsu kaisen 25 gege akutami", offer: false },
    { id: 2, title: "Jujutsu Kaisen Vol. 30", author: "Gege Akutami", description: "Un nuevo clímax en la historia con giros inesperados.", img: "../img-icons/download (2).jpg", price: 15.99, category: "Shonen", tags: "jujutsu kaisen 30 gege akutami", offer: true, discount: 0.10 },
    { id: 3, title: "Bocchi the Rock! Vol. 1", author: "Aki Hamazi", description: "Hitori Gotoh, la chica solitaria, se une a una banda de rock.", img: "../img-icons/download (1).jpg", price: 13.50, category: "Seinen/Comedia", tags: "bocchi the rock 1 aki hamazi", offer: false },
    { id: 4, title: "Ataque a los Titanes: No Regrets Vol. 1", author: "Hajime Isayama, Gun Snark", description: "La precuela que revela el origen de Levi Ackerman.", img: "../img-icons/download (5).jpg", price: 14.99, category: "Shonen", tags: "ataque titanes no regrets 1 levi", offer: false },
    { id: 5, title: "Dragon Ball Super Vol. 4", author: "Akira Toriyama, Toyotaro", description: "Goku Black y Zamasu siembran el terror en el futuro.", img: "../img-icons/download.jpg", price: 12.99, category: "Shonen", tags: "dragon ball super 4 goku black zamsu", offer: true, discount: 0.20 },
    { id: 6, title: "One-Punch Man Vol. 1", author: "ONE, Yusuke Murata", description: "Saitama, el héroe que derrota a todos con un solo puñetazo.", img: "../img-icons/large_temp_img.jpg", price: 13.99, category: "Seinen/Acción", tags: "one punch man 1 saitama", offer: false },
    { id: 7, title: "Dandadan", author: "Yukinobu Tatsu", description: "Una comedia de acción paranormal sobre lo oculto y lo alienígena.", img: "../img-icons/d0igflor3ibf1.jpeg", price: 14.50, category: "Shonen/Comedia", tags: "dandadan yukinobu tatsu", offer: false },
    { id: 8, title: "Steel Ball Run Vol. 1", author: "Hirohiko Araki", description: "El inicio de la épica carrera Steel Ball Run en América.", img: "../img-icons/51ReX3X4MJL._SY445_SX342_ML2_.jpg", price: 16.50, category: "Seinen/Aventura", tags: "steel ball run 1 jojo hirohiko araki", offer: false },
    { id: 9, title: "Dr. Stone Vol. 1", author: "Riichiro Inagaki, Boichi", description: "El genio Senku despierta en un mundo petrificado y busca revivir la civilización.", img: "../img-icons/download (11).jpg", price: 13.50, category: "Shonen/Ciencia Ficción", tags: "dr stone 1 riichiro inagaki", offer: true, discount: 0.15 },
    { id: 10, title: "Jujutsu Kaisen: Módulo", author: "Gege Akutami, Jun Sasamura", description: "Una historia alternativa o spin-off del mundo de Jujutsu Kaisen.", img: "../img-icons/Modulo_Chapter_2.webp", price: 15.00, category: "Shonen", tags: "jujutsu kaisen modulo spin off", offer: true, discount: 0.10 },
    { id: 11, title: "Sousou no Frieren Vol. 1", author: "Kanehito Yamada", description: "Sousou no Frieren es una serie de fantasía sobre una elfa hechicera llamada Frieren, cuya larga vida choca con la efímera existencia de los humanos.", img: "../img-icons/Sousou_no_Frieren_-_Manga_Vol01.webp", price: 15.00, category: "Aventura/Fantasia", tags: "Sousou no Frieren 1", offer: false },
    { id: 12, title: "Demon Slayer Vol. 16", author: "Koyoharu Gotouge, gotouge_koyoharu", description: "Tanjiro se une al Cuerpo de Cazadores de Demonios para vengar a su familia y encontrar una cura para su hermana, a quien intenta devolver su forma humana. ", img: "../img-icons/Demon_Slayer_-_Volume_16.webp", price: 15.99, category: "Accion/Aventura", tags: "Demon Slayer 16 ", offer: false },
    { id: 13, title: "Chainsaw Man Vol. 19", author: "Tatsuki Fujimoto", description: "Denji, un adolescente pobre que se fusiona con su perro demonio Pochita para convertirse en un híbrido humano-demonio con la capacidad de transformar su cuerpo en motosierras.", img: "../img-icons/Chain.jpg", price: 16.99, category: "Accion/Comedia de terror", tags: "ChainSaw Man vol 19 ", offer: true, discount: 0.05 },
    { id: 14, title: "Baki: The Grappler Vol. 2", author: "Keisuke Itagaki", description: "El joven luchador Baki Hanma, cuyo objetivo es superar a su padre, Yujiro Hanma, considerado el hombre más fuerte del mundo. ", img: "../img-icons/baki-the-grappler-02.jpg", price: 15.30, category: "shonen/Accion", tags: "Baki vol 2", offer: true, discount: 0.15 },
    { id: 15, title: "Hunter x Hunter Vol. 1", author: "Yoshihiro Togashi", description: "Gon Freecss, un niño de 12 años que se entera de que su padre, Ging, está vivo y es un cazador legendario.", img: "../img-icons/9782505140306.webp", price: 15.99, category: "Accion/Aventura", tags: "Hunter x Hunter vol 1", offer: true, discount: 0.10 }, 
    { id: 16, title: "Tomo-chan wa Onnanoko! Vol. 1", author: "Fumita Yanagida", description: "Tomo Aizawa es una chica de secundaria marimacha que está enamorada de su amigo de la infancia, Junichiro Kubota, quien solo la considera un amigo varón.", img: "../img-icons/filters_quality(95)format(webp).webp", price: 15.00, category: "Accion/Aventura", tags: "Tomo-chan wa Onnanoko! vol 1", offer: true, discount: 0.20 },
    { id: 17, title: "One Piece Vol. 31", author: "Eiichiro Oda", description: "Monkey D. Luffy y su tripulación, los Piratas del Sombrero de Paja, buscan el tesoro definitivo conocido como One Piece para que Luffy se convierta en el Rey de los Piratas.", img: "../img-icons/onepiceVolumen_31.webp", price: 15.99, category: "Shonen/Aventura", tags: "Onepiece vol 31", offer: true, discount: 0.10 }, 
    { id: 18, title: "Death Note Vol. 1", author: "Tsugumi Ohba, Takeshi Obata", description: "Light Yagami encuentra un cuaderno sobrenatural que permite matar a cualquier persona cuyo nombre sea escrito en él.", img: "../img-icons/deathnote01.webp", price: 15.99, category: "Shonen/Misterio,", tags: "Deathnote vol 1", offer: true, discount: 0.10 }, 
    { id: 19, title: "Naruto Vol. 26", author: "Masashi Kishimoto", description: "Naruto Uzumaki, un joven ninja huérfano y ruidoso que sueña con convertirse en el Hokage", img: "../img-icons/91XaaeQnbYL._AC_UF1000,1000_QL80_.jpg", price: 15.99, category: "Shonen/Aventura,", tags: "naruto vol 26", offer: true, discount: 0.10 },
    { id: 19, title: "My Hero Academia Vol. 42", author: "Kohei Horikoshi", description: "Un chico sin poderes, Izuku Midoriya, es elegido por el héroe número uno para heredar su poder.", img: "../img-icons/myheroacademia.png", price: 15.99, category: "Shonen/Aventura,", tags: "naruto vol 26", offer: true, discount: 0.10 }
];

const mangasData2 = [
    { id: 100, title: "Jujutsu Kaisen Vol. 30", author: "Gege Akutami", description: "Un nuevo clímax en la historia con giros inesperados.", img: "img-icons/download (2).jpg", price: 15.99, category: "Shonen", tags: "jujutsu kaisen 30 gege akutami", offer: true, discount: 0.10 },
    { id: 101, title: "Dragon Ball Super Vol. 4", author: "Akira Toriyama, Toyotaro", description: "Goku Black y Zamasu siembran el terror en el futuro.", img: "img-icons/download.jpg", price: 12.99, category: "Shonen", tags: "dragon ball super 4 goku black zamsu", offer: true, discount: 0.20 },
    { id: 102, title: "Dr. Stone Vol. 1", author: "Riichiro Inagaki, Boichi", description: "El genio Senku despierta en un mundo petrificado y busca revivir la civilización.", img: "img-icons/download (11).jpg", price: 13.50, category: "Shonen/Ciencia Ficción", tags: "dr stone 1 riichiro inagaki", offer: true, discount: 0.15 },
    { id: 103, title: "Chainsaw Man Vol. 19", author: "Tatsuki Fujimoto", description: "Denji, un adolescente pobre que se fusiona con su perro demonio Pochita para convertirse en un híbrido humano-demonio con la capacidad de transformar su cuerpo en motosierras.", img: "img-icons/Chain.jpg", price: 16.99, category: "Accion/Comedia de terror", tags: "ChainSaw Man vol 19 ", offer: true, discount: 0.05 },
    { id: 104, title: "Baki: The Grappler Vol. 2", author: "Keisuke Itagaki", description: "El joven luchador Baki Hanma, cuyo objetivo es superar a su padre, Yujiro Hanma, considerado el hombre más fuerte del mundo.  ", img: "img-icons/baki-the-grappler-02.jpg", price: 15.30, category: "shonen/Accion", tags: "Baki vol 2", offer: true, discount: 0.15 }

]

const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];
const setCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));
const getFavorites = () => JSON.parse(localStorage.getItem('favorites')) || [];
const setFavorites = (favorites) => localStorage.setItem('favorites', JSON.stringify(favorites));

function addToCart(mangaId) {
    const cart = getCart();
    const manga = mangasData.find(m => m.id === mangaId);
    if (!manga) return;

    const existingItem = cart.find(item => item.id === mangaId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...manga, quantity: 1 });
    }

    setCart(cart);
    updateCartDisplay();
    alert(`"${manga.title}" agregado al carrito.`);
}

function removeFromCart(mangaId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== mangaId);
    setCart(cart);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    const cartCount = document.getElementById('cart-count');
    const cart = getCart();
    
    if (!cartList || !cartCount) return;

    cartList.innerHTML = '';
    let totalItems = 0;

    if (cart.length === 0) {
        cartList.innerHTML = '<p class="empty-cart-message">El carrito está vacío.</p>';
    } else {
        cart.forEach(item => {
            const finalPrice = item.offer ? (item.price * (1 - item.discount)).toFixed(2) : item.price.toFixed(2);
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${item.title} (x${item.quantity}) - $${finalPrice}</span>
                <br>
                <button class="boton" onclick="removeFromCart(${item.id})">Quitar</button>
            `;
            cartList.appendChild(li);
            totalItems += item.quantity;
        });
    }
    
    cartCount.textContent = totalItems;
}

function toggleFavorite(mangaId) {
    let favorites = getFavorites();
    const manga = mangasData.find(m => m.id === mangaId);
    if (!manga) return;

    const index = favorites.findIndex(item => item.id === mangaId);

    if (index === -1) {
        favorites.push(manga);
        alert(`"${manga.title}" agregado a Favoritos.`);
    } else {
        favorites.splice(index, 1);
        alert(`"${manga.title}" eliminado de Favoritos.`);
    }

    setFavorites(favorites);

    if (document.body.id === 'favorites-page') {
        renderProducts(favorites, 'favorites-container', true); 
    }
    
    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    const favorites = getFavorites();
    document.querySelectorAll('.favorite-btn').forEach(button => {
        const mangaId = parseInt(button.dataset.id);
        const isFavorite = favorites.some(item => item.id === mangaId);
        button.classList.toggle('is-favorite', isFavorite);
        button.textContent = isFavorite ? '❀ En Favoritos' : '❀ Añadir a Favoritos';
    });
}

function createMangaCard(manga, isFavoritePage = false) {
    const article = document.createElement('article');
    article.className = 'manga-card';
    article.dataset.title = manga.title;

    const currentPageId = document.body.id;

    let pathPrefix = (currentPageId === 'home-page') ? 'src/' : '../src/';
    
    const imagePath = `${pathPrefix}${manga.img}`;
    
    let priceHTML = `<p class="price">$${manga.price.toFixed(2)}</p>`;
    let finalPrice = manga.price;

    if (manga.offer) {
        finalPrice = manga.price * (1 - manga.discount);
        priceHTML = `
            <p class="price-old">$${manga.price.toFixed(2)}</p>
            <p class="price-new">$${finalPrice.toFixed(2)}</p>
        `;
    }

    const descriptionDisplay = `
        <div class="manga-info-display">
            <p><strong>Autor:</strong> ${manga.author}</p>
            <p><strong>Descripción:</strong> ${manga.description}</p>
        </div>
    `;

    article.innerHTML = `
        <div class="manga-header-section">
            <img src="${imagePath}" alt="${manga.title}">
            <h3>${manga.title}</h3>
            ${descriptionDisplay} 
            ${manga.offer ? `<span class="discount-tag">-${(manga.discount * 100).toFixed(0)}%</span>` : ''}
        </div>
        
        <div class="manga-actions-section">
            ${priceHTML}
            <button class="favorite-btn" data-id="${manga.id}" onclick="toggleFavorite(${manga.id})">${isFavoritePage ? '★ Quitar' : '❀ Añadir a Favoritos'}</button>
            <button class="buy-btn" onclick="addToCart(${manga.id})">Añadir al Carrito</button>
        </div>
    `;

    return article;
}

function renderProducts(mangas, containerId, isFavoritePage = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    
    if (mangas.length === 0) {
        container.innerHTML = '<p class="no-results">No se encontraron mangas que coincidan con los filtros.</p>';
        return;
    }

    mangas.forEach(manga => {
        container.appendChild(createMangaCard(manga, isFavoritePage));
    });

    updateFavoriteButtons();
}

function applyFilters() {
    const currentPage = document.body.id;
    let productsToFilter = [];

    if (currentPage === 'mangas-page') {
        productsToFilter = mangasData.filter(m => !m.offer);
    } else if (currentPage === 'ofertas-page') {
        productsToFilter = mangasData.filter(m => m.offer);
    } else if (currentPage === 'favorites-page') {
        productsToFilter = getFavorites();
    } else {
        return;
    }

    const priceFilter = document.getElementById('price-filter') ? document.getElementById('price-filter').value : 'all';
    const categoryFilter = document.getElementById('category-filter') ? document.getElementById('category-filter').value : 'all';
    const searchBar = document.getElementById('search-input');
    const searchTerm = searchBar ? searchBar.value.toLowerCase().trim() : '';

    let filteredMangas = productsToFilter;

    if (searchTerm) {
        filteredMangas = filteredMangas.filter(manga => 
            manga.tags.includes(searchTerm) || 
            manga.title.toLowerCase().includes(searchTerm) || 
            manga.author.toLowerCase().includes(searchTerm)
        );
    }

    if (categoryFilter !== 'all') {
        filteredMangas = filteredMangas.filter(manga => manga.category.includes(categoryFilter));
    }

    switch (priceFilter) {
        case 'low-to-high':
            filteredMangas.sort((a, b) => a.price - b.price);
            break;
        case 'high-to-low':
            filteredMangas.sort((a, b) => b.price - a.price);
            break;
        case 'all':
        default:
            break;
    }

    const containerId = (currentPage === 'favorites-page') ? 'favorites-container' : 'manga-grid';
    renderProducts(filteredMangas, containerId, currentPage === 'favorites-page');
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartDisplay();
    updateFavoriteButtons();

    const carouselInner = document.getElementById('carousel-inner');
    if (carouselInner && mangasData2.length > 0) {
        const featuredIDs = [100, 101, 102, 103, 104]; 
        const featuredMangas = mangasData2.filter(manga => featuredIDs.includes(manga.id));
        let carouselHTML = '';
        featuredMangas.forEach((manga, index) => {
            const isActive = index === 0 ? 'active' : '';
            let displayPrice = manga.price;
            let oldPrice = '';
            if (manga.offer && manga.discount) {
                const discountAmount = manga.price * manga.discount;
                displayPrice = manga.price - discountAmount;
                oldPrice = `<span class="old-price">$${manga.price.toFixed(2)}</span>`;
            }
            const imagePath = `src/${manga.img}`; 
            carouselHTML += `
                <div class="carousel-item ${isActive}">
                    <div class="manga-card-small">
                        <img src="${imagePath}" alt="${manga.title}">
                        <div class="card-info">
                            <h4>${manga.title}</h4>
                            <p class="author">${manga.author}</p>
                            <p class="price-container">
                                ${oldPrice}
                                <span class="price">$${displayPrice.toFixed(2)}</span>
                            </p>
                            <a href="src/pages/mangas.html#manga-${manga.id}" class="btn-ver-mas">Ver Más</a>
                        </div>
                    </div>
                </div>
            `;
        });

        carouselInner.innerHTML = carouselHTML;
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        let currentIndex = 0;

        const moveNext = () => {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
            items[currentIndex].classList.add('active');
        };

        const movePrev = () => {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
            items[currentIndex].classList.add('active');
        };

        document.getElementById('prev-btn')?.addEventListener('click', movePrev);
        document.getElementById('next-btn')?.addEventListener('click', moveNext);

        setInterval(moveNext, 5000); 
    }

    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');
    if (cartIcon && cartDropdown) {
        cartIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            cartDropdown.classList.toggle('active');
        });
        document.addEventListener('click', (event) => {
            if (!cartDropdown.contains(event.target) && !cartIcon.contains(event.target)) {
                cartDropdown.classList.remove('active');
            }
        });
    }

    if (document.getElementById('manga-grid') || document.getElementById('favorites-container')) {
        const isFavorites = document.body.id === 'favorites-page';

        document.getElementById('price-filter')?.addEventListener('change', applyFilters);
        document.getElementById('category-filter')?.addEventListener('change', applyFilters);
        document.getElementById('search-input')?.addEventListener('input', applyFilters);
        
        if (isFavorites) {
             renderProducts(getFavorites(), 'favorites-container', true);
        } else {
            applyFilters();
        }
    }

    const categories = [...new Set(mangasData.map(m => m.category))];
    const categoryFilterElement = document.getElementById('category-filter');
    if (categoryFilterElement) {
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categoryFilterElement.appendChild(option);
        });
    }

    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    if (searchInput && searchButton && document.body.id === 'home-page') {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm) {
                localStorage.setItem('searchTerm', searchTerm);
                window.location.href = 'src/pages/mangas.html'; 
            }
        });
    }
    
    if (document.body.id === 'mangas-page' || document.body.id === 'ofertas-page') {
        const initialSearchTerm = localStorage.getItem('searchTerm');
        if (initialSearchTerm) {
            document.getElementById('search-input').value = initialSearchTerm;
            applyFilters();
            localStorage.removeItem('searchTerm'); 
        }
    }
});



function confirmPurchase() {

    if (cart.length === 0) {
        alert('Tu carrito está vacío. No puedes finalizar una compra sin productos.');
        return;
    }


    alert('¡Gracias por su compra! Su pedido ha sido procesado con éxito.');

 
    cart.length = 0; 
    

    window.location.href = '../../index.php'; 

    updateCartDisplay();
}

function loadCheckoutSummary() {
    const checkoutList = document.getElementById('checkout-list');
    const subtotalEl = document.getElementById('checkout-subtotal');
    const finalTotalEl = document.getElementById('checkout-total-final');

    if (!checkoutList) return; 

    checkoutList.innerHTML = '';
    let subtotal = 0;
    const shipping = 5.00; 

    if (cart.length === 0) {
        checkoutList.innerHTML = '<li>No hay productos en tu carrito.</li>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            const listItem = document.createElement('li');
            listItem.textContent = `${item.title} (x${item.quantity}) - $${itemTotal.toFixed(2)}`;
            checkoutList.appendChild(listItem);
        });
    }

    const finalTotal = subtotal + shipping;


    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (finalTotalEl) finalTotalEl.textContent = `$${finalTotal.toFixed(2)}`;
}


if (document.getElementById('checkout-page')) {
    loadCheckoutSummary();
}