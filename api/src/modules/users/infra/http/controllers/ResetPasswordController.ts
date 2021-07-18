import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordService from '@modules/users/service/ResetPasswordService';

export default class ResetPasswordController {
  public async create(request:Request, response:Response):Promise<Response>{
    const { password, token } = request.body;

    const resetPasswordService=container.resolve(ResetPasswordService);

    await resetPasswordService.execute({
      password,
      token,
    })

    return response.status(204).json();
  }
}