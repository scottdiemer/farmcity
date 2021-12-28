function Copyright({ name, className }) {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center">
      <small id="copyright" className={`uppercase ${className}`}>
        copyright &copy; {year} {name}. All Rights Reserved
      </small>
    </div>
  );
}

export default Copyright;
