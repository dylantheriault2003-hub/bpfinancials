import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// No StrictMode: its dev-only double-invoke of effects fights GSAP's reveal
// tweens (leaves elements stuck at opacity 0). Production is unaffected either way.
createRoot(document.getElementById("root")).render(<App />);
