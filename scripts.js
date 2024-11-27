let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});


function toggleTab() {
    const tabItems = document.getElementById("tabItems");
    tabItems.classList.toggle("active");
  }
  
  // Fecha o menu ao clicar em um link
document.querySelectorAll("#tabItems a").forEach(link => {
    link.addEventListener("click", () => {
      const tabItems = document.getElementById("tabItems");
      tabItems.classList.remove("active"); // Fecha o menu removendo a classe 'active'
    });
});
  
  


