import EditorLine from '#/components/EditorLine/EditorLine';

type Props = {
  /** File content */
  file: string[];
};

export default function Editor({ file }: Props) {
  return (
    <div>
      {file
        ? file.map((line, i) => (
            <EditorLine
              key={line + i}
              lineNumber={i + 1}
              shouldAnimate={i === file.length - 2}
              line={line}
            />
          ))
        : ''}
    </div>
  );
}
