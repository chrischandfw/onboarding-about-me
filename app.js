// import functions

// grab DOM elements

const showButton = document.querySelector('#circlething');
const animal = document.querySelector('.animalDiv');
const animalPic = document.querySelector('.animalPic');
// set event listeners 

showButton.addEventListener('click', () => {
    animal.classList.toggle('hidden');
    animalPic.classList.toggle('hidden');
});

console.log(showButton, animal, 'validate grabbed')

console.log('show button clicked', 'validate clicked')
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
