const menuHTML = `
<div>
    <button class="menu-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-card-list"
            viewBox="0 0 16 16">
            <path
                d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
            <path
                d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
        </svg>
    </button>

    <div class="sidebar" id="sidebar">
        <a href="index.html"><i class="fas fa-home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path
                        d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
            </i>Inicio</a>

        <a href="cliente.html"><i class="fas fa-home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path
                        d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
            </i>Clientes</a>

        <a href="producto.html"><i class="fas fa-home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-box-seam" viewBox="0 0 16 16">
                    <path
                        d="M8 1.5a1 1 0 0 1 .66.26L13.04 5H2.96L7.34 1.76A1 1 0 0 1 8 1.5zm5.252.457a2 2 0 0 0-1.303-.493H4.051a2 2 0 0 0-1.303.493L1 3v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3l-1.748-1.043zM1 5.5v-.751l5.651 2.434a.5.5 0 0 0 .398 0L13 4.749V5.5l-6 2.6-6-2.6z" />
                </svg>
            </i>Productos</a>
        <a href="venta.html"><i class="fas fa-user">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cash"
                    viewBox="0 0 16 16">
                    <path
                        d="M15.998 5a1 1 0 0 0-.286-.707l-1.2-1.2a1 1 0 0 0-.708-.287H2.188a1 1 0 0 0-.707.287l-1.2 1.2A1 1 0 0 0 0 5v6a1 1 0 0 0 .286.707l1.2 1.2a1 1 0 0 0 .707.287h11.616a1 1 0 0 0 .707-.287l1.2-1.2A1 1 0 0 0 16 11V5zm-1 6H1v-6h14v6zM2 6v2h2V6H2zm0 4v2h2v-2H2zm4-4v2h4V6H6zm0 4v2h4v-2H6zm4-4v2h2V6h-2zm0 4v2h2v-2h-2zM8 8v2h2V8H8zm-1.328.9l.342.342a.5.5 0 0 1-.708.708l-.342-.342a.5.5 0 0 1 .708-.708z" />
                </svg>
            </i>Ventas</a>
        <a href="venta-detalles.html"><i class="fas fa-car">

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-wings"
                    viewBox="0 0 16 16">
                    <g transform="translate(8,9) scale(0.4,0.4)">
                        <g id="right_wing">
                            <path d="M0,0 L30,-10 L40,-30 L50,-50 L40,-70 L20,-90 L0,-80 L10,-60 L0,-40 L10,-20 Z"
                                fill="#FFFFFF" stroke="#000000" stroke-width="2" />
                        </g>
                        <g id="left_wing" transform="scale(-1,1)">
                            <path d="M0,0 L30,-10 L40,-30 L50,-50 L40,-70 L20,-90 L0,-80 L10,-60 L0,-40 L10,-20 Z"
                                fill="#FFFFFF" stroke="#000000" stroke-width="2" />
                        </g>
                    </g>
                </svg>
            </i> Caracteristicas</a>
        <a href="utp_categoria.html"><i class="fas fa-car">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-inboxes-fill" viewBox="0 0 16 16">
                    <path
                        d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z" />
                </svg>
            </i>Categorias</a>
        <a href="prueba.html"><i class="fas fa-car">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-database-fill" viewBox="0 0 16 16">
                    <path
                        d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223" />
                    <path
                        d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                    <path
                        d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                    <path
                        d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972" />
                </svg>
            </i>Guardar</a>
        <div class="tema-container">
            <button class="tema-toggle" onclick="mostrarTemas()">Temas</button>
            <div class="temas" id="temas">
                <button onclick="activarTema('facebook')">Ninguno</button>
                <button onclick="activarTema('tokyo-ghoul')">Tokyo Ghoul
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path
                            d="M12 2C7.03 2 3 5.98 3 11c0 3.7 2.56 7.18 6 7.94v3.56C9 22.24 9.76 23 10.68 23c.55 0 1.07-.26 1.39-.73.45-.68.33-1.59-.26-2.14-.16-.15-.2-.39-.1-.57l.01-.01c.1-.2.35-.29.56-.19 2.78 1.44 4.61 1.44 7.38-.01.25-.13.57-.11.79.08.54.51.55 1.39-.03 1.89-.27.23-.62.36-.98.36-.6 0-1.17-.29-1.5-.78-.18-.27-.55-.35-.84-.19-.08.04-.14.1-.19.17-.62.79-1.64 1.34-3.04 1.53v-3.55c3.44-.77 6-4.24 6-7.94C21 5.98 16.97 2 12 2z">
                        </path>
                    </svg>
                </button>
                <button onclick="activarTema('boku-no-hero')">Boku No Hero
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path
                            d="M12 2L9.19 8.62 2 9.24l5.45 4.73-1.59 6.94L12 17.77l5.69 3.14-1.59-6.94L22 9.24l-7.19-.62L12 2z">
                        </path>
                    </svg>
                </button>
                <button onclick="activarTema('world-trigger')">World Trigger
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path
                            d="M12 2C5.92 2 1 6.92 1 13s4.92 11 11 11 11-4.92 11-11S18.08 2 12 2zm3.54 8.11l-1.77 2.71c-.09.14-.22.22-.37.24-.14.02-.28-.03-.39-.15l-1.47-1.47-3.59 5.55a.996.996 0 01-1.62-.18l-1.56-2.77a.996.996 0 111.38-1.44l.96 1.7 2.87-4.44a.996.996 0 011.62.18l.76 1.02 1.77-2.71a.996.996 0 011.44-.22c.39.26.54.77.33 1.19z">
                        </path>
                    </svg>
                </button>
                <button onclick="activarTema('kaiju-no-8')">Kaiju No. 8
                    <svg width="16" height="16" viewBox="0 0 24 24">
                        <path d="M12 2L1 21h22L12 2zm0 3.15L19.21 19H4.79L12 5.15zM11 10h2v6h-2v-6zm0 8h2v2h-2v-2z">
                        </path>
                    </svg>
                </button>
                <button onclick="activarTema('shingeki-no-kyojin')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-wings" viewBox="0 0 16 16">
                        <g transform="translate(8,9) scale(0.4,0.4)">
                            <g id="right_wing">
                                <path d="M0,0 L30,-10 L40,-30 L50,-50 L40,-70 L20,-90 L0,-80 L10,-60 L0,-40 L10,-20 Z"
                                    fill="#FFFFFF" stroke="#000000" stroke-width="2" />
                            </g>
                            <g id="left_wing" transform="scale(-1,1)">
                                <path d="M0,0 L30,-10 L40,-30 L50,-50 L40,-70 L20,-90 L0,-80 L10,-60 L0,-40 L10,-20 Z"
                                    fill="#FFFFFF" stroke="#000000" stroke-width="2" />
                            </g>
                        </g>
                    </svg>
                    Shingeki no Kyojin
                </button>
                <button onclick="activarTema('aurelion-sol')">Aurelion Sol</button>
                <button onclick="activarTema('pantheon')">Pantheon</button>
                <button onclick="activarTema('zoe')">Zoe</button>
                <button onclick="activarTema('power')">Power</button>
                <button onclick="activarTema('ahri')">Ahri</button>
                <button onclick="activarTema('thresh')">Thresh</button>
                <button onclick="activarTema('yasuo')">Yasuo</button>
                <button onclick="activarTema('jinx')">Jinx
                    <button onclick="activarTema('sousei-no-onmyouji')">Sousei no Onmyouji</button>
                    <button onclick="activarTema('armagedon-brillante')">Armagedón Brillante</button>
                    <button onclick="activarTema('shurai-augurio-siniestro')">Shurai, el Augurio Siniestro</button>
                    <button onclick="activarTema('alexander-rey-vendavales')">Alexander, Alto Rey de los
                        Vendavales</button>
                    <button onclick="activarTema('leona-diana')">Leona y Diana</button>
                    <button onclick="activarTema('ddd-armagedon-brillante')">DDD Armagedon Brillante</button>
                    <button onclick="activarTema('ddd-armagedon-oscuro')">DDD Armagedon Oscuro</button>
                    <button onclick="activarTema('ddd-armagedon-purpura')">DDD Armagedon Purpureo</button>
                    <button onclick="activarTema('ddd-rey-abismo-ragnarok')">D/D/D Rey del Abismo Ragnarok</button>
                    <button onclick="activarTema('ddd-rey-leonidas')">D/D/D Rey Leonidas</button>
                    <button onclick="activarTema('saber-artoria')">Saber Artoria</button>
                    <button onclick="activarTema('shiro-archer')">Shiro Archer</button>
                    <button onclick="activarTema('zinogre')">Zinogre</button>
            </div>
        </div>
    </div>
</div>
`;

