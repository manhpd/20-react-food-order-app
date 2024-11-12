export function formatCurrency(amount: number, country: string, currency: string) {
  return new Intl.NumberFormat(country, { style: 'currency', currency: currency }).format(amount);
}