export type File = {
  readonly type: 'file';
  readonly name: string;
  readonly content: Code | React.FC<unknown>;
  readonly metadata: {
    extension: Extension;
  };
};

/** Matches extension for file names. */
const FILE_EXTENSION_REGEX = /\.([0-9a-z]+)$/;

function getExtension(name: string) {
  const [, extension] = name.match(FILE_EXTENSION_REGEX) ?? [];

  return extension as Extension;
}

function getMetadata(name: string) {
  const extension = getExtension(name);

  return {
    extension,
  };
}

export function create(name: string, content: File['content']): File {
  const metadata = getMetadata(name);

  return {
    type: 'file',
    name,
    content,
    metadata,
  };
}
