import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { DataProvider } from "./context/DataContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { PostHogProvider } from "posthog-js/react";
import App from "./App.jsx";
import "./index.css";

const options = {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  autocapture: false,
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_POSTHOG_KEY} options={options}>
      <BrowserRouter>
        <AuthProvider>
          <DataProvider>
            <App />
          </DataProvider>
        </AuthProvider>
      </BrowserRouter>
    </PostHogProvider>
  </StrictMode>
);
