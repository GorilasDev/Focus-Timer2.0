const initialMinutesDisplay = document.querySelector(".minutes")
const initialSecondsDisplay = document.querySelector(".seconds")

const initialMinutes = Number(initialMinutesDisplay.textContent)
const initialSeconds = Number(initialSecondsDisplay.textContent)

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const buttonPlay = document.querySelector(".buttonPlay")
const buttonStop = document.querySelector(".buttonStop")

const buttonAddMinutes = document.querySelector(".buttonAddMinutes")
const buttonRemoveMinutes = document.querySelector(".buttonRemoveMinutes")

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

let timerTimeOut

// svg ods buttons do timer

const svgControlButtons = document.querySelector(".controlsButtons")

// variaveis pra ativar modo dark
const darkModeButton = document.querySelector(".checkbox")

const playSvg = document.querySelector(".playSvg")
const stopSvg = document.querySelector(".stopSvg")
const addSvg = document.querySelector(".addSvg")
const removeSvg = document.querySelector(".removeSvg")
const timer = document.querySelector(".timer")
const fullBody = document.querySelector(".fullBody")

const florestSvg = document.querySelector(".florestSvg")
const fireplaceSvg = document.querySelector(".fireplaceSvg")
const rainSvg = document.querySelector(".rainSvg")
const coffeeShopSvg = document.querySelector(".coffeeShopSvg")

// florestButton
// fireplaceButton
// rainButton
// coffeeShopButton


//const = document.querySelector(".")

let darkON = false

const darkModeOn = darkModeButton.addEventListener('click', function () {

    florestButton.classList.add("dark")
    fireplaceButton.classList.add("dark")
    rainButton.classList.add("dark")
    coffeeShopButton.classList.add("dark")


    playSvg.classList.add("dark")
    stopSvg.classList.add("dark")
    addSvg.classList.add("dark")
    removeSvg.classList.add("dark")
    timer.classList.add("dark")
    fullBody.classList.add("dark")

    florestSvg.classList.add("dark")
    fireplaceSvg.classList.add("dark")
    rainSvg.classList.add("dark")
    coffeeShopSvg.classList.add("dark")
    //.classList.add("dark")


    if (darkON == true) {

    florestButton.classList.remove("dark")
    fireplaceButton.classList.remove("dark")
    rainButton.classList.remove("dark")
    coffeeShopButton.classList.remove("dark")

    playSvg.classList.remove("dark")
    stopSvg.classList.remove("dark")
    addSvg.classList.remove("dark")
    removeSvg.classList.remove("dark")
    timer.classList.remove("dark")
    fullBody.classList.remove("dark")
        
    florestSvg.classList.remove("dark") 
    fireplaceSvg.classList.remove("dark") 
    rainSvg.classList.remove("dark")
    coffeeShopSvg.classList.remove("dark")
        
        
   // .classList.remove("dark")
        

    darkON = false
    return
    }



    darkON = true
})



// variavel pra verificar se o timer tá ON
let timerON = false



function countdown() {
    
    timerTimeOut = setTimeout(function () {
        
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)
        
        if (seconds <= 0 && minutes <= 0) { 
            return;


        }

        if (seconds == 0) {
            seconds = 60
            
            minutesDisplay.textContent = String(minutes-1).padStart(2,"0")
            
        }
        
        if (seconds <= 1 && minutes <= 0) {

            timerAudio()
            secondsDisplay.textContent = String(seconds-1).padStart(2,"0")
            clearTimeout(timerTimeOut)
            timerON = false
            return;
        }
        
        secondsDisplay.textContent = String(seconds-1).padStart(2,"0")

    



        countdown()
    },1000)

}



const startTimer = buttonPlay.addEventListener('click', function () {



    pressAudio()

    if (timerON == true) {
    
        clearTimeout(timerTimeOut)
        timerON = false
        return;
        
    }
    
    countdown();
    timerON = true
})



const stopTimer = buttonStop.addEventListener('click', function () {
    pressAudio()

    clearTimeout(timerTimeOut)
    resetTimer()

    timerON = false
    
    
})

function resetTimer() {

   
    
    secondsDisplay.textContent = String(initialSeconds).padStart(2,"0")
    minutesDisplay.textContent = String(initialMinutes).padStart(2,"0")
    
}

const addMinutes = buttonAddMinutes.addEventListener('click', function () {
pressAudio()

    minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes+1).padStart(2,"0")
})

const removeMinutes = buttonRemoveMinutes.addEventListener('click', function () {
    pressAudio()

    if (Number(minutesDisplay.textContent) == 0) {
        return;
    }


    minutes = Number(minutesDisplay.textContent)
    minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    
})

// sounds buttons

const coffeeShopButton = document.querySelector(".buttonCoffeeShop")
const fireplaceButton = document.querySelector('.buttonFireplace')
const rainButton = document.querySelector(".buttonRain")
const florestButton = document.querySelector('.buttonFlorest')

// sounds function

const coffeeShopSound = coffeeShopButton.addEventListener('click', function () {
    coffeeShopAudio()
})

const fireplaceSound = fireplaceButton.addEventListener('click', function () {
    fireplaceAudio()
})

const rainSound = rainButton.addEventListener('click', function () {
    rainAudio()
})

const florestSound = florestButton.addEventListener("click", function () {
    florestAudio()
    
})


// Audios

const buttonPressAudio = new Audio("./sounds/audios_button-press.wav")

function pressAudio() {
    buttonPressAudio.play()
}



const timerEndAudio = new Audio("./sounds/audios_kichen-timer.mp3")

function timerAudio() {
    timerEndAudio.play()
}


// musics in loop


const coffeeShop = new Audio("./sounds/Cafeteria.wav")
coffeeShop.loop = true

let coffeeShopON = false

function coffeeShopAudio() {
    coffeeShop.play()

    if (coffeeShopON == true) {
        coffeeShop.pause()
        coffeeShopButton.classList.remove("musicOn")
        coffeeShopON = false
        return
    }

    coffeeShopButton.classList.add("musicOn")
    coffeeShopON = true
}

const rain = new Audio("./sounds/Chuva.wav")
rain.loop = true
let rainON = false

function rainAudio() {
    rain.play()

    if (rainON == true) {
        rain.pause()
        rainButton.classList.remove("musicOn")
        rainON = false
        return
    }

    rainButton.classList.add("musicOn")
    rainON = true
}

const florest = new Audio("./sounds/Floresta.wav")
florest.loop = true

let florestON = false

function florestAudio() {
    florest.play()

    if (florestON == true) {
        florest.pause()
        florestButton.classList.remove("musicOn")
        florestON = false
        return
    }

    florestButton.classList.add("musicOn")
    florestON = true
}

const fireplace = new Audio("./sounds/Lareira.wav")
fireplace.loop = true

let fireplaceON = false

function fireplaceAudio() {
    fireplace.play() 
    
    if (fireplaceON == true) {
        fireplace.pause()
        fireplaceButton.classList.remove("musicOn")
        fireplaceON = false
        return
    }
    
    fireplaceButton.classList.add("musicOn")
    fireplaceON= true
}


//     florestButton.classList.add("musicOn")
//     fireplaceButton.classList.add("musicOn")
//     rainButton.classList.add("musicOn")
//     coffeeShopButton.classList.add("musicOn")