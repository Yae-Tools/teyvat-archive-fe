export function formatStatValue(
  value: number,
  isPercentage: boolean,
  roundoffDigits: number
): string {
  let formattedValue = value.toString();

  if (roundoffDigits > 0) {
    formattedValue = parseFloat(formattedValue).toFixed(roundoffDigits);
  }

  //if roundoffDigits is 0, remove the decimal point and roundoffDigits to closest integer
  if (roundoffDigits === 0) {
    formattedValue = Math.round(parseFloat(formattedValue)).toString();
  }
  if (isPercentage) {
    //multiply by 100 and add percentage sign
    formattedValue += "%";
  }

  return formattedValue;
}
