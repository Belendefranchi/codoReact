const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	const card = document.getElementById('card1');
	card.classList.add('move');
});

/* const mover = () => {
	document.getElementById('card1').classList.remove('justify-content-center');
	document.getElementById('card1').classList.add('move');
} */;

const volver = () => {
	document.getElementById('card1').classList.add('back');
	document.getElementById('card2').classList.add('visible');
};

/* mover(); */