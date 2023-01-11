/* === Relógio === */
const hour = document.getElementById('clock-hour'),
      minutes = document.getElementById('clock-minutes'),
      seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6
        
    // Adicionando uma rotação aos elementos
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) // 1000 = 1s

/* === Relógio, Data e Texto === */
const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAmPm = document.getElementById('text-ampm'),
    //   dateWeek = document.getElementById('date-day-week'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

const clockText = () =>{
    let date = new Date()

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        // dayweek = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear()

    // Mudando o horário de 24 para 12 horas e estabelecemos se é AM ou PM
    if(hh >= 12){
        hh = hh - 12
        ampm = 'PM'
    }else{
        ampm = 'AM'
    }

    // Detectando quando é 0 AM e transformando em 12 AM
    if(hh == 0){hh = 12}

    // Mostrar um zero antes das horas
    if(hh < 10){hh = `0${hh}`}

    // Mostrar as horas
    textHour.innerHTML = `${hh}:`
    
    // Mostrar um zero antes dos minutos
    if(mm < 10){mm = `0${mm}`}
    
    // Mostrar os minutos
    textMinutes.innerHTML = mm

    // Mostrar AM ou PM
    textAmPm.innerHTML = ampm

    // Se você quiser mostrar o nome do dia da semana
    // let week = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

    // Mostrando os meses do ano
    let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

    // Mostrando o dia, o mês e o ano
    dateDay.innerHTML = day
    // dateWeek.innerHTML = `${week[dayweek]}`
    dateMonth.innerHTML = `${months[month]},`
    dateYear.innerHTML = year
}
setInterval(clockText, 1000) // 1000 = 1s

/* === Tema Escuro/Claro === */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Tópico previamente selecionado (se selecionado pelo usuário)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtendo o tema atual que a interface possui validando o tema escuro
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// Validando se o usuário escolheu previamente um tema
if (selectedTheme) {
  // Se a validação for cumprida, perguntamos qual era o problema para saber se ativamos ou desativamos o dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Ative / Desative o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Adicione ou remova o tema escuro / ícone
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Salvando o tema e o ícone atual que o usuário escolher
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})