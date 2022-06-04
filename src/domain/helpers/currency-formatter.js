import config from "../config";

const PRICE_TYPES = {
  STANDARD: "standard",
  PROMOTION: "promotion",
  PERCENTAGE: "percentage",
};

function evaluatePercentage(promotion, original) {
  return (100 - (promotion * 100) / original).toFixed(2);
}

export const formatter = function (amount) {
  const numberFormat = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: `${config.currency}`,
    useGrouping: true,
    maximumSignificantDigits: 3,
  });
  return `$ ${numberFormat.format(amount)}`;
};

export const getPrices = function (prices) {
  const pricesFormatted = {
    standard: 0,
    promotion: 0,
    percentage: 0,
  };

  prices.prices.forEach((price) => {
    pricesFormatted[price.type] = price.amount;
  });

  if (pricesFormatted.promotion) {
    pricesFormatted[PRICE_TYPES.PERCENTAGE] = evaluatePercentage(
      pricesFormatted[PRICE_TYPES.PROMOTION],
      pricesFormatted[PRICE_TYPES.STANDARD]
    );
  }

  return pricesFormatted;
};
