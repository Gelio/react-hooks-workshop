import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({
  id,
  checked,
  children,
  onChange,
  disabled
}) {
  // TODO: use `useCallback` to avoid creating new event handler references
  const onChangeHandler = event => onChange(event.target.checked);

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChangeHandler}
        disabled={disabled}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};
