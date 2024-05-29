let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

function openWhatsApp() {
    var phoneNumber = "+201025119584"; // استبدل هذا برقم الهاتف الخاص بك
    window.open("https://wa.me/" + +201025119584);
}

window.scroll = () =>{
    navbar.classList.remove('.active');
}

ScrollReveal({

    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.parent-contant, .container', { origin: 'bottom' });