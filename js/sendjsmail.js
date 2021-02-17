function sendEmail() {
	Email.send({
	Host: "smtp.elasticemail.com",
	Username : "luca.schiavon@elasticemail.com",
	Password : "D8D73EC4BE099F35DF66B05D909DAC6E3D0E",
	To : 'luca.schiavon@alice.it',
	From : "info@lucaschiavon.eu",
	Subject : "Prova invio mail da client JS",
	Body : "questo il body",
	}).then(
		message => alert("Il messaggio è stato inviato, grazie di avermi contattato.")
	);
}

function sendEmailEncript() {
Email.send({
    SecureToken : "5d731729-1ec5-42ba-bf84-85a3aead8dfe",
    To : 'luca.schiavon@alice.it',
    From : "info@lucaschiavon.eu",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert("Il messaggio è stato inviato, grazie di avermi contattato.")
);
}