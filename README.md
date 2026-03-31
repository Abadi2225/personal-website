# Abdullah Felemban - Personal Portfolio (v2)

This is **Version 2** of my personal portfolio website. 

Unlike Version 1 (which was a complex Next.js application), this version is re-engineered for simplicity, performance, and ease of maintenance. It is a lightweight, single-file React application that runs directly in the browser without a heavy build process.

## Key Differences (v2 vs v1)

| Feature | Version 1 (Old) | Version 2 (Current) |
| :--- | :--- | :--- |
| **Architecture** | Next.js / Node.js | React via CDN (Standalone) |
| **Complexity** | High (Multiple dependencies) | Low (Zero build steps) |
| **Data Source** | Scattered components | **Centralized embedded Data Object** |
| **Performance** | Server-Side Rendering | Client-Side Instant Load |

## Tech Stack

* **React 18** (via UMD)
* **Tailwind CSS** (via CDN script)
* **Framer Motion** (Animations)
* **Lucide Icons**

## Structure

The entire website logic, styling, and content are contained within `personal_web.html`. 
* **Data**: All portfolio information (Bio, Experience, Projects) is stored in a `const DATA` object within the script, making it incredibly easy to update.

## ¸ How to Run

No installation (`npm install`) is required.

1.  Clone the repository:
    ```bash
    git clone [https://github.com/Abadi2225/personal-website.git](https://github.com/Abadi2225/personal-website.git)
    ```
2.  Navigate to the folder:
    ```bash
    cd personal-website
    ```
3.  **Simply open `personal_web.html` in any modern web browser.**

## 🔗 Live Demo
https://abdullahfelemban.com/
