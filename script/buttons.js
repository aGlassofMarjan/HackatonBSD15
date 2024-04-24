let nextButtons = document.querySelectorAll(".nextButton")
let backButtons = document.querySelectorAll(".backButton")
let pages = document.querySelectorAll(".page")
let lagiDongButton = document.querySelector('.lagiDong')
let udahanCapeButton = document.querySelector('.udahanCape')

nextButtons.forEach((nextButton, index) => {
  nextButton.addEventListener("click", function () {
    pages[index].style.display = "none"
    pages[index + 1].style.display = "block"
  })
})

backButtons.forEach((backButton, index) => {
  backButton.addEventListener("click", function () {
    pages[index + 1].style.display = "none"
    pages[index].style.display = "block"
  })
})

lagiDongButton.addEventListener('click', function () {
  document.getElementById('page2').style.display = 'block'
  document.getElementById('lastPage').style.display = 'none'
})

udahanCapeButton.addEventListener('click', function () {
  document.getElementById('page1').style.display = 'block'
  document.getElementById('lastPage').style.display = 'none'
})
