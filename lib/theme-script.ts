export const themeInitializationScript = `
  (() => {
    try {
      const saved = localStorage.getItem("bill-bee-theme");
      const theme = saved === "dark" || saved === "light"
        ? saved
        : matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      const root = document.documentElement;
      root.classList.toggle("dark", theme === "dark");
      root.dataset.theme = theme;
      root.style.colorScheme = theme;
    } catch {}
  })();
`;
