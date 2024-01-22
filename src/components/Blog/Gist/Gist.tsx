import { useState, useEffect } from 'react';

type Props = {
  gist: string;
  file?: string;
};

let stylesheetAdded = false;

function addStylesheet(href: string) {
  if (stylesheetAdded) {
    return;
  }

  stylesheetAdded = true;
  const link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = href;

  document.head.appendChild(link);
}

function composeUrl(gist: string, file: string, gistCallback: string) {
  let url = `https://gist.github.com/${gist}.json?callback=${gistCallback}`;

  if (file) {
    url += `&file=${file}`;
  }

  return url;
}

// TODO: try https://www.npmjs.com/package/react-gist
// From: https://gist.github.com/aVolpe/b364a8fcd10f1ba833d97e9ab278f42c
export default function Gist({ gist, file }: Props) {
  const [src, setSrc] = useState('');
  const [isLoading, toggleLoading] = useState(true);

  useEffect(() => {
    const gistCallback = Gist.nextGistCallback();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)[gistCallback] = (res: any) => {
      toggleLoading(false);
      setSrc(res.div);
      addStylesheet(res.stylesheet);
    };

    // Add the JSONP script tag to the document.
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.src = composeUrl(gist, file, gistCallback);

    document.head.appendChild(script);
  }, [gist, file]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: src }} />;
}

// Each time we request a Gist, we'll need to generate a new
// global function name to serve as the JSONP callback.
let gistCallbackId = 0;

Gist.nextGistCallback = () => {
  const callback = `embed_custom_gist_callback_${gistCallbackId}`;

  gistCallbackId += 1;

  return callback;
};
