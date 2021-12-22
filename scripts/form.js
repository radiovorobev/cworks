const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const formHeader = header.querySelector('form');
const formFooter = footer.querySelector('form');
const formInputHeader = header.querySelector('input');
const formInputFooter = footer.querySelector('input');
const formButtonHeader = header.querySelector('.form__button');
const formButtonFooter = footer.querySelector('.form__button');

formHeader.addEventListener(('submit'), function(evt) {
	evt.preventDefault();
	formSubmit(formInputHeader, formButtonHeader, formHeader);
});

formFooter.addEventListener(('submit'), function(evt) {
	evt.preventDefault();
	formSubmit(formInputFooter, formButtonFooter, formFooter);
});

function formSubmit (input, button, form) {
	if (input.value) {
		if (document.documentElement.clientWidth < 767) {
			button.textContent = '👍';
			form.reset();
		} else {
			button.textContent = 'Круто, спасибо за доверие!';
			form.reset();
		}
	} else {
		input.value = 'Забыли написать свой e-mail!';
	}
}