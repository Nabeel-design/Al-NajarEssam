/*====================  Navbar Toggle  ===================== */

let menu = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*====================  Sections scroll  ===================== */

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header a i');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

            });
        };
    });


    let header =document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);



    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');



}

ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
  

 });

 ScrollReveal().reveal('.home-content , heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .shopping-box, .contact form', { origin: 'button' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, about-content', { origin: 'right' });

 const typed = new Typed('.multiple-text' , {
    strings:[' Music composer' , 'Content creator' , 'Developer of Eastern and Western music'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,

 });