const KEY = '_jrobcc_theme';

export const THEMES = {
  monokai: 'Monokai',
  onedark: 'One Dark Pro',
} as const;

function init() {
  let theme = window.localStorage.getItem(KEY);

  if (!theme) {
    theme = 'monokai';
    window.localStorage.setItem(KEY, theme);
  }

  document.documentElement.setAttribute('data-theme', theme);
}

function set(theme: keyof typeof THEMES) {
  window.localStorage.setItem(KEY, theme);
  document.documentElement.setAttribute('data-theme', theme);
}

function get() {
  return window.localStorage.getItem(KEY) as keyof typeof THEMES;
}

export default {
  THEMES,
  init,
  set,
  get,
};
