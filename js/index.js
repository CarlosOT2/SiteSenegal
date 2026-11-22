const slides = document.querySelectorAll(".carousel-item");
const botaoAnterior = document.querySelector(".carousel-section__button--prev");
const botaoProximo = document.querySelector(".carousel-section__button--next");
const caixaDots = document.querySelector(".carousel-section__dots");
const carrossel = document.querySelector(".carousel-section__wrapper");

let atual = 0;
let intervalo;

slides.forEach((slide, i) => {
    const dot = document.createElement("button");
    dot.className = "carousel-section__dot";
    dot.addEventListener("click", () => {
        mostrarSlide(i);
        iniciarAutoplay();
    });
    caixaDots.appendChild(dot);
});

const dots = document.querySelectorAll(".carousel-section__dot");

function mostrarSlide(numero) {
    slides[atual].classList.remove("carousel-item--active");
    dots[atual].classList.remove("carousel-section__dot--active");

    if (numero >= slides.length) {
        numero = 0;
    } else if (numero < 0) {
        numero = slides.length - 1;
    }

    atual = numero;

    slides[atual].classList.add("carousel-item--active");
    dots[atual].classList.add("carousel-section__dot--active");
}

function iniciarAutoplay() {
    clearInterval(intervalo);
    intervalo = setInterval(() => mostrarSlide(atual + 1), 5000);
}

botaoAnterior.addEventListener("click", () => {
    mostrarSlide(atual - 1);
    iniciarAutoplay();
});

botaoProximo.addEventListener("click", () => {
    mostrarSlide(atual + 1);
    iniciarAutoplay();
});

carrossel.addEventListener("mouseenter", () => clearInterval(intervalo));
carrossel.addEventListener("mouseleave", iniciarAutoplay);

mostrarSlide(0);
iniciarAutoplay();