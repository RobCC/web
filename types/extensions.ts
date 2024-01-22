type CSSModule = Record<string, string>;

declare module '*.scss' {
  const classes: CSSModule;

  export default classes;
}

declare module '*.png' {
  const value: string;

  export = value;
}

declare module '*.jpg' {
  const value: string;

  export = value;
}
