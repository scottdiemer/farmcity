import { Price } from "../components/Price";

export function PriceList({ prices, onSale, salePrices = [] }) {
  return (
    <>
      {prices.map((price, index) => {
        return (
          <div
            key={index.toString()}
            className="text-center text-med font-semibold p-2"
          >
            {onSale ? (
              <div>
                <Price className="text-red-500 ml-2">
                  {`${price.variant.value} Sale: $${salePrices[index].price}`}
                </Price>
                <Price className="ml-2 text-xs font-normal text-gray-400">
                  {`Regular: $${price.price}`}
                </Price>
              </div>
            ) : (
              <Price className="ml-2 font-semibold">
                {`${price.variant.value} $${price.price}`}
              </Price>
            )}
          </div>
        );
      })}
    </>
  );
}
