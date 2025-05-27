type ContructorArgs<T extends Record<string, string>> = {
  storageKey: string;
  defaultValue: keyof T;
  dataName: string;
  options: T;
};

class SettingsOptionController<T extends Record<string, string>> {
  private storageKey: string;
  private defaultValue: keyof T;
  private dataName: string;
  public options: T;

  constructor({
    storageKey,
    defaultValue,
    dataName,
    options,
  }: ContructorArgs<T>) {
    this.storageKey = storageKey;
    this.defaultValue = defaultValue;
    this.dataName = dataName;
    this.options = options;
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
  storageKey: '_jrobcc_theme',
  defaultValue: 'onedark',
  dataName: 'theme',
  options: {
    monokai: 'Monokai',
    onedark: 'One Dark Pro',
    darkmodern: 'Dark Modern',
  } as const,
});

export const fontController = new SettingsOptionController({
  storageKey: '_jrobcc_font',
  defaultValue: 'commit',
  dataName: 'font',
  options: {
    fira: 'Fira Code',
    cascadia: 'Cascadia Mono',
    commit: 'Commit Mono',
    ibmPlex: 'IBM Plex Mono',
  } as const,
});
