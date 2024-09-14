import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter.tsx";
import Auth0ProviderWithNavigation from "./auth/Auth0ProviderWithNavigation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderWithNavigation>
        <AppRouter />
      </Auth0ProviderWithNavigation>
    </Router>
  </StrictMode>
);
