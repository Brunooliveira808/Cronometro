var minutesEl = document.querySelector("#minutes")
var secondsEl = document.querySelector("#seconds")
var millisecondsEl = document.querySelector("#milliseconds")
var startBtn = document.querySelector("#startBtn")
var pauseBtn = document.querySelector("#pauseBtn")
var resumeBtn = document.querySelector("#resumeBtn")
var resetBtn = document.querySelector("#resetBtn")

var interval
var minutes = 0
var seconds = 0
var milliseconds = 0
var isPaused = false

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resumeBtn.addEventListener("click", resumeTimer)
resetBtn.addEventListener("click", resetTimer)

function startTimer() {

    interval = setInterval(() => {

        if(!isPaused) {
            milliseconds += 10

            if(milliseconds === 1000) {
                seconds++
                milliseconds = 0
            }

            if(seconds === 60) {
                minutes++
                seconds = 0
            }

            minutesEl.textContent = formatTime(minutes)
            secondsEl.textContent = formatTime(seconds)
            millisecondsEl.textContent = formatMilliseconds(milliseconds)

        }

    }, 10)

    startBtn.style.display = "none"
    pauseBtn.style.display = "block"

}

function pauseTimer() {
    isPaused = true
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"
}

function resumeTimer() {
    isPaused = false
    pauseBtn.style.display = "block"
    resumeBtn.style.display = "none"
}

function resetTimer() {
    clearInterval(interval)
    minutes = 0
    seconds = 0
    milliseconds = 0

    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    millisecondsEl.textContent = "000"

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}

/* O método .padStart() é uma função em JavaScript que é usada para adicionar caracteres 
à esquerda de uma string até que ela alcance um comprimento desejado. Isso é útil, por 
exemplo, ao formatar strings para garantir que tenham um comprimento mínimo. */