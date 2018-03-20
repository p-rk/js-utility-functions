export const CamelCaseString = (data) => {
  const x = data.toLowerCase();
  const pp = x.split(' ');
  return pp.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export const LocalCurrencyFormat = (amount, formatIn) => {
  const price = Number(amount);
  return price.toLocaleString(`en-${formatIn}`, { maximumFractionDigits: 0, currency: 'INR'});
}
