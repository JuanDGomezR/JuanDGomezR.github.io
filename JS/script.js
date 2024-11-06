  // Datos de las imágenes de la galería (reemplaza con tus datos)
  const imagenesGaleria = [
    {
      url: "IMG/FOTOS_USB/FOTOS_SEMESTRE/IMG_20240820_154711.jpg",
      fecha: "2024-11-06",
      descripcion: "Él es Mailo, mi perro."
    },
    {
      url: "IMG/FOTOS_USB/FOTOS_SEMESTRE/IMG_AC_240925015743945.jpg",
      fecha: "2024-11-06",
      descripcion: "Unas pequeñas plantas. ¿Bonitas, no?"
    },
    {
      url: "IMG/FOTOS_USB/IMG_0607.CR2",
      fecha: "2024-11-06",
      descripcion: "La cascada sonido relajante."
    },
    // Agrega más imágenes aquí
  ];
  
  const galeria = document.querySelector('.gallery');

// Agregar imágenes a la galería
imagenesGaleria.forEach(imagen => {
  const item = document.createElement('div');
  item.classList.add('gallery-item');
  item.innerHTML = `
    <img src="${imagen.url}" alt="${imagen.descripcion}">
    <div class="ver-mas">Ver más</div>
  `;
  galeria.appendChild(item);

  // Manejar el clic en "Ver más"
  const verMasBtn = item.querySelector('.ver-mas');
  verMasBtn.addEventListener('click', () => {
    mostrarModal(imagen.url, imagen.fecha, imagen.descripcion);
  });
});

// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalFecha = document.getElementById("modal-fecha");
const modalDescripcion = document.getElementById("modal-descripcion");
const closeBtn = document.querySelector(".close");

function mostrarModal(url, fecha, descripcion) {
  modal.style.display = "block";
  modalImg.src = url;
  modalFecha.textContent = "Fecha: " + fecha;
  modalDescripcion.textContent = descripcion;
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Agregar un event listener para el botón de menú (opcional)
const menuBtn = document.createElement('button');
menuBtn.textContent = "☰"; // Puedes usar un icono en su lugar
menuBtn.classList.add('menu-btn');
document.body.insertBefore(menuBtn, document.body.firstChild);

menuBtn.addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('hidden');
});