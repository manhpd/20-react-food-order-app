export function formatCurrency(amount: number, country: string ='uen-us', currency: string = 'usd') {
  return new Intl.NumberFormat(country, { style: 'currency', currency: currency }).format(amount);
}