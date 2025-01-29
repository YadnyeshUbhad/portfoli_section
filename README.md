Portfolio Project

Overview

This project is a dynamic Portfolio Section that displays projects with filtering, searching, pagination, modal popups for project details, and a dark mode toggle. The project can fetch data from an API or a local JSON file.

Features

Project Filtering: Sort projects by category (Web Development, Data Science, UI Design, etc.).

Search Functionality: Search for projects by title or description.

Pagination: Display projects across multiple pages for better organization.

Modal Popups: Click on a project to see more details in a modal window.

Dark Mode Toggle: Allows users to switch between light and dark themes.

API Integration: Dynamically fetch projects from an external API.

Technologies Used

HTML5 - Structure of the portfolio section.

CSS3 - Styling, including dark mode and animations.

JavaScript (ES6+) - Dynamic rendering, filtering, pagination, and modal functionality.

Fetch API - To retrieve project data from an API.

Project Structure

portfolio-project/
├── index.html        # Main HTML file
├── styles.css        # CSS file for styling
├── script.js         # JavaScript logic
├── projects.json     # Local JSON file (if not using API)
└── README.md         # Documentation

Setup Instructions

1. Clone the Repository

git clone https://github.com/YadnyeshUbhad/portfolio-project.git
cd portfolio-project

2. Open in Browser

Simply open index.html in your web browser.

3. API Setup (Optional)

If you are using an external API, modify script.js to fetch data from your API endpoint:

fetch("https://api.example.com/projects")
  .then(response => response.json())
  .then(data => {
    projects = data.projects;
    currentItems = [...projects];
    renderItems();
  })
  .catch(error => console.error("Error fetching projects:", error));

Usage

Click on a category filter to display specific projects.

Use the search bar to find a project by name or description.

Navigate between pages using the pagination buttons.

Click on a project to open a detailed modal popup.

Toggle between light and dark mode for better visibility.

Future Enhancements

Local Storage: Save dark mode preference.

Dynamic Project Upload: Allow users to add new projects via a form.

Backend Integration: Use Node.js or Django to manage projects.

