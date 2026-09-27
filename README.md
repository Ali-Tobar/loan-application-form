# 🏦 Loan Application Form — Modern React

A production-ready Loan Application interface built with **React** and **Vite**. This project focuses on implementing robust React mental models: single-source-of-truth state architecture, controlled components, derived state, custom validation pipelines, and clean event handling.

---

## 🚀 Live Demo & Preview

> *Add your live deployment link here (e.g., Vercel / GitHub Pages)*

---

## 🎯 Key Features

- **Single Object State Management:** Manages multiple form fields (`name`, `phoneNumber`, `age`, `isEmployee`, `salaryRange`) seamlessly inside a single unified state object.
- **Controlled Components:** Full synchronization between UI inputs and React internal state.
- **Derived State Evaluation:** Dynamic calculation of submit button state (`disabled` / `active`) without redundant `useState` calls.
- **Real-Time Input Validation:**
  - **Age Validation:** Rejects values outside the acceptable range ($18 - 100$ years).
  - **Phone Number Validation:** Enforces international format boundaries ($10 - 12$ digits).
- **Custom Reusable Modal:** Decoupled `Modal` component driven by explicit props (`isVisible`, `errorMessage`).
- **Event Bubbling Protection:** Prevents unwanted state collisions when closing modal overlays via backdrop clicks.
- **Modern Fintech UI:** Custom glassmorphism-inspired layout, accessible color contrast, custom SVG dropdown arrow, and tactile hover/focus states.

---

## 🧠 Core React Concepts & Mental Models Mastered

| Concept | Implementation Details |
| :--- | :--- |
| **Object State Mutation Pattern** | Updating nested properties immutably using the JavaScript spread operator: `setLoanInputs({ ...loanInputs, [key]: value })`. |
| **Derived State vs Controlled State** | Eliminating extra states by computing `isBtnDisabled` dynamically during the render phase based on existing inputs. |
| **Event Bubbling Management** | Resolving event propagation conflicts between the background overlay (`handleDivClick`) and the submit trigger (`handleFormSubmit`) using defensive state guard clauses. |
| **Component Reusability & Props** | Designing a standalone `Modal` component that consumes parent state via clean destructuring (`{ isVisible, errorMessage }`). |
| **Dynamic Styling Architecture** | Conditional classes and inline styles reflecting real-time validation states (Success Green vs Error Red). |

---

## 🛠️ Tech Stack

- **Frontend Library:** React 19 / React (Functional Components & Hooks)
- **Tooling & Bundler:** Vite
- **Styling:** Custom CSS3 (Flexbox, Glassmorphism, CSS Transitions, Responsive Sizing)
- **Version Control:** Git & GitHub

---

## 📁 Project Structure

```text
loan-application-form/
├── public/
├── src/
│   ├── Components/
│   │   ├── FormStyles.css    # Central styling with responsive card layout
│   │   ├── LoanForm.jsx      # Core business logic, validation & input state
│   │   └── Modal.jsx         # Pure presentational popup component
│   ├── App.css
│   ├── App.jsx               # Root layout container
│   ├── index.css
│   └── main.jsx              # DOM mount point
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Ali-Tobar/loan-application-form.git](https://github.com/Ali-Tobar/loan-application-form.git)
   ```

2. **Navigate to the project directory:**
   ```bash
   cd loan-application-form
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:5173` to view the application.

---

## 👨‍💻 Author

**Ali Mohamed Tobar**  
Front-End Developer & Computer Science Student  
- GitHub: [@Ali-Tobar](https://github.com/Ali-Tobar)