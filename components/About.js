import { PageTitleStyle } from "../components/Styles";
import Title from "../components/Title";

export default function About({ className }) {
  const paragraphStyle =
    "mx-auto py-2 md:py-4 lg:py-6 text-center text-md md:text-lg lg:text-xl text-grey-800 prose";
  return (
    <section className={className}>
      <div className="container">
        <Title
          title="About Us"
          className={PageTitleStyle.concat(" text-shadow")}
        />
        <p className={paragraphStyle}>
          Since Farm City Feed started in 1963, we’ve seen a lot of things
          change. The cattle market on Orange Ave is no longer around, feed now
          comes in by truck not by rail car, and the hitching post in the
          parking lot to tie your horse off has since been removed. While some
          things have changed, one thing that has not is the way we do business!
          We believe when you provide good service and prices that are
          reasonable, people will come back.
        </p>
      </div>
    </section>
  );
}
