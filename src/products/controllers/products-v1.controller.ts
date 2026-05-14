import { Controller, Get, Param, Header } from '@nestjs/common';
import {ProductsService} from '../services/products.service';
import {ProductV1Dto} from '../dto/products-v1.dto';

@Controller('api/v1/products')
export class ProductsV1Controller {
    constructor(private readonly productsService: ProductsService) {}
@Get()
@Header('Deprecation', 'true')

findAll(): ProductV1Dto[] {
    const products = this.productsService.findAll();
    return products.map(product => new ProductV1Dto(product));
}

@Get(':id')
@Header('Deprecation', 'true')
findOne(@Param('id') id: number): ProductV1Dto {
    const product = this.productsService.findOne(+id);
    if (!product) {
        throw new Error('Product not found');
    }
    return new ProductV1Dto(product);
}

}
