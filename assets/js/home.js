(function () {
    if (document.querySelector('.teaser__background-check').offsetWidth < 2) {
        document.querySelector('.teaser__background').innerHTML = '<video preload="auto" autoplay muted loop poster="/assets/bg.jpg"><source src="/assets/jsc2017-ambient-bg-4.mp4" type="video/mp4"></video>'
    }
}())