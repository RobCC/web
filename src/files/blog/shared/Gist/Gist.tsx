import EmbedGist from 'react-embed-gist';

import styles from './gist.scss';

type Props = {
  id: string;
  file?: string;
  title?: boolean;
};

export default function Gist({ id, file, title = false }: Props) {
  return (
    <EmbedGist
      gist={id}
      file={file}
      titleClass={!title ? styles.noTitle : ''}
    />
  );
}
