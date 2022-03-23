// local review data
const reviews = [

    {
        id: 1,
        name: "Christian Bale",
        job: "Actor",
        img: "https://www.vprogids.nl/.imaging/mte/gids/textimage-above/dam/cinema/03/82/76/image_3827675.jpeg/jcr:content/image_3827675.jpeg",
        text:"This may be a Batman movie, but you can see that it was very much influenced by Se7en(1995) and Zodiac(2007) both where directed by David Fincher. I admire the way this Batman attempts to be different in a way, trying to feel less like a comic book and instead of feeling like a detective thriller. Robert Pattinson was great has Batman, playing it has a less gruff version of Christian Bales Batman. Zoe Kravitz makes a great Catwoman, playing more to her then what you think. The Main villain The Riddler brings a creepy vibe to it, that keeps you on the edge of your seat."
    },

    {
        id: 2,
        name: "George Clooney",
        job: "Actor",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-182616175-1531221523.jpg",
        text:"A new one man vigilante takes the street, it's well past twilight and known villains feel the heat, a cat begins to purr, a penguin king begins to stir, as the curtain-rod like rain defines the beat. Suffocating, suspenseful, overflowing and sublime."
    },

    {
        id: 3,
        name: "Val Kilmer",
        job: "Actor",
        img: "https://assets.mycast.io/actor_images/actor-val-kilmer-213775_large.jpg?1621008339",
        text:"It seemed very familiar, a dark, moody serial killer hunt with two opposite characters looking for clues. There was even a scene were the detective is reading a journal of The Riddlers ramblings which was like the same scene in Se7en. I didn't know if it was on purpose but I do know what the film was highly enjoyable and at nearly 3 hours long, never seemed to drag. The characters lived up to expectations, especially Cat-woman and The Penguin. It's a completely different take of the Batman films and it works. What I like best about it is that it doesn't sell out with the over the top action sequences and stupid jokes. It's gritty and it's real and I'm looking forward to seeing it again."
    },

    {
        id: 4,
        name: "Adam West",
        job: "Actor",
        img: "https://images.mubicdn.net/images/cast_member/9292/cache-204266-1488422981/image-w856.jpg?size=240x",
        text:"In short, Reeves has the merit of showing that Batman can turn out to be a very different version from what was previously perfectly explored by Nolan. This is a more thoughtful, more investigative, and even darker Batman, not in a hurry to show all his cards. Even with an excessive long duration and some unnecessary expository dialogue, it passes the difficult test with flying colours."
    }
];
// select items under review container
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
// select buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem)
})

// show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent  = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem)
})

// show previous person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem)
})

// random number (review)
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log(currentItem)
    showPerson()  
})
