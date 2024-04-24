let nextButtons = document.querySelectorAll(".nextButton")
let backButtons = document.querySelectorAll(".backButton")
let pages = document.querySelectorAll(".page")

nextButtons.forEach((nextButton, index) => {
  nextButton.addEventListener("click", function() {
    pages[index].style.display = "none"
    pages[index + 1].style.display = "block"
  })
})

backButtons.forEach((backButton, index) => {
  backButton.addEventListener("click", function() {
    pages[index + 1].style.display = "none"
    pages[index].style.display = "block"
  })
})
