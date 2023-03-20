const main = document.querySelector('main');
const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');

const setMainMargins = () => {
	main.setAttribute('style', `margin-top: ${navbar.offsetHeight}px; margin-bottom: ${footer.offsetHeight}px`);
}

setMainMargins();