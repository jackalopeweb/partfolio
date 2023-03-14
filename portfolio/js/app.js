$(function(){

    const workSlider =  $('[ data-slider="slick"]');

/*filter*/
    let filter = $("[data-filter]");
    
    filter.on("click", function(event)  {
        event.preventDefault();
        
        let cat = $(this).data('filter');
       
        if( cat == 'all'){
            $("[data-cat]").removeClass('hide');
        } else{
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');
    
                if(workCat != cat){
                    $(this).addClass('hide')
                } else{
                    $(this).removeClass('hide')
                }
    
            });
        }

    });

/*search*/

$("#input").on('focus', function () {
    $(this).parent('.search').addClass('gradient');
  });
  
  $("#input").on('blur', function () {
    if($(this).val().length == 0)
      $(this).parent('.search').removeClass('gradient');
  });

////////////////

let input =  document.querySelector('#input');

input.oninput = function() {
let value = this.value.trim();
let list = document.querySelectorAll('.partfolio-nav');

if (value) {           
    list.forEach(elem => {
        if (elem.innerText.search(value) == -1) {
            elem.classList.add('hide');
        }
    });
} else {
    list.forEach(elem => {
        elem.classList.remove('hide');
    });
}
};

/*modal*/
    let modalCall = $("[data-modal]");
    let modalClose = $("[data-close]");

    modalCall.on("click", function(event){
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll'); //добовляет класс

        setTimeout(function(){
            $(modalId).find(".modal__dialog").css({
                Transform: "rotateX(0)"
            }) //ищет в этом эллементе класс    

        }, 200);

        workSlider.slick('setPosition');
        
    });

    modalClose.on("click", function(event){
        event.preventDefault();//отмена стандартного клика при КЛИКЕ

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            Transform: "rotateX(90deg)"
        }) //ищет в этом эллементе класс    

        setTimeout(function(){
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll'); //уберает класс 
        }, 200);



    });


    $(".modal").on("click", function(event){
        let $this = $(this);

        $this.find(".modal__dialog").css({
            Transform: "rotateX(90deg)"
        }) //ищет в этом эллементе класс   

        setTimeout(function(){  
            $this.removeClass('show');
            $("body").removeClass('no-scroll'); //уберает класс
        }, 200);
        


    });

    $(".modal__dialog").on("click", function(event){
        event.stopPropagation();

    });


/*slider https://kenwheeler.github.io/slick/*/

    workSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });

      $(".slickPrev").on("click", function(event){
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick("slickPrev");
      });

      $(".slickNext").on("click", function(event){
        event.preventDefault();
        
        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        currentSlider.slick("slickNext");
      });

/*mobile nav*/
      const navToggle = $("#navToggle");
      const nav = $("#nav");
      const burger = $("#navToggle");

    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show")
    });


/*burger*/
    navToggle.on("click", function(event){
        event.preventDefault();            
        burger.toggleClass("open");
    });


    
/*parallax*/

const wrapper = document.querySelector('.parallax');
const layers = document.querySelectorAll('.parallax__layer');

const handleParallax = (evt) => {
 //размер области просмотра
  const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
  const parallaxTopOffset = wrapper.getBoundingClientRect().top;

  // координаты центра экрана
  const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
  const coordY = evt.clientY - parallaxTopOffset - 0.5 *  wrapper.offsetHeight;
    
  layers.forEach((layer)=>{
    const layerSpeed = layer.dataset.speed;
    const x = - (coordX * layerSpeed).toFixed(2);
    const y = - (coordY * layerSpeed).toFixed(2);
    layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
  });
};

const reset = () => {
  layers.forEach((layer)=>{
      layer.removeAttribute('style');
  });
}
 
wrapper.addEventListener('mousemove', handleParallax);
wrapper.addEventListener('mouseout', reset);

});


//cursor
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');
var button = document.querySelectorAll('button');
var hi = document.querySelectorAll('html');


document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});



a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

button.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
});

a.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursorinner.classList.add('hover2');
    });
    item.addEventListener('mouseleave', () => {
      cursorinner.classList.remove('hover2');
    });
});

button.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursorinner.classList.add('hover2');
  });
  item.addEventListener('mouseleave', () => {
    cursorinner.classList.remove('hover2');
  });
});

hi.forEach(item => {
  item.addEventListener('mouseout', () => {
    cursor.classList.add('hidden');
  });
  item.addEventListener('mouseover', () => {
      cursor.classList.remove('hidden');
    });
});

hi.forEach(item => {
  item.addEventListener('mouseout', () => {
      cursorinner.classList.add('hidden');
  });
  item.addEventListener('mouseover', () => {
      cursorinner.classList.remove('hidden');
    });
});

var btn = $('.btn-up');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


//colorI

$('.btn-up').hover(function(){
  $('i').toggleClass('icolor');
 });


 //header
 var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});