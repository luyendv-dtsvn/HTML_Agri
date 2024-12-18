document.addEventListener("DOMContentLoaded", function () {
  const menus = document.querySelectorAll(".content-top-menu");
  const contents = document.querySelectorAll(".content-betwent");

  // Kiểm tra nếu có menu và nội dung
  if (menus.length > 0 && contents.length > 0) {
    // Đặt mặc định gạch dưới và kích hoạt menu đầu tiên
    menus[0].classList.add("underline", "active");

    // Hiển thị nội dung của tab đầu tiên
    const firstTabId = menus[0].getAttribute("data-tab");
    const firstContent = document.querySelector(`.content-betwent[data-content="${firstTabId}"]`);
    if (firstContent) {
      firstContent.classList.add("active");
    }
  }

  // Lặp qua các menu để thêm sự kiện click
  menus.forEach((menu) => {
    menu.addEventListener("click", function () {
      // Xóa lớp gạch dưới và active khỏi tất cả menu
      menus.forEach((m) => m.classList.remove("underline", "active"));
      // Thêm lớp gạch dưới và active vào menu được click
      this.classList.add("underline", "active");

      // Lấy giá trị data-tab của menu được click
      const tabId = this.getAttribute("data-tab");

      // Kiểm tra nếu tabId hợp lệ
      if (!tabId) return;

      // Xóa lớp active khỏi tất cả nội dung
      contents.forEach((content) => content.classList.remove("active"));

      // Hiển thị nội dung liên quan đến menu được click
      const activeContent = document.querySelector(`.content-betwent[data-content="${tabId}"]`);
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });
});

// -------------- Page Blog ---------------

if (window.location.pathname.endsWith("blog.html")) {
  window.addEventListener("resize", toggleMenuVisibility);
  window.addEventListener("load", toggleMenuVisibility);

  function toggleMenuVisibility() {
    const isMobile = window.innerWidth < 768;
    
    const desktopMenu = document.querySelector(".content-top");
    const mobileMenu = document.querySelector(".menu-top-mobile");

    if (isMobile) {
      desktopMenu.style.display = "none";
      mobileMenu.style.display = "block";
    } else {
      desktopMenu.style.display = "block";
      mobileMenu.style.display = "none";
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector("#tab-select-blog");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Mở dropdown khi click vào button
    dropdownBtn.addEventListener("click", function () {
      dropdownMenu.classList.toggle("show");
    });

    // Đóng dropdown nếu click bên ngoài dropdown
    window.addEventListener("click", function (e) {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("show");
      }
    });

    // Lấy tất cả các mục trong menu dropdown
    const menuItems = document.querySelectorAll(".tab-menu-blog");
    // Lấy tất cả các tab nội dung
    const contentTabs = document.querySelectorAll(".content-betwent");

    // Lặp qua từng menu item
    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Lấy data-tab của mục đã click
        const tabId = item.getAttribute("data-tab");
        // Lấy nội dung của mục được chọn
        const selectedText = item.textContent.trim();

        // Ẩn tất cả các tab trước khi hiển thị tab mới
        contentTabs.forEach((tab) => {
          tab.classList.remove("active");
        });

        // Hiển thị tab tương ứng
        const targetTab = document.querySelector(
          `.content-betwent[data-content="${tabId}"]`
        );
        if (targetTab) {
          targetTab.classList.add("active");
        }

        // Cập nhật tên menu trên button
        if (dropdownBtn) {
          dropdownBtn.querySelector("span").textContent = selectedText;
        }

        // Đóng dropdown menu sau khi chọn một mục
        if (dropdownMenu) {
          dropdownMenu.classList.remove("show");
        }
      });
    });
  });
}


// -------------------------- Detail Blog --------------------------------
// Kiểm tra kích thước màn hình và thêm sự kiện kéo chuột



