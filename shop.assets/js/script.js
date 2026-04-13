const items = document.querySelectorAll('.product');

function filterCategory(name) {
    items.forEach(item => {
        if (item.dataset.name.includes(name)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}




// all catagories greeen dots
const categories = document.querySelectorAll(".category-list li");

categories.forEach(item => {
    item.addEventListener("click", () => {

        // remove active from all
        document.querySelectorAll(".circle").forEach(c => {
            c.classList.remove("active");
        });

        // add active to clicked
        item.querySelector(".circle").classList.add("active");

    });
});









/* -------------------------------------------------------------------------- */
/*                              newsletter popup                              */



  const popup = document.getElementById("newsletterPopup");
  const closeBtn = document.getElementById("closePopup");
  const hideCheck = document.getElementById("hidePopup");

  // Show popup on page load (after 2 seconds)
  window.addEventListener("load", function () {
    if (!localStorage.getItem("hideNewsletter")) {
      setTimeout(() => {
        popup.style.display = "flex";
      }, 2000);
    }
  });

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

  // Open popup when newsletter Subscribe button clicked
  const newsletterBtn = document.querySelector("#news_latter button");

  newsletterBtn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.style.display = "flex";
  });

/* -------------------------------------------------------------------------- */





document.addEventListener("DOMContentLoaded", function () {

    const filterBtn = document.getElementById("openFilter");
    const filterCanvasEl = document.getElementById("mobileFilter");

    // create bootstrap instance
    const filterCanvas = new bootstrap.Offcanvas(filterCanvasEl);

    // OPEN
    filterBtn.addEventListener("click", function () {
        filterCanvas.show();
    });

});
