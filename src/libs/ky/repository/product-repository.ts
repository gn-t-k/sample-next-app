import ky from "ky";
import {
  GetAllRequest,
  GetAllResponse,
  IProductRepository,
  isGetAllResponse,
  isUpdateResponse,
  UpdateRequest,
  UpdateResponse,
} from "repositories/product/product-repository.interface";

export class ProductRepository implements IProductRepository {
  public getAll = async (req: GetAllRequest): Promise<GetAllResponse> => {
    const result = await ky.get(`products`, { searchParams: req }).json();

    if (isGetAllResponse(result)) {
      return result;
    }

    throw new Error("API Error");
  };

  public update = async (req: UpdateRequest): Promise<UpdateResponse> => {
    const result = await ky
      .put("products/put", { searchParams: { id: req.id }, json: req })
      .json();

    if (isUpdateResponse(result)) {
      return result;
    }

    throw new Error("API Error");
  };
}
