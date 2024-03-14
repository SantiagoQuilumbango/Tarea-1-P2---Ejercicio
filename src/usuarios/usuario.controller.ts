import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuarioDTO } from './usuario.dto';

@Controller('api/v1/usuarios')
export class UsuariosController {
  constructor(private usuariosService: UsuariosService) {}

  @Get()
  todos() {
    return this.usuariosService.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.usuariosService.uno(id);
  }

  @Post()
  insertar(@Body() usuario: UsuarioDTO) {
    return this.usuariosService.insertar(usuario);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() usuario: UsuarioDTO) {
    return this.usuariosService.actualizar(id, usuario);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.usuariosService.eliminar(id);
  }
}
