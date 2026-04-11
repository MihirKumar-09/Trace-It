import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { ReportProvider } from "./Context/ReportContext.jsx";
import { SocketProvider } from "./Context/SocketContext.jsx";
import { ThemeProvider, useTheme } from "./Context/ThemeContext.jsx";

function AppProviders() {
  const { theme } = useTheme();

  return (
    <Theme appearance={theme} className="h-full w-full">
      <AuthProvider>
        <SocketProvider>
          <ReportProvider>
            <App />
          </ReportProvider>
        </SocketProvider>
      </AuthProvider>
    </Theme>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AppProviders />
    </ThemeProvider>
  </StrictMode>,
);
