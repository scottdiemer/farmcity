import Image from "next/image";
import { onSaleCheck } from "../lib/products";
import { Card } from "../components/Card";
import { Price } from "../components/Price";
import { Description } from "../components/Description";
import { GridContainer } from "../components/GridContainer";
import Title from "../components/Title";
import SlideInWhenVisible from "../components/SlideInWhenVisible";

export function ProductList({ products }) {
  return (
    <GridContainer>
      {products.map((product, index) => {
        const {
          id,
          name,
          description,
          productImage,
          prices,
          sale,
          saleStart,
          saleEnd,
          salePrices,
        } = product;
        const { url } = productImage;
        const onSale = onSaleCheck(sale, saleStart, saleEnd);
        const serverUrl = process.env.SERVER_URL;
        return (
          <SlideInWhenVisible number={index} key={id}>
            <Card>
              <div className="w-48 m-8 mx-auto">
                <Image
                  src={serverUrl.concat(url)}
                  width={250}
                  height={250}
                  layout="intrinsic"
                  objectFit="contain"
                />
              </div>
              <div className="p-4">
                <Title
                  className="text-2xl text-center text-olive-drab-camouflage"
                  title={name}
                />
                <Description
                  className="m-4 prose line-clamp-4"
                  description={description.document}
                />
                {prices.map((price, index) => {
                  return (
                    <div
                      key={index.toString()}
                      className="flex justify-end text-med font-semibold p-2"
                    >
                      <div>{price.variant.value}</div>
                      {onSale ? (
                        <>
                          <Price className="text-red-500 ml-2">
                            {`Sale: $${salePrices[0].price}`}
                          </Price>
                          <Price className="line-through ml-2 font-normal text-gray-300">
                            {`Was: $${price.price}`}
                          </Price>
                        </>
                      ) : (
                        <Price className="ml-2 font-bold font-normal">
                          {`$${price.price}`}
                        </Price>
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          </SlideInWhenVisible>
        );
      })}
    </GridContainer>
  );
}
