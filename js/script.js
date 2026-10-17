// 1. Abrir e fechar o menu no celular
const botaoMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const iconeMenu = botaoMenu.querySelector("span");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");

  const estaAberto = menu.classList.contains("aberto");
  iconeMenu.textContent = estaAberto ? "close" : "menu";
  botaoMenu.setAttribute("aria-expanded", estaAberto);
  botaoMenu.setAttribute("aria-label", estaAberto ? "Fechar menu" : "Abrir menu");
});

// 2. Fechar o menu quando clicar em um link
const linksDoMenu = menu.querySelectorAll("a");

linksDoMenu.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
    iconeMenu.textContent = "menu";
    botaoMenu.setAttribute("aria-expanded", false);
  });
});

// 3. Colocar o ano atual no rodapé automaticamente
document.getElementById("ano").textContent = new Date().getFullYear();
