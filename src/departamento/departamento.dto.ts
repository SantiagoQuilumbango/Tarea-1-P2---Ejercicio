import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class DepartamentoDTO {
  @IsNotEmpty({ message: 'El campo ID_departamento es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  ID_departamento: string;

  @IsNotEmpty({ message: 'El campo Nombre es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  Nombre: string;

  @IsNotEmpty({ message: 'El campo Ubicación es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  Ubicación: string;

  @IsNotEmpty({ message: 'El campo Presupuesto es requerido' })
  @IsNumber({}, { message: 'Se necesita un número' })
  Presupuesto: number;

  @IsNotEmpty({ message: 'El campo Jefe es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  Jefe: string;
}

