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
	const buttonText = button.querySelector('.form__button-text');
	const buttonIcon = button.querySelector('.form__button-text-icon');
	if (input.value) {
			buttonIcon.textContent = '👍';
			buttonText.textContent = 'Круто, спасибо за доверие!';
			buttonIcon.classList.add('form__button-text-icon-disabled');
			form.reset();
	} else {
		input.value = 'Забыли написать свой e-mail!';
	}
}