// Generar el contenido del menú
const barraHTML = `
<header>
     <div class="icon-bar">
        <div class="qr-icon" id="qr-trigger">QR</div>
    </div>
    <div class="qr-container" id="qr-popup">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="150" height="150">
            <rect width="100" height="100" fill="white" />
            <rect x="10" y="10" width="20" height="20" fill="black" />
            <rect x="15" y="15" width="10" height="10" fill="white" />
            <rect x="70" y="10" width="20" height="20" fill="black" />
            <rect x="75" y="15" width="10" height="10" fill="white" />
            <rect x="10" y="70" width="20" height="20" fill="black" />
            <rect x="15" y="75" width="10" height="10" fill="white" />
            <rect x="35" y="35" width="10" height="10" fill="black" />
            <rect x="50" y="35" width="5" height="5" fill="black" />
            <rect x="35" y="50" width="5" height="5" fill="black" />
            <rect x="45" y="45" width="5" height="5" fill="black" />
            <rect x="65" y="65" width="10" height="10" fill="black" />
            <rect x="50" y="60" width="5" height="5" fill="black" />
        </svg>
    </div>
        
    </div>
</header>
<div class="qr-container" id="qr-popup">
    <img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=http://127.0.0.1:5500/login.html" alt="QR Code">
</div>
`;

// Inyectar la barra en el contenedor
document.getElementById("barra-container").innerHTML = barraHTML;

// Lógica para mostrar/ocultar el cuadro del QR
const qrTrigger = document.getElementById("qr-trigger");
const qrPopup = document.getElementById("qr-popup");

qrTrigger.addEventListener("click", () => {
    if (qrPopup.style.display === "none" || qrPopup.style.display === "") {
        qrPopup.style.display = "block";
    } else {
        qrPopup.style.display = "none";
    }
});
