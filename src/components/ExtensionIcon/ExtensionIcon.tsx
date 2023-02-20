import classNames from 'classnames';

import styles from './extensionIcon.scss';

type Props = {
  Icon: React.FC;
  extension: Extension;
  className?: string;
  props?: React.SVGProps<SVGSVGElement>;
};

export default function ExtensionIcon({
  Icon,
  extension,
  className = '',
  props = {},
}: Props) {
  return (
    <div className={classNames(styles.icon, styles[extension], className)}>
      <Icon {...props} />
    </div>
  );
}
