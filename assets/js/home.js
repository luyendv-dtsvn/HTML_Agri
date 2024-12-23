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