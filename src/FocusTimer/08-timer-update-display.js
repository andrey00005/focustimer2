import state from './04-state.js'
import * as el from './06-elements.js'
import { reset } from './07-actions.js'
import * as sound from './sounds.js'

export function contagem() {
  if (!state.isRunning) {
    return
  }
  // console.log('rodando')

  let seconds = Number(el.seconds.textContent)
  let minutes = Number(el.minutes.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    sound.kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  setTimeout(() => contagem(), 1000) //recurção quando uma função chama de novo ela mesmo e o nome dessa funcao é funcao callback
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  // console.log(minutes)
  // console.log(state.minutes)

  el.minutes.textContent = String(minutes).padStart(2, '0')
  el.seconds.textContent = String(seconds).padStart(2, '0')
}
