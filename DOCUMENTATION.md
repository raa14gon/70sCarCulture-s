# Project Documentation: 70s Car Culture

## 1. Overview
70s Car Culture is a Single Page Application (SPA) built with Vue 3 and Vite. The application serves as a digital museum for 1970s automotive history, combining nostalgic design elements with modern web technologies. It dynamically fetches data to present race results and vehicle information, providing an educational and visual experience.

## 2. Architecture

### 2.1 Technology Stack
- **Core**: Vue 3 (Composition API)
- **Build System**: Vite (Fast HMR and optimized builds)
- **State Management**: Component-level state (reactive/ref)
- **Routing**: Vue Router (client-side routing)
- **UI/UX**: Bootstrap 5 (Layout/Components) + Custom CSS + GSAP (Animations)

### 2.2 Directory Structure
The `src` directory is organized as follows:

- **`assets/`**: Contains static assets like images (`.png`, `.jpg`), fonts, and the global `style.css` which handles core variables and resets.
- **`components/`**: Modular Vue components.
    - `Menu.vue`: Main navigation bar.
    - `Footer.vue`: Site footer.
    - `CardCars.vue`: A reusable card component to display vehicle details.
    - `CardMagazine.vue`: Styled layouts resembling vintage magazine spreads.
    - `RetroTerminal.vue`: A decorative or interactive element simulating old computer interfaces.
    - `VintageRaceList.vue` & `VintageRaceDetails.vue`: Components specifically for handling and displaying F1 race data.
- **`pages/`**: Top-level views mapped to routes.
    - `Home.vue`: Landing page.
    - `Cars.vue`: Gallery of iconic 70s cars.
    - `VintageRacing.vue`: Specialized view for browsing historical race data.
- **`router/`**: Contains `index.js` which defines the application routes (`/`, `/Cars`, `/VintageRacing`).
- **`services/`**: logic for external API communications.
    - `ergast.js`: Handles requests to the Ergast F1 API to fetch race schedules and results from specific years (e.g., 1972).
    - `wikipedia.js`: Interfaces with the Wikipedia REST API to pull summaries and images for specific car models.

## 3. Key Components & Features

### 3.1 Vintage Racing (API Integration)
The `VintageRacing` page provides a retrospective on F1 seasons.
- **Data Source**: It uses `services/ergast.js`.
- **Flow**:
    1. The component mounts and triggers a fetch request for a specific season (e.g., 1972).
    2. Data is transformed and passed to `VintageRaceList.vue`.
    3. Users can select a race to see more details via `VintageRaceDetails.vue`.
- **Proxy**: To avoid CORS issues, a proxy is configured in `vite.config.js` to redirect requests from `/ergast` to `https://api.jolpi.ca`.

### 3.2 Car Showcase (Wikipedia Integration)
The `Cars` page displays a curated list of vehicles.
- **Data Source**: Uses `services/wikipedia.js`.
- **Functionality**:
    - Fetches extracts and thumbnail images for defined car models.
    - Displays them using the `CardCars` component.
    - `vite.config.js` also handles `/wiki` proxying to `https://en.wikipedia.org` to manage cross-origin restrictions.

### 3.3 Design System
- **Bootstrap**: Used for the grid system (`container`, `row`, `col`) and responsive utilities.
- **Custom Styling**: `style.css` defines the "70s" palette (warm oranges, browns, creams) and typography.
- **Animations**: GSAP is employed for entrance animations (e.g., cars sliding in, text fading) to create a dynamic "magazine" feel.

## 4. Configuration

### 4.1 Vite Config (`vite.config.js`)
- **Base URL**: Set to `/70sCarCulture-s/` for GitHub Pages compatibility.
- **Proxies**:
    - `/ergast` -> `https://api.jolpi.ca`
    - `/wiki` -> `https://en.wikipedia.org` (includes header manipulation for privacy/CORS).

### 4.2 Scripts
- `dev`: Starts the local dev server.
- `build`: Compiles the app for production.
- `deploy`: Runs the build and publishes to the `gh-pages` branch.

## 5. Development Workflow
To add a new feature:
1. Create a new component in `components/`.
2. If it requires a new page, add it to `pages/` and register the route in `router/index.js`.
3. If it requires external data, create a specific service handler in `services/`.
4. Style usage: Prefer Bootstrap classes for structure and custom CSS classes for theme-specific styling.

## 6. Deployment
The project uses `gh-pages` for deployment.
Since it is a client-side router app hosted on a subdirectory, `createWebHistory` in Vue Router should be compatible with the base URL setup in Vite.


