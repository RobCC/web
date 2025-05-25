export type File = {
  readonly type: 'file';
  readonly name: string;
  readonly content: Code | React.FC<unknown>;
  readonly visible: boolean;
  readonly metadata: {
    extension: Extension;
  };
};

type FileOptions = {
  visible?: boolean;
};

/** Matches extension for file names. */
const FILE_EXTENSION_REGEX = /\.([0-9a-z]+)$/;

function getExtension(name: string) {
  const [, extension] = name.match(FILE_EXTENSION_REGEX) ?? [];

  return extension as Extension;
}

function getMetadata(name: string) {
  return {
    extension: getExtension(name) ?? '',
  };
}

export function create(
  name: string,
  content: File['content'],
  options?: FileOptions,
): File {
  const { visible = true } = options ?? {};
  const metadata = getMetadata(name);

  return {
    type: 'file',
    name,
    visible,
    content,
    metadata,
  };
}
