import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Checkbox from './checkbox';
import formatDate from '../utils/format-date';

// NOTE: use the `currencies` array
const currencies = ['USD', 'EUR', 'PLN', 'GBP', 'CHF'];

export default function Controls({ onUpdate }) {
  const [baseCurrency, setBaseCurrency] = useState(currencies[0]);
  const [foreignCurrencies, setForeignCurrencies] = useState([
    currencies[1],
    currencies[2]
  ]);
  const [fromDate, setFromDate] = useState(new Date(2018, 1, 10));
  const [toDate, setToDate] = useState(new Date());

  useEffect(() => {
    onUpdate({
      baseCurrency,
      foreignCurrencies,
      fromDate,
      toDate
    });
  }, [baseCurrency, foreignCurrencies, fromDate, toDate]);

  const onBaseCurrencyChange = useCallback(
    event => {
      setBaseCurrency(event.target.value);

      const index = foreignCurrencies.indexOf(event.target.value);
      if (index !== -1) {
        setForeignCurrencies([
          ...foreignCurrencies.slice(0, index),
          ...foreignCurrencies.slice(index + 1)
        ]);
      }
    },
    [setBaseCurrency, foreignCurrencies, setForeignCurrencies]
  );

  const onFromDateChange = useCallback(
    event => {
      setFromDate(new Date(event.target.value));
    },
    [setFromDate]
  );

  const onToDateChange = useCallback(
    event => {
      setToDate(new Date(event.target.value));
    },
    [setToDate]
  );

  return (
    <div>
      <div>
        Base currency:
        <select value={baseCurrency} onChange={onBaseCurrencyChange}>
          {currencies.map(currency => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div>
        Foreign currencies:
        {currencies.map((currency, index) => (
          <Checkbox
            id={`foreign-${currency}`}
            checked={foreignCurrencies.includes(currency)}
            disabled={currency === baseCurrency}
            key={currency}
            onChange={() => {
              const foreignCurrencyIndex = foreignCurrencies.indexOf(currency);
              if (foreignCurrencyIndex === -1) {
                setForeignCurrencies([...foreignCurrencies, currency]);
              } else {
                setForeignCurrencies([
                  ...foreignCurrencies.slice(0, foreignCurrencyIndex),
                  ...foreignCurrencies.slice(foreignCurrencyIndex + 1)
                ]);
              }
            }}
          >
            {currency}
          </Checkbox>
        ))}
      </div>

      <div>
        From date:{' '}
        <input
          type="date"
          value={formatDate(fromDate)}
          onChange={onFromDateChange}
        />
      </div>
      <div>
        To date:{' '}
        <input
          type="date"
          value={formatDate(toDate)}
          onChange={onToDateChange}
        />
      </div>
    </div>
  );
}

Controls.propTypes = {
  onUpdate: PropTypes.func.isRequired
};
