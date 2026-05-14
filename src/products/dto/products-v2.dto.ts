import { Product } from "../services/products.service";

export class ProductV2Dto{
    id:number;
    title:string;
    price:number;
    description: string;
    meta: {url: string;
          type: string;
    };


    constructor(product: Product) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    // có thể tự tạo description dựa trên thông tin có sẵn
    this.description = `Detailed description for product: ${product.title}. It's an amazing product with id ${product.id}.`;
    this.meta = {
      // Sử dụng template string đúng cách (dấu backtick `)
      url: `/api/v2/products/${product.id}`,
      type: 'product'
    };
  }

}
