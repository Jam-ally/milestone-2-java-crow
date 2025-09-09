window.addEventListener('DOMContentLoaded', e => {
    console.log("DOM Content fully Loaded and parsed");
} )


const previous = document.querySelector('#previous');
const next = document.querySelector('#next');


previous.addEventListener('click', () => {
    console.log("previous button pressed");
})

next.addEventListener('click', () => {
    console.log("next button pressed");
})

textBoxes = [];





function renderBox() {
    // textBoxes.forEach(element => {
    //     textBox = document.getElementsByClassName('box');
    //     textBox.classList.
        
    // });
}