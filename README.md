# Apex Research Connect

A premium platform connecting top PhD researchers from IITs/IISERs with leading recruiters.

## Prerequisites

You need **Node.js** installed on your machine.
If you don't have it, install it from: [https://nodejs.org/](https://nodejs.org/)

## How to Run

1.  Open this folder in your terminal.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open the link shown in the terminal (usually `http://localhost:5173`) to view the website.

## Project Structure

- `src/pages/`: Contains the main views (Landing Page, Find Job, Provide Job).
- `src/components/`: Reusable components (Navbar).
- `src/styles/`: Global styles and animations.

## Deployment to GitHub Pages

1.  Update `vite.config.js` with your repository name if needed.
2.  Run `npm run build`.
3.  Deploy the `dist` folder.
