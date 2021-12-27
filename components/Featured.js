import Categories from "../constants/categories";
import Title from "../components/Title";

function Featured() {
  return (
    <section className="bg-champagne">
      <Title title="What we offer" />
      <div className="container p-6 mx-auto grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-8">
        <article className="p-4 my-4 overflow-hidden bg-white shadow-xl w-80 rounded-xl">
          <div className="">
            <img src={Categories[0].imageUrl} alt={Categories[0].name} />
          </div>
          <div>
            <h2 className="text-2xl text-center text-olive-drab-camouflage">
              {Categories[0].name}
            </h2>
            <p className="py-2 text-sm">{Categories[0].description}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Featured;
