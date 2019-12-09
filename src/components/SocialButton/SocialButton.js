import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './socialButton.scss';

const SocialButton = ({
  title, href, altIcon, size = 35, color, Icon,
}) => {
  const [isHovered, setHovered] = useState(false);
  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  const buttonStyles = { background: (isHovered ? color : '#1f1f1f') };
  const iconColor = isHovered && altIcon ? '#333' : '#eee';

  return (
    <a
      alt={title}
      href={href}
      style={buttonStyles}
      className={styles.socialButton}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon color={iconColor} size={isHovered ? size + 5 : size} />
    </a>
  );
};

SocialButton.propTypes = {
  altIcon: PropTypes.bool,
  size: PropTypes.number,
  href: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default SocialButton;
