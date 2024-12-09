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

  // Close mobile navigation when user click outside
  document.addEventListener("DOMContentLoaded", function () {
    var navigation = document.querySelector(".navbar");
    var navigationCollapse = document.getElementById("navigation");
    var navigationButton = document.querySelector(".navbar-toggler");
    var isMobileNavigation = window.matchMedia("(max-width: 1199px)");
    const skipToContent = navigation.querySelector(".js-skip-to-content");

    
    document.addEventListener('keydown', (event) => {
      if(event.key === "Escape") {
        closeNavOnESC(event)
      }
    })



    document.addEventListener("click", function (event) {
      if (
        !navigation.contains(event.target) &&
        isMobileNavigation.matches &&
        navigationCollapse.classList.contains("show")
      ) {
        toggleDropdownNav();
      }

      /** close mobile nav when `skip-to-content` is clicked  */
      if (
        isMobileNavigation.matches &&
        navigationCollapse.classList.contains("show") &&
        event.target === skipToContent
      ) {
        toggleDropdownNav();
      }
    });

    // adds anchor for Scroll-to-content link
    document.querySelector("main").id = "main";

    formHandler();
    scrollToSectionHandler();
  });

  const toggleDropdownNav = () => {
    const navigationButton = document.querySelector(".navbar-toggler");
    navigationButton.click();
  }

  const closeNavOnESC = (event) => {
    const navbarDropdown = document.querySelector('.navbar-collapse');
 
    if (navbarDropdown.classList.contains('show')) {
      toggleDropdownNav();
    }
  }


  // Navigation handler
  const scrollToSectionHandler = () => {
    const navigationEl = document.querySelector(".js-navigation");
    const navBarEl = navigationEl.querySelector(".js-navbar");
    const mainEl = document.querySelector("#main");

    const caseStudiesPage = document.querySelector(".case-studies");
    const headings = caseStudiesPage?.querySelectorAll("h2, h3, h4");

    navigationEl.style.minHeight = navBarEl.offsetHeight + "px";
    // prevents navBar from overlapping the content
    mainEl.style.paddingTop = navBarEl.offsetHeight + "px";
    mainEl.style.marginTop = "-" + navBarEl.offsetHeight + "px";

    // spacing for Case Studies page
    headings &&
      headings.forEach((heading) => {
        heading.style.marginTop = "-" + navBarEl.offsetHeight + "px";
        heading.style.paddingTop = navBarEl.offsetHeight + 30 + "px";
      });
  };

  /*==============================
    Form
  *==============================*/
  function formHandler() {
    const formValidation = (form) => {
      const inputs = form.querySelectorAll(".js--form-control");

      handleResumeFileValidation(form);

      inputs.forEach((input) => {
        /**
         * Validate fields on change / autocomplete
         */
        ["input", "change"].forEach((event) => {
          input.addEventListener(event, () => {
            if (!form.classList.contains("was-validated")) return;

            handleTextareaValidation(input);
            handleFieldValidation(input, true);

            if (input.checkValidity() === false) {
              input.ariaInvalid = true;
            } else {
              input.removeAttribute("aria-invalid");
            }
          });
        });
      });

      /**
       * Form Submit Validation
       */
      form.addEventListener(
        "submit",
        (event) => {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");

          inputs.forEach((input) => {
            /**
             * Shows error messages on submit
             */
            handleTextareaValidation(input);
            handleFieldValidation(input);
 
            // Updates aria-invalid
            if (input.checkValidity() === false) {
              input.ariaInvalid = true;
            } else {
              input.removeAttribute("aria-invalid");
            }
          });
          handleInvalidField(form);
        },
        false
      );
    };

    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      formValidation(form);
    });
  }


  function handleFieldValidation(inputField, isAlreadySubmitted) {
    const formGroupEl = inputField.closest('.js--form-group');
    const feedbackContainer = formGroupEl.querySelector(".feedback-container");
    feedbackContainer.removeAttribute('role', 'alert')
    feedbackContainer.innerHTML = "";
    
    if (isAlreadySubmitted) {
      /**
       * Only announce error messages on input 
       */
      feedbackContainer.setAttribute("role","alert");
    }

    const feedbackMsgContainer = formGroupEl.querySelector(".feedback-msg-container");
    let feedbackMessage = null;


    if (!inputField.checkValidity()) {
      const validity = inputField.validity;
      if (validity.valueMissing) {
        feedbackMessage = feedbackMsgContainer?.querySelector(".valueMissing");
      } else if (validity.patternMismatch) {
        feedbackMessage = feedbackMsgContainer?.querySelector(".patternMismatch");
      } else if (validity.customError) {
        const errMessageSelector = inputField.validationMessage;
        feedbackMessage = feedbackMsgContainer?.querySelector(
          "." + errMessageSelector
        );
      }
    } else {
      // Mark as valid
      feedbackMessage = feedbackMsgContainer?.querySelector(".valid-feedback");
    }

    feedbackMessage?.classList.add("d-block");
    feedbackContainer.innerHTML = feedbackMessage?.outerHTML;
  }

  /**
   * TextArea validation
   * @param {textarea} inputFieldEl
   */
  function handleTextareaValidation(inputFieldEl) {
    if (inputFieldEl.nodeName === "TEXTAREA") {
      const textAreaPattern = [
        /[<>]/,
        /(\balert\b|\bscript\b)/i,
        /(\bSELECT\b|\bDROP\b|\bINSERT\b|\bDELETE\b|--|;)/i,
      ];
      const hasInvalidPattern = textAreaPattern.some((pattern) =>
        pattern.test(inputFieldEl.value)
      );

      if (hasInvalidPattern) {
        inputFieldEl.setCustomValidity("js-invalid-pattern");
      } else {
        inputFieldEl.setCustomValidity("");
      }
    }
  }

  /**
   * Resume validation (input[type=file])
   * @param {textarea} inputFieldEl
   */
  function handleResumeFileValidation(form) {
    const inputFileEl = form.querySelector('input[type="file"]');

    if (!inputFileEl) return;
    inputFileEl.ariaInvalid = true;

    const isValidFile = (fileName) => {
      if (!fileName) return;
      const supportedFileTypes = ["doc", "docx", "pdf", "msword"];
      const uploadedFileType = fileName.split(".").pop().toLowerCase();

      return supportedFileTypes.includes(uploadedFileType);
    };

    inputFileEl.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (!file) return;

      if (!isValidFile(file.name)) {
        inputFileEl.setCustomValidity("js-invalid-file-type");
      } else if (file.size > 2097152) {
        inputFileEl.setCustomValidity("js-too-large-file");
      } else {
        // Remove custom validation
        inputFileEl.setCustomValidity("");
        inputFileEl.removeAttribute("aria-invalid");
      }

      handleFieldValidation(inputFileEl);
    });
  }

  /**
   * A11y: sets focus to the first invalid field when form is submitted
   * so that screen readers announce it in correct order 
   */
  function handleInvalidField(form) {
    const inputs = form.querySelectorAll(".js--form-control");

    const firstInvalidField = [...inputs].find((input) => { 
      return input.checkValidity() === false;
    });
    firstInvalidField?.focus();
  }
})();
