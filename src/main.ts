import "./index.css";

import "./router.js";

import { homePanel } from "./pages/home-panel/page.js";
import { practicalsPanel } from "./pages/practicals-panel/page.js";
import { settingsPanel } from "./pages/settings-panel/page.js";
import { getPalette, getTheme } from "./services/local-settings.js";

homePanel.dataset.index = "0";
practicalsPanel.dataset.index = "1";
settingsPanel.dataset.index = "2";

document.addEventListener("DOMContentLoaded", () => {
  getPalette();
  getTheme();
});
