
/*DISHES SLICK SLIDER*/

$(document).ready(function(){
    $('.dishes').slick(
{
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    }
    );
  });




  /*HERO SECTION SLIDER*/

  $(document).ready(function(){
  $('.hero-section-slider').slick(
    {
      dots: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<span class="my-arrow my-arrow__next"></span>',
      prevArrow: '<span class="my-arrow my-arrow__prev"></span>',
    }
  )
  });



  /*BACK TO TOP ARROW*/


  document.addEventListener('scroll',(e)=>{
  
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > 100) document.querySelector('.scroll').style.display = "block";
    else document.querySelector('.scroll').style.display = "none"
  })
  function animateToTop(e) {
      e.preventDefault();
      let scrollToTop = window.setInterval(function() {
          let pos = window.pageYOffset;
          if ( pos > 0 && pageYOffset >= 10) {
              window.scrollTo(0, pos - 20);
              document.querySelector('.scrolimg').style.visibility = 'visible';
          } else {
              window.clearInterval(scrollToTop);
              document.querySelector('.scrolimg').style.visibility = 'visible';
          }
      }, 
      9
      )
  }
  