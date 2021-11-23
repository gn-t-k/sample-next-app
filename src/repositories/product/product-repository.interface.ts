import { isProduct, Product } from "./product";

export type GetAllRequest = {
  name?: string;
  description?: string;
  page: number;
  rows: number;
  order?: "" | "asc" | "desc";
  orderBy?: string;
};

export type GetAllResponse = {
  count: number;
  data: Product[];
};

export type UpdateRequest = Product;

export type UpdateResponse = {
  status: string;
};

export interface IProductRepository {
  getAll: (req: GetAllRequest) => Promise<GetAllResponse>;
  update: (req: UpdateRequest) => Promise<UpdateResponse>;
}

export const isGetAllResponse = (arg: unknown): arg is GetAllResponse => {
  const response = arg as GetAllResponse;

  return (
    typeof response.count === "number" &&
    response.data.every((d) => isProduct(d))
  );
};

export const isUpdateResponse = (arg: unknown): arg is UpdateResponse => {
  const response = arg as UpdateResponse;

  return typeof response.status === "string";
};
