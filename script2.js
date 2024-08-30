// Seleciona os botões e seções da página
const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

// Função para lidar com o clique dos botões
const handleButtonClick = e => {
    const targetSection = e.target.getAttribute("data-section");
    const section = document.querySelector(targetSection);

    if (targetSection !== "#about") {
        card.classList.add("is-active");
    } else {
        card.classList.remove("is-active");
    }

    card.setAttribute("data-state", targetSection);
    sections.forEach(s => s.classList.remove("is-active"));
    buttons.forEach(b => b.classList.remove("is-active"));

    e.target.classList.add("is-active");
    section.classList.add("is-active");
};

// Adiciona o evento de clique a cada botão
buttons.forEach(btn => {
    btn.addEventListener("click", handleButtonClick);
});

