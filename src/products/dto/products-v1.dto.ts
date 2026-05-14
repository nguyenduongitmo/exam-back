import { Product } from "../services/products.service";

export class ProductV1Dto {
    id: number;
    title:string;
    price: number;

     constructor(product: Product) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
  }

}