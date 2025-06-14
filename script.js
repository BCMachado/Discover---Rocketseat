function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {

  // se tiver light mode, adiconar a imagem light
  img.setAttribute("src", "./assets/avatar-light.png")
} else {

  // se tiver sem light mod, manter a imagem normal
  img.setAttribute("src", "./assets/avatar.png")
  }
}


// Função "Sobre Mim"
function toggleAboutMe() {
var aboutMe = document.getElementById("about-me");
aboutMe.style.display = aboutMe.style.display === "none" ? "flex" : "none";
}



// Função "Competências" devido as propriedades de display usei essa para que a página carregada mantenha oculto os ícones e só seja de fato exibida somente clicando sobre ela.
document.addEventListener("DOMContentLoaded", function () {
  const competenciasDiv = document.getElementById("competencias")

  function toggleCompetencias() {
    competenciasDiv.style.display =
      competenciasDiv.style.display === "none" ? "flex" : "none"
  }

  // Adicione um ouvinte de eventos ao link "Competências"
  const competenciasLink = document.querySelector(
    'a[href="#"][onclick="toggleCompetencias()"]'
  )
  competenciasLink.addEventListener("click", toggleCompetencias)

  // Inicialmente, oculte as competências ao carregar a página
  competenciasDiv.style.display = "none"
})











    
