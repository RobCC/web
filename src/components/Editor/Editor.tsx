import EditorLine from '#/components/EditorLine/EditorLine';

type Props = {
  /** File content */
  file: string[];
};

export default function Editor({ file }: Props) {
  const [, ...fileContent] = file;

  return (
    <div>
      {fileContent
        ? fileContent.map((line, i) => (
            <EditorLine
              // eslint-disable-next-line react/no-array-index-key
              key={line + i}
              lineNumber={i + 1}
              shouldAnimate={i === fileContent.length - 1}
              line={line}
            />
          ))
        : ''}
    </div>
  );
}
