document.querySelector('.form__submit').addEventListener('click', e => submit(e));

function submit(e) {
	e.preventDefault();
	let emailAddress = document.getElementById('emailaddress').value;
	if (validateEmail(emailAddress)) {
		$.ajax({
			type: "POST",
			url: "https://jsonplaceholder.typicode.com/posts",
			data: JSON.stringify({
				email: emailAddress
			}),
			dataType: 'json',
			contentType: 'application/json'
		}).then(printSuccess).catch(printError);
	} else {
		printError();
	}
};

function printSuccess() {
	let container = document.querySelector('.response-container');
	container.innerHTML =
		'<p class="container-success">Your email has been successfully submitted</p>'
}

function printError() {
	let container = document.querySelector('.response-container');
	container.innerHTML =
		'<p class="container-error">There was an error with your email</p>'
}

function validateEmail(emailAddress) {
	var re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(emailAddress);
};