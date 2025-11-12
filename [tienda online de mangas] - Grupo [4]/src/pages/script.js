// --- DATOS DE LOS MANGAS ---
const mangasData = [
    { id: 1, title: "Jujutsu Kaisen Vol. 25", author: "Gege Akutami", description: "La batalla por el destino del mundo de la hechicería continúa.", img: "download (7).jpg", price: 15.99, category: "Shonen", tags: "jujutsu kaisen 25 gege akutami", offer: false },
    { id: 2, title: "Jujutsu Kaisen Vol. 30", author: "Gege Akutami", description: "Un nuevo clímax en la historia con giros inesperados.", img: "download (2).jpg", price: 15.99, category: "Shonen", tags: "jujutsu kaisen 30 gege akutami", offer: true, discount: 0.10 },
    { id: 3, title: "Bocchi the Rock! Vol. 1", author: "Aki Hamazi", description: "Hitori Gotoh, la chica solitaria, se une a una banda de rock.", img: "download (1).jpg", price: 13.50, category: "Seinen/Comedia", tags: "bocchi the rock 1 aki hamazi", offer: false },
    { id: 4, title: "Ataque a los Titanes: No Regrets Vol. 1", author: "Hajime Isayama, Gun Snark", description: "La precuela que revela el origen de Levi Ackerman.", img: "download (5).jpg", price: 14.99, category: "Shonen", tags: "ataque titanes no regrets 1 levi", offer: false },
    { id: 5, title: "Dragon Ball Super Vol. 4", author: "Akira Toriyama, Toyotaro", description: "Goku Black y Zamasu siembran el terror en el futuro.", img: "download.jpg", price: 12.99, category: "Shonen", tags: "dragon ball super 4 goku black zamsu", offer: true, discount: 0.20 },
    { id: 6, title: "One-Punch Man Vol. 1", author: "ONE, Yusuke Murata", description: "Saitama, el héroe que derrota a todos con un solo puñetazo.", img: "large_temp_img.jpg", price: 13.99, category: "Seinen/Acción", tags: "one punch man 1 saitama", offer: false },
    { id: 7, title: "Dandadan", author: "Yukinobu Tatsu", description: "Una comedia de acción paranormal sobre lo oculto y lo alienígena.", img: "d0igflor3ibf1.jpeg", price: 14.50, category: "Shonen/Comedia", tags: "dandadan yukinobu tatsu", offer: false },
    { id: 8, title: "Steel Ball Run Vol. 1", author: "Hirohiko Araki", description: "El inicio de la épica carrera Steel Ball Run en América.", img: "51ReX3X4MJL._SY445_SX342_ML2_.jpg", price: 16.50, category: "Seinen/Aventura", tags: "steel ball run 1 jojo hirohiko araki", offer: false },
    { id: 9, title: "Dr. Stone Vol. 1", author: "Riichiro Inagaki, Boichi", description: "El genio Senku despierta en un mundo petrificado y busca revivir la civilización.", img: "download (11).jpg", price: 13.50, category: "Shonen/Ciencia Ficción", tags: "dr stone 1 riichiro inagaki", offer: true, discount: 0.15 },
    { id: 10, title: "Jujutsu Kaisen: Módulo", author: "Gege Akutami, Jun Sasamura", description: "Una historia alternativa o spin-off del mundo de Jujutsu Kaisen.", img: "Modulo_Chapter_2.jpg", price: 15.00, category: "Shonen", tags: "jujutsu kaisen modulo spin off", offer: true, discount: 0.10 }
];

// --- FUNCIONES DE ALMACENAMIENTO LOCAL ---
const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];
const setCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));
const getFavorites = () => JSON.parse(localStorage.getItem('favorites')) || [];
const setFavorites = (favorites) => localStorage.setItem('favorites', JSON.stringify(favorites));

// --- LÓGICA DEL CARRITO ---
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
            const li = document.createElement('li');
            const finalPrice = item.offer ? (item.price * (1 - item.discount)).toFixed(2) : item.price.toFixed(2);
            li.innerHTML = `
                <span>${item.title} (x${item.quantity}) - $${finalPrice}</span>
                <button onclick="removeFromCart(${item.id})">Quitar</button>
            `;
            cartList.appendChild(li);
            totalItems += item.quantity;
        });
    }
    
    cartCount.textContent = totalItems;
}

// --- LÓGICA DE FAVORITOS ---
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
    
    // **CORRECCIÓN:** Recargar el display si estamos en la página de favoritos
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
        button.textContent = isFavorite ? '★ En Favoritos' : '☆ Añadir a Favoritos';
    });
}


