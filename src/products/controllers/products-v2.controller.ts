import {Controller, Get, Header, Param} from '@nestjs/common';
import {ProductsService} from '../services/products.service';
import {ProductV2Dto} from '../dto/products-v2.dto';

@Controller('api/v2/products')
export class ProductsV2Controller {
    constructor(private readonly productsService: ProductsService) {}
@Get()
findAll(): ProductV2Dto[] {
    const products = this.productsService.findAll();
    return products.map(product => new ProductV2Dto(product));
  }

@Get(':id')
findOne(@Param('id') id: number): ProductV2Dto {
    const product = this.productsService.findOne(+id);
    if (!product) {
        throw new Error('Product not found');
    }
    return new ProductV2Dto(product);
}

}
