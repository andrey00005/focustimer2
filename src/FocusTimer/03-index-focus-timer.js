import state from './04-state.js'
import * as events from './05-events.js'
import * as timer from './08-timer-update-display.js'
// import * as updateDisplayJs from './updateDisplay.js'

export function start(minutes, seconds) {
  //executado por main
  state.minutes = minutes
  state.seconds = seconds

  timer.updateDisplay()

  events.registerControls() //chamada 05-events
  
  events.setminutes()

  events.toggleteste()
}

//ESTE ARQUIVO TA SENDO ENVIADO PARA O 01-MAIN.JS
