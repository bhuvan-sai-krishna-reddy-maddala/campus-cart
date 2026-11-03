# CampusCart

**Your Campus, Your Marketplace.**

CampusCart is a campus-focused resale marketplace concept that helps college students buy, sell, and exchange pre-owned items within their campus community. The platform is designed around student needs, with college email verification, hyperlocal discovery, and convenient peer-to-peer campus exchanges.

## Features

- **Campus-focused marketplace:** Browse pre-owned books, electronics, hostel essentials, furniture, and other student-useful items.
- **College email verification concept:** Aims to create a more trusted student community and reduce unverified listings.
- **Hyperlocal discovery:** Find items listed by fellow students and coordinate convenient campus pickup.
- **Graduation Sale:** A concept that lets departing students showcase multiple belongings through one shareable page.
- **Responsive interface:** Layout adapts to desktop and mobile screens.
- **Light and dark themes:** Visitors can switch themes. Their choice is saved in the browser using `localStorage`.
- **Theme preference detection:** On a first visit, the site follows the device's light/dark preference.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frontend framework or package installation is required.

## Project Structure

```text
CampusCart/
├── index.html    # Page structure and content
├── style.css     # Layout, responsive styles, and light/dark themes
├── script.js     # Theme toggle and mobile navigation
└── README.md     # Project documentation
```

## Run Locally

1. Download or clone this repository.
2. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
3. Open `index.html` in a web browser.

For a local development server, you can use the VS Code **Live Server** extension, but it is not required.

## Deploy with GitHub Pages

1. Create a GitHub repository for the project.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. Open the repository's **Settings**.
4. Select **Pages** from the sidebar.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/ (root)` folder, then save.
7. Wait for GitHub Pages to publish the site. The published URL will appear in the Pages settings.

## Theme Toggle

The theme button in the navigation switches between light and dark mode. The selected theme is stored in the visitor's browser, so it is retained on later visits to the same site in that browser. If no saved preference exists, the site checks the operating system's preferred color scheme.

## Current Scope

This repository contains a **frontend landing-page prototype**. The marketplace features described on the page are product concepts and are not connected to a backend yet. There is currently no user authentication, live product database, payment processing, real-time chat, or listing management.

## Future Improvements

- Implement student sign-up and college email verification.
- Add product listing creation, editing, and category filters.
- Build buyer-seller messaging.
- Add search, sorting, and campus-specific discovery.
- Implement the Graduation Sale listing flow.
- Add moderation, reporting, and safety features.
- Connect the frontend to a backend and database.

## Project Goal

CampusCart aims to make student-to-student resale more convenient and accessible while helping students save money and keep useful items in circulation.

---

**CampusCart — Your Campus, Your Marketplace.**
