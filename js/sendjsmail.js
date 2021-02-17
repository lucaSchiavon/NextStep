function sendEmail() {
	Email.send({
	Host: "smtp.elasticemail.com",
	Username : "robot@elasticemail.com",
	Password : "C2057B4B8758D9CFCB428F3BB53B7E232616",
	To : 'luca.schiavon@alice.it',
	From : "robot@elasticemail.com",
	Subject : "Prova invio mail da client JS",
	Body : "questo il body",
	}).then(
		message => alert(message)
	);
}

function sendEmailEncriptFromAruba() {
Email.send({
    SecureToken : "a0cf2006-58c8-4ccf-aab3-24ac4b901887",
    To : 'luca.schiavon@alice.it',
    From : "info@lucaschiavon.eu",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}


function sendEmailEncriptFromElastic() {
	Email.send({
		SecureToken : "5eedb0fcf-a32d-4d1d-a6be-d418475e2ab1",
		To : 'luca.schiavon@alice.it',
		From : "info@lucaschiavon.eu",
		Subject : "This is the subject",
		Body : "And this is the body"
	}).then(
	  message => alert("Il messaggio è stato inviato da elastic criptato, grazie di avermi contattato.")
	);
	}