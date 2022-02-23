export const GridContainer = ({ className, children }) => (
  <div
    className={`container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}
  >
    {children}
  </div>
);
