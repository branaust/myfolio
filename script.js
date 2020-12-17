// const light = document.getElementsByClassName('light-mode')
// const blue = document.getElementsByClassName('blue-mode')
// const green = document.querySelector('green-mode')
// const purple = document.querySelector('purple-mode')

let themeDots = document.getElementsByClassName('theme-dot')
let style = document.getElementById('theme-style')
let theme = localStorage.getItem('theme')
let contact = document.getElementById('contact-btn')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('option clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        style.href = 'default.css'
    } else if (mode == 'blue') {
        style.href = 'blue.css'
    } else if (mode == 'green') {
        style.href = 'green.css'
    } else if (mode == 'purple') {
        style.href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}

contact.addEventListener('click', function () {
    window.scrollTo(0, 500);
    scrolldelay = setTimeout(pageScroll, 10);
})