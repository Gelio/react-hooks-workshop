import { useEffect, useState } from 'react';

import currencyFetchParamsFactory from './currency-fetch-params-factory';
import cancelableFetch from '../utils/cancelable-fetch';

export default function useCurrencyData({
  fromDate,
  toDate,
  baseCurrency,
  foreignCurrencies
}) {
  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState({});

  useEffect(() => {
    setLoading(true);
    const searchParams = currencyFetchParamsFactory({
      fromDate,
      toDate,
      baseCurrency,
      foreignCurrencies
    });

    const [request, cancelRequest] = cancelableFetch(
      `https://api.exchangeratesapi.io/history?${searchParams}`
    );

    request
      .then(response => response.json())
      .then(body => {
        setLoading(false);
        setRates(body.rates);
      });

    return () => {
      cancelRequest();
    };
  }, [fromDate, toDate, baseCurrency, foreignCurrencies]);

  return { loading, rates };
}
