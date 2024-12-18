//----------------------Bản sắc phần 1 trang văn hóa-------------------------
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


//-------------------phần chuyển tab product-detail------------------------------
// Lấy tất cả các nút tab và nội dung tab
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content-info');

// Hàm ẩn tất cả nội dung tab
function hideAllTabs() {
tabContents.forEach(content => {
  content.classList.remove('active');
  content.hidden = true; // Ẩn nội dung
});
}

// Hàm xóa trạng thái active khỏi tất cả các nút
function deactivateAllButtons() {
tabButtons.forEach(button => button.classList.remove('active'));
}

// Lắng nghe sự kiện click trên mỗi nút tab
tabButtons.forEach(button => {
button.addEventListener('click', () => {
  // Ẩn tất cả nội dung và nút không cần thiết
  hideAllTabs();
  deactivateAllButtons();

  // Kích hoạt nút và hiển thị tab tương ứng
  button.classList.add('active');
  const tabId = button.getAttribute('data-tab');
  const activeTabContent = document.getElementById(tabId);
  if (activeTabContent) {
    activeTabContent.hidden = false; // Hiển thị nội dung
    activeTabContent.classList.add('active');
  }
});
});

// Khởi tạo trạng thái hiển thị tab đầu tiên
window.addEventListener('DOMContentLoaded', () => {
const defaultButton = document.querySelector('.tab-button.active');
if (defaultButton) {
  const defaultTabId = defaultButton.getAttribute('data-tab');
  const defaultContent = document.getElementById(defaultTabId);

  if (defaultContent) {
    defaultContent.hidden = false; // Hiển thị tab đầu tiên
    defaultContent.classList.add('active');
  }
} else {
  hideAllTabs(); // Nếu không có nút active mặc định, ẩn tất cả tab
}
});


// Lấy các phần tử liên quan
const selectButton = document.getElementById('tab-select');
const tabOptions = document.querySelectorAll('.tab-option-info');

// Xử lý khi chọn một tùy chọn từ menu
tabOptions.forEach(option => {
option.addEventListener('click', () => {

  // Đổi nội dung nút select thành tên tab đã chọn
  selectButton.textContent = option.textContent;

  // Kích hoạt tab tương ứng
  const tabId = option.getAttribute('data-tab');
  const activeTabButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);

  if (activeTabButton) {
    activeTabButton.click(); // Kích hoạt tab thông qua JS
  }

});
});


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
