export const PageTitleStyle = "mx-auto p-4 text-3xl lg:text-4xl text-center";

export const calcContainerHeight = (products) =>
  !products || products.length === 0 ? "h-[calc(100vh-397px)]" : "";
