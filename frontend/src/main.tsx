import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter.tsx";
import Auth0ProviderWithNavigation from "./auth/Auth0ProviderWithNavigation.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigation>
          <AppRouter />
          <Toaster
            visibleToasts={1}
            position="top-right"
            richColors
            closeButton
          />
        </Auth0ProviderWithNavigation>
      </QueryClientProvider>
    </Router>
  </StrictMode>
);