document.addEventListener("DOMContentLoaded", function () {
document.body.style.opacity = 1;
document.getElementById('menu-container').innerHTML = menuHTML;

const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
if (sidebar.style.width === '0px' || sidebar.style.width === '') {
sidebar.style.width = '250px';
} else {
sidebar.style.width = '0px';
}
});

// Ocultar el menú de temas al cargar la página
const temas = document.getElementById('temas');
if (temas) {
temas.style.display = 'none';
}
});

// Alternar visibilidad del menú de temas
function mostrarTemas() {
const temas = document.getElementById('temas');
if (temas.style.display === 'none' || temas.style.display === '') {
temas.style.display = 'grid';
} else {
temas.style.display = 'none';
}
}

function activarTema(tema) {
document.body.classList.add('hidden');
setTimeout(() => {
const newStylesheet = document.createElement('link');
newStylesheet.rel = 'stylesheet';
newStylesheet.href = `/Registro-de-ventas/Temas/${tema}.css`;
newStylesheet.onload = () => {
document.body.className = tema;
document.body.classList.remove('hidden');
};
document.head.appendChild(newStylesheet);
localStorage.setItem('theme', tema); // Guarda el tema seleccionado
}, 300); // Ajusta el tiempo para que coincida con tu transición CSS
}

// Cargar el tema guardado al cargar la página
document.addEventListener("DOMContentLoaded", function () {
const savedTheme = localStorage.getItem('theme') || 'default';
const newStylesheet = document.createElement('link');
newStylesheet.rel = 'stylesheet';
newStylesheet.id = 'theme-stylesheet';
newStylesheet.href = `/Registro-de-ventas/Temas/${savedTheme}.css`;
newStylesheet.onload = () => {
document.body.className = savedTheme;
document.body.style.opacity = 1;
};
document.head.appendChild(newStylesheet);
});

(function () {
const savedTheme = localStorage.getItem('theme') || 'default';
document.getElementById('theme-stylesheet').href = `/Registro-de-ventas/Temas/${savedTheme}.css`;
document.body.className = savedTheme;
})();