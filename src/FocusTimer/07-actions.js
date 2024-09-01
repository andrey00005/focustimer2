import state from './04-state.js'
import * as timer from './08-timer-update-display.js'
import * as el from './06-elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  // será chamado pelo 05-events
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.contagem()

  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
  // el.minutes.textContent = ''
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')
  if (state.isMute) {
    sounds.bgAudio.play()
    return
  }
  sounds.bgAudio.pause()
}

export function mais() {
  el.minutes.textContent = Number(el.minutes.textContent) + 5
  console.log(el.minutes.textContent)
  el.minutes.textContent = String(el.minutes.textContent).padStart(2, '0')
  el.seconds.textContent = String(el.seconds.textContent).padStart(2, '0')
  // timer.updateDisplay() acho q isso reseta
}
export function menos() {
  el.minutes.textContent = Number(el.minutes.textContent) - 5
  if (el.minutes.textContent < 0) {
    el.minutes.textContent = 0
    el.seconds.textContent = 0
  }
  el.minutes.textContent = String(el.minutes.textContent).padStart(2, '0')
  el.seconds.textContent = String(el.seconds.textContent).padStart(2, '0')
  // console.log(el.minutes.textContent)
  // timer.updateDisplay() acho q isso reseta
}

export function arvore() {
  toggleSound(sounds.floresta, 0);
}

export function nuvem() {
  toggleSound(sounds.chuva, 1);
}

export function casa() {
  toggleSound(sounds.lareira, 2);
}

export function agua() {
  toggleSound(sounds.cafeteria, 3);
}

function toggleSound(sound, index) {
  const square = el.squares.querySelectorAll('.square')[index];

  // Desativa todos os outros botões e seus sons
  el.squares.querySelectorAll('.square').forEach((s, i) => {
    const otherSound = sounds[Object.keys(sounds)[i]];
    if (i !== index) {
      s.classList.remove('music-on');
      otherSound.pause();
    }
  });

  // Ativa o botão atual e a classe 'music-on'
  state.isMute = square.classList.toggle('music-on');

  // Pausa todos os sons antes de reproduzir o som associado
  Object.values(sounds).forEach(s => s.pause());

  // Toca o som associado
  if (state.isMute) {
    sound.play();
  }

}
