# 💻 Interactive VS Code Portfolio & Resume

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind__CSS-v4.0-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

An interactive, browser-based **VS Code workspace clone** engineered from scratch to serve as an immersive digital resume. Built on top of the next-generation Next.js 16 framework and React 19, this portfolio provides an authentic IDE environment for recruiters and technical leads to evaluate my background, project schemas, and code architecture.

🔗 **[Live Production Link]()**

---

## 🎯 Key Engineering Features

- 📁 **Fluid Multi-Display Sidebar Drawer:** Completely optimized for three core layout breakpoints (**320px mobile**, **768px tablet**, and **1440px desktop** displays). On smaller viewports, the file directory collapses smoothly into an overlay side drawer to maximize code readability.
- 📟 **Asynchronous Terminal Compilation Stream:** Simulates a live server boot-up and environment check sequence using sequential microtask delays upon application mounting.
- 🔗 **Smart Regex Link Engine:** Dynamically intercepts naked domains, personal subdomains, and contact strings inside raw data views, transforming them into secure `https://` hyper-nodes and native `mailto:` triggers without corrupting JSON formatting.
- 🔔 **VS Code Notification Toast System:** An absolute-positioned, minimizable popup alert sitting right above the status bar that gives recruiters a frictionless option to download a standard physical PDF backup copy.

---

## 🛠️ Modern Tech Stack

| Layer            | Technology              | Implementation Detail                                                                                       |
| :--------------- | :---------------------- | :---------------------------------------------------------------------------------------------------------- |
| **Framework**    | **Next.js 16.2.9**      | Utilizes advanced App Router structures for lightning-fast view rendering and transitions.                  |
| **UI Library**   | **React 19.2.7**        | Leverages the latest concurrent rendering capabilities and modern state paradigms.                          |
| **Styling**      | **Tailwind CSS v4.3.1** | Uses the rewritten, lightning-fast v4 compiler engine via `@tailwindcss/postcss` for lightning-fast builds. |
| **Syntax Logic** | **Shiki & PrismJS**     | Pre-provisioned compilation systems optimized for styling and handling code tokenization blocks.            |

---

## 🚀 Local Development Installation

Ensure you have [Node.js](https://nodejs.org/) installed, then spin up the project locally with this sequence:

1. Clone down the repository:
   ```bash
   git clone [https://github.com/NoobStyleee/my-resume.git](https://github.com/NoobStyleee/my-resume.git)
   cd my-resume
   ```

Install the modern dependency tree:

Bash
npm install
Launch the hot-reloading Next.js local server:

Bash
npm run dev
Open your browser framework of choice and point it to:

Plaintext
http://localhost:3000

├── src/
│ ├── app/
│ │ ├── layout.tsx # Global fonts and application entry wrap
│ │ └── page.tsx # Layout state orchestrator (Sidebar, Tabs, Active States)
│ ├── components/
│ │ ├── Sidebar/ # Sliding file navigator tree
│ │ ├── Tabs/ # Active file buffer tracking system
│ │ ├── Editor/ # Dynamic code view engine and integrated terminal panels
│ │ ├── StatusBar/ # Error status mockups serving as custom social redirects
│ │ └── FloatingPDFButton/ # The custom VS Code system notification popup container
│ └── data/
│ └── files.ts # JSON database storing bio descriptions and experience metrics
└── public/ # Root serving folder for standard downloadable PDF resumes

👨‍💻 Author
Michael Roedelbronn

GitHub: @NoobStyleee

LinkedIn: linkedin.com/in/michael-noobstyle-roedelbronn
