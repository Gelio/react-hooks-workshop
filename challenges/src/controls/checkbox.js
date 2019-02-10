import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ id, checked, children }) {
  return (
    <div>
      <input type="checkbox" id={id} checked={checked} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
