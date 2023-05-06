const comment = {
  regex: /\/\/(?<comment>.*?)+/,
  toDOM(snippet, theme) {
    return <span className={theme.comment}>{snippet}</span>;
  },
  parse(text: string) {
    return `// ${text}`;
  },
} satisfies ParserModule;

export default comment;
