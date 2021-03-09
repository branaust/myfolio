///////////////////////// CHANGE THEME
///////////////////////////////////////

let themeDots = document.getElementsByClassName('theme-dot')
let style = document.getElementById('theme-style')
let theme = localStorage.getItem('theme')


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
        style.href = './css/default.css'
    } else if (mode == 'blue') {
        style.href = './css/blue.css'
    } else if (mode == 'green') {
        style.href = './css/green.css'
    } else if (mode == 'purple') {
        style.href = './css/purple.css'
    }


    localStorage.setItem('theme', mode)
}

///////////////////////// SMOOTH SCROLL
///////////////////////////////////////

let contact = document.querySelector('.contact-btn')

contact.addEventListener('click', function () {
    smoothScroll('.contact-form', 2000)
})

function smoothScroll(target, duration) {
    var target = document.querySelector(target)
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime
        }
        var timeElapsed = currentTime - startTime
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animation);
}





console.log('WORKING')