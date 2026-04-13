/* -------------------------------------------------------------------------- */
/*                              vegetables slider                             */
var swiper = new Swiper(".heroSwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                          shopping bag cart sidebar                         */

const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const cartToggle = document.getElementById("cartToggle");
const closeCart = document.getElementById("closeCart");

// open
cartToggle.addEventListener("click", function () {
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("show");
});

// close button
closeCart.addEventListener("click", function () {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("show");
});

// close overlay
cartOverlay.addEventListener("click", function () {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("show");
});

// remove item
document.querySelectorAll(".remove_btn").forEach(btn => {
    btn.addEventListener("click", function(){
        this.closest(".cart_item").remove();
    });
});





/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                free shipping                               */

const boxes = document.querySelectorAll("#free .box");

boxes.forEach(box => {
  box.addEventListener("mouseenter", () => {
    box.style.transform = "translateY(-5px)";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "translateY(0)";
  });
});


/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                top catagory                                */
var categorySwiper = new Swiper(".myCategorySlider", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".arrow.right",
        prevEl: ".arrow.left",
    },

    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        }
    }
});
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/*                              sale of the month                             */



const targetDate = new Date().getTime() + (2 * 24 * 60 * 60 * 1000); // 2 days

const timer = setInterval(function () {

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(timer);
    }

}, 1000);
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                             Client Testimonial                             */


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                              newsletter popup                              */
 document.addEventListener("DOMContentLoaded", function () {

  const popup = document.getElementById("newsletterPopup");
  const closeBtn = document.getElementById("closePopup");
  const hideCheck = document.getElementById("hidePopup");
  const form = document.getElementById("popupForm");
  const newsletterBtn = document.querySelector("#news_latter button");

  // Stop if popup not found (safe for all pages)
  if (!popup || !closeBtn || !hideCheck) return;

  // Show popup after 2s (if not disabled)
  if (!localStorage.getItem("hideNewsletter")) {
    setTimeout(() => {
      popup.style.display = "flex";
    }, 2000);
  }

  // Close button
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";

    if (hideCheck.checked) {
      localStorage.setItem("hideNewsletter", "true");
    }
  });

  // Close when clicking outside
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });

  // Form submit
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      popup.style.display = "none";
    });
  }

  // Open popup from newsletter section button (safe)
  if (newsletterBtn) {
    newsletterBtn.addEventListener("click", function (e) {
      e.preventDefault();
      popup.style.display = "flex";
    });
  }

});
/* -------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------- */
  /*                          details.html  page start                          */



document.addEventListener('DOMContentLoaded', function () {

  /* =========================
     1. INIT SPLIDE (VERTICAL + LOOP)
  ==========================*/
  const splide = new Splide('#thumb-slider', {
    direction: 'ttb',
    height: '260px',
    perPage: 3,
    arrows: false,
    pagination: false,
    drag: true,
    wheel: false,
    type: 'loop' // 🔥 VERY IMPORTANT
  });

  splide.mount();


  /* =========================
     2. BUTTON CONTROL (FIXED)
  ==========================*/
  let interval = null;

  function startScroll(direction) {
    if (interval) return; // prevent multiple intervals

    interval = setInterval(() => {
      let current = splide.index;

      if (direction === 'up') {
        splide.go(current - 1);
      } else {
        splide.go(current + 1);
      }
    }, 180); // 🔥 smooth speed
  }

  function stopScroll() {
    clearInterval(interval);
    interval = null;
  }

  // ✅ GET BUTTONS SAFELY
  const upBtn = document.querySelector('.arrow.up');
  const downBtn = document.querySelector('.arrow.down');

  if (!upBtn || !downBtn) {
    console.error("❌ Arrow buttons not found! Check your HTML classes.");
    return;
  }

  // ✅ CLICK (single move)
  upBtn.addEventListener('click', () => splide.go(splide.index - 1));
  downBtn.addEventListener('click', () => splide.go(splide.index + 1));

  // ✅ HOLD (continuous)
  upBtn.addEventListener('mousedown', () => startScroll('up'));
  downBtn.addEventListener('mousedown', () => startScroll('down'));

  document.addEventListener('mouseup', stopScroll);

  // 📱 TOUCH SUPPORT
  upBtn.addEventListener('touchstart', () => startScroll('up'));
  downBtn.addEventListener('touchstart', () => startScroll('down'));

  document.addEventListener('touchend', stopScroll);


  /* =========================
     3. CHANGE MAIN IMAGE
  ==========================*/
  const thumbs = document.querySelectorAll('#thumb-slider img');
  const mainImg = $('#mainImg');

  thumbs.forEach(img => {
    img.addEventListener('click', function () {
      const src = this.getAttribute('src');

      mainImg
        .attr('src', src)
        .trigger('zoom.destroy')
        .imagezoomsl({
          zoomrange: [3,3],
          magnifiersize: [150,150]
        });

      // Active border
      thumbs.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });


  /* =========================
     4. INIT ZOOM
  ==========================*/
  $("#mainImg").imagezoomsl({
    zoomrange: [3,3],
    magnifiersize: [150,150]
  });

});











  /* -------------------------------------------------------------------------- */

// accpunt sidebar


  const accountSidebar = document.getElementById("accountSidebar");
const accountToggle = document.getElementById("accountToggle");
const closeAccount = document.getElementById("closeAccount");

// OPEN
accountToggle.addEventListener("click", () => {
    accountSidebar.classList.add("active");
});

// CLOSE
closeAccount.addEventListener("click", () => {
    accountSidebar.classList.remove("active");
});

// CLOSE when clicking outside (optional)
document.addEventListener("click", (e) => {
    if (!accountSidebar.contains(e.target) && !accountToggle.contains(e.target)) {
        accountSidebar.classList.remove("active");
    }
});