// --- LÓGICA DE RENDERIZADO Y FILTRADO (ESTRUCTURA DE TARJETA CORREGIDA) ---
function createMangaCard(manga, isFavoritePage = false) {
    const article = document.createElement('article');
    article.className = 'manga-card';
    article.dataset.title = manga.title;

    let priceHTML = `<p class="price">$${manga.price.toFixed(2)}</p>`;
    let finalPrice = manga.price;

    if (manga.offer) {
        finalPrice = manga.price * (1 - manga.discount);
        priceHTML = `
            <p class="price-old">$${manga.price.toFixed(2)}</p>
            <p class="price-new">$${finalPrice.toFixed(2)}</p>
        `;
    }

    // Mini Display de Descripción
    const descriptionDisplay = `
        <div class="manga-info-display">
            <p><strong>Autor:</strong> ${manga.author}</p>
            <p><strong>Descripción:</strong> ${manga.description}</p>
        </div>
    `;

    article.innerHTML = `
        <div class="manga-header-section">
            <img src="${manga.img}" alt="${manga.title}">
            <h3>${manga.title}</h3>
            ${descriptionDisplay} 
            ${manga.offer ? `<span class="discount-tag">-${(manga.discount * 100)}%</span>` : ''}
        </div>
        
        <div class="manga-actions-section">
            ${priceHTML}
            <button class="favorite-btn" data-id="${manga.id}" onclick="toggleFavorite(${manga.id})">${isFavoritePage ? '★ Quitar' : '☆ Añadir a Favoritos'}</button>
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

    // Actualizar el estado de los botones de favoritos
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
        return; // No hay filtros en la página de inicio
    }

    const priceFilter = document.getElementById('price-filter') ? document.getElementById('price-filter').value : 'all';
    const categoryFilter = document.getElementById('category-filter') ? document.getElementById('category-filter').value : 'all';
    const searchBar = document.getElementById('search-input');
    const searchTerm = searchBar ? searchBar.value.toLowerCase().trim() : '';

    let filteredMangas = productsToFilter;

    // 1. Filtrar por Búsqueda (tags, title, author)
    if (searchTerm) {
        filteredMangas = filteredMangas.filter(manga => 
            manga.tags.includes(searchTerm) || 
            manga.title.toLowerCase().includes(searchTerm) || 
            manga.author.toLowerCase().includes(searchTerm)
        );
    }

    // 2. Filtrar por Categoría
    if (categoryFilter !== 'all') {
        filteredMangas = filteredMangas.filter(manga => manga.category.includes(categoryFilter));
    }

    // 3. Filtrar y Ordenar por Precio
    switch (priceFilter) {
        case 'low-to-high':
            filteredMangas.sort((a, b) => a.price - b.price);
            break;
        case 'high-to-low':
            filteredMangas.sort((a, b) => b.price - a.price);
            break;
        case 'all':
        default:
            // Sin ordenar por precio, se mantiene el orden original o el de la búsqueda/categoría
            break;
    }

    // Renderizar los resultados
    const containerId = (currentPage === 'favorites-page') ? 'favorites-container' : 'manga-grid';
    renderProducts(filteredMangas, containerId, currentPage === 'favorites-page');
}

// --- EVENT LISTENERS Y SETUP INICIAL ---
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el carrito y el contador
    updateCartDisplay();
    updateFavoriteButtons();

    // Lógica para desplegar el carrito
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');
    if (cartIcon && cartDropdown) {
        cartIcon.addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que el evento se propague al document
            cartDropdown.classList.toggle('active');
        });
        document.addEventListener('click', (event) => {
            // Cierra el carrito si haces clic fuera del icono y del propio carrito
            if (!cartDropdown.contains(event.target) && !cartIcon.contains(event.target)) {
                cartDropdown.classList.remove('active');
            }
        });
    }

    // Inicializar el renderizado y los filtros en las páginas correspondientes
    if (document.getElementById('manga-grid') || document.getElementById('favorites-container')) {
        const isFavorites = document.body.id === 'favorites-page';
        
        // Configurar los filtros y la búsqueda para que se apliquen en tiempo real
        document.getElementById('price-filter')?.addEventListener('change', applyFilters);
        document.getElementById('category-filter')?.addEventListener('change', applyFilters);
        document.getElementById('search-input')?.addEventListener('input', applyFilters);
        
        // Renderizado inicial
        if (isFavorites) {
             renderProducts(getFavorites(), 'favorites-container', true);
        } else {
            applyFilters();
        }
    }
    
    // Configuración de las categorías para los filtros 
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

    // Configuración de la búsqueda en el header (para la página de inicio)
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    if (searchInput && searchButton && document.body.id === 'home-page') {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm) {
                // Redirige a la página de mangas y usa localStorage para la búsqueda
                localStorage.setItem('searchTerm', searchTerm);
                window.location.href = 'mangas.html';
            }
        });
    }
    
    // Lógica de búsqueda al cargar las páginas de Mangas/Ofertas
    if (document.body.id === 'mangas-page' || document.body.id === 'ofertas-page') {
        const initialSearchTerm = localStorage.getItem('searchTerm');
        if (initialSearchTerm) {
            document.getElementById('search-input').value = initialSearchTerm;
            applyFilters();
            localStorage.removeItem('searchTerm'); // Limpia después de usar
        }
    }
});