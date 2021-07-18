import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/service/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(request:Request, response:Response):Promise<Response>{
    const { email, password } = request.body;

    const sendForgotPasswordEmailService=container.resolve(SendForgotPasswordEmailService);

    await sendForgotPasswordEmailService.execute({
      email,
    })
    return response.status(204).json();
  }
}