export type Product = {
  name: string;
  description: string;
  id: number;
  quantity: number;
};

export const isProduct = (arg: unknown): arg is Product => {
  const product = arg as Product;

  return (
    typeof product.name === "string" &&
    typeof product.description === "string" &&
    typeof product.id === "number" &&
    typeof product.quantity === "number"
  );
};
