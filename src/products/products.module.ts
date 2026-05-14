import {Module} from '@nestjs/common';
import {ProductsService} from './services/products.service';
import {ProductsV1Controller} from './controllers/products-v1.controller';
import {ProductsV2Controller} from './controllers/products-v2.controller';

@Module( {
    controllers: [ProductsV1Controller, ProductsV2Controller],
    providers: [ProductsService]})
export class ProductsModule {   
}