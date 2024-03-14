import { Injectable } from '@nestjs/common';
import { IDepartamento } from './departamento.interface';
import { v4 as uuidV4 } from 'uuid';
import { DepartamentoDTO } from './departamento.dto';

@Injectable()
export class DepartamentosService {
  departamentos: IDepartamento[] = [];

  todos() {
    return this.departamentos;
  }

  uno(id: string) {
    return this.departamentos.find((departamento) => departamento.ID_departamento === id);
  }

  insertar(departamento: DepartamentoDTO) {
    const nuevoDepartamento = {
      ID_departamento: uuidV4(),
      ...departamento,
    };
    this.departamentos.push(nuevoDepartamento);
    return nuevoDepartamento;
  }

  actualizar(id: string, departamentoActualizar: DepartamentoDTO) {
    const nuevoDepartamento = { ID_departamento: id, ...departamentoActualizar };
    this.departamentos = this.departamentos.map((departamento) =>
      departamento.ID_departamento === id ? nuevoDepartamento : departamento,
    );
    return nuevoDepartamento;
  }

  eliminar(id: string) {
    this.departamentos = this.departamentos.filter((departamento) => departamento.ID_departamento !== id);
    return 'Departamento eliminado';
  }
}