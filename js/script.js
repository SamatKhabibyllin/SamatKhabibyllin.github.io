//acco menu
var menuItem = document.querySelector('.menu-acco__item-meat');
var menuText = document.querySelector('.acco__text-meat');
var title = document.querySelector('.acco__title');
var link = document.querySelector('.menu-acco__link');

menuItem.addEventListener('click',function(){
   console.log('клик на меню');
   title.classList.add('acco__title--active');
   menuText.classList.add('acco__text--active');
});

link.addEventListener('click',function(event){
   event.preventDefault(); 
});