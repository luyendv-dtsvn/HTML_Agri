
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
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("product-list.html")) {
      const firstTab = document.querySelector('.nav-link[href="#tabItem1"]');
      const allTabs = document.querySelectorAll(".tab-pane");

      // Kiểm tra localStorage để hiển thị tất cả tab nếu đã bật trước đó
      if (localStorage.getItem("showAllTabs") === "true") {
          allTabs.forEach(tab => {
              tab.classList.add("active", "show");
          });
      }

      if (firstTab) {
          firstTab.addEventListener("click", function (event) {
              event.preventDefault(); // Ngăn chặn hành vi mặc định

              // Hiển thị tất cả tab
              allTabs.forEach(tab => {
                  tab.classList.add("active", "show");
              });

              // Lưu trạng thái vào localStorage
              localStorage.setItem("showAllTabs", "true");
          });
      }
  }
});


        // -------------Phần tính toán khoản vay---------------------

// Cập nhật giá trị của slider khi thay đổi input
document.getElementById('loan-amount-input').addEventListener('input', function () {
  let inputValue = parseInt(this.value, 10); // Chuyển giá trị nhập vào thành số nguyên

  // Giới hạn giá trị trong khoảng min và max
  const min = parseInt(this.min, 10);
  const max = parseInt(this.max, 10);
  if (isNaN(inputValue)) {
    inputValue = min; // Nếu giá trị không hợp lệ, đặt về giá trị tối thiểu
  }

  // Đảm bảo giá trị trong khoảng cho phép
  inputValue = Math.max(min, Math.min(inputValue, max));

  // Cập nhật giá trị vào slider và định dạng hiển thị
  document.getElementById('loan-amount').value = inputValue;
  this.value = inputValue; // Hiển thị giá trị hợp lệ
});

// Cập nhật giá trị của ô input khi slider thay đổi
document.getElementById('loan-amount').addEventListener('input', function () {
  const sliderValue = parseInt(this.value, 10); // Lấy giá trị từ slider
  document.getElementById('loan-amount-input').value = sliderValue; // Cập nhật ô input
});

// Tự động điều chỉnh vị trí thumb của slider
function adjustSliderThumb(value) {
  const slider = document.getElementById('loan-amount');
  const min = parseInt(slider.min, 10);
  const max = parseInt(slider.max, 10);
  const percentage = ((value - min) / (max - min)) * 100;

  // Cập nhật màu nền slider để phản ánh vị trí thumb
  slider.style.background = `linear-gradient(to right, #aa1d40 ${percentage}%, #ddd ${percentage}%)`;
}

// Cập nhật màu nền khi thanh slider di chuyển
document.getElementById('loan-amount').addEventListener('input', function () {
  const sliderValue = parseInt(this.value, 10);
  adjustSliderThumb(sliderValue);
});

// Cập nhật màu nền ngay khi trang tải
window.onload = function () {
  const initialValue = parseInt(document.getElementById('loan-amount').value, 10);
  adjustSliderThumb(initialValue);
};

// Cập nhật giá trị của thanh slider khi thay đổi input
document.getElementById('loan-duration-display').addEventListener('input', function () {
  let inputValue = parseInt(this.value, 10); // Lấy giá trị từ input và chuyển thành số nguyên

  // Giới hạn giá trị trong khoảng min và max
  const min = parseInt(this.min, 10);
  const max = parseInt(this.max, 10);
  if (isNaN(inputValue)) {
    inputValue = min; // Nếu giá trị không hợp lệ, đặt về giá trị tối thiểu
  }

  // Đảm bảo giá trị nằm trong khoảng cho phép
  inputValue = Math.max(min, Math.min(inputValue, max));

  // Cập nhật giá trị vào slider
  document.getElementById('loan-duration').value = inputValue;

  // Cập nhật hiển thị giá trị hợp lệ
  this.value = inputValue; // Hiển thị giá trị thời gian đúng định dạng
});

// Cập nhật giá trị của ô input khi slider thay đổi
document.getElementById('loan-duration').addEventListener('input', function () {
  const sliderValue = parseInt(this.value, 10); // Lấy giá trị từ slider
  document.getElementById('loan-duration-display').value = sliderValue; // Cập nhật ô input
});

// Hàm để điều chỉnh vị trí thumb của slider
function adjustDurationSliderThumb(value) {
  const slider = document.getElementById('loan-duration'); // Lấy slider
  const min = parseInt(slider.min, 10);
  const max = parseInt(slider.max, 10);
  const percentage = ((value - min) / (max - min)) * 100; // Tính phần trăm vị trí thumb

  // Thay đổi màu nền của slider để phản ánh vị trí thumb
  slider.style.background = `linear-gradient(to right, #aa1d40 ${percentage}%, #ddd ${percentage}%)`;
}

// Cập nhật màu nền slider ngay khi thay đổi giá trị
document.getElementById('loan-duration').addEventListener('input', function () {
  const sliderValue = parseInt(this.value, 10);
  adjustDurationSliderThumb(sliderValue);
});

// Cập nhật màu nền slider khi tải trang
window.onload = function () {
  const initialValue = parseInt(document.getElementById('loan-duration').value, 10);
  adjustDurationSliderThumb(initialValue);
};


document.getElementById('calculate-button').addEventListener('click', function () {
  // Lấy giá trị từ các trường nhập liệu
  const loanAmount = parseInt(document.getElementById('loan-amount').value, 10);
  const duration = parseInt(document.getElementById('loan-duration').value, 10);
  const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
  const method = document.querySelector('input[name="method"]:checked').value;
  const startDate = new Date(document.getElementById('start-date').value);

  // Kiểm tra dữ liệu nhập
  if (isNaN(loanAmount) || isNaN(duration) || isNaN(interestRate) || !startDate) {
    alert('Vui lòng kiểm tra và nhập đầy đủ thông tin chính xác!');
    return;
  }

  let totalPayment = 0; // Tổng số tiền gốc và lãi phải trả
  let monthlyPayment = 0; // Số tiền trả hàng tháng
  const monthlyInterestRate = interestRate / 12; // Lãi suất hàng tháng

  if (method === "reducing") {
    // Tính toán trả trên dư nợ giảm dần
    let remainingPrincipal = loanAmount;
    for (let i = 0; i < duration; i++) {
      const interest = remainingPrincipal * monthlyInterestRate; // Tiền lãi tháng
      const principal = loanAmount / duration; // Tiền gốc mỗi tháng
      const payment = interest + principal; // Tổng tiền trả hàng tháng
      totalPayment += payment; // Cộng dồn tổng tiền
      remainingPrincipal -= principal; // Giảm số dư nợ gốc
    }
    monthlyPayment = Math.round((loanAmount / duration) + (loanAmount * monthlyInterestRate)); // Lấy số tiền tháng đầu tiên
  } else if (method === "equal") {
    // Tính toán trả trên dư nợ gốc
    monthlyPayment = Math.round((loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -duration))); // Công thức trả đều
    totalPayment = monthlyPayment * duration; // Tổng tiền
  }

  // Tính toán ngày trả nợ cuối cùng
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + duration);

  // Hiển thị kết quả
  document.getElementById('total-payment').innerText = totalPayment.toLocaleString() + ' VNĐ';
  document.getElementById('monthly-payment').innerText = monthlyPayment.toLocaleString() + ' VNĐ';
  document.getElementById('end-payment-date').innerText = endDate.toLocaleDateString('vi-VN');
});





