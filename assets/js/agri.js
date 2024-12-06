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
    nextBtn.addEventListener("click", () => {
        currentStartIndex = (currentStartIndex + 1) % newsItems.length;
        updateVisibleItems();
    });

    // Sự kiện nút sang trái
    prevBtn.addEventListener("click", () => {
        currentStartIndex =
            (currentStartIndex - 1 + newsItems.length) % newsItems.length;
        updateVisibleItems();
    });

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


//-------------------phần chuyển tab------------------------------

// Lấy tất cả các nút tab và nội dung tab
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Lắng nghe sự kiện click trên mỗi nút tab
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Xóa trạng thái active khỏi tất cả các nút và nội dung
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');

    // Thêm trạng thái active cho nút được chọn
    button.classList.add('active');

    // Hiển thị nội dung tương ứng với tab được chọn
    const tabId = button.getAttribute('data-tab');
    const activeTabContent = document.getElementById(tabId);
    if (activeTabContent) {
      activeTabContent.style.display = 'block';
    }
  });
});

// Khởi tạo trạng thái hiển thị tab đầu tiên
window.onload = function () {
  const defaultButton = document.querySelector('.tab-button.active');
  if (defaultButton) {
    const defaultTabId = defaultButton.getAttribute('data-tab');
    const defaultContent = document.getElementById(defaultTabId);

    if (defaultContent) {
      defaultContent.style.display = 'block';
    }
  }
};



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
  


//------Phần timeline trên trang history page ---------------
document.addEventListener("DOMContentLoaded", () => {
  const yearList = document.getElementById("year-list"); // Danh sách năm
  const scrollUpButton = document.getElementById("history-scroll-up"); // Nút cuộn lên
  const scrollDownButton = document.getElementById("history-scroll-down"); // Nút cuộn xuống
  const yearItems = document.querySelectorAll("#year-list li"); // Các mục năm
  const visibleYearsCount = 7; // Số năm hiển thị cùng lúc
  const yearHeight = 40; // Chiều cao mỗi năm (px)
  let currentStartIndex = 0; // Chỉ số đầu tiên hiển thị trong khung

  /**
   * Cập nhật trạng thái của các nút cuộn
   */
  const updateScrollButtons = () => {
      scrollUpButton.disabled = currentStartIndex === 0; // Vô hiệu hóa nút lên nếu đang ở đầu danh sách
      scrollDownButton.disabled =
          currentStartIndex + visibleYearsCount >= yearItems.length; // Vô hiệu hóa nút xuống nếu đang ở cuối danh sách
  };

  /**
   * Cuộn danh sách năm lên hoặc xuống
   * @param {String} direction - "up" hoặc "down" để xác định hướng cuộn
   */
  const scrollYears = (direction) => {
      const step = direction === "up" ? -1 : 1;
      const nextIndex = currentStartIndex + step;

      // Kiểm tra nếu có thể cuộn thêm
      if (nextIndex >= 0 && nextIndex + visibleYearsCount <= yearItems.length) {
          currentStartIndex = nextIndex;
          const offset = -currentStartIndex * yearHeight; // Tính khoảng cách cần cuộn
          yearList.style.transform = `translateY(${offset}px)`; // Dịch chuyển danh sách năm
          yearList.style.transition = "transform 0.3s ease"; // Hiệu ứng mượt khi cuộn
          updateScrollButtons(); // Cập nhật trạng thái nút
      }
  };

  /**
   * Khi người dùng nhấn vào một năm
   */
  yearItems.forEach((item) => {
      item.addEventListener("click", () => {
          // Đặt trạng thái 'active' cho năm được chọn
          yearItems.forEach((el) => el.classList.remove("active"));
          item.classList.add("active");

          // Lấy năm được chọn và cuộn đến nội dung tương ứng
          const year = item.getAttribute("data-year");
          const target = document.querySelector(`[data-content="${year}"]`);
          if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
      });
  });

  // Thêm sự kiện click cho nút cuộn lên và xuống
  scrollUpButton.addEventListener("click", () => scrollYears("up"));
  scrollDownButton.addEventListener("click", () => scrollYears("down"));

  // Khởi tạo trạng thái nút cuộn ban đầu
  updateScrollButtons();
});
