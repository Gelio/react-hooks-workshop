import formatDate from '../utils/format-date';

/**
 * Creates the querystring for https://exchangeratesapi.io/ based on provided parameters
 *
 * @param {{ fromDate: Date, toDate: Date, baseCurrency: string, foreignCurrencies: string[] }} param0
 */
export default function currencyFetchParamsFactory({
  fromDate,
  toDate,
  baseCurrency,
  foreignCurrencies
}) {
  const symbols = foreignCurrencies.join(',');

  return [
    `start_at=${formatDate(fromDate)}`,
    `end_at=${formatDate(toDate)}`,
    `base=${baseCurrency}`,
    `symbols=${symbols}`
  ].join('&');
}
