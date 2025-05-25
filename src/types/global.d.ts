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
    toDOM(snippet: string, theme: Record<string, string>): JSX.Element;
    parse(...args: string[]): string;
  };
}
