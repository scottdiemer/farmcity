import Card from "../components/Card";
import Categories from "../constants/categories";
import Title from "../components/Title";
import SlideInWhenVisible from "../components/SlideInWhenVisible";

function Featured() {
  return (
    <section className="bg-shadow">
      <Title className="text-champagne" title="What we offer" />
      <div className="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Categories.map((category, index) => {
          return (
            <SlideInWhenVisible number={index} key={index}>
              <Card
                title={category.title}
                description={category.description}
                imageUrl={category.imageUrl}
              />
            </SlideInWhenVisible>
          );
        })}
      </div>
    </section>
  );
}

export default Featured;
