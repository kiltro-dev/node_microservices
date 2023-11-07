import { prismaClient } from '../../infra/database/prisma-client';

type CreateProductRequest = {
  name: string;
  code: string;
  quatity: number;
  price: number;
};

export class CreateProductUseCase {
  constructor() {}

  async execute(data: CreateProductRequest) {
    const product = await prismaClient.product.findFirst({
      where: {
        code: data.code,
      },
    });

    if (product) throw new Error('Product already exists!');

    const productCreated = await prismaClient.product.create({
      data: {
        ...data,
      },
    });

    return productCreated;
  }
}
