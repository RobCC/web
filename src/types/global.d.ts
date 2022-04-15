type CSSModule = { [key: string]: string };

type IconProps = {
  size?: string;
  color: string;
};

declare module '*.scss' {
  const classes: CSSModule;

  export default classes;
}
