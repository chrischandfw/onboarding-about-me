// import functions

// grab DOM elements

const showButton = document.getElementById('circlething');
const animal = document.getElementById('animalDiv');

// set event listeners 

showButton.addEventListener('click') () => {
    animal.classList.remove('hidden');
}

console.log(showButton, animal, 'validate grabbed')

console.log('show button clicked', 'validate clicked')
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
