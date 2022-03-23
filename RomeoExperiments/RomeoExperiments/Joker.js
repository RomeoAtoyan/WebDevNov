const jokers = document.querySelectorAll('.joker')
let heathLaugh = document.getElementById('heathL')
let markLaugh = document.getElementById('markH')
let jackLaugh = document.getElementById('jackN')
let joaquinLaugh = document.getElementById('joaquinP')

jokers.forEach(function(joker) {
    joker.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('heath')){
            console.log("it's Heath Ledger")
            heathLaugh.play();
        } else if (styles.contains('mark')){
            console.log("it's Mark Hamill")
            markLaugh.play()
        } else if (styles.contains('jack')){
            console.log("it's Jack Nicholson")
            jackLaugh.play()
        } else if (styles.contains('joaquin')){
            console.log("it's Joaquin Phoenix")
            joaquinLaugh.play()
        }
    }) 
})

const batmans = document.querySelectorAll('.batman')
let christianLine = document.getElementById('christianB')
let kevinLine = document.getElementById('kevinC')
let michaelLine = document.getElementById('michaelK')
let robertLine = document.getElementById('robertP')

batmans.forEach(function(batman) {
    batman.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('christian')){
            console.log("it's Christian Bale")
            christianLine.play();
        } else if (styles.contains('kevin')){
            console.log("it's Kevin Conroy")
            kevinLine.play()
        } else if (styles.contains('michael')){
            console.log("it's Michael Keaton")
            michaelLine.play()
        } else if (styles.contains('robert')){
            console.log("it's Robert Pattinson")
            robertLine.play()
        }
    }) 
})



