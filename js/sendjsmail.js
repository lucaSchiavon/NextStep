function sendEmail() {
	Email.send({
	Host: "smtp.elasticemail.com",
	Username : "luca.schiavon@elasticemail.com",
	Password : "19D34E379A6D00A745F47340500E76EA57ED",
	To : 'luca.schiavon@alice.it',
	From : "info@lucaschiavon.eu",
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