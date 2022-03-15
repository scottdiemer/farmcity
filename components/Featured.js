import Image from "next/image";
import { Card } from "../components/Card";
import { Description } from "../components/Description";
import { GridContainer } from "../components/GridContainer";
import SlideInWhenVisible from "../components/SlideInWhenVisible";
import Title from "../components/Title";
import Categories from "../data/categories";

function Featured() {
  return (
    <section className="bg-shadow overflow-hidden">
      <Title
        className="mx-auto p-6 text-3xl lg:text-4xl text-center text-champagne"
        title="What we offer"
      />
      <GridContainer className="p-2 md:p-4 lg-p-6">
        {Categories.map((category, index) => {
          const { title, description, imageUrl } = category;
          return (
            <SlideInWhenVisible number={index} key={index.toString()}>
              <Card>
                <Image
                  src={imageUrl}
                  width="100%"
                  height="50%"
                  layout="responsive"
                  objectFit="cover"
                  alt={title}
                />
                <div className="p-4">
                  <Title
                    className="text-2xl lg:text-3xl text-center text-olive-drab-camouflage"
                    title={title}
                  />
                  <Description
                    className="py-2 md:min-h-[130px] lg:min-h-[175px] text-center prose lg:prose-lg"
                    description={description}
                  />
                </div>
              </Card>
            </SlideInWhenVisible>
          );
        })}
      </GridContainer>
    </section>
  );
}

export default Featured;
