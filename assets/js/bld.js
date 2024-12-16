document.addEventListener("DOMContentLoaded", function () {
  const menus = document.querySelectorAll(".content-top-menu");
  const contents = document.querySelectorAll(".content-betwent");

  // Đặt mặc định gạch dưới và kích hoạt menu đầu tiên
  if (menus.length > 0) {
    menus[0].classList.add("underline", "active");
  }

  // Hiển thị nội dung của tab đầu tiên
  if (contents.length > 0) {
    contents[0].classList.add("active");
  }

  menus.forEach((menu) => {
    menu.addEventListener("click", function () {
      // Xóa lớp gạch dưới và active khỏi tất cả menu
      menus.forEach((m) => m.classList.remove("underline", "active"));
      // Thêm lớp gạch dưới và active vào menu được click
      this.classList.add("underline", "active");

      const tabId = this.getAttribute("data-tab");

      // Xóa lớp active khỏi tất cả nội dung
      contents.forEach((content) => {
        content.classList.remove("active");
      });

      // Hiển thị nội dung liên quan đến menu được click
      const activeContent = document.querySelector(
        `.content-betwent[data-content="${tabId}"]`
      );
      if (activeContent) {
        activeContent.classList.add("active");
      }
    });
  });
});
