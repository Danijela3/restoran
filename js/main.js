
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



  //HEART COUNTER ----------------------------------------------------------------------------------------------------------------//



  // Variables

const likeBtn = document.querySelectorAll('.heart');
const numberOfLikesElement = document.querySelector('.number-of-likes');

console.log(likeBtn);

// let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
let isLiked = false;

// Functions

const likeClick = (likeBtn) => {
  if (!isLiked) {
    likeBtn.classList.add('isLiked');
  
    let numberOfLikes = Number.parseInt(likeBtn.nextElementSibling.textContent);
     numberOfLikes++;
    console.log(numberOfLikes);
    isLiked = !isLiked;
    likeBtn.nextElementSibling.textContent = numberOfLikes;
  }else {
        likeBtn.classList.remove('isLiked');
        let numberOfLikes = Number.parseInt(likeBtn.nextElementSibling.textContent);
        numberOfLikes--;
        isLiked = !isLiked;
        likeBtn.nextElementSibling.textContent = numberOfLikes;
      }
    };

  likeBtn.forEach((element) => 
  {
    
    element.addEventListener('click', function(){
      likeClick(element);
console.log('click');
    }
    );
  }
  );





//     isLiked = !isLiked;
//   } else {
//     likeBtn.classList.remove('isLiked');
//     numberOfLikes--;
//     numberOfLikesElement.textContent = numberOfLikes;
//     isLiked = !isLiked;
//   }
// };


// Event Listeners

// likeBtn.addEventListener('click', likeClick);





//HEART COLOR CHANGE---------------------------------------------------------------------------------------------------------------//





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
  } //END back totop


  // VIEW ALL MENU BUTTON---------------------------------------------------------------------------------------//

  const buttonViewAll = document.getElementById("view-all");

  buttonViewAll.addEventListener("click", () => {
    let hiddenMenu = document.getElementById("hidden-menu");
    // hiddenMenu.style.display = "grid";
    // element.classList.add("my-class");
    hiddenMenu.classList.remove("hidden");
  });



// HAMBURGER BUTTON----------------------------------------------------------------------------------------------//

const hamburgerBtn = document.getElementById("hamburger-button");

hamburgerBtn.addEventListener("click", () => {
  document.getElementById("hamburger-button").classList.toggle("change");
  document.getElementById("nav-links").classList.toggle("change");
} );