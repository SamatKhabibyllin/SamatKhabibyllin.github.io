//one page scroll
const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const setActiveMenuItem = itemEq =>{
    $('.navigation__item').eq(itemEq).addClass('.navigation__item_active')
    .siblings().removeClass('.navigation__item_active');
} 

const perfomTransition = sectionEq =>{
    const position = `${sectionEq * -100}%`
    
    if(!inScroll){
        inScroll = true;
        
        sections.eq(sectionEq).addClass('active')
    .siblings().removeClass('active');
    display.css({
        'transform' : `translate(0,${position})`,
        '-webkit-transform' : `translate(0,${position})`
    })
        setTimeout(() => {
            inScroll = false;
            setActiveMenuItem(sectionEq);
        },800); // продолжительность анимации + 300 ms для инерции
    }
}

const scrollToSection = direction =>{
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();
    
    if(direction === 'up' && nextSection.length){
        perfomTransition(nextSection.index())
    }
    if(direction === 'down' && prevSection.length){
        perfomTransition(prevSection.index())
    }
}

$(document).on({
  wheel: e =>{
      const deltaY = e.originalEvent.deltaY;
      const direction = deltaY > 0 ? 'up' : 'down';
      scrollToSection(direction);
      },
    keydown: e =>{
        switch(e.keyCode){
            //вниз
            case 40: scrollToSection('up');
            //вверх
            case 38: scrollToSection('down');
        }
    },
//    touchmove: e => e.preventDefault();
});

$('[data-scroll-to]').on('click', e =>{
    e.preventDefault();
    
    const target = $(e.currentTarget).attr('data-scroll-to');
    perfomTransition(target);
})

if(isMobile){
    $(document).swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        //плагин возвращает фактическое движение страницы 
    const scrollDirection = direction === 'down' ? 'up' : 'down'; 
    scrollToSection(direction); 
    }
  });
}

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

//go down btn animate
const goDownBtn = document.querySelector('.go-down-btn');
var currentBottom = 40;
const step = 5;

intervalId = setInterval(function(){
//    currentBottom += step;
//    goDownBtn.style.bottom = currentBottom + 'px';
    
},2000);

//carousel

$(function(){
    
    var moveSlide = function(container,slideNum){
        var 
           items = container.find('.slider__item');
           activeSlide = items.filter('.slider-active');
           reqItem = items.eq(slideNum);
           reqIndex = reqItem.index();
           sliderList = container.find('.slider-list');
           duration = 500;
       
       if(reqItem.length){
           sliderList.animate({
           'left' : -reqIndex * 100 + '%'
       },duration, function(){
           activeSlide.removeClass('slider-active');
           reqItem.addClass('slider-active');
       });
       };
    };
    

    
    $('.carousel-arrow').on('click', function(e){
       e.preventDefault();
        
        var $this = $(this),
            container = $this.closest('.carousel__container'),
            items = $('.slider__item',container),
            activeItem = items.filter('.slider-active'),
            nextItem = activeItem.next();
            prevItem = activeItem.prev();
        
        if($this.hasClass('next-arrow')){ //вперед
            if(nextItem.length){
                moveSlide(container,nextItem.index());
            }else{
                moveSlide(container,items.first().index());
            }
            
        
        
        }else{//назад
            if(prevItem.length){
                moveSlide(container,prevItem.index());
            }else{
                moveSlide(container,items.last().index());
            }
        }
        
    });
    
});

//team acco
var teamLink = document.querySelectorAll('li > .team__acco-title');
var teamItem = document.querySelectorAll('ul > .team__acco-item');
for(n = 0; n < 4; n++){
    teamLink[n].addEventListener('click', function(e){
        e.preventDefault();
        for(m = 0; m < 4; m++){
            
        };
    });
};

