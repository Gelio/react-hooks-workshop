import React, { Component } from 'react';
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

import cancelableFetch from '../utils/cancelable-fetch';
import currencyFetchParamsFactory from './currency-fetch-params-factory';
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

/**
 * TODO: convert `Chart` to a function component.
 *
 * While refactoring it, you may split it into 2 components:
 * A `CurrencyDataProvider` that fetches the data from the API (maybe use a render-prop?)
 * A `Chart` that displays the fetched data
 */
class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      rates: []
    };

    this.cancelRequest = null;
  }

  async componentDidMount() {
    const { fromDate, toDate, baseCurrency, foreignCurrencies } = this.props;

    const searchParams = currencyFetchParamsFactory({
      fromDate,
      toDate,
      baseCurrency,
      foreignCurrencies
    });

    /**
     * TODO: when refactoring, use `cancelRequest` when necessary to avoid wasting bandwidth and
     * prevent unexpected side-effects
     */
    const [request, cancelRequest] = cancelableFetch(
      `https://api.exchangeratesapi.io/history?${searchParams}`
    );
    this.cancelRequest = cancelRequest;

    const response = await request;
    const body = await response.json();

    this.setState({
      rates: body.rates,
      loading: false
    });
    this.cancelRequest = null;
  }

  /**
   * NOTE: Do you notice a bug with the `Chart` component?
   * What would happen if `props` change?
   * Would the request be sent again?
   *
   * SPOILER:
   * No, `componentDidUpdate` is not implemented.
   */

  componentWillUnmount() {
    if (this.cancelRequest) {
      this.cancelRequest();
    }
  }

  render() {
    const { loading, rates } = this.state;
    const { foreignCurrencies } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    /**
     * Potentially heavy computation can be cached
     * TODO: `useMemo`
     */
    const transformedRates = transformRates(rates);

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
}

Chart.propTypes = {
  fromDate: PropTypes.instanceOf(Date).isRequired,
  toDate: PropTypes.instanceOf(Date).isRequired,
  baseCurrency: PropTypes.string.isRequired,
  foreignCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Chart;
