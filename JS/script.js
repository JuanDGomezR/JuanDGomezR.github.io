// Imágenes para el banner (reemplaza con tus URLs)
const imagenesBanner = [
    "IMG/FOTOS_USB/FOTOS_SEMESTRE/IMG_AC_240925015743945.jpg",
    "IMG/FOTOS_USB/FOTOS_SEMESTRE/IMG_AC_240925093740429.jpg",
    // Agrega más imágenes si lo deseas
  ];
  
  const banner = document.getElementById('banner');
  let indiceBanner = 0;
  
  function cambiarImagenBanner() {
    banner.style.backgroundImage = `url(${imagenesBanner[indiceBanner]})`;
    indiceBanner = (indiceBanner + 1) % imagenesBanner.length;
  }
  
  cambiarImagenBanner(); // Mostrar la primera imagen al cargar
  setInterval(cambiarImagenBanner, 5000); // Cambiar la imagen cada 5 segundos
  
  // Datos de las imágenes de la galería (reemplaza con tus datos)
  const imagenesGaleria = [
    {
      url: "https://drive.google.com/file/d/1ffq7-E1gwhMvIwCLfwzrP-cJMVGQG1bp/view?usp=sharing",
      fecha: "2024-11-07 10:00:00",
      descripcion: "Descripción de la imagen 1"
    },
    {
      url: "https://drive.google.com/file/d/1ffq7-E1gwhMvIwCLfwzrP-cJMVGQG1bp/view?usp=sharing",
      fecha: "2024-11-07 12:00:00",
      descripcion: "Descripción de la imagen 2"
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