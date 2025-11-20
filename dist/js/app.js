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

   let options = { threshold: [0.2] };
   let observer = new IntersectionObserver(onEntry, options);
   let elements = document.querySelectorAll('.element-animation');

   for (let elm of elements) {
      observer.observe(elm);
   }
});




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


})();

/******/ })()
;