import {controls} from './06-elements.js'
import * as actions from './07-actions.js'
import * as el from './06-elements.js'
import state from './04-state.js'
import { updateDisplay } from './08-timer-update-display.js'

export function registerControls() {//chamada pelo INDEX FOCUS-TIMER
  controls.addEventListener('click', (event) => {
    let action = (event.target.dataset.action)
    if (typeof actions[action] != 'function') {
      return
    }
    actions[action]()
  })
}

export function setminutes() {
  el.minutes.addEventListener('focus', (e) => {
    el.minutes.textContent = ''

    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
      let time = event.currentTarget.textContent
      time = time > 60 ? 60 : time

      state.minutes = time
      state.seconds = 0

      updateDisplay()
      el.minutes.removeAttribute('contenteditable')
    })
  })
}

export function toggleteste () {
  el.squares.addEventListener('click', (e) => {
    let actionn = (e.target.dataset.action)
    if (typeof actions[actionn] != 'function') {
      return
    }
    actions[actionn]()
    // e.target.classList.toggle('click')    
  })
}