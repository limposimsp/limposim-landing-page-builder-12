import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureTrackingParamsFromUrl } from "./lib/tracking";

captureTrackingParamsFromUrl();

createRoot(document.getElementById("root")!).render(<App />);
