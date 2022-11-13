import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dtos/create-poduct.dto';
import { FilterProductDTO } from './dtos/filter-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {
    productModel;
  }
  async getFilteredProducts(
    filterProductDTO: FilterProductDTO,
  ): Promise<Product[]> {
    const { category, search } = filterProductDTO;
    let products = await this.getAllProducts();
    try {
      if (search) {
        products = products.filter(
          (product) =>
            product.name.includes(search) ||
            product.description.includes(search),
        );
      }

      if (category) {
        products = products.filter((product) => product.category === category);
      }

      return products;
    } catch (error) {}
  }

  async getAllProducts(): Promise<Product[]> {
    try {
      const products = await this.productModel.find().exec();
      return products;
    } catch (error) {}
  }

  async getProduct(id: string): Promise<Product> {
    try {
      const product = await this.productModel.findById(id).exec();
      return product;
    } catch (error) {}
  }

  async addProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    try {
      const newProduct = await this.productModel.create(createProductDTO);
      return newProduct.save();
    } catch (error) {}
  }

  async updateProduct(
    id: string,
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    try {
      const updatedProduct = await this.productModel.findByIdAndUpdate(
        id,
        createProductDTO,
        { new: true },
      );
      return updatedProduct;
    } catch (error) {}
  }

  async deleteProduct(id: string): Promise<any> {
    try {
      const deletedProduct = await this.productModel.findByIdAndRemove(id);
      return deletedProduct;
    } catch (error) {}
  }
}
