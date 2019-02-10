/**
 * Makes a `fetch` GET request to a given URL that can be cancelled.
 *
 * @param {string} url
 */
export function cancelableFetch(url) {
  const abortController = new AbortController();

  return [
    fetch(url, { signal: abortController.signal }),
    () => abortController.abort()
  ];
}
