//Initialize Swiper 

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    pagination: {
      //el: '.swiper-pagination',
      clickable: true,
    },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  });


  
  //Animated counter
//   const counters = document.querySelectorAll('.counter');
// const speed = 200;

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = +counter.getAttribute('data-target');
//         // '+' sign makes typeOf to be a number not a string
//         const count = +counter.innerText;

//         const inc = target / speed; 

//         if(count < target){
//             counter.innerText = Math.ceil(count + inc);
//             //Math.ceil() rounds it up and avoids decimal points
//             setTimeout(updateCount, 1);
//         }else{
//             count.innerText = target;
//         }
//     }

//     updateCount();
// })


//Animated Counter on-scroll
var a = 0;
$(window).scroll(function() {

  var oTop = $('.counter-box').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
