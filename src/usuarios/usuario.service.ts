import { Injectable } from '@nestjs/common';
import { IUsuario } from './usuario.interface';
import { v4 as uuidV4 } from 'uuid';
import { UsuarioDTO } from './usuario.dto';

@Injectable()
export class UsuariosService {
  usuarios: IUsuario[] = [];

  todos() {
    return this.usuarios;
  }

  uno(id: string) {
    return this.usuarios.find((usuario) => usuario.idUsuario === id);
  }

  insertar(usuario: UsuarioDTO) {
    const usr = {
      idUsuario: uuidV4(),
      ...usuario,
    };
    this.usuarios.push(usr);
    return this.usuarios;
  }

  actualizar(id: string, usuarioActualizar: UsuarioDTO) {
    const nuevoUsuario = { idUsuario: id, ...usuarioActualizar };
    this.usuarios = this.usuarios.map((usuario) =>
      usuario.idUsuario === id ? nuevoUsuario : usuario,
    );
    return nuevoUsuario;
  }

  eliminar(id: string) {
    this.usuarios = this.usuarios.filter((usuario) => usuario.idUsuario !== id);
    return 'Usuario eliminado';
  }
}
