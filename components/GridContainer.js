export const GridContainer = ({ children }) => (
  <div className="container p-6 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {children}
  </div>
);
