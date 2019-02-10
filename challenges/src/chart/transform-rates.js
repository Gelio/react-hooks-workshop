/**
 * Transforms the `rates` object from https://exchangeratesapi.io/ into a format that could be
 * passed to recharts:
 *
 * ```json
 * [
 *   {
 *     "date": "2019-02-10",
 *     "PLN": 3.7891,
 *     "EUR": 0.874
 *   },
 *   {
 *     "date": "2019-02-09",
 *     "PLN": 3.71,
 *     "EUR": 0.84
 *   },
 *   // ...
 * ]
 * ```
 *
 * @param {object[]} rates
 */
export default function transformRates(rates) {
  const ratesArray = Object.keys(rates).map(date => ({
    date,
    ...rates[date]
  }));

  ratesArray.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  })

  return ratesArray;
}

