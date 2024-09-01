/* import state from './04-state.js'
import * as el from './06-elements.js'

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  // console.log(minutes)
  // console.log(state.minutes)

  el.minutes.textContent = String(minutes).padStart(2, '0')
  el.seconds.textContent = String(seconds).padStart(2, '0')
}
 */