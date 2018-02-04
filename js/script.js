//main nav
var ham = document.querySelector('.ham__btn');
var nav = document.querySelector('.nav-list');
var navItem = document.querySelectorAll('ul > .nav__item');
var navLink = document.querySelectorAll('li > .nav__link');


ham.addEventListener('click', function(e){
   e.preventDefault();    
   nav.classList.toggle('nav--active');
   for(i=0;i<6;i++){
       navItem[i].classList.toggle('nav__item--active');
       navLink[i].classList.toggle('nav__link--active');
   };
});

//menu acco
var menuItem = document.querySelector('.menu-acco__item-meat');
var menuText = document.querySelector('.acco__text-meat');
var title = document.querySelector('.acco__title');
var link = document.querySelector('.menu-acco__link');

menuItem.addEventListener('click',function(){
   console.log('клик на меню');
   title.classList.toggle('acco__title--active');
   menuText.classList.toggle('acco__text--active');
});

link.addEventListener('click',function(event){
   event.preventDefault(); 
});

// checkbox
