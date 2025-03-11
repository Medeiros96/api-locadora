import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UsuariosArmazenados } from '../usuario.dm';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class emailUnicoValidator implements ValidatorConstraintInterface {
  constructor(private clsUsuariosArmazenados: UsuariosArmazenados) {}

  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const validarEmail = await this.clsUsuariosArmazenados.validaEmail(value);
    return !validarEmail;
  }
}

export const EmailUnico = (opcaovalidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcaovalidacao,
      constraints: [],
      validator: emailUnicoValidator,
    });
  };
};
