import {Injectable} from '@nestjs/common';

export interface Product {
  id: number;
  title: string;
  price: number;
} 

@Injectable()
export class ProductsService {
    private products: Product[] = [
        {id: 1, title: 'Product 1', price: 10},
        {id: 2, title: 'Product 2', price: 20},
        {id: 3, title: 'Product 3', price: 30},
    ];

    findAll(){
        return this.products;
    }

    findOne(id:number){
        return this.products.find(p => p.id === id);
    }
}

