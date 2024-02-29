const verifyName = document.getElementById(`verify_name`)
const verifyDate = document.getElementById(`verify_date`)
const btnStart = document.getElementById(`start_quiz`)
const cardLogin = document.querySelector(`.card_login`)
const cardQuiz = document.querySelector(`.questions_card`)
const questionElement = document.getElementById(`question_element`)
const answerButtons = document.getElementById(`answer_buttons`)
const cardFinish = document.querySelector(`.card_finish`)
const btnNext = document.getElementById(`next_btn`)
const myAudio = document.getElementById(`my_audio`)

let questionIndex = 9

const questions = [
    {
        question: `Seu futuro nome é ?`,
        answers: [
            { text: `Eduarda Hominhoca Sherman`, correct: false },
            { text: `Eduarda Pompilha Pereira Pedroso Pompilha Prado Pinguinos de Caramelos`, correct: false },
            { text: `Eduarda Pompilha Pedroso`, correct: true },
            { text: `Eduarda Pompilha Carvalho`, correct: false }
        ]
    },
    {
        question: `Nome dos nossos filhos ?`,
        answers: [
            { text: `Noah e Theo`, correct: true },
            { text: `Theo e José`, correct: false },
            { text: `Pedro e Gustavo`, correct: false },
            { text: `Noah e Nicolas`, correct: false }
        ]
    },
    {
        question: `Nome das nossas filhas ?`,
        answers: [
            { text: `Carla e Josefina`, correct: false },
            { text: `Clarice e Marcia`, correct: false },
            { text: `Amelia e Mel`, correct: false },
            { text: `Clarice e Mel`, correct: true }
        ]
    },
    {
        question: `Minha cor favorita é ?`,
        answers: [
            { text: `Preto`, correct: true },
            { text: `Roxo`, correct: false },
            { text: `Vermelho`, correct: false },
            { text: `Azul`, correct: false }
        ]
    },
    {
        question: `Vai compartilhar a senha do celular quando for pedida em casamento ?`,
        answers: [
            { text: `Sim`, correct: true },
            { text: `Claro`, correct: true },
            { text: `Com certeza`, correct: true },
            { text: `Não`, correct: false }
        ]
    },
    {
        question: `Minha comida favorita é ?`,
        answers: [
            { text: `Strogonoff`, correct: false },
            { text: `Feijoada`, correct: false },
            { text: `Lámem`, correct: true },
            { text: `Comida Japonesa`, correct: false }
        ]
    },
    {
        question: `Qual o meu futuro nome ?`,
        answers: [
            { text: `Gabriel Pedroso de Almeida Pompilha`, correct: false },
            { text: `Gabriel Pinguinos de Leite`, correct: false },
            { text: `Gabriel Hominhoco Sherman`, correct: false },
            { text: `Gabriel Pedroso de Almeida`, correct: true }
        ]
    },
    {
        question: `Sua corzinha de pele é ?`,
        answers: [
            { text: `Neguinha`, correct: true },
            { text: `Branquela`, correct: false },
            { text: `Parda`, correct: false },
            { text: `Azul`, correct: false }
        ]
    },
    {
        question: `Nosso filme de anime preferido é ?`,
        answers: [
            { text: `Suzume`, correct: false },
            { text: `Castelo Animado`, correct: false },
            { text: `Your Name`, correct: true },
            { text: `Koe no Katachi`, correct: false }
        ]
    },
    {
        question: `Você esta preparada pra passar o resto da vida comigo ?`,
        answers: [
            { text: `Sim`, correct: true },
            { text: `Não`, correct: false }
        ]
    }
]

function addFilter() {
    const images = document.querySelectorAll('.scroll img');
    images.forEach(image => {
        image.classList.add('filter');
    })
}

addFilter()

btnStart.addEventListener(`click`, () => {
    console.log(verifyDate.value, verifyName.value)
    if (verifyDate.value === `2023-05-01` && (
        verifyName.value === 'Eduarda' ||
        verifyName.value === 'eduarda' ||
        verifyName.value === 'Duda' ||
        verifyName.value === 'duda' ||
        verifyName.value === 'Eduarda Pompilha' ||
        verifyName.value === 'eduarda pompilha' ||
        verifyName.value === 'Eduarda Pompilha Pedroso' ||
        verifyName.value === 'eduarda pompilha pedroso')) {
        startQuiz()
    } else {
        alert(`Oops, Parece que tem algo errado!`)
    }
})

function startQuiz() {
    cardLogin.classList.add(`invisible_card`)
    cardQuiz.classList.remove(`invisible_card`)
    showQuestion()
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[questionIndex]

    questionElement.innerHTML = currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement(`button`)
        button.innerHTML = answer.text
        button.classList.add(`btnQuiz`)
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener(`click`, selectAnswer)
    })
}

function resetState() {
    btnNext.style.display = `none`
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(event) {
    const selectedBtn = event.target
    const isCorrect = selectedBtn.dataset.correct === `true`
    if (isCorrect) {
        selectedBtn.classList.add(`correct`)
        btnNext.style.display = `block`
    } else {
        selectedBtn.classList.add(`incorrect`)
        alert(`Resposta Incorreta !`)
    }
}

btnNext.addEventListener(`click`, () => {
    if (questionIndex < questions.length) {
        questionIndex++
        console.log(questionIndex)
        if (questionIndex < questions.length) {
            showQuestion()
        } else {
            cardQuiz.classList.add(`invisible_card`)
            cardFinish.classList.remove(`invisible_card`)
            myAudio.play()
            blurImages()
        }
    }
})

function blurImages() {
    setTimeout(() => {
        cardFinish.classList.add(`invisible_card`);
        const images = document.querySelectorAll('.scroll img');
        images.forEach(image => {
            image.classList.remove('filter');
            image.classList.add('remove_filter');
        })
    }, 5 * 1000);
}
