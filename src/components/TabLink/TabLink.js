import React from 'react';
import PropTypes from 'prop-types';

function TabLink({ href, className, children }) {
  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}

TabLink.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TabLink;
