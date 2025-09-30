# AGGRAK Website

A modern, responsive static website built with **Angular** and **SCSS**
for the AGGRAK project.\
This project is designed to be deployed to **GitHub Pages** using GitHub
Actions.

------------------------------------------------------------------------

## 🚀 Features

-   Built with **Angular 19+**
-   Responsive SCSS styling (no Tailwind required)
-   One-page scroll navigation (Home, About, Services, Contact)
-   Hero section with background image overlay
-   Glass/Pill style navigation bar
-   GitHub Pages CI/CD workflow for automated deployment

------------------------------------------------------------------------

## 📂 Project Structure

    aggrak-site/
    │
    ├── src/
    │   ├── app/
    │   │   ├── home-page/        # Homepage component
    │   │   ├── about/            # About section
    │   │   ├── services/         # Services section
    │   │   └── contact/          # Contact section
    │   │
    │   ├── assets/               # Images, logos, and icons
    │   ├── styles/               # Global SCSS styles
    │   └── index.html            # Main HTML entry point
    │
    ├── angular.json              # Angular workspace config
    ├── package.json              # Dependencies & scripts
    ├── tsconfig.json             # TypeScript config
    └── README.md                 # Project documentation

------------------------------------------------------------------------

## 🛠️ Setup & Installation

### 1. Clone the repository

``` bash
git clone https://github.com/souhailchenaoua/AGGRAK.git
cd aggrak-site
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Run locally

``` bash
ng serve -o
```

This will open the site at `http://localhost:4200`.

------------------------------------------------------------------------

## 🌐 Deployment to GitHub Pages

This project uses GitHub Actions to automatically build and deploy the
site.

### 1. Update `angular.json`

Set the correct `baseHref` in your build options:

``` json
"baseHref": "/aggrak-site/"
```

### 2. Push to GitHub

Commit and push changes to the `main` branch.

### 3. GitHub Actions Workflow

The workflow file is located at:

    .github/workflows/pages.yml

It runs automatically on every push to `main`.

### 4. Access the Site

Once deployed, your site will be live at:

    https://YOUR_USERNAME.github.io/aggrak-site/

------------------------------------------------------------------------

## ⚠️ Common Issues & Fixes

### Assets not loading on GitHub Pages

-   Ensure that the `baseHref` in `angular.json` matches your repo name.
-   Example: if repo = `aggrak-site`, then baseHref = `/aggrak-site/`

### Cache Issues

-   Clear browser cache or use **hard reload** (`Ctrl + Shift + R`).

### Deployment not triggering

-   Ensure the workflow file is located at `.github/workflows/pages.yml`
-   Make sure you pushed to the correct branch (`main`).

------------------------------------------------------------------------

## 📖 Scripts

``` bash
npm run start      # Start local dev server
npm run build      # Build production files
npm run test       # Run unit tests
```

------------------------------------------------------------------------

## 👨‍💻 Author

Developed by **Souheil Idris Chenaoua**\
GitHub: [souhailchenaoua](https://github.com/souhailchenaoua)

------------------------------------------------------------------------

## 📜 License

This project is licensed under the **MIT License**.\
Feel free to use, modify, and distribute.
