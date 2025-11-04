// Sample data for products
const sampleProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro Max 256GB",
    description:
      "Điện thoại mới 99%, còn bảo hành, không trầy xước. Sử dụng cẩn thận.",
    category: "dien-tu",
    estimatedValue: 25000000,
    condition: "like-new",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop",
    ],
    owner: {
      name: "Minh Hoàng",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    exchangePreferences: ["Laptop", "iPad", "Máy ảnh"],
  },
  {
    id: 2,
    name: "Áo khoác Zara size M",
    description:
      "Áo khoác mùa đông, mặc vài lần, còn rất mới. Phù hợp thời tiết Hà Nội.",
    category: "thoi-trang",
    estimatedValue: 800000,
    condition: "very-good",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=300&fit=crop",
    ],
    owner: {
      name: "Thu Hà",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b9a2eed6?w=150&h=150&fit=crop&crop=face",
    },
    exchangePreferences: ["Giày", "Túi xách", "Đồng hồ"],
  },
  {
    id: 3,
    name: "Combo 5 cuốn sách kinh tế",
    description:
      "Sách hay về quản lý và khởi nghiệp, đã đọc xong, muốn chia sẻ với mọi người.",
    category: "sach",
    estimatedValue: 300000,
    condition: "good",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    ],
    owner: {
      name: "Đức Anh",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    exchangePreferences: ["Sách văn học", "Tiểu thuyết", "Truyện tranh"],
  },
  {
    id: 4,
    name: "Máy pha cà phê Delonghi",
    description:
      "Máy pha cà phê tự động, mới mua 6 tháng, ít sử dụng do chuyển nhà.",
    category: "gia-dung",
    estimatedValue: 3500000,
    condition: "like-new",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    ],
    owner: {
      name: "Lan Anh",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    exchangePreferences: ["Nồi cơm điện", "Lò vi sóng", "Máy xay sinh tố"],
  },
  {
    id: 5,
    name: "Giày chạy bộ Nike Air Max",
    description:
      "Giày chạy bộ size 42, mới mua 2 tháng, ít sử dụng vì không vừa size.",
    category: "the-thao",
    estimatedValue: 1800000,
    condition: "very-good",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    ],
    owner: {
      name: "Hoàng Nam",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    exchangePreferences: ["Áo thể thao", "Balo", "Đồng hồ thể thao"],
  },
  {
    id: 6,
    name: "MacBook Air M1 2020",
    description:
      "Laptop văn phòng, sử dụng nhẹ nhàng, pin còn rất tốt, không có lỗi gì.",
    category: "dien-tu",
    estimatedValue: 18000000,
    condition: "good",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    ],
    owner: {
      name: "Quỳnh Mai",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b9a2eed6?w=150&h=150&fit=crop&crop=face",
    },
    exchangePreferences: ["PC Gaming", "Màn hình", "Bàn phím cơ"],
  },
  {
    id: 7,
    name: "Đầm dự tiệc màu đỏ",
    description:
      "Đầm dự tiệc sang trọng, mặc 1 lần duy nhất, phù hợp các buổi tiệc tối.",
    category: "thoi-trang",
    estimatedValue: 1200000,
    condition: "like-new",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
    ],
    owner: {
      name: "Hương Giang",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
    exchangePreferences: ["Váy casual", "Áo sơ mi", "Giày cao gót"],
  },
  {
    id: 8,
    name: "Bộ nồi chảo cao cấp",
    description: "Bộ nồi chảo 5 món, chất liệu inox 304, mới sử dụng 3 tháng.",
    category: "gia-dung",
    estimatedValue: 2200000,
    condition: "very-good",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    ],
    owner: {
      name: "Minh Tuấn",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    exchangePreferences: ["Máy rửa chén", "Tủ lạnh mini", "Bàn ăn"],
  },
];

