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
        
        burger.toggleClass(".open")
        });


   /*search*/


////////

        $("#input").on('focus', function () {
            $(this).parent('.search').addClass('gradient');
          });
          
          $("#input").on('blur', function () {
            if($(this).val().length == 0)
              $(this).parent('.search').removeClass('gradient');
          });

////////////////

    navToggle.on("click", function(event){
        event.preventDefault();
        
        burger.toggleClass("open")
        });

    
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
        console.log(this.value);
    };

/*header*/



});