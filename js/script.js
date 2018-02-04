//main nav
var ham = document.querySelector('.ham__btn');
var nav = document.querySelector('.nav-list');
var navItem = document.querySelectorAll('ul > .nav__item');
var navLink = document.querySelectorAll('li > .nav__link');
var hamDecorNone = document.querySelector('.ham__btn-decor_display')
var hamCloseOne = document.querySelector('.ham__btn-decor_transform_1');
var hamCloseTwo = document.querySelector('.ham__btn-decor_transform_2');

ham.addEventListener('click', function(e){
   e.preventDefault();    
   nav.classList.toggle('nav--active');
   for(i=0;i<6;i++){
       navItem[i].classList.toggle('nav__item--active');
       navLink[i].classList.toggle('nav__link--active');
   };
    hamDecorNone.classList.toggle('ham__btn-decor_display_none');
    hamCloseOne.classList.toggle('ham__btn-decor_transform_rotate_1');
    hamCloseTwo.classList.toggle('ham__btn-decor_transform_rotate_2');
});

//team acco
var teamLink = document.querySelectorAll('li > .team__acco-title');
for(n = 0; n < 4; n++){
    teamLink[n].addEventListener('click', function(e){
       e.preventDefault();
        console.log('click'); 
    });
};

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

//radio buttons
var cash = document.querySelector('.cash');
var card = document.querySelector('.card');
var cashCircle = document.querySelector('.circle__small-cash');
var cardCircle = document.querySelector('.circle__small-card');

cash.addEventListener('click',function(){
    cardCircle.classList.remove('circle__small--active');
    cashCircle.classList.add('circle__small--active');
});
card.addEventListener('click',function(){
    cashCircle.classList.remove('circle__small--active');
    cardCircle.classList.add('circle__small--active');
});

// checkbox
var boxBlock = document.querySelector('.checkbox__block');
var check = document.querySelector('.check');

boxBlock.addEventListener('click', function(){
   check.classList.toggle('check--active');
});

//reset
var reset = document.querySelector('.order__form-button_reset');

reset.addEventListener('click', function(){
    check.classList.remove('check--active');
    cashCircle.classList.remove('circle__small--active');
    cardCircle.classList.remove('circle__small--active');
});