// Sample user products for exchange
const userProducts = [
  {
    id: "user-1",
    name: "iPad Pro 11 inch 2021",
    description: "Tablet mới 95%, dùng để vẽ và làm việc",
    estimatedValue: 20000000,
    condition: "like-new",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    ],
  },
  {
    id: "user-2",
    name: "Đồng hồ Apple Watch Series 8",
    description: "Đồng hồ thông minh, còn bảo hành 8 tháng",
    estimatedValue: 8000000,
    condition: "very-good",
    images: [
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop",
    ],
  },
  {
    id: "user-3",
    name: "Máy ảnh Canon EOS R6",
    description: "Máy ảnh mirrorless chuyên nghiệp, kèm lens kit",
    estimatedValue: 45000000,
    condition: "good",
    images: [
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
    ],
  },
];

// Global variables
let currentCategory = "all";
let currentSearchTerm = "";
let selectedImages = [];
let exchangePreferences = [];
let selectedUserProduct = null;
let targetProduct = null;
let currentPage = 1;
let productsPerPage = 8;
let totalProducts = 0;

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  loadProducts();
  setupEventListeners();
});

// Update task list
function updateTaskList() {
  // Task 1 completed - created interface
  console.log(
    "✓ Tạo giao diện web đơn giản với HTML, CSS, JS thuần cho trang trao đổi sản phẩm"
  );
}

function setupEventListeners() {
  // Category filter buttons
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = this.dataset.category;
      filterByCategory(category);
    });
  });

  // Search functionality with debounce
  const searchInput = document.querySelector('[data-testid="input-search"]');
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      currentSearchTerm = this.value;
      debouncedSearch();
    });
  }

  // Mobile search functionality with debounce
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", function () {
      currentSearchTerm = this.value;
      debouncedSearch();
      // Also update desktop search
      if (searchInput) searchInput.value = this.value;
    });
  }

  // Dropdown menu
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    dropdown.addEventListener("mouseenter", () => {
      dropdown.querySelector(".dropdown-menu").style.display = "block";
    });
    dropdown.addEventListener("mouseleave", () => {
      dropdown.querySelector(".dropdown-menu").style.display = "none";
    });
  }

  // Mobile menu button
  const mobileMenuBtn = document.querySelector(
    '[data-testid="button-mobile-menu"]'
  );
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      // Toggle mobile menu (implement if needed)
      console.log("Mobile menu clicked");
    });
  }

  updateTaskList();
}

function filterByCategory(category) {
  // Update active category button
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document
    .querySelector(`[data-category="${category}"]`)
    .classList.add("active");

  currentCategory = category;
  currentPage = 1; // Reset to first page when filtering
  loadProducts();
}

function loadProducts() {
  console.log("✓ Thêm chức năng hiển thị sản phẩm mẫu trên giao diện");

  let filteredProducts = sampleProducts;

  // Filter by category
  if (currentCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === currentCategory
    );
  }

  // Filter by search term
  if (currentSearchTerm) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(currentSearchTerm.toLowerCase())
    );
  }

  totalProducts = filteredProducts.length;

  // Pagination
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  displayProducts(paginatedProducts);
  updateProductCount(totalProducts);
  updatePagination();
}

function displayProducts(products) {
  const productsGrid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");

  if (products.length === 0) {
    productsGrid.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  productsGrid.style.display = "grid";
  emptyState.style.display = "none";

  productsGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card" data-testid="card-product-${product.id}">
            <img src="${product.images[0]}" alt="${
        product.name
      }" data-testid="img-product-${product.id}">
            <div class="content">
                <div class="product-header">
                    <span class="value-badge" data-testid="text-price-${
                      product.id
                    }">
                        ~${formatCurrency(product.estimatedValue)}
                    </span>
                    <button class="favorite-btn" onclick="toggleFavorite(${
                      product.id
                    })" data-testid="button-favorite-${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                
                <h3 class="product-title" data-testid="text-name-${
                  product.id
                }">${product.name}</h3>
                <p class="product-description" data-testid="text-description-${
                  product.id
                }">${product.description}</p>
                
                <div class="product-footer">
                    <div class="owner-info">
                        <img src="${product.owner.avatar}" alt="${
        product.owner.name
      }" class="avatar">
                        <span class="owner-name" data-testid="text-owner-${
                          product.id
                        }">${product.owner.name}</span>
                    </div>
                    
                    <button class="exchange-btn" onclick="openExchangeModal(${
                      product.id
                    })" data-testid="button-exchange-${product.id}">
                        Trao Đổi
                    </button>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

