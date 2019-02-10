/**
 * @param {Date} date
 */
export default function formatDate(date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map(x => padLeft(2, x.toString()))
    .join('-');
}

function padLeft(targetLength, paddedString, padding = '0') {
  return (
    new Array(Math.max(targetLength - paddedString.length, 0))
      .fill(padding)
      .join('') + paddedString
  );
}
