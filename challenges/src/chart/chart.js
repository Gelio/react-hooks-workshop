import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  Legend
} from 'recharts';

import transformRates from './transform-rates';

const lineStrokes = [
  '#8883d8',
  '#82ca9d',
  '#6d888b',
  '#25f486',
  '#d1d91f',
  '#8c0abb',
  '#0cbbde',
  '#ce3507',
  '#5a2b86',
  '#e68c8d'
];

export default function Chart({ rates, foreignCurrencies }) {
  const transformedRates = useMemo(() => transformRates(rates), [rates]);

  return (
    <LineChart width={800} height={500} data={transformedRates}>
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />

      {foreignCurrencies.map((foreignCurrency, index) => (
        <Line
          type="linear"
          dot={false}
          dataKey={foreignCurrency}
          key={foreignCurrency}
          stroke={lineStrokes[index % lineStrokes.length]}
        />
      ))}
    </LineChart>
  );
}

Chart.propTypes = {
  rates: PropTypes.object.isRequired,
  foreignCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired
};
