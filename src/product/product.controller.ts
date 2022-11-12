import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDTO } from './dtos/create-poduct.dto';
import { FilterProductDTO } from './dtos/filter-product.dto';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
@ApiTags('product')
@Controller('mall/product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @ApiOperation({
    summary:
      'This Api will filters the products based on category or name of the product',
  })
  @Get('/:search/:category')
  async getProducts(@Param() filter: FilterProductDTO): Promise<Product[]> {
    try {
      if (Object.keys(filter)) {
        const filteredProducts =
          this.productService.getFilteredProducts(filter);
        return filteredProducts;
      } else {
        const allProducts = await this.productService.getAllProducts();
        return allProducts;
      }
    } catch (error) {}
  }
  @ApiOperation({
    summary: 'This Api will gets you information about single product',
  })
  @Get('/get-product/:id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    try {
      const product = await this.productService.getProduct(id);
      if (!product) throw new NotFoundException('Product does not exist!');
      return product;
    } catch (error) {}
  }
  @ApiOperation({
    summary: 'This Api will create new Product',
  })
  @Post('/create-product')
  async addProduct(@Body() createProductDTO: CreateProductDTO) {
    try {
      const product = await this.productService.addProduct(createProductDTO);
      return product;
    } catch (error) {}
  }
  @ApiOperation({
    summary:
      'This Api will update information of the product in the database based on product ID ',
  })
  @Put('/update-product/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() createProductDTO: CreateProductDTO,
  ) {
    try {
      const product = await this.productService.updateProduct(
        id,
        createProductDTO,
      );
      if (!product) throw new NotFoundException('Product does not exist!');
      return product;
    } catch (error) {}
  }
  @ApiOperation({
    summary:
      'This Api will delete the product from database based on product ID',
  })
  @Delete('/delete-product/:id')
  async deleteProduct(@Param('id') id: string) {
    try {
      const product = await this.productService.deleteProduct(id);
      if (!product) throw new NotFoundException('Product does not exist');
      return product;
    } catch (error) {}
  }
}
