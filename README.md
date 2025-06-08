# 🍽️ Augustine's Roadhouse
A fully dynamic restaurant landing page built with JavaScript, HTML, CSS, and Webpack to showcase the restaurant's home page, menu, and contact information with seamless tab switching.All page content is generated using JavaScript modules—no hard-coded HTML beyond the initial structure.

## 📁 Project Structure
restaurant-page/
├── dist/                # Compiled output (via Webpack)
│   ├── index.html
│   └── main.js
├── src/                 # Source files
│   ├── about.js
│   ├── home.js
│   ├── menu.js
│   ├── index.js         # Main entry point
│   ├── styles.css       # CSS styles
│   ├── img1.png
│   ├── img2.png
│   ├── img3.png
│   └── template.html    # Base HTML template
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md

## 🚀 Features
Modular JavaScript (ES6 modules)

Dynamic DOM manipulation

Responsive layout with grid and flexbox

Webpack bundling

Clean UI with hover effects and custom fonts

## 🛠️ Installation
1. Clone the repo
git clone https://github.com/your-username/restaurant-page.git
cd restaurant-page

2. Install dependencies
npm install

3. Start the development server
npm run start

4. Build for production
npm run build

## 🌐 Deployment
To deploy with GitHub Pages:

git checkout gh-pages
git merge main --no-edit
npm run build
git add .
git commit -m "Deploy update"
git push origin gh-pages

## 🧠 Learnings
Webpack configuration

DOM manipulation with JS

CSS transitions and effects

Organizing JS into modules

