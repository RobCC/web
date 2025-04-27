declare module '*.scss' {
  const classes: Record<string, string>;

  export default classes;
}
declare module '*.css' {
  const classes: Record<string, string>;

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
