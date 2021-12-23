function Copyright({ name, className }) {
  const year = new Date().getFullYear();
  return (
    <p id="copyright" className={`text-center uppercase ${className}`}>
      copyright &copy; {year} {name}
    </p>
  );
}

export default Copyright;
