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

function sendEmailWithGoogle() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "lully.schiavon@gmail.com",
	Password : "gmaillully",
	To : 'luca.schiavon@alice.it',
	From : "lully.schiavon@gmail.com",
	Subject : "Prova invio mail da client JS con google",
	Body : "questo il body",
	}).then(
		message => alert(message)
	);
}

function sendEmailEncriptFromGoogle() {
	Email.send({
		SecureToken : "9640ee49-5a45-4fec-8047-8b7a8937f641",
		To : 'luca.schiavon@alice.it',
		From : "lully.schiavon@gmail.com",
		Subject : "This is the subject",
		Body : "And this is the body"
	}).then(
	  message => alert(message)
	);
	}

function sendEmailEncriptFromAruba() {
Email.send({
    SecureToken : "59a7cfb1-9b34-4e99-beb1-fc70c81ebaa5",
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