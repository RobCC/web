export {};

declare global {
  type IconProps = {
    size?: string;
    color: string;
  };

  type Code = string[];

  type Extension = 'js' | 'css' | 'json' | 'md' | 'txt';

  type ParserModule = {
    regex: RegExp;
    toDOM(snippet: string, theme: CSSModule): JSX.Element;
    parse(...args: unknown[]): string;
  };
}
