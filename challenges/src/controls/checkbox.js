import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({
  id,
  checked,
  children,
  onChange,
  disabled
}) {
  const onChangeHandler = useCallback(event => onChange(event.target.checked), [
    onChange
  ]);

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
