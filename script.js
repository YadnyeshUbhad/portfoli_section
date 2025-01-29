document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const searchBar = document.getElementById("search-bar");
    const itemsContainer = document.getElementById("portfolio-items-container");
    const paginationContainer = document.getElementById("pagination");
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalClose = document.querySelector(".modal .close");
    const themeToggle = document.getElementById("theme-toggle");
  
    let currentItems = [];
    let itemsPerPage = 4;
    let currentPage = 1;
  
    // Fetch projects from API
    async function fetchProjects() {
      try {
        const response = await fetch("https://api.example.com/projects"); // Replace with your API endpoint
        const data = await response.json();
        return data.projects; // Adjust based on API response structure
      } catch (error) {
        console.error("Error fetching projects:", error);
        return []; // Return an empty array on error
      }
    }
  
    function renderItems(page = 1) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
  
      const visibleItems = currentItems.slice(start, end);
      itemsContainer.innerHTML = "";
  
      visibleItems.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("portfolio-item", "show");
        div.setAttribute("data-category", item.category);
        div.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        `;
        div.addEventListener("click", () => openModal(item));
        itemsContainer.appendChild(div);
      });
  
      renderPagination();
    }
  
    function renderPagination() {
      const totalPages = Math.ceil(currentItems.length / itemsPerPage);
      paginationContainer.innerHTML = "";
  
      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.classList.add(i === currentPage ? "active" : "");
        button.addEventListener("click", () => {
          currentPage = i;
          renderItems(i);
        });
        paginationContainer.appendChild(button);
      }
    }
  
    function applyFilters() {
      const category = document.querySelector(".filter-btn.active").getAttribute("data-category");
      const query = searchBar.value.toLowerCase();
  
      currentItems = projects.filter((item) => {
        const matchesCategory = category === "all" || item.category === category;
        const matchesSearch = item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
      });
  
      currentPage = 1;
      renderItems();
    }
  
    function openModal(item) {
      modalTitle.textContent = item.title;
      modalDescription.textContent = item.description;
      modal.style.display = "block";
    }
  
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        applyFilters();
      });
    });
  
    searchBar.addEventListener("input", applyFilters);
  
    // Theme toggle functionality
    themeToggle.addEventListener("click", () => {
      document.body.setAttribute(
        "data-theme",
        document.body.getAttribute("data-theme") === "dark" ? "light" : "dark"
      );
    });
  
    // Fetch and initialize projects
    let projects = [];
    fetchProjects().then((data) => {
      projects = data;
      currentItems = [...projects];
      renderItems();
    });
  });
  