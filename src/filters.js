import numeral from "numeral";

export const dollarFilter = function(value) {
  if (!value) return "$ 0";
  return numeral(value).format("$ 0.00a");
};

export const percentFilter = function(value) {
  if (!value) return "0%";
  return `${Number(value).toFixed(2)}%`;
};

export const assetImageFilter = function(symbol) {
  if (!symbol) return "";
  return `https://static.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;
};
