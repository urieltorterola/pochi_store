<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio | POCHI STORE</title>
    <link rel="stylesheet" href="src/css/style.css">
</head>
<body id="home-page">
    
    <header class="header">
        <h1><a href="index.php">POCHI STORE</a></h1>
        <nav class="nav-links">
            <a href="src/pages/mangas.html">MANGAS</a>
            <a href="src/pages/ofertas.html">OFERTAS</a>
            <a href="src/pages/favoritos.html">FAVORITOS</a>
            <a href="src/pages/login.html">INICIAR SESION</a>
            <a href="src/pages/register.html">REGISTRARSE</a>
        </nav>
        <div class="search-cart">
            <form class="search-form" id="search-form">
                <input type="text" id="search-input" placeholder="Buscar por título, autor o etiqueta...">
                <button type="submit" id="search-button">⊕</button>
            </form>
            <div class="cart-container">
                <span class="cart-icon" id="cart-icon"><span id="cart-count">0</span></span>
                <div class="cart-dropdown" id="cart-dropdown">
                    <h2>Carrito de Compras</h2>
                    <ul id="cart-list">
                        </ul>
                    <button onclick="window.location.href='src/pages/checkout.php';" style="padding: 10px; background-color: #00897b; color: white; border: none; width: 100%; cursor: pointer;">Finalizar Compra</button>
                    </div>
            </div>
        </div>
    </header>

    <main>

    <main>
    <div class="banner-principal">
        <img src="src/img-icons/desktop-wallpaper-anime-for-youtube-channel-art-anime-youtube-banner.jpg" alt="banner">
    </div>
    </main>

        <section id="featured-mangas">
    <h2>Mangas Destacados</h2>
    <div class="carousel-container">
        <button id="prev-btn" class="carousel-btn prev">❮</button>
        <div 
            class="carousel-inner" id="carousel-inner">
        </div>
        <button id="next-btn" class="carousel-btn next">❯</button>
    </div>
    
</section>
    </main>
    




    <footer class="footer">
        <div class="footer-content">
            <h3>POCHI STORE</h3>
            <p>Somos tu tienda de mangas favorita. Nuestro objetivo es acercar las mejores historias japonesas a manos de nuestros lectores con la mejor calidad y precio.</p>
            <div class="social-icons">
                <a href="https://www.facebook.com/?locale=es_LA">Facebook</a>
                <a href="https://www.instagram.com/">Instagram</a>
                <a href="https://x.com/?lang=es">X</a>
            </div>
            <p>&copy; 2025 Pochi Store. Todos los derechos reservados.</p>
        </div>
    </footer>
    <script src="src/js/script.js"></script>
    
</body>
</html>