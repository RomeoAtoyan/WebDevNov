// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finsish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

btn.addEventListener('click', function() {
    // if switch button does not contain the class of slide ... add it and pauze the video
    if(!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.pause()
    } else {
    // if it does the class of slide .. remove it and play the video    
        btn.classList.remove('slide')
        video.play()
    }
})

// preloader
const preloader = document.querySelector('.preloader')

window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader')
})