function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imgem
  if (html.classList.contains("light")) {
    //se tiver a light mode, adicionar a imagem light
    img.setAttribute("src", "/assets/assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "/assets/assets/avatar.png")
  }
}
