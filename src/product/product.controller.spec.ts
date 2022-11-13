import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', async () => {
    it('should return an array of cats', async () => {
      const result = Promise<Product[]>;
      jest.spyOn(controller, 'getProducts').mockImplementation(() => result);

      expect(await controller.getProducts()).toBe(result);
    });
  });
});
