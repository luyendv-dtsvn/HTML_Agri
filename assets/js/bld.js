const menus = document.querySelectorAll(".content-top-menu");

    let previousImages = [];

    menus.forEach((menu, index) => {
      menu.addEventListener("click", function () {
        menus.forEach((m) => m.classList.remove("underline", "active"));
        this.classList.add("underline", "active");

        const img = this.querySelector("img");
        const currentSrc = img.src;

        menus.forEach((m, idx) => {
          if (idx !== index && previousImages[idx]) {
            const mImg = m.querySelector("img");
            mImg.src = previousImages[idx];
          }
        });
      });
    });
    document.addEventListener("DOMContentLoaded", function () {
      const menus = document.querySelectorAll(".content-top-menu");
      const contents = document.querySelectorAll(".content-betwent");

      menus.forEach((menu) => {
        menu.addEventListener("click", function () {
          menus.forEach((m) => m.classList.remove("underline", "active"));
          this.classList.add("underline", "active");

          const tabId = this.getAttribute("data-tab");

          contents.forEach((content) => {
            content.classList.remove("active");
          });

          const activeContent = document.querySelector(
            `.content-betwent[data-content="${tabId}"]`
          );
          if (activeContent) {
            activeContent.classList.add("active");
          }
        });
      });
    });

   