// change navbar style on scroll
window.addEventListener('scroll', function () {
document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 30)
})

//show/gide faq answer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    
    faq.addEventListener('click', function () {
        faq.classList.toggle('open');
    //change icon
        const icon = document.querySelector('.faq__icon i');

        if (icon.className === 'fa-solid fa-plus') {
           
            icon.className = "fa-solid fa-minus";

        } else {
            icon.className = "fa-solid fa-plus";
        }
})
})

// swiper slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        600: {
            slidesPerView: 2, 

        }
    }
});
  // show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const close = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', function () {
    
    menu.style.display = "flex";
    close.style.display = "inline-block";
    menuBtn.style.display = "none";


})
//close nav menu
const closeNav = function () {
    menu.style.display = "none";
    close.style.display = "none";
    menuBtn.style.display = "inline-block";
}
close.addEventListener('click', closeNav);