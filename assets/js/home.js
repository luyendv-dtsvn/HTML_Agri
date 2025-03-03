document.addEventListener("DOMContentLoaded", function () {
  $(".slider-blog").owlCarousel({
    loop: true,
    nav: true, // Bật các nút điều hướng
    navText: [
      '<div class=" custom-prev"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.17089 4.31445L8.17311 5.31672L3.71325 9.77663H19V11.1941H3.71325L8.17311 15.6539L7.17089 16.6562L1 10.4853L7.17089 4.31445Z"fill="#383838" /></svg></div>', // Tùy chỉnh nút "Prev"
      ' <div class=" custom-next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"fill = "none" ><path d="M12.8291 4.31445L11.8269 5.31672L16.2868 9.77663H1V11.1941H16.2868L11.8269 15.6539L12.8291 16.6562L19 10.4853L12.8291 4.31445Z" fill="#383838" /></svg ></div > ', // Tùy chỉnh nút "Next"
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".owl-carousel-search").owlCarousel({
    autoWidth: true,
    nav: true,
    navText: [
      '<div class="btn-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"fill="none"><path d="M6 3.75L9.625 7.375L6 11" stroke="white" stroke-linecap="square" /></svg></div>',
      '<div class="btn-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"fill="none"><path d="M6 3.75L9.625 7.375L6 11" stroke="white" stroke-linecap="square" /></svg></div>' // Tùy chỉnh nút "Next"
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
      1500: {
        items: 7,
      },
    },
  });
  $(document).ready(function () {
    const initializeOwlCarousel = (selector, itemsResponsive) => {
      const element = $(selector);

      // Chỉ khởi tạo nếu element tồn tại
      if (element.length) {
        element.addClass("owl-carousel").owlCarousel({
          loop: true,
          // autoWidth: true,
          responsive: itemsResponsive,
          nav: false,
        });
      }
    };

    const destroyOwlCarousel = (selector) => {
      const element = $(selector);
      if (element.hasClass("owl-carousel")) {
        element.owlCarousel("destroy").removeClass("owl-carousel");
      }
    };
    const checkDevice = () => {
      const isMobile = window.matchMedia("(max-width: 992px)").matches;
      if (isMobile) {
        initializeOwlCarousel("#community_slider_new", {
          0: { items: 1 },
          375: { items: 1.2 },
          575: { items: 1.5 },
          768: { items: 2 },
          1024: { items: 3 },
        });
      } else {
        destroyOwlCarousel("#community_slider_new");
      }
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    gsap.to(".explore-btn", {
      y: 10,       // Di chuyển xuống 10px
      opacity: 0,  // Mờ dần
      duration: 1, // Thời gian 1 giây
      repeat: -1,  // Lặp vô hạn
      yoyo: true,  // Quay lại trạng thái ban đầu
    });
  });



  $(".explore-btn").click(function () {
    $("html, body").animate({
      scrollTop: $("#div-first").offset().top
    }, 1000); // 800ms để scroll
  });
  // $(".slider-banner").owlCarousel({
  //   items: 1,               // Show one slide at a time
  //   loop: true,             // Infinite loop
  //   // autoplay: true,         // Auto-slide
  //   // autoplayTimeout: 6000,  // 3 seconds per slide
  //   // animateOut: 'fadeOut',  // Fade-out effect
  //   // animateIn: 'fadeIn',    // Fade-in effect
  //   dots: false,            // No dots for navigation
  //   nav: false              // No next/prev buttons
  // });
  $(document).ready(function () {
    $(".slider-banner").owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: false,
      smartSpeed: 1500,
    });
  });
});