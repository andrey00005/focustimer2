let darkMode = true

const buttonToggle = document.querySelector('#toggle-mode')

buttonToggle.addEventListener('click', event => {
  document.documentElement.classList.toggle('light')
  const mode = darkMode ? 'Light' : 'Dark'

  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

  

  darkMode = !darkMode
})


//ESTE ARQUIVO TA SENDO ENVIADO PARA O 01-MAIN

// console.log(event.target)
// console.log(event.currentTarget)
// console.log(buttonToggle) CHAMAR ASSIM É O MESMO QUE CHAMAR COM EVENT.CURRENTTARGET