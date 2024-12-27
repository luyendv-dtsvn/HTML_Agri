
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".agribank-culture-identity-card");

  cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
          cards.forEach((c) => c.classList.remove("active"));
          card.classList.add("active");
      });

      card.addEventListener("mouseleave", () => {
          card.classList.remove("active");
      });
  });
});



//------------------Nét đặc sắc ở phần trang văn hóa---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".featured-culture-item");

  items.forEach((item) => {
      item.addEventListener("click", () => {
          // Kiểm tra xem mục được click đã có trạng thái 'active' chưa
          const isActive = item.classList.contains("active");

          // Loại bỏ trạng thái 'active' khỏi tất cả các mục
          items.forEach((el) => el.classList.remove("active"));

          // Nếu mục hiện tại chưa có 'active', thì thêm vào
          if (!isActive) {
              item.classList.add("active");
          }
      });
  });
});


//-------------------Phần chuyển trang trong phần cuối trang văn hóa------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const newsList = document.querySelector(".agribank-news-list");
  const newsItems = document.querySelectorAll(".agribank-news-item");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentStartIndex = 0;

  // Hàm cập nhật hiển thị sản phẩm
  function updateVisibleItems() {
      newsItems.forEach((item, index) => {
          if (index >= currentStartIndex && index < currentStartIndex + 4) {
              item.style.display = "flex"; // Hiển thị sản phẩm
          } else {
              item.style.display = "none"; // Ẩn sản phẩm
          }
      });
  }

  // Sự kiện nút sang phải
  // nextBtn.addEventListener("click", () => {
  //     currentStartIndex = (currentStartIndex + 1) % newsItems.length;
  //     updateVisibleItems();
  // });

  // Sự kiện nút sang trái
  // prevBtn.addEventListener("click", () => {
  //     currentStartIndex =
  //         (currentStartIndex - 1 + newsItems.length) % newsItems.length;
  //     updateVisibleItems();
  // });

  // Khởi tạo hiển thị ban đầu
  updateVisibleItems();
});





//--------------------Phần chuyển tab trên trang danh sách sản phẩm----------------------------

document.addEventListener('DOMContentLoaded', function () {
  // Lấy tất cả các tab và item
  const tabs = document.querySelectorAll('.loan-tabs-filter button');
  const cards = document.querySelectorAll('.loan-card');
  
  tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
          const tabText = tab.textContent.trim(); // Lấy tên tab

          // Lặp qua các item và kiểm tra nhóm
          cards.forEach(card => {
              const category = card.dataset.category; // Lấy nhóm từ data-category

              if (tabText === 'Tất cả' || category === tabText) {
                  card.style.display = 'flex'; // Hiển thị item
              } else {
                  card.style.display = 'none'; // Ẩn item
              }
          });

          // Làm nổi bật tab được chọn
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
      });
  });
});

// Các thông tin trên trang chi tiết sản phẩm 





// -------------------- Thanh menu bên trong answer page ------------

// Lấy các phần tử liên quan
const selectButtonAnswer = document.getElementById('tab-select-answer');

if (selectButtonAnswer) { // Kiểm tra phần tử tồn tại
  const dropdownMenu = selectButtonAnswer.nextElementSibling; // Dropdown menu
  const tabOptionsAnswer = document.querySelectorAll('.tab-pane-answer');

  // Xử lý khi nhấn nút select để mở menu
  selectButtonAnswer.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
  });

  // Xử lý khi chọn một tùy chọn từ menu
  tabOptionsAnswer.forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      const tabName = option.textContent;
      selectButtonAnswer.querySelector('span').textContent = tabName;

      dropdownMenu.classList.remove('show');

      const tabId = option.getAttribute('data-tab');
      const allTabs = document.querySelectorAll('.tab-pane');
      const activeTab = document.getElementById(tabId);

      if (activeTab) {
        allTabs.forEach(tab => tab.classList.remove('active'));
        activeTab.classList.add('active');
      }
    });
  });

  // Đóng menu khi nhấp bên ngoài
  document.addEventListener('click', (e) => {
    if (!selectButtonAnswer.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
} 
