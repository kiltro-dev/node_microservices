import { Request, Response } from 'express';
import { CreateCustomerUseCase } from './create-customer.usecase';

export class CreateCustomerController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const useCase = new CreateCustomerUseCase();
    try {
      const result = await useCase.execute(req.body);
      return res.status(201).json(result);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}
