import Title from "../components/Title";

export default function about(...props) {
  return (
    <section className="bg-tan/50 p-7">
      <div className="container">
        <Title title="About Us" className="text-olive-drab-camouflage" />
        <p className="mx-auto text-center w-100 text-grey-800">
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
