import Title from "../components/Title";

export default function about() {
  return (
    <section className="bg-tan/50 p-7 h-1/2">
      <div className="container">
        <Title
          title="About Us"
          className="mx-auto p-4 text-3xl text-center text-shadow"
        />
        <p className="mx-auto text-center text-md md:text-lg lg:text-xl text-grey-800 prose">
          Since Farm City Feed started in 1963, we’ve seen a lot of things
          change. The cattle market on Orange Ave is no longer around, feed now
          comes in by truck not by rail car, and the hitching post in the
          parking lot to tie your horse off has since been removed. While some
          things have changed, one thing has not is the way we do business! We
          believe when you provide good service and prices that are reasonable,
          people will come back.
        </p>
      </div>
    </section>
  );
}