function updateProductCount(count) {
  const productCount = document.querySelector(
    '[data-testid="text-product-count"]'
  );
  if (productCount) {
    productCount.textContent = `Hiển thị ${count} sản phẩm`;
  }
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

function toggleFavorite(productId) {
  const favoriteBtn = document.querySelector(
    `[data-testid="button-favorite-${productId}"]`
  );
  favoriteBtn.classList.toggle("active");
  console.log(`Toggled favorite for product ${productId}`);
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// Post Product Modal Functions
function openPostModal() {
  console.log("✓ Tạo form đăng sản phẩm với giao diện đẹp");
  document.getElementById("postModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePostModal() {
  document.getElementById("postModal").classList.remove("active");
  document.body.style.overflow = "auto";
  resetPostForm();
}

function resetPostForm() {
  document.querySelector(".post-form").reset();
  selectedImages = [];
  exchangePreferences = [];
  document.getElementById("imagePreview").innerHTML = "";
  document.getElementById("prefTags").innerHTML = "";
}

function handleImageUpload(event) {
  const files = Array.from(event.target.files);

  if (selectedImages.length + files.length > 5) {
    alert("Chỉ được tải lên tối đa 5 ảnh.");
    return;
  }

  files.forEach((file) => {
    if (file.type.startsWith("image/")) {
      selectedImages.push(file);
      addImagePreview(file, selectedImages.length - 1);
    }
  });
}

function addImagePreview(file, index) {
  const imagePreview = document.getElementById("imagePreview");
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageDiv = document.createElement("div");
    imageDiv.className = "image-preview";
    imageDiv.innerHTML = `
            <img src="${e.target.result}" alt="Preview ${
      index + 1
    }" data-testid="img-preview-${index}">
            <button type="button" class="image-remove" onclick="removeImage(${index})" data-testid="button-remove-image-${index}">
                <i class="fas fa-times"></i>
            </button>
        `;
    imagePreview.appendChild(imageDiv);
  };

  reader.readAsDataURL(file);
}

function removeImage(index) {
  selectedImages.splice(index, 1);
  updateImagePreview();
}

function updateImagePreview() {
  const imagePreview = document.getElementById("imagePreview");
  imagePreview.innerHTML = "";

  selectedImages.forEach((file, index) => {
    addImagePreview(file, index);
  });
}

function addExchangePref() {
  const newPrefInput = document.getElementById("newPref");
  const pref = newPrefInput.value.trim();

  if (pref && !exchangePreferences.includes(pref)) {
    exchangePreferences.push(pref);
    newPrefInput.value = "";
    updatePrefTags();
  }
}

function updatePrefTags() {
  const prefTags = document.getElementById("prefTags");
  prefTags.innerHTML = exchangePreferences
    .map(
      (pref, index) => `
        <span class="pref-tag" onclick="removePref(${index})" data-testid="badge-preference-${index}">
            ${pref}
            <i class="fas fa-times"></i>
        </span>
    `
    )
    .join("");
}

function removePref(index) {
  exchangePreferences.splice(index, 1);
  updatePrefTags();
}

function submitProduct(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const submitBtn = document.querySelector(
    '[data-testid="button-submit-product"]'
  );

  // Clear previous errors
  clearFormErrors();

  const productData = {
    name:
      formData.get("productName") ||
      document.getElementById("productName").value,
    category:
      formData.get("category") || document.getElementById("category").value,
    description:
      formData.get("description") ||
      document.getElementById("description").value,
    estimatedValue: parseInt(
      formData.get("estimatedValue") ||
        document.getElementById("estimatedValue").value
    ),
    condition:
      formData.get("condition") || document.getElementById("condition").value,
    images: selectedImages,
    exchangePreferences: exchangePreferences,
  };

  // Validate required fields
  const requiredFields = [
    { field: "name", label: "Tên sản phẩm" },
    { field: "category", label: "Danh mục" },
    { field: "description", label: "Mô tả" },
    { field: "estimatedValue", label: "Giá trị ước tính" },
    { field: "condition", label: "Tình trạng" },
  ];

  let isValid = true;

  requiredFields.forEach(({ field, label }) => {
    if (
      !productData[field] ||
      (typeof productData[field] === "string" && !productData[field].trim())
    ) {
      showFieldError(
        field === "estimatedValue" ? "estimatedValue" : field,
        `${label} là bắt buộc`
      );
      isValid = false;
    }
  });

  // Validate value is a valid number
  if (productData.estimatedValue && isNaN(productData.estimatedValue)) {
    showFieldError("estimatedValue", "Giá trị phải là số hợp lệ");
    isValid = false;
  }

  if (!isValid) {
    showToast("Lỗi", "Vui lòng điền đầy đủ thông tin hợp lệ!", "error");
    return;
  }

  console.log("Submitting product:", productData);

  // Show loading state
  if (submitBtn) {
    submitBtn.classList.add("loading");
    submitBtn.disabled = true;
  }

  // In a real app, you would send this data to your backend
  // For demo purposes, we'll add it to our sample data
  const imageUrls = [];

  // Convert selected images to URLs for display
  if (selectedImages.length > 0) {
    selectedImages.forEach((file) => {
      imageUrls.push(URL.createObjectURL(file));
    });
  } else {
    imageUrls.push(
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
    );
  }

  const newProduct = {
    id: sampleProducts.length + 1,
    ...productData,
    images: imageUrls,
    owner: {
      name: "Minh Hoàng",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  };

  // Simulate API call
  setTimeout(() => {
    sampleProducts.unshift(newProduct);
    currentPage = 1; // Go to first page to see the new product
    loadProducts();

    console.log("✓ Thêm sản phẩm mới vào danh sách");

    // Remove loading state
    if (submitBtn) {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
    }

    // Close modal and reset form
    closePostModal();

    showToast("Thành công", "Sản phẩm đã được đăng thành công!", "success");
  }, 1000);
}

// Exchange Modal Functions
function openExchangeModal(productId) {
  targetProduct = sampleProducts.find((p) => p.id === productId);
  if (!targetProduct) return;

  document.getElementById("exchangeModal").classList.add("active");
  document.body.style.overflow = "hidden";

  displayTargetProduct();
  displayUserProducts();
}

function closeExchangeModal() {
  document.getElementById("exchangeModal").classList.remove("active");
  document.body.style.overflow = "auto";
  selectedUserProduct = null;
  targetProduct = null;
}

function displayTargetProduct() {
  const targetProductCard = document.getElementById("targetProductCard");
  targetProductCard.innerHTML = `
        <img src="${targetProduct.images[0]}" alt="${
    targetProduct.name
  }" data-testid="img-target-product">
        <h4 data-testid="text-target-name">${targetProduct.name}</h4>
        <div class="value-badge">${formatCurrency(
          targetProduct.estimatedValue
        )}</div>
        <p data-testid="text-target-description">${
          targetProduct.description
        }</p>
    `;
}

function displayUserProducts() {
  const userProductList = document.getElementById("userProductList");

  if (userProducts.length === 0) {
    userProductList.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                Bạn chưa có sản phẩm nào để trao đổi.
            </div>
        `;
    return;
  }

  userProductList.innerHTML = userProducts
    .map((product) => {
      const difference = product.estimatedValue - targetProduct.estimatedValue;
      const isSelected = selectedUserProduct === product.id;

      return `
            <div class="user-product-item ${isSelected ? "selected" : ""}" 
                 onclick="selectUserProduct('${product.id}')" 
                 data-testid="card-user-product-${product.id}">
                <img src="${product.images[0]}" alt="${product.name}">
                <div class="user-product-info">
                    <h5 data-testid="text-user-product-name-${product.id}">${
        product.name
      }</h5>
                    <p>${product.condition}</p>
                    <div class="value-badge">${formatCurrency(
                      product.estimatedValue
                    )}</div>
                </div>
                <div class="value-diff">
                    <div class="amount ${
                      difference > 0
                        ? "positive"
                        : difference < 0
                        ? "negative"
                        : "neutral"
                    }">
                        ${difference > 0 ? "+" : ""}${formatCurrency(
        Math.abs(difference)
      )}
                    </div>
                    <div class="label">Chênh lệch</div>
                </div>
            </div>
        `;
    })
    .join("");
}

function selectUserProduct(productId) {
  selectedUserProduct = productId;
  displayUserProducts();
  updateExchangeAnalysis();
}

function updateExchangeAnalysis() {
  const exchangeAnalysis = document.getElementById("exchangeAnalysis");

  if (!selectedUserProduct) {
    exchangeAnalysis.style.display = "none";
    return;
  }

  const userProduct = userProducts.find((p) => p.id === selectedUserProduct);
  const difference = userProduct.estimatedValue - targetProduct.estimatedValue;

  document.getElementById("yourValue").textContent = formatCurrency(
    userProduct.estimatedValue
  );
  document.getElementById("targetValue").textContent = formatCurrency(
    targetProduct.estimatedValue
  );

  const valueDifference = document.getElementById("valueDifference");
  if (difference > 0) {
    valueDifference.textContent = `Bạn sẽ nhận thêm ${formatCurrency(
      difference
    )}`;
    valueDifference.className = "value-difference positive";
  } else if (difference < 0) {
    valueDifference.textContent = `Bạn cần bù thêm ${formatCurrency(
      Math.abs(difference)
    )}`;
    valueDifference.className = "value-difference negative";
  } else {
    valueDifference.textContent = "Giá trị tương đương";
    valueDifference.className = "value-difference";
  }

  exchangeAnalysis.style.display = "block";
}

function submitExchange(event) {
  event.preventDefault();

  if (!selectedUserProduct) {
    alert("Vui lòng chọn sản phẩm của bạn để trao đổi.");
    return;
  }

  const message = document.getElementById("exchangeMessage").value;

  const exchangeData = {
    targetProductId: targetProduct.id,
    offeredProductId: selectedUserProduct,
    message: message,
  };

  console.log("Submitting exchange:", exchangeData);

  // Simulate successful submission
  alert("Yêu cầu trao đổi đã được gửi thành công!");
  closeExchangeModal();
}

// Settings functionality
document.addEventListener("DOMContentLoaded", function () {
  console.log("✓ Thêm phần setting trong header");

  // Settings dropdown items
  const settingsItems = document.querySelectorAll(".dropdown-menu a");
  settingsItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const action = this.dataset.testid;

      switch (action) {
        case "menu-profile":
          console.log("Mở trang hồ sơ người dùng");
          alert(
            "Chức năng hồ sơ sẽ được phát triển trong phiên bản tiếp theo!"
          );
          break;
        case "menu-preferences":
          console.log("Mở trang tùy chọn");
          alert(
            "Chức năng tùy chọn sẽ được phát triển trong phiên bản tiếp theo!"
          );
          break;
        case "menu-help":
          console.log("Mở trang trợ giúp");
          alert(
            "Chức năng trợ giúp sẽ được phát triển trong phiên bản tiếp theo!"
          );
          break;
        case "menu-logout":
          console.log("Đăng xuất");
          if (confirm("Bạn có chắc chắn muốn đăng xuất?")) {
            alert("Đã đăng xuất thành công!");
          }
          break;
      }
    });
  });
});

// Handle Enter key in search and new preference input
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (e.target.id === "newPref") {
      e.preventDefault();
      addExchangePref();
    }
  }
});

// Mobile Navigation Functions
function toggleMobileNav() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  const mobileNav = document.getElementById("mobileNav");
  mobileNav.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Pagination Functions
function updatePagination() {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (totalProducts <= productsPerPage) {
    pagination.style.display = "none";
    return;
  }

  pagination.style.display = "flex";

  // Update prev/next buttons
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.classList.toggle("disabled", currentPage === 1);
  nextBtn.classList.toggle("disabled", currentPage === totalPages);

  // Update page numbers
  const pageNumbers = document.getElementById("pageNumbers");
  pageNumbers.innerHTML = "";

  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // First page
  if (startPage > 1) {
    pageNumbers.appendChild(createPageButton(1));
    if (startPage > 2) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      dots.className = "pagination-dots";
      pageNumbers.appendChild(dots);
    }
  }

  // Page numbers
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.appendChild(createPageButton(i));
  }

  // Last page
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      dots.className = "pagination-dots";
      pageNumbers.appendChild(dots);
    }
    pageNumbers.appendChild(createPageButton(totalPages));
  }

  // Update pagination info
  const paginationInfo = document.getElementById("paginationInfo");
  const startItem = (currentPage - 1) * productsPerPage + 1;
  const endItem = Math.min(currentPage * productsPerPage, totalProducts);
  paginationInfo.textContent = `${startItem}-${endItem} trong ${totalProducts} sản phẩm`;
}

function createPageButton(pageNumber) {
  const button = document.createElement("button");
  button.className = `pagination-btn ${
    pageNumber === currentPage ? "active" : ""
  }`;
  button.textContent = pageNumber;
  button.onclick = () => goToPage(pageNumber);
  return button;
}

function changePage(direction) {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (direction === "prev" && currentPage > 1) {
    currentPage--;
  } else if (direction === "next" && currentPage < totalPages) {
    currentPage++;
  }

  loadProducts();

  // Scroll to top of products section
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function goToPage(pageNumber) {
  currentPage = pageNumber;
  loadProducts();

  // Scroll to top of products section
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

// Loading and Error Handling Functions
function showLoading() {
  const productsGrid = document.getElementById("productsGrid");
  productsGrid.innerHTML = `
        <div class="loading">
            <div class="loading-spinner"></div>
            Đang tải sản phẩm...
        </div>
    `;
}

function hideLoading() {
  // Loading will be cleared by displayProducts
}

function showToast(title, message, type = "success") {
  // Remove existing toasts
  document.querySelectorAll(".toast").forEach((toast) => toast.remove());

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
        <div class="toast-header">
            <div class="toast-title">${title}</div>
            <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="toast-message">${message}</div>
    `;

  document.body.appendChild(toast);

  // Show toast
  setTimeout(() => toast.classList.add("show"), 100);

  // Auto hide after 5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

function clearFormErrors() {
  document.querySelectorAll(".form-group").forEach((group) => {
    group.classList.remove("error");
  });
}

function showFieldError(fieldName, message) {
  const field =
    document.getElementById(fieldName) ||
    document.querySelector(`[name="${fieldName}"]`);
  if (!field) return;

  const formGroup = field.closest(".form-group");
  if (formGroup) {
    formGroup.classList.add("error");

    let errorDiv = formGroup.querySelector(".error-message");
    if (!errorDiv) {
      errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      formGroup.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
  }
}

// Debounce function for search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Enhanced search with debounce
const debouncedSearch = debounce(() => {
  currentPage = 1;
  loadProducts();
}, 300);

// Update task list functions
function updateTaskList() {
  console.log("✓ Sửa giao diện responsive cho điện thoại");
  console.log("✓ Thêm chức năng cập nhật ảnh sản phẩm mới đăng");
  console.log("✓ Thêm chức năng chuyển trang");
  console.log("✓ Thêm loading states và error handling");
  console.log("✓ Hoàn thiện tính năng tìm kiếm và lọc");
  console.log("✓ Tối ưu hóa hiệu suất và UX");
}

// Close modals when clicking outside
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    if (e.target.id === "postModal") {
      closePostModal();
    } else if (e.target.id === "exchangeModal") {
      closeExchangeModal();
    }
  }

  // Close mobile nav when clicking outside
  if (e.target.classList.contains("mobile-nav")) {
    closeMobileNav();
  }
});
