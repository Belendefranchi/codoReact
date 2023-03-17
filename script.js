const moveButton = document.getElementById('btn');
const backButton = document.getElementById('back');
const secondCard = document.querySelector('.hidden');

moveButton.addEventListener('click', () => {
	secondCard.classList.remove('hidden');
});

backButton.addEventListener('click', () => {
	secondCard.classList.add('hidden');
});