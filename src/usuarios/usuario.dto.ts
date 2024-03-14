import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class UsuarioDTO {
  @IsNotEmpty({ message: 'El campo idUsuario es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  idUsuario: string;
  
  @IsNotEmpty({ message: 'El campo Nombres es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  Nombres: string;
  
  @IsNotEmpty({ message: 'El campo Apellidos es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  Apellidos: string;
  
  @IsNotEmpty({ message: 'El campo contrasenia es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  contrasenia: string;
  
  @IsNotEmpty({ message: 'El campo Correo es requerido' })
  @IsEmail({}, { message: 'Ingrese un correo electrónico válido' })
  Correo: string;
  
  @IsNotEmpty({ message: 'El campo Cedula es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  Cedula: string;
}
