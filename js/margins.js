const main = document.querySelector('main');
const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');

const setMainMargins = () => {
	main.style.marginTop = navbar.offsetHeight;
	main.style.marginBottom = footer.offsetHeight;
}

window.onload = setMainMargins;