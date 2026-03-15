type ContructorArgs<T extends Record<string, string>> = {
  /** The title of the setting, displayed in the UI */
  title: string;
  /** The description of the setting, displayed in the UI */
  description: string;
  /** The key used to store the setting in localStorage */
  storageKey: string;
  /** The default value for the setting */
  defaultValue: keyof T;
  /** The name of the data attribute used to apply the setting */
  dataName: string;
  /** The available options for the setting */
  options: T;
};

const isAppearanceTransition =
  typeof document !== 'undefined' &&
  // @ts-expect-error: Transition API
  document.startViewTransition &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function handleTransition(transitionCb: () => void) {
  if (!isAppearanceTransition) {
    transitionCb();
    return;
  }

  const transition = document.startViewTransition(transitionCb);

  void transition.ready.then(() => {
    document.documentElement.animate(
      {},
      {
        duration: 400,
        easing: 'ease-in',
      },
    );
  });
}

// TODO: this class applies for dropdown-type settings. refactor to support multiple class types (eg. toggle, text)
export class SettingsOptionController<T extends Record<string, string>> {
  private storageKey: string;
  private defaultValue: keyof T;
  private dataName: string;
  public title: string;
  public description: string;
  public options: T;

  constructor({
    title,
    description,
    storageKey,
    defaultValue,
    dataName,
    options,
  }: ContructorArgs<T>) {
    this.title = title;
    this.description = description;
    this.storageKey = storageKey;
    this.defaultValue = defaultValue;
    this.dataName = dataName;
    this.options = options;
  }

  onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    handleTransition(() =>
      this.set(e.target.value as keyof typeof this.options),
    );
  }

  init() {
    let option = window.localStorage.getItem(this.storageKey) as keyof T | null;

    if (!option || !(option in this.options)) {
      option = this.defaultValue;
      window.localStorage.setItem(this.storageKey, option as string);
    }

    document.documentElement.setAttribute(
      `data-${this.dataName}`,
      option as string,
    );
  }

  set(option: keyof T) {
    window.localStorage.setItem(this.storageKey, option as string);
    document.documentElement.setAttribute(
      `data-${this.dataName}`,
      option as string,
    );
  }

  get(): keyof T {
    return window.localStorage.getItem(this.storageKey) as keyof T;
  }
}

export const themeController = new SettingsOptionController({
  title: 'Editor Theme',
  description: 'Specifies the editor theme used.',
  storageKey: '_jrobcc_editor_theme',
  defaultValue: 'onedark',
  dataName: 'editor-theme',
  options: {
    monokai: 'Monokai',
    onedark: 'One Dark Pro',
    darkmodern: 'Dark Modern',
  },
});

export const fontController = new SettingsOptionController({
  title: 'Font Family',
  description: 'Controlls the font famiy.',
  storageKey: '_jrobcc_font',
  defaultValue: 'commit',
  dataName: 'font',
  options: {
    fira: 'Fira Code',
    cascadia: 'Cascadia Mono',
    commit: 'Commit Mono',
    ibmPlex: 'IBM Plex Mono',
  },
});

export const blogThemeController = new SettingsOptionController({
  title: 'Blog Theme',
  description: 'Specifies the blog theme used.',
  storageKey: '_jrobcc_blogTheme',
  defaultValue: 'vscode',
  dataName: 'blog-theme',
  options: {
    vscode: 'VSCode',
    runner: 'Runner',
  },
});
