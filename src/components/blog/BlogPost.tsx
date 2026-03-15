import { useEffect, useRef } from 'react';
import { marked } from 'marked';

import { Wrapper, Title } from '#/components/blog';

type Props = {
  file: string;
};

type ParsedMarkdown = {
  title: string;
  date: string;
  content: string;
};

function parseMarkdown(markdown: string): ParsedMarkdown {
  const parsedMarkdown = markdown.split('---\n');

  if (!parsedMarkdown) {
    return { title: '', date: '', content: markdown };
  }

  const [, properties, content] = parsedMarkdown;
  const parsedProps: Record<string, string> = {};

  for (const prop of properties.split('\n')) {
    const [key, ...rest] = prop.split(':');

    parsedProps[key.trim()] = rest.join(':').trim();
  }

  return {
    ...(parsedProps as Omit<ParsedMarkdown, 'content'>),
    content,
  };
}

export default function BlogPost({ file }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { title, date, content } = parseMarkdown(file);

  useEffect(() => {
    async function render() {
      if (ref.current) {
        ref.current.innerHTML = await marked.parse(content);
      }
    }

    void render();
  }, [content]);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <h4>{date}</h4>
      <div ref={ref} />
    </Wrapper>
  );
}
