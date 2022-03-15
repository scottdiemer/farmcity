function MonthlySpecialDate({ className }) {
  const options = { month: "long", day: "numeric" };
  const date = new Date();
  const startDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).toLocaleString("en-US", options);
  const endDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).toLocaleString("en-US", options);
  return (
    <>
      <p className={className}>{`${startDay} - ${endDay}`}</p>
    </>
  );
}

export default MonthlySpecialDate;
