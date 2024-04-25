const bankSoal = [
    {
        q: 'Soal ini Mudah',
        a: ['asdfhgg', 's', 'd', 'f']
    },
    {
        q: 'Soal ini sulit',
        a: ['test', 'waw', 'keren', 'damn']
    },
    {
        q: 'Ini persoalan',
        a: ['!', '@', '#', '$']
    },
    {
        q: 'Soal Laos',
        a: ['q', 'w', 'e', 'r']
    },
    {
        q: 'Solo',
        a: ['z', 'x', 'c', 'v']
    },
];

let recNoSoal = []
let nomor = 0
let pages = document.querySelectorAll(".page");
let nextButtons = document.querySelectorAll(".nextButton");
let backButton = document.getElementById("kembali");
let currentPageIndex = 0;
let score = 0

document.getElementById('mulai').addEventListener('click', function () {
    recNoSoal = []
    currentPageIndex = 0;
    showPage(currentPageIndex);
    document.getElementById('halamanUtama').style.display = 'none';
});

nextButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
        let selectedAnswerIndex = -1;
        let answerButtons = pages[currentPageIndex].querySelectorAll(".nextButton");
        for (let i = 0; i < answerButtons.length; i++) {
            if (answerButtons[i] === button) {
                selectedAnswerIndex = i;
                break;
            }
        }
        if (currentPageIndex < 5) {
            console.log(answerButtons[selectedAnswerIndex].innerText, '|||', bankSoal[nomor].a[0]);
            if (answerButtons[selectedAnswerIndex].innerText === bankSoal[nomor].a[0]) {
                score += 20;
            }
        }

        // Move to the next question page
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            showPage(currentPageIndex);
        } else {
            pages[currentPageIndex].style.display = 'none';
            let labelSkor = document.getElementById('skorAkhir')
            labelSkor.innerText = score;
            document.getElementById('selesai').style.display = 'block';
        }
    });
});


backButton.addEventListener("click", function () {
    score = 0
    currentPageIndex = 0;
    showPage(currentPageIndex);

    pages.forEach((page, index) => {
        page.style.display = "none";
        document.getElementById('halamanUtama').style.display = 'block'
    });
    // Hide the final page
    document.getElementById("selesai").style.display = "none";
});

function showPage(index) {
    let questionNumberElements = document.querySelectorAll(".questionNumber");
    let questionTextElements = document.querySelectorAll(".questionText");
    let currentPage = pages[index];
    let answerButtons = currentPage.querySelectorAll(".nextButton");
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
        let question = bankSoal[nomor];
        questionNumberElements[index].innerText = index + 1;
        questionTextElements[index].innerText = question.q;
        // Update answer choices
        let acak = false
        let abcd = 0
        let recPilihan = []
        for (let i = 0; i < question.a.length && i < answerButtons.length; i++) {
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
            answerButtons[i].innerText = question.a[abcd];
            acak = false
        }

    }
    pages.forEach((page, pageIndex) => {
        if (pageIndex === index) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}