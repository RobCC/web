import React from 'react';
import PropTypes from 'prop-types';

const TabLink = ({ href, className, children }) => (
  <a
    className={className}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

TabLink.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TabLink;
