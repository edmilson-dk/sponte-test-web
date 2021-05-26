export function formatValueToMoney(value: string) {
  const money = Number(value).toLocaleString("pt-br", { style: "currency", currency: "BRL"});
  return money;
}