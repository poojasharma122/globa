// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close-btn").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End


// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End


// Slider JS Start
$('.single_item_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  prevArrow: `<button class="slick-prev custom-arrow custom-prev" aria-label="Previous slide">
				 <svg  viewBox="0 0 32 72" xmlns="http://www.w3.org/2000/svg"><path stroke="#fff" stroke-width="1.5" d="M31 71L1 35 31 1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
				</button>`,
  nextArrow: `<button class="slick-next custom-arrow custom-next" aria-label="Next slide">
				 <svg  viewBox="0 0 32 72" xmlns="http://www.w3.org/2000/svg"><path stroke="#fff" stroke-width="1.5" d="M1 71l30-36L1 1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
				</button>`
});
// Slider JS End

// Navbar dropdown JS Start
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelectorAll(".dropdown-toggle");

  dropdown.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const li = this.parentElement;


      document.querySelectorAll(".navigation-bar li.submenu-open").forEach(item => {
        if (item !== li) {
          item.classList.remove("submenu-open");
        }
      });

      li.classList.toggle("submenu-open");
    });
  });
});
// Navbar dropdown JS End


// Select Overflow JS Start
document.addEventListener('DOMContentLoaded', function () {
  const select = document.getElementById('pageSelect');
  const originalOptions = Array.from(select.options).map(opt => ({
    text: opt.text,
    value: opt.value
  }));

  function handleResize() {
    if (window.innerWidth < 480) {

      select.innerHTML = '';
      originalOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.text = opt.text.length > 40 ? opt.text.substring(0, 30) + '...' : opt.text;
        option.title = opt.text; // Full text as tooltip
        select.appendChild(option);
      });
    } else {
      select.innerHTML = '';
      originalOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.text = opt.text;
        select.appendChild(option);
      });
    }
  }

  handleResize();

  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleResize, 100);
  });
});
// Select Overflow JS End