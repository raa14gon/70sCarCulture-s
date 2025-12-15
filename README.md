# 70s Car Culture 🚗✨

Welcome to **70s Car Culture**, a web application dedicated to the golden era of automotive design and racing. This project offers an immersive journey through the iconic cars and racing history of the 1970s, featuring a retro-inspired interface and real-time data integration.

## 🌟 Features

- **Immersive 70s Aesthetic**: A visually rich user interface designed to evoke the style and feel of the 1970s.
- **Car Showcase**: Explore legendary vehicles from the era with detailed information sourced dynamically.
- **Vintage Racing Data**: View historical F1 race results from the 70s, integrated via the [Ergast Developer API](http://ergast.com/mrd/).
- **Dynamic Content**: Car details and history sourced from Wikipedia.
- **Responsive Design**: Built with Bootstrap to ensure a seamless experience across all devices.
- **Smooth Animations**: Enhanced user interactions using GSAP (GreenSock Animation Platform).

## 🛠️ Tech Stack

- **Framework**: [Vue.js 3](https://vuejs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/) & Custom CSS
- **Animations**: [GSAP](https://greensock.com/gsap/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **APIs**:
  - Ergast F1 API (Racing data)
  - Wikipedia API (Car information)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16+ recommended)
- npm (Node Package Manager)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/raa14gon/70sCarCulture-s.git
    cd 70sCarCulture-s
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173/70sCarCulture-s/`.

## 📦 Deployment

This project is configured for deployment to **GitHub Pages**.

To deploy the latest version:

```bash
npm run deploy
```

This command builds the project and pushes the `dist` folder to the `gh-pages` branch.

## 📂 Project Structure

```
src/
├── components/      # Reusable UI components (Cards, Footer, Menu, etc.)
├── pages/           # Main application views (Home, Cars, VintageRacing)
├── router/          # Route definitions
├── services/        # API integration modules (ergast.js, wikipedia.js)
├── assets/          # Images, fonts, and global styles
└── main.js          # App entry point
```

## 📄 License

This project is open-source and available for educational purposes.
