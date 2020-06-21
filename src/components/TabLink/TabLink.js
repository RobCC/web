import React from 'react';
import PropTypes from 'prop-types';

const TabLink = ({ href, children }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

TabLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default TabLink;
