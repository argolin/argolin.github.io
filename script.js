const date = new Date();
const monthsList = ["Janeiro", "Fevereiro", "Março","Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
const nameList = ["Adriana","Ana","Maria","Sandra","Juliana","Helena","Madalena","Antônio", "Carlos","Francisco","João","José","Afonso","Lourenço","Bruna","Camila","Jéssica","Letícia","Amanda","Betina","Lucas","Mateus","Guilherme","Heloísa","Maria Clara","Maria Cecília","Maria Júlia","Maitê","Maria Eduarda","Elisa","Lorena","Maria Luíza","Alice","Isabella","Júlia","Sophia","Laura","Valentina","Olívia","Cecília","Beatriz","Manuela","Luiza","Heitor","Samuel","Pedro","Lorenzo","Benício","Isaac","Arthur","Miguel","Davi","Gabriel","Bernardo","Nicolas","Valentim","Benjamim","Santiago"]

let day = date.getDate();
let month = monthsList[date.getMonth()]
let year = date.getFullYear();
let topbar = document.querySelector(".top-bar")
let footercopyright = document.querySelector(".footer-copyright")
const videowatchers = document.querySelector(".video-watchers")
let snackbar = document.querySelector("#snackbar")
const questionoptions = document.querySelector(".question-options")
const aquirenowbutton = document.querySelector(".aquirenowbutton")

function upDate() {
    let evaluation = `Dia ${day} de ${month} de ${year} é a ultima data para ver o conteúdo desse site.`
    let copyright = `Copyright ${year} - Todos os Direitos Reservados®`
    topbar.innerHTML = evaluation
    footercopyright.innerHTML = copyright
}

function eraseBuyers() {
    snackbar.classList.remove("show")
}

function createBuyers() {
    let name = document.querySelector("#not-name")
    let createdNumber = Math.floor(Math.random() * (nameList.length + 1));
    randomName = nameList[createdNumber]
    name.innerHTML = randomName
    snackbar.classList.add("show")  
    setTimeout(eraseBuyers, 3900)
}

function createWatchers() {
    let watchnumber = Math.floor(Math.random() * (591 - 370 + 1) ) + 370;
    videowatchers.innerHTML =  `<i class="fa-solid fa-eye icon"></i> ${watchnumber} pessoas assistindo nesse momento`
    
    let barConstant = document.querySelector(".smartplayer-fake-bar")
    var barNumber = parseInt(barConstant.style.width)
    if (barNumber >= 98) {
       aquirenowbutton.style.display = "block" 
    }
}

function triggerViewer() {
    setInterval(createWatchers, 2500)
    setInterval(createBuyers, 8000)    
}

function clickGender() {
    let progressbarOne = document.querySelector(".line-one")
    let questionPlacement = document.querySelector(".question-one-content")
    let questions = document.querySelectorAll(".coordination")
    let dividor = document.querySelector(".dividor")
    dividor.remove()
    questions[0].remove()
    questions[1].remove()
    let firstQuestion = document.createElement("button")
    firstQuestion.classList.add("next-questions")
    firstQuestion.innerHTML = "Nunca"
    firstQuestion.onclick = clickEnergy
    questionoptions.appendChild(firstQuestion)
    let secondQuestion = document.createElement("button")
    secondQuestion.classList.add("next-questions")
    secondQuestion.innerHTML = "Raramente"
    secondQuestion.onclick = clickEnergy
    questionoptions.appendChild(secondQuestion)
    let thirdQuestion = document.createElement("button")
    thirdQuestion.classList.add("next-questions")
    thirdQuestion.innerHTML = "As vezes"
    thirdQuestion.onclick = clickEnergy
    questionoptions.appendChild(thirdQuestion)
    let fourthQuestion = document.createElement("button")
    fourthQuestion.classList.add("next-questions")
    fourthQuestion.innerHTML = "Frequentemente"
    fourthQuestion.onclick = clickEnergy
    questionoptions.appendChild(fourthQuestion)
    let fifthQuestion = document.createElement("button")
    fifthQuestion.classList.add("next-questions")
    fifthQuestion.innerHTML = "Sempre"
    fifthQuestion.onclick = clickEnergy
    questionoptions.appendChild(fifthQuestion)
    progressbarOne.classList.add("colored")
    questionPlacement.innerHTML = "Com que frequência você realiza atividades físicas?"
    questionoptions.style.paddingBottom = "0px"
    questionoptions.style.paddingTop = "20px"
}

function clickEnergy() {
    let questionPlacement = document.querySelector(".question-one-content")
    let progressbarTwo = document.querySelector(".line-two")
    let spotTwo = document.querySelector(".spot-two")    
    progressbarTwo.classList.add("colored")
    spotTwo.classList.add("colored")
    let constantQuestions = document.querySelectorAll(".next-questions")
    constantQuestions[0].remove()
    constantQuestions[1].remove()
    constantQuestions[2].remove()
    constantQuestions[3].remove()
    constantQuestions[4].remove()
    let videoButton = document.createElement("button")
    videoButton.classList.add("videobutton")
    videoButton.innerHTML = "QUERO VER O VÍDEO AGORA!"
    questionPlacement.innerHTML = ""
    videoButton.onclick = clickVideo
    questionoptions.appendChild(videoButton)
}

function removeCollab() {
    let questioncontenttwo = document.querySelector(".question-content")
    questioncontenttwo.classList.add("hidden")
}

function clickVideo() {
    let questioncontenttwo = document.querySelector(".question-content")
    questioncontenttwo.classList.add("hiddenvalid")
    setTimeout(removeCollab, 900)
    triggerViewer()
}


window.addEventListener("load", upDate());
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});


