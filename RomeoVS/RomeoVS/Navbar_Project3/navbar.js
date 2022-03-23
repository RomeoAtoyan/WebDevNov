// classList - shows gets all classes
// contains - checks classList for speific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function() {
    // checking to see if (links) contains a class named (show-links). If it does contain it .... remove it... and if it doesn't ... add it. (longer method)
    // if(links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }

    // toggle this class when clicked (easiest method)
    links.classList.toggle('show-links')

})

