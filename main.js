const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
    freeMode:true,
    breakpoints: {
      320: {
          slidesPerView: 1,
          
      },
      768: {
          slidesPerView: 3,
         
      } },
  },


});


window.addEventListener("resize", function() {
  if (window.innerWidth > 768) {
  swiper.destroy();
  }
  });




  document.querySelector(".slideHide-Show").addEventListener('click', function() {
    let show = document.getElementById('slideShow');
    let hideSlide = document.getElementById('slideHide');

    if (show.classList.contains("swiper-hide")) {
      show.classList.remove("swiper-hide");
     
      hideSlide.classList.add("swiper-hide");
      
    } else {
      show.classList.add("swiper-hide");
      hideSlide.classList.remove("swiper-hide");
    }
  });


  

  document.querySelector(".slideHide-Show").addEventListener('click', function() {
    let itemSwiper = document.getElementsByClassName('swiper-slide');

    // Перебираем все элементы в коллекции
    for (let i = 0; i < itemSwiper.length; i++) {
        if (itemSwiper[i].classList.contains("vis-slider")) {
            // Если элемент имеет класс "swiper-slide", удаляем его
            itemSwiper[i].classList.remove("vis-slider");
        } else {
            // Если элемент не имеет класс "swiper-slide", добавляем его
            itemSwiper[i].classList.add("vis-slider");
        }
    }
});

