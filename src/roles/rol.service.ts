import { Injectable } from '@nestjs/common';
import { IRol } from './rol.interface';
import { v4 as uuidV4 } from 'uuid';
import { RolDTO } from './rol.dto';

@Injectable()
export class RolesService {
  roles: IRol[] = [];

  todos() {
    return this.roles;
  }

  uno(id: string) {
    return this.roles.find((rol) => rol.idRoles === id);
  }

  insertar(rol: RolDTO) {
    const newRol = {
      idRoles: uuidV4(),
      ...rol,
    };
    this.roles.push(newRol);
    return newRol;
  }

  actualizar(id: string, rolActualizar: RolDTO) {
    const nuevoRol = { idRoles: id, ...rolActualizar };
    this.roles = this.roles.map((rol) =>
      rol.idRoles === id ? nuevoRol : rol,
    );
    return nuevoRol;
  }

  eliminar(id: string) {
    this.roles = this.roles.filter((rol) => rol.idRoles !== id);
    return 'Rol eliminado';
  }
}