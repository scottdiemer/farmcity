import Image from "next/image";
import { Card } from "../components/Card";
import { Description } from "../components/Description";
import { GridContainer } from "../components/GridContainer";
import { onSaleCheck } from "../lib/products";
import { PriceList } from "../components/PriceList";
import SlideInWhenVisible from "../components/SlideInWhenVisible";
import Title from "../components/Title";

export function ProductList({ products }) {
  return (
    <GridContainer className="p-2 md:p-4 lg-p-6">
      {products.map((product, index) => {
        const {
          id,
          name,
          summary,
          productImage,
          prices,
          sale,
          saleStart,
          saleEnd,
          salePrices,
        } = product;
        const { url } = productImage;
        const serverUrl = process.env.SERVER_URL;
        const onSale = onSaleCheck(sale, saleStart, saleEnd);
        return (
          <SlideInWhenVisible number={index} key={id}>
            <Card>
              <div className="w-48 m-4 mx-auto">
                <Image
                  src={serverUrl.concat(url)}
                  width={250}
                  height={250}
                  layout="intrinsic"
                  objectFit="contain"
                />
              </div>
              <div className="p-4 flex flex-col text-center md:min-h-[360px] lg:min-h-[420px]">
                <Title
                  className="text-2xl text-center text-olive-drab-camouflage"
                  title={name}
                />
                <Description className="m-4  prose" description={summary} />
                <PriceList
                  prices={prices}
                  onSale={onSale}
                  salePrices={salePrices}
                />
              </div>
            </Card>
          </SlideInWhenVisible>
        );
      })}
    </GridContainer>
  );
}
