type CSSModule = { [key: string]: string };

declare module '*.scss' {
  const classes: CSSModule;

  export default classes;
}

declare module '*.png' {
  const value: any;

  export = value;
}

declare module '*.jpg' {
  const value: any;

  export = value;
}

type IconProps = {
  size?: string;
  color: string;
};

type Code = string[];

type Extension = 'js' | 'css' | 'json' | 'md' | 'txt';

type ParserModule = {
  regex: RegExp;
  toDOM(snippet: string, theme: CSSModule): JSX.Element;
  parse(...args: any): string;
};
