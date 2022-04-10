type CSSModule = { [key: string]: string };

declare module '*.scss' {
  const classes: CSSModule;

  export default classes;
}
