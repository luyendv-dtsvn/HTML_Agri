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