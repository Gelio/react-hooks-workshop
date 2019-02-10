import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './checkbox';

// NOTE: use the `currencies` array
const currencies = ['USD', 'EUR', 'PLN', 'GBP', 'CHF'];

export default function Controls({ onUpdate }) {
  /**
   * Call `onUpdate` whenever anything changes to notify the parent of changes
   */

  return (
    <div>
      <div>
        Base currency:
        <select>{/* TODO: render options with currencies */}</select>
      </div>

      <div>
        Foreign currencies:
        {/* TODO: render checkboxes with currencies (disabling the base currency) */}
        <Checkbox
          id="foreign-usd"
          checked={true}
          disabled={false}
          onChange={checked =>
            console.log('The checkbox should now be checked:', checked)
          }
        >
          USD
        </Checkbox>
      </div>

      {/* TODO: add inputs for `fromDate` and `toDate` */}
    </div>
  );
}

Controls.propTypes = {
  onUpdate: PropTypes.func.isRequired
};
