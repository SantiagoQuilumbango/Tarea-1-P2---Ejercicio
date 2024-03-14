import { IsNotEmpty, IsString } from 'class-validator';

export class RolDTO {
  @IsNotEmpty({ message: 'El campo IdRoles es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  idRoles: string;

  @IsNotEmpty({ message: 'El campo Rol es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  rol: string;
}
