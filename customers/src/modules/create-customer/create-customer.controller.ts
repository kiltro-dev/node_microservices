import { Request, Response } from 'express';
import { CreateCustomerUseCase } from './create-customer.usecase';

export class CreateCustomerController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const useCase = new CreateCustomerUseCase();
    try {
      const result = await useCase.execute(req.body);
      return res.status(201).json(res);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}
