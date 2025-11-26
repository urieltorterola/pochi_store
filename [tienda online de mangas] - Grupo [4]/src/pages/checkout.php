
<?php
session_start(); 
$is_logged_in = isset($_SESSION['usuario_nombre']);
$user_name = $is_logged_in ? $_SESSION['usuario_nombre'] : '';


if (!$is_logged_in) {
   
    header("Location: login.html"); 
    exit();
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finalizar Compra | POCHI STORE</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/login.css"> </head>
<body id="checkout-page">
   
    <header class="header">
        <h1><a href="../../index.php">POCHI STORE</a></h1>
        <nav class="nav-links">
            <a href="mangas.html">MANGAS</a>
            <a href="ofertas.html">OFERTAS</a>
            <a href="favoritos.html">FAVORITOS</a>
            
            <?php if ($is_logged_in): ?>

                       <?php else: ?>
                <a href="login.html">INICIAR SESION</a>
                <a href="register.html">REGISTRARSE</a>
            <?php endif; ?>
        </nav>
        <div class="search-cart">
            <form class="search-form" id="search-form">
                <input type="text" id="search-input" placeholder="Buscar...">
                <button type="submit" id="search-button">⊕</button>
            </form>
            <div class="cart-container">
                <span class="cart-icon" id="cart-icon"><span id="cart-count">0</span></span>
                <div class="cart-dropdown" id="cart-dropdown">
                    <h2>Carrito de Compras</h2>
                    <ul id="cart-list"></ul>
                    <button onclick="window.location.href='checkout.php'" style="padding: 10px; background-color: #00897b; color: white; border: none; width: 100%; cursor: pointer;">Ver Carrito</button>
                </div>
            </div>
        </div>
    </header>
    <main class="checkout-main">
        <h2>🛍 Resumen de Compra y Pago</h2>

        <div class="checkout-container">
            <section class="checkout-details">
                <h3>Detalles de la Dirección</h3>
                 <form class="registro-form">
                    <label class="registro-label">Dirección Completa</label>
                    <input type="text" class="registro-input" value="" required>
                    <label class="registro-label">Código Postal</label>
                    <input type="text" class="registro-input" value="" required>
                    <label class="registro-label">Teléfono</label>
                    <input type="tel" class="registro-input" value="" required>
                </form>
            </section>

           <section class="order-summary">
                <h3>Resumen del Pedido</h3>
                
                <ul id="checkout-list">
                    </ul>
                
                <p class="total">Subtotal: <span id="checkout-subtotal">$0.00</span></p>
                <p class="total">Envío: $5.00</p>
                <p class="total-final">Total Final: <span id="checkout-total-final">$5.00</span></p>
                
                <h3 style="margin-top: 20px;">Método de Pago</h3>
                <select class="registro-input" style="width: 100%;">
                    <option>Tarjeta de Crédito/Débito</option>
                    <option>Transferencia Bancaria</option>
                    <option>Pago Fácil/Rapipago</option>
                </select>
                
                <button 
                    id="confirm-purchase-btn" 
                    onclick="confirmPurchase();" 
                    class="registro-boton" 
                    style="margin-top: 20px; width: 100%; background-color: #00897b;">
                    Confirmar y Pagar
                </button>
            </section>
        </div>
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
    <script src="../js/script.js"></script>
</body>
</html>