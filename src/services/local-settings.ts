export function getPalette() {
  const palette = localStorage.getItem("palette");
  if (palette) {
    document.dispatchEvent(
      new CustomEvent("palette-change-request", {
        detail: {
          palette: palette,
          source: "local-storage",
        },
      }),
    );
  }
}

export function getTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    document.dispatchEvent(
      new CustomEvent("theme-change-request", {
        detail: {
          theme: theme,
          source: "local-storage",
        },
      }),
    );
  }
}
