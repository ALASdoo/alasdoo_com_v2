// main script
(function () {
  ("use strict");

  // Detect prefers-reduced-motion config from the user
  const hasPrefersReducedMotion =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // aos
  AOS.init({
    disable: "mobile",
  });

  // gallery slider
  new Swiper(".gallery-slider", {
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    spaceBetween: 0,
    speed: 1500,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // video play button
  var videoPlay = document.querySelectorAll(".video-loader-btn");
  videoPlay.forEach(function (video) {
    video.addEventListener("click", function () {
      var thumbnail = this.parentNode.children;
      var thumbWidth = thumbnail[1].width;
      var video =
        '<div class="ratio ratio-16x9 mx-auto bg-dark rounded-2 overflow-hidden" style="max-width:' +
        thumbWidth +
        'px"><iframe src="' +
        this.getAttribute("data-src") +
        "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" +
        '" allowscriptaccess="always" allow="autoplay" allowfullscreen></iframe></div>';
      this.parentNode.innerHTML = video;
    });
  });

  // counterUp
  document.addEventListener("DOMContentLoaded", function () {
    // You can change this class to specify which elements are going to behave as counters.
    var elements = document.querySelectorAll(".counter");

    elements.forEach(function (item) {
      // Add new attributes to the elements with the '.counter' HTML class
      item.counterAlreadyFired = false;
      item.counterSpeed = item.getAttribute("data-counter-time") / 45;
      item.counterTarget = +item.innerText;
      item.counterCount = 0;
      item.counterStep = item.counterTarget / item.counterSpeed;

      item.updateCounter = function () {
        item.counterCount = item.counterCount + item.counterStep;
        item.innerText = Math.ceil(item.counterCount);

        if (item.counterCount < item.counterTarget) {
          setTimeout(item.updateCounter, item.counterSpeed);
        } else {
          item.innerText = item.counterTarget;
        }
      };
    });

    // Function to determine if an element is visible in the web page
    var isElementVisible = function isElementVisible(el) {
      var scroll = window.scrollY || window.pageYOffset;
      var boundsTop = el.getBoundingClientRect().top + scroll;
      var viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      };
      var bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
      };
      return (
        (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
      );
    };

    // Function that will get fired upon scrolling
    var handleScroll = function handleScroll() {
      elements.forEach(function (item, id) {
        if (true === item.counterAlreadyFired) return;
        if (!isElementVisible(item)) return;
        if (hasPrefersReducedMotion) return;
        item.updateCounter();
        item.counterAlreadyFired = true;
      });
    };

    // Fire the function on scroll
    window.addEventListener("scroll", handleScroll);
  });

  //slider
  new Swiper(".single-slider", {
    loop: true,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // brandCarousel init
  new Swiper(".brand-carousel", {
    spaceBetween: 0,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
    },
  });

  // testimonial-carousel init
  new Swiper(".testimonial-carousel", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 6000,
    },
    spaceBetween: 70,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Check the size of uploaded file (max 2MB ~ 2097152 bytes)
  // document.addEventListener("DOMContentLoaded", function () {
  //   var uploadField = document.getElementById("cv");

  //   uploadField.onchange = function() {
  //     if(this.files[0].size > 2097152) {
  //       alert("Max size of the file is 2MB");
  //       this.value = ""
  //     }
  //   }
  // })


  // Close mobile navigation when user click outside
  document.addEventListener("DOMContentLoaded", function () {
    var navigation = document.querySelector(".navbar");
    var navigationCollapse = document.getElementById("navigation");
    var navigationButton = document.querySelector(".navbar-toggler");
    var isMobileNavigation = window.matchMedia("(max-width: 1199px)");
    

    document.addEventListener("click", function(event) {
      if(!navigation.contains(event.target) && isMobileNavigation.matches && navigationCollapse.classList.contains("show")) {
        navigationButton.click();
      }
    })

    formHandler();

  })

  // adds anchor for Scroll-to-content link
  document.querySelector("main").id = 'main'; 
     

  /*==============================
    Contact Form
  *==============================*/
 function formHandler() {
   const formValidation = (form) => {
    form.addEventListener("submit",   (event) => {
      if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
    const inputs = form.querySelectorAll('.form-control')
    inputs.forEach((input) => {
 
      // aria-invalid
      if (input.checkValidity() === false) {
        input.ariaInvalid = true
      } else {
        input.removeAttribute('aria-invalid');
      }
    })
       
     }, false);
   };


  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    formValidation(form);
  });
}
  

 

})();
