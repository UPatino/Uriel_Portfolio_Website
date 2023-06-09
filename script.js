$(document).ready(function (){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky") 
        }
    })
})

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        };

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Full Stack Engineer", "Designer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

  // typing text animation script
  var typed = new Typed(".typing-2", {
    strings: [ "Full Stack Engineer","Designer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


const container =  document.querySelector('.container');
const emoji = document.querySelector('.emoji');
const textarea = document.querySelector('.textarea');
const btn = document.querySelector('.btn');


emoji.addEventListener('click',(e) =>{

    if(e.target.className.includes('emoji')) return;

    textarea.classList.add('textarea--active');
    btn.classList.add('btn--active');
})

container.addEventListener('mouseleave',()=>{

    textarea.classList.remove('textarea--active');
    btn.classList.remove('btn--active');

})