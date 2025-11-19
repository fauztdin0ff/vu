/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике на ссылку внутри меню
      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      // Закрытие меню при клике на кнопку закрытия
      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

//-------------------------------Прелоадер и плавное появление блоков---------------------------------
document.addEventListener("DOMContentLoaded", () => {
   function onEntry(entry) {
      entry.forEach(change => {
         if (change.isIntersecting) {
            change.target.classList.add('element-show');
         }
      });
   }

   let options = { threshold: [0.4] };
   let observer = new IntersectionObserver(onEntry, options);
   let elements = document.querySelectorAll('.element-animation');

   for (let elm of elements) {
      observer.observe(elm);
   }
});



/*------------------------------
test
---------------------------*/
function logViewportSize() {
   const width = window.innerWidth;
   const height = window.innerHeight;
   console.log(`Viewport size: ${width}x${height}`);
}

// Вывести размеры сразу
logViewportSize();


/*------------------------------
Before after slider
---------------------------*/
const worksSlider = document.querySelector(".works__slider");

if (worksSlider) {
   const worksSwiper = new Swiper(worksSlider, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      freeMode: false,
      speed: 1000,
      navigation: {
         nextEl: '.works__slide-next',
         prevEl: '.works__slide-prev',
      },

      effect: "creative",
      creativeEffect: {
         prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
         },
         next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
         },
      },

   });
}


const gsBgImgSelector2 = ".works__slide img";
const sliderImgs2 = document.querySelectorAll(gsBgImgSelector2);

if (sliderImgs2.length > 0) {
   const dynamicEl = [...sliderImgs2].map((sliderImg) => {
      return {
         src: sliderImg.src,
         thumb: sliderImg.src,
         subHtml: ''
      };
   });

   const dynamicGallery = document.querySelector(".dynamic-gallery-button");

   const popup = lightGallery(dynamicGallery, {
      dynamic: true,
      download: false,
      dynamicEl,
      mobileSettings: {
         showCloseIcon: true,
      },
   });

   dynamicGallery.addEventListener("click", () => {
      popup.openGallery(0);
   });

   [...document.querySelectorAll(".works__slide img")].map((slide, idx) => {
      slide.addEventListener("click", () => {
         popup.openGallery(idx);
      });
   });
}


/*------------------------------
      Gallery
      ---------------------------*/
const gallerySlider = document.querySelector(".gallery__slider");

if (gallerySlider) {
   const gallerySwiper = new Swiper(gallerySlider, {
      slidesPerView: 'auto',
      loop: true,
      freeMode: true,
      speed: 1000,
      lazy: {
         loadPrevNext: true,
         loadOnTransitionStart: true
      },
      navigation: {
         nextEl: '.gallery__slider-next',
         prevEl: '.gallery__slider-prev',
      },
      breakpoints: {
         320: {
            spaceBetween: 10,
         },
         768: {
            spaceBetween: 30,
         }
      }
   });
}


const gsBgImgSelector3 = ".gallery__slide img";
const sliderImgs3 = document.querySelectorAll(gsBgImgSelector3);

if (sliderImgs3.length > 0) {
   const dynamicEl = [...sliderImgs3].map((sliderImg) => {
      const realSrc = sliderImg.src;

      return {
         src: realSrc,
         thumb: realSrc,
         subHtml: ''
      };
   });


   const dynamicGallery = document.querySelector(".dynamic-gallery-button2");

   const popup = lightGallery(dynamicGallery, {
      dynamic: true,
      download: false,
      dynamicEl,
      mobileSettings: {
         showCloseIcon: true,
      },
   });

   dynamicGallery.addEventListener("click", () => {
      popup.openGallery(0);
   });

   [...document.querySelectorAll(".gallery__slide img")].map((slide, idx) => {
      slide.addEventListener("click", () => {
         popup.openGallery(idx);
      });
   });
}


/*------------------------------
Infocards numbers 
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const counters = document.querySelectorAll(".infocards__item-num span");

   if (counters.length === 0) return;

   const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
   };

   const animateCount = (el, start, end, duration) => {
      let startTime = null;
      const step = (timestamp) => {
         if (!startTime) startTime = timestamp;
         let progress = Math.min((timestamp - startTime) / duration, 1);
         el.innerText = (progress * (end - start) + start).toFixed(end % 1 === 0 ? 0 : 1);
         if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
   };

   const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            let span = entry.target;
            let endValue = parseFloat(span.innerText.replace("+", "").replace("%", ""));
            if (!isNaN(endValue)) {
               animateCount(span, 0, endValue, 1500);
            }
            obs.unobserve(span);
         }
      });
   }, options);

   counters.forEach((span) => observer.observe(span));
});


/*------------------------------
Team slider
---------------------------*/
/*------------------------------
Before after slider
---------------------------*/
const teamSlider = document.querySelector(".team__slider");

