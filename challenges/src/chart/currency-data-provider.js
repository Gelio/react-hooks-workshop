import PropTypes from 'prop-types';
import useCurrencyData from './use-currency-data';

export default function CurrencyDataProvider({
  fromDate,
  toDate,
  baseCurrency,
  foreignCurrencies,
  children
}) {
  const { loading, rates } = useCurrencyData({
    fromDate,
    toDate,
    baseCurrency,
    foreignCurrencies
  });

  return children({ loading, rates });
}

CurrencyDataProvider.propTypes = {
  children: PropTypes.func.isRequired
};
