/* const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	const card = document.getElementById('card');
	card.classList.add('move');
}); */

const mover = () => {
	document.getElementById('card').classList.add('move');
};

const volver = () => {
	document.getElementById('card').classList.remove('move');
};

/* btn.addEventListener('click', function()  {
    let elements = document.getElementsByClassName('card');
    let screenSize = window.innerHeight;
    
    for(var i = 0; i < elements.length; i++) {
			let element = elements[i];

			if(element.getBoundingClientRect().top < screenSize) {
				element.classList.add('visible');
			} else {
				element.classList.remove('visible');
			}
		}
  }) */