if (teamSlider) {
   const teamSwiper = new Swiper(teamSlider, {
      loop: false,
      speed: 1000,
      navigation: {
         nextEl: '.team__slider-next',
         prevEl: '.team__slider-prev',
      },
      breakpoints: {
         320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
         },
         540: {
            slidesPerView: 1.8,
            spaceBetween: 10,
         },
         768: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 20,
         },
         1000: {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 30,
         }
      }
   });
}

/*------------------------------
Blog slider
---------------------------*/
const blogSlider = document.querySelector(".blog__slider");

if (blogSlider) {
   const blogSwiper = new Swiper(blogSlider, {
      loop: true,
      freeMode: false,
      speed: 600,
      navigation: {
         nextEl: '.blog__slide-next',
         prevEl: '.blog__slide-prev',
      },
      breakpoints: {
         320: {
            slidesPerView: 2,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 3,
            spaceBetween: 10,
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1000: {
            slidesPerView: 4,
            spaceBetween: 20,
         },
         1300: {
            slidesPerView: 5,
            spaceBetween: 20,
         },
         1800: {
            slidesPerView: 6,
            spaceBetween: 30,
         }
      }
   });
}



/*------------------------------
Reviews full text
---------------------------*/
const reviewsSlider = document.querySelector(".reviews__slider");

if (reviewsSlider) {
   const reviewsSwiper = new Swiper(reviewsSlider, {
      loop: true,
      freeMode: false,
      speed: 600,
      navigation: {
         nextEl: '.reviews__slide-next',
         prevEl: '.reviews__slide-prev',
      },
      breakpoints: {
         320: {
            slidesPerView: 1.4,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 2,
            spaceBetween: 10,
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1300: {
            slidesPerView: 4,
            spaceBetween: 20,
         }
      }
   });
}

/*------------------------------
Author bg colors
---------------------------*/
const colors = [
   "#B37DB3", "#7DB3A0", "#F29D61", "#E77FA5", "#A3B37D",
   "#7D92B3", "#B39A7D", "#D67D7D", "#7DB3B0", "#B37D92"
];

document.addEventListener("DOMContentLoaded", function () {
   const authorImages = document.querySelectorAll(".review__author-image");

   if (authorImages.length === 0) return;

   authorImages.forEach((el, index) => {
      el.style.backgroundColor = colors[index % colors.length];
   });
});


/*------------------------------
Toggle review text
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   document.querySelectorAll(".review__body").forEach(review => {
      const text = review.querySelector(".review__text");
      const toggle = review.querySelector(".review__text-toggle");
      const maxHeight = 160;

      if (!text || !toggle) return;

      if (text.scrollHeight > maxHeight) {
         text.style.maxHeight = `${maxHeight}px`;
         text.style.overflow = "hidden";
         toggle.style.display = "inline";
      } else {
         toggle.style.display = "none";
      }

      toggle.addEventListener("click", function () {
         text.style.maxHeight = "none";
         toggle.style.display = "none";
      });
   });
});


/*------------------------------
Video
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   document.querySelectorAll(".recomended__video").forEach(videoContainer => {
      const video = videoContainer.querySelector("video");
      const cover = videoContainer.querySelector(".recomended__video-cover");
      const playButton = videoContainer.querySelector(".recomended__video-play");

      if (!video || !cover || !playButton) return;

      videoContainer.addEventListener("click", () => {
         cover.style.display = "none";
         playButton.style.display = "none";
         video.play();
      });
   });
});


/*------------------------------
faq
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const faqQuestions = document.querySelectorAll(".faq__question");

   faqQuestions.forEach((question) => {
      question.addEventListener("click", () => {
         const faqItem = question.parentElement;
         const faqAnswer = faqItem.querySelector(".faq__answer");
         document.querySelectorAll(".faq__item").forEach((item) => {
            if (item !== faqItem) {
               item.classList.remove("active");
               const answer = item.querySelector(".faq__answer");
               answer.style.maxHeight = null;
            }
         });

         if (faqItem.classList.contains("active")) {
            faqItem.classList.remove("active");
            faqAnswer.style.maxHeight = null;
         } else {
            faqItem.classList.add("active");
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 30 + "px";
         }
      });
   });
});


/*------------------------------
Bonuses full text
---------------------------*/
const bonusesSlider = document.querySelector(".bonuses__slider");

if (bonusesSlider) {
   const bonusesSwiper = new Swiper(bonusesSlider, {
      loop: false,
      freeMode: false,
      speed: 600,
      navigation: {
         nextEl: '.bonuses__slide-next',
         prevEl: '.bonuses__slide-prev',
      },
      breakpoints: {
         320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
         },
         480: {
            slidesPerView: 2,
            spaceBetween: 10,
         },
         768: {
            slidesPerView: 2,
            spaceBetween: 10,
         },
         1000: {
            slidesPerView: 3,
            spaceBetween: 30,
         }
      }
   });
}


/*------------------------------
Price tabs
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const tabs = document.querySelectorAll(".price__tab");
   const lists = document.querySelectorAll(".price__values-list");

   if (tabs.length === 0 || lists.length === 0) return;

   tabs[0].classList.add("active");
   lists[0].style.display = "block";

   tabs.forEach(tab => {
      tab.addEventListener("click", () => {
         const tabNumber = tab.getAttribute("data-tab");

         tabs.forEach(t => t.classList.remove("active"));

         lists.forEach(list => list.style.display = "none");

         tab.classList.add("active");

         const activeList = document.querySelector(`.price__values-list[data-price="${tabNumber}"]`);
         if (activeList) {
            activeList.style.display = "block";

            if (window.innerWidth < 1000) {
               const offset = 50;
               const targetPosition = activeList.getBoundingClientRect().top + window.scrollY - offset;

               window.scrollTo({
                  top: targetPosition,
                  behavior: "smooth"
               });
            }
         }
      });
   });
});

/*------------------------------
Open form popup
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const formPopup = document.querySelector(".form-popup");
   const formPopupBody = document.querySelector(".form-popup__body");
   const formOpenButtons = document.querySelectorAll(".open-form-popup");
   const body = document.body;

   if (!formPopup || !formPopupBody || formOpenButtons.length === 0) {
      return;
   }

   function openPopup() {
      formPopup.classList.add("opened");
      body.style.overflow = "hidden";
   }

   function closePopup() {
      formPopup.classList.remove("opened");
      body.style.overflow = "";
   }

   formOpenButtons.forEach(button => {
      button.addEventListener("click", openPopup);
   });

   formPopup.addEventListener("click", (e) => {
      if (!formPopupBody.contains(e.target)) {
         closePopup();
      }
   });
});


/*------------------------------
Open policy
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const popup = document.querySelector(".policy-popup");
   const popupBody = document.querySelector(".policy-popup__body");
   const openButtons = document.querySelectorAll(".open-policy");
   const closeButton = document.querySelector(".policy-popup__close");
   const body = document.body;

   if (!popup || !popupBody || openButtons.length === 0 || !closeButton) {
      return;
   }

   function openPopup() {
      popup.classList.add("opened");
      body.style.overflow = "hidden";
   }

   function closePopup() {
      popup.classList.remove("opened");
      body.style.overflow = "";
   }

   openButtons.forEach(button => {
      button.addEventListener("click", openPopup);
   });

   closeButton.addEventListener("click", closePopup);

   popup.addEventListener("click", (e) => {
      if (!popupBody.contains(e.target)) {
         closePopup();
      }
   });
});


/*------------------------------
THANKS
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const form = document.querySelector(".application-form");
   const formPopupBody = document.querySelector(".form-popup__body");

   if (!form) {
      return;
   }

   if (!formPopupBody) {
      return;
   }

   form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!formPopupBody.classList) {
         return;
      }

      formPopupBody.classList.add("loading");

      setTimeout(() => {
         formPopupBody.classList.remove("loading");
         formPopupBody.classList.add("loaded");

         setTimeout(() => {
            formPopupBody.classList.remove("loaded");
            if (typeof form.submit === "function") {
               form.submit();
            }
         }, 2000);
      }, 1000);
   });
});


/*------------------------------
Маска номера
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const maskOptions = {
      mask: '+{7} (000) 000-00-00'
   };

   const elements = document.querySelectorAll('.tel-mask');
   elements.forEach(function (element) {
      const mask = IMask(element, maskOptions);

      function ensurePrefix() {
         if (!element.value.trim()) {
            element.value = "+7 ";
            mask.updateValue();
         }
         setTimeout(() => {
            element.setSelectionRange(element.value.length, element.value.length);
         }, 0);
      }

      element.addEventListener('focus', ensurePrefix);

      element.addEventListener('input', function () {
         if (!element.value.startsWith("+7")) {
            element.value = "+7 ";
            mask.updateValue();
         }
      });

      element.addEventListener('mousedown', function (event) {
         setTimeout(() => {
            if (element.selectionStart < 4) {
               element.setSelectionRange(element.value.length, element.value.length);
            }
         }, 0);
      });
   });
});


})();

/******/ })()
;