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

type EditorFile = string[];

type AppFileContent = EditorFile | React.FC<unknown>;

type AppFile = [string, AppFileContent];

type AppFolder = [string, Map<string, AppFileContent | AppFolder[1]>];

type AppFolderContent = AppFolder[1];
