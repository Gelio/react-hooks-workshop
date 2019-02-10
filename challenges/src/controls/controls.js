import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './checkbox';

const currencies = ['USD', 'EUR', 'PLN', 'GBP', 'CHF'];

export default function Controls({ onUpdate }) {
  return (
    <div>
      <div>
        Base currency:
        <select>{/* TODO: render options with currencies */}</select>
      </div>

      <div>
        Foreign currencies:
        <Checkbox id="foreign-usd" checked={true}>
          USD
        </Checkbox>
      </div>
    </div>
  );
}

Controls.propTypes = {
  onUpdate: PropTypes.func.isRequired
};