var teamDr = document.querySelector('.team__acco-item__dr');
var linkDr = document.querySelector('.team__acco-title__dr');
var teamRd = document.querySelector('.team__acco-item__rd');
var linkRd = document.querySelector('.team__acco-title__rd');
var teamDf = document.querySelector('.team__acco-item__df');
var linkDf = document.querySelector('.team__acco-title__df');
var teamNi = document.querySelector('.team__acco-item__ni');
var linkNi = document.querySelector('.team__acco-title__ni');

linkDr.addEventListener('click', function(e){
    teamDr.classList.toggle('team__acco-item--active');
    teamRd.classList.remove('team__acco-item--active');
    teamDf.classList.remove('team__acco-item--active');
    teamNi.classList.remove('team__acco-item--active');
});
linkRd.addEventListener('click', function(e){
    teamRd.classList.toggle('team__acco-item--active');
    teamDr.classList.remove('team__acco-item--active');
    teamDf.classList.remove('team__acco-item--active');
    teamNi.classList.remove('team__acco-item--active');
});
linkDf.addEventListener('click', function(e){
    teamDf.classList.toggle('team__acco-item--active');
    teamDr.classList.remove('team__acco-item--active');
    teamRd.classList.remove('team__acco-item--active');
    teamNi.classList.remove('team__acco-item--active');
});
linkNi.addEventListener('click', function(e){
    teamNi.classList.toggle('team__acco-item--active');
    teamDr.classList.remove('team__acco-item--active');
    teamRd.classList.remove('team__acco-item--active');
    teamDf.classList.remove('team__acco-item--active');
});

//menu acco
var menuItem = document.querySelectorAll('ul > .menu-acco__item');
var menuText = document.querySelectorAll('ul > .acco__text');
var title = document.querySelectorAll('.acco__title');
var link = document.querySelector('.menu-acco__link');
var menuContTitle = document.querySelector('.menu__title-container');

menuItem[0].addEventListener('click',function(){
   title[0].classList.toggle('acco__title--active');
   menuText[0].classList.toggle('acco__text--active');
    
    title[1].classList.remove('acco__title--active');
   menuText[1].classList.remove('acco__text--active');
    
     title[2].classList.remove('acco__title--active');
   menuText[2].classList.remove('acco__text--active');
    
    menuContTitle.style.display = 'none';
});

menuItem[1].addEventListener('click',function(){
   title[1].classList.toggle('acco__title--active');
   menuText[1].classList.toggle('acco__text--active');
    
    title[0].classList.remove('acco__title--active');
   menuText[0].classList.remove('acco__text--active');
    
    title[2].classList.remove('acco__title--active');
   menuText[2].classList.remove('acco__text--active');
});

menuItem[2].addEventListener('click',function(){
   title[2].classList.toggle('acco__title--active');
   menuText[2].classList.toggle('acco__text--active');
    
    title[0].classList.remove('acco__title--active');
   menuText[0].classList.remove('acco__text--active');
    
    title[1].classList.remove('acco__title--active');
   menuText[1].classList.remove('acco__text--active');
});

link.addEventListener('click', function(event){
   event.preventDefault();
});

//reviews popup
var btnRew = document.querySelector('.btn_bg_color_grey');
var popupRew = document.querySelector('.reviews__popup');
var popupClose = document.querySelector('.reviews__popup-close');

btnRew.addEventListener('click', function(e){
   e.preventDefault();
    popupRew.classList.add('reviews__popup--active');
});
popupClose.addEventListener('click', function(){
    popupRew.classList.remove('reviews__popup--active');
});

var allBtn = document.querySelectorAll('.reviews__desc > .btn_bg_color_grey');
for(b=0;b<allBtn.length;b++){
    allBtn[b].addEventListener('click', function(e){
       e.preventDefault();
       popupRew.classList.add('reviews__popup--active');
    });
};
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

//go down
const goDown = document.querySelector('.go-down-btn');
goDown.addEventListener('click',function(e){
    e.preventDefault();
})