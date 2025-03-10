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

document.addEventListener('DOMContentLoaded', () => {
  // Lấy các phần tử liên quan
  const selectButtonAnswerNew = document.getElementById('tab-select-answer'); // Đổi tên biến để tránh xung đột

  if (selectButtonAnswerNew) { // Kiểm tra phần tử tồn tại
    const dropdownMenu = selectButtonAnswerNew.nextElementSibling; // Dropdown menu
    const tabOptionsAnswer = document.querySelectorAll('.tab-pane-answer');

    // Xử lý khi nhấn nút select để mở menu
    selectButtonAnswerNew.addEventListener('click', () => {
      dropdownMenu.classList.toggle('show');
    });

    // Xử lý khi chọn một tùy chọn từ menu
    tabOptionsAnswer.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = option.textContent;
        selectButtonAnswerNew.querySelector('span').textContent = tabName;

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
      if (!selectButtonAnswerNew.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
      }
    });
  }
});
