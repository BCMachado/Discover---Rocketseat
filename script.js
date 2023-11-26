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


function toggleAboutMe() {
var aboutMe = document.getElementById("about-me");
aboutMe.style.display = aboutMe.style.display === "none" ? "block" : "none";
}





    
