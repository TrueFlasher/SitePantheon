$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop:true,
        margin:50,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            },
        }
    });
});

const div = document.querySelector( '#navbarList');
 
document.addEventListener( 'click', (e) => {
	const space = e.composedPath().includes(div);
 
	if ( ! space) {
		div.classList.remove("show");
        
	}
})

const but = document.querySelector( '#but');

document.addEventListener( 'click',  (e) => {
	const get = e.composedPath().includes(but);

	if ( get) {
		div.classList.remove("show");

	}
})


function sendEmail() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    
    Email.send({
      Host: "smtp.gmail.com",
      Username: "ВАШ_EMAIL",
      Password: "ПАРОЛЬ",
      To: "EMAIL_ПОЛУЧАТЕЛЯ",
      From: "ВАШ_EMAIL",
      Subject: "Новое сообщение",
      Body: "Имя: " + name + "<br>Телефон: " + phone
    }).then(
      message => alert("Сообщение отправлено!")
    );
  }