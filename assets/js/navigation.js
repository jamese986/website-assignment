let navLinks = document.querySelector('.navNarrow');
let narrowLinks = document.querySelector('.narrowLinks');

navLinks.addEventListener('click', toggle);

function toggle() {
	narrowLinks.classList.toggle('hidden');
};
