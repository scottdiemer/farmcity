function Title({ title, className }) {
  return (
    <div className="mx-auto">
      <h2 className={`p-4 text-3xl text-center ${className}`}>{title}</h2>
    </div>
  );
}

export default Title;
