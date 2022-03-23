// set up initial count to 0
let count = 0;
// select the value (count) and the buttons
const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');
const container = document.querySelector('.container')


// for each button add a click event.
buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        //=======> selecting the current target of the event object and looking for the class list 
        const styles = e.currentTarget.classList; 
        if(styles.contains('decrease')){;
            count--;
        } else if (styles.contains('reset')){
            count = 0;
        } else if (styles.contains('increase')){
            count++;
        };
        if(count > 0){
            value.style.color = 'green'
        }
        if(count === 0){
            value.style.color = ''
        }
        if (count < 0){
            value.style.color = 'red'
        }
    
        value.textContent = count;
    });
});