# 🔢 Counter App

A simple and interactive counter application built using **React.js** and **Vite**. It allows users to increment, decrement, and reset a numerical counter through an intuitive user interface.

This project demonstrates the fundamentals of React, particularly **functional components, state management using the `useState` Hook, and event handling**.

🌐 **Live Demo:** [Counter App](https://counter-two-plum.vercel.app/)

---

## ✨ Features

- **Increment Counter:** Increase the counter value by 1 with a single click.
- **Decrement Counter:** Decrease the counter value by 1.
- **Reset Counter:** Reset the counter value to its initial state (0).
- **Real-Time Updates:** The displayed counter value updates immediately whenever a button is clicked.
- **React State Management:** Uses React's `useState` Hook to manage and update the counter value.
- **Interactive UI:** Simple and intuitive interface with clearly distinguishable buttons.
- **Responsive Styling:** CSS styling with a media query to adapt the layout for different screen sizes.
- **Clean Design:** Minimal interface with a centered counter container, rounded buttons, and subtle shadows.

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| [React.js](https://react.dev/) | Building the user interface |
| [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Application logic and event handling |
| [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling and responsive design |
| [Vite](https://vite.dev/) | Development server and build tool |
| [ESLint](https://eslint.org/) | Code quality and linting |
| [Git](https://git-scm.com/) | Version control |
| [GitHub](https://github.com/) | Source code hosting |
| [Vercel](https://vercel.com/) | Deployment and hosting |

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (compatible with Vite 8)
- npm (comes bundled with Node.js)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/kavinanandr/counter.git
```

### 2. Navigate to the Project Directory

```bash
cd counter
```

### 3. Install Dependencies

```bash
npm install
```

This installs the required dependencies, including React, React DOM, Vite, and ESLint.

### 4. Start the Development Server

```bash
npm run dev
```

Vite will start the local development server.

Open the URL displayed in your terminal (usually):

```text
http://localhost:5173/
```

### 5. Build for Production

To generate an optimized production build, run:

```bash
npm run build
```

The production-ready files will be generated inside the `dist/` directory.

### 6. Preview the Production Build

To preview the production build locally:

```bash
npm run preview
```

### 7. Run ESLint

To check the project for linting issues:

```bash
npm run lint
```

## 📂 Project Structure

```text

counter/
│
├── public/                      # Public static files
│
├── src/                         # Main application source code
│   ├── assets/                  # Static assets used by the application
│   │   └── favicon.png          # Application icon asset
│   │
│   ├── App.jsx                  # Main counter component and application logic
│   ├── index.css                # Global styles and responsive styling
│   └── main.jsx                 # React application entry point
│
├── .gitignore                   # Specifies files and directories Git should ignore
├── eslint.config.js             # ESLint configuration for code quality checks
├── index.html                   # Main HTML template loaded by the browser
├── package.json                 # Project metadata, dependencies and npm scripts
├── package-lock.json            # Locks dependency versions
├── README.md                    # Project documentation
├── vercel.json                  # Vercel deployment configuration
└── vite.config.js               # Vite configuration

```

## ⚙️ How It Works

The application uses React's `useState` Hook to maintain the counter value.

### State Management

```jsx
const [counter, setCounter] = useState(0);
```

- `counter` stores the current counter value.
- `setCounter` updates the counter state.
- `0` is the initial counter value.

### Increment

```jsx
const increment = () => {
  setCounter(counter + 1);
};
```

Increases the counter value by one.

### Decrement

```jsx
const decrement = () => {
  setCounter(counter - 1);
};
```

Decreases the counter value by one.

### Reset

```jsx
const reset = () => {
  setCounter(0);
};
```

Resets the counter value to zero.

React automatically re-renders the component when its state changes, ensuring that the updated counter value is displayed.

## 🎯 Learning Objectives

This project was developed to practice and understand the fundamentals of React development.

Key concepts explored:

- Understanding React functional components.
- Managing component state using the `useState` Hook.
- Handling user interactions through event handlers.
- Updating the UI dynamically through state changes.
- Understanding React's component rendering process.
- Organizing a React project using Vite.
- Applying CSS for layout, styling, and responsiveness.
- Running development and production builds.

## 🚧 Future Improvements

Potential enhancements for future versions:

- Add customizable increment and decrement values.
- Prevent the counter from going below zero (optional setting).
- Add a history of previous counter operations.
- Implement local storage to preserve the counter value after refreshing.
- Introduce animated transitions when the counter changes.

## 👨‍💻 Author

**Kavin Anand**

- GitHub: [@kavinanandr](https://github.com/kavinanandr)
- Repository: [counter](https://github.com/kavinanandr/counter)
- Live Application: [Counter App](https://counter-two-plum.vercel.app/)

---

## 📄 License

This project is open-source. No license has currently been specified for this repository.

---

⭐ If you find this project useful, consider giving it a star!