let bankSoal = [
    { // Number 1
        question: 'After darkness, comes the ...',
        answer: [
            "Light",
            'Moonlight',
            'Sun',
            'Ramayana'
        ]
    },
    { // Number 2
        question: 'An object that can make a surface slippery is ...',
        answer: [
            'Soap',
            'Money',
            'Water',
            'Deposit'
        ]
    },
    { // Number 3
        question: 'What is the electricity cost per kWh for a 1300 VA electricity meter? (January 2024)',
        answer: [
            'Rp. 1,444.70',
            'Rp. 1,699.70',
            'Rp. 1,352.00',
            'Rp. 1,690.53'
        ]
    },
    { // Number 4
        question: 'Water has the property of being ...',
        answer: [
            'Liquid',
            'Compliant',
            'Wet',
            'Solid'
        ]
    },
    { // Number 5
        question: 'The Great Wall of China is located in which country?',
        answer: [
            'China',
            'Indonesia',
            'Japan',
            'Korea'

        ]
    },
    { // Number 6
        question: 'The Earth rotates at an inclination of ... degrees',
        answer: [
            "23.5",
            "90",
            "180",
            "10.1"
        ]
    },
    { // Number 7
        question: "What is the term for an animal that can live in two realms?",
        answer: [
            "Amphibian",
            "Indigo",
            "Pieces",
            "Reptile"
        ]
    },
    { // Number 8
        question: "Who is the inventor of the steam engine?",
        answer: [
            "James Watt",
            "Syahrini",
            "Albert Einstein",
            "Napoleon"
        ]
    },
    { // Number 9
        question: 'What is the abbreviation for WHO (World Health Organization)?',
        answer: [
            "World Health Organization",
            "World Happy Organization",
            "World Health Opportunity",
            "World High Organization"
        ]
    },
    { // Number 10
        question: 'What is the capital of Portugal?',
        answer: [
            "Lisbon",
            "Kasbon",
            "Lisa",
            "Lima"
        ]
    },
    { // Number 11
        question: 'Which month has 28 days?',
        answer: [
            "All of the above",
            "February",
            "February, April, May, August",
            "March, June, August, October, December"

        ]
    },
    { // Number 12
        question: 'What is the largest organ in the human body?',
        answer: [
            "Skin",
            "Lungs",
            "Heart",
            "Stomach"

        ]
    },
    { // Number 13
        question: 'What is the chemical symbol for silver?',
        answer: [
            "Ag",
            "Pr",
            "Au",
            "Zn"
        ]
    },
    { // Number 14
        question: 'What is the license plate code that is used in Bali?',
        answer: [
            "DK",
            "DD",
            "D",
            "KT"
        ]
    },
    { // Number 15
        question: 'Angkor Wat is located in which country?',
        answer: [
            "Thailand",
            "Cambodia",
            "Laos",
            "Myanmar"
        ]
    },
    { // Number 16
        question: 'The highest mountain in the world is ...',
        answer: [
            'Mount Everest',
            'Mount Makalu',
            'Mount Lhotse',
            'Mount K2'
        ]
    },
    { // Number 17
        question: 'The sun rises from ... to ... .',
        answer: [
            'East, West',
            'South, West',
            'North, South',
            'West, North'
        ]
    },
    { // Number 18
        question: 'What is H2O?',
        answer: [
            'Water',
            'Oxygen',
            'Carbon Dioxide',
            'Hydrogen'
        ]
    },
    { // Number 19
        question: 'Which metal is the strongest on Earth?',
        answer: [
            'Tungsten',
            'Diamond',
            'Gold',
            'Iron'
        ]
    },
    { // Number 20
        question: 'What is the result of 5+23x30-15?',
        answer: [
            '680',
            '860',
            '420',
            '240'
        ]
    },
    { // Number 21
        question: 'What is the value of 1 degree Celsius when converted to Fahrenheit?',
        answer: [
            '33.8',
            '28.8',
            '23.8',
            '33.3'
        ]
    },
    { // Number 22
        question: 'What is the currency of China?',
        answer: [
            'Yuan',
            'Yen',
            'Won',
            'Rupee'
        ]
    },
    { // Number 23
        question: 'Who is the founder of Apple Inc.?',
        answer: [
            'Steve Jobs',
            'Bill Gates',
            'Mark Cuban',
            'Elon Musk'
        ]
    },
    { // Number 24
        question: 'Extinguish fire with ...',
        answer: [
            'Water',
            'Oil',
            'Olive oil',
            'Alcohol'
        ]
    },
    { // Number 25
        question: 'How many days are there in a year?',
        answer: [
            '365',
            '366',
            '362',
            '372'
        ]
    },
]

let recNoSoal = []
let nomor = 0
let pages = document.querySelectorAll(".page")
let nextButtons = document.querySelectorAll(".nextButton")
let backButton = document.getElementById("kembali")
let currentPageIndex = 0
let score = 0

document.getElementById('mulai').addEventListener('click', function () {
    recNoSoal = []
    currentPageIndex = 0
    showPage(currentPageIndex)
    document.getElementById('halamanUtama').style.display = 'none'
})

nextButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        let selectedAnswerIndex = -1
        let answerButtons = pages[currentPageIndex].querySelectorAll(".nextButton")
        for (let i = 0; i < answerButtons.length; i++) {
            if (answerButtons[i] === button) {
                selectedAnswerIndex = i
                break
            }
        }
        if (currentPageIndex < 5) {
            if (answerButtons[selectedAnswerIndex].innerText === bankSoal[nomor].answer[0]) {
                score += 20
            }
        }

        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++
            showPage(currentPageIndex)
        } else {
            pages[currentPageIndex].style.display = 'none'
            let labelScore = document.getElementById('finalScore')
            labelScore.innerText = score
            document.getElementById('selesai').style.display = 'block'
        }
    })
})

backButton.addEventListener("click", function () {
    score = 0
    currentPageIndex = 0
    showPage(currentPageIndex)

    pages.forEach((page, index) => {
        page.style.display = "none"
        document.getElementById('halamanUtama').style.display = 'block'
    })
    document.getElementById("selesai").style.display = "none"
})

function showPage(index) {
    let questionNumberElements = document.querySelectorAll(".questionNumber")
    let questionTextElements = document.querySelectorAll(".questionText")
    let currentPage = pages[index]
    let answerButtons = currentPage.querySelectorAll(".nextButton")
    let random = false
    while (random === false) {
        nomor = Math.floor(Math.random() * bankSoal.length)
        if (!recNoSoal.includes(nomor)) {
            random = true
            recNoSoal.push(nomor)
        }
        if (recNoSoal.length === 5) {
            random = true
        }
    }
    if (index < bankSoal.length) {
        let questions = bankSoal[nomor]
        questionNumberElements[index].innerText = index + 1
        questionTextElements[index].innerText = questions.question

        let acak = false
        let abcd = 0
        let recPilihan = []
        for (let i = 0; i < questions.answer.length && i < answerButtons.length; i++) {
            while (acak === false) {
                abcd = Math.floor(Math.random() * 4)
                if (!recPilihan.includes(abcd)) {
                    acak = true
                    recPilihan.push(abcd)
                }
                if (recPilihan.length === 4) {
                    acak = true
                }
            }
            answerButtons[i].innerText = questions.answer[abcd]
            acak = false
        }

    }
    pages.forEach((page, pageIndex) => {
        if (pageIndex === index) {
            page.style.display = 'block'
        } else {
            page.style.display = 'none'
        }
    })
}