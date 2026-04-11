import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("app-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    if (savedTheme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      return prefersDark ? "dark" : "light";
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    return prefersDark ? "dark" : "light";
  });

  const [preference, setPreference] = useState(() => {
    return localStorage.getItem("app-theme") || "system";
  });

  useEffect(() => {
    localStorage.setItem("app-theme", preference);

    if (preference === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      return;
    }

    setTheme(preference);
  }, [preference]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      if (preference === "system") {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, [preference]);

  const value = useMemo(
    () => ({
      theme,
      preference,
      setPreference,
    }),
    [theme, preference],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
