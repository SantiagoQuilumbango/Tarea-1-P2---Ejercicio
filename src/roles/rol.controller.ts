import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolDTO } from './rol.dto';

@Controller('api/v1/roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  todos() {
    return this.rolesService.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.rolesService.uno(id);
  }

  @Post()
  insertar(@Body() rol: RolDTO) {
    return this.rolesService.insertar(rol);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() rol: RolDTO) {
    return this.rolesService.actualizar(id, rol);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.rolesService.eliminar(id);
  }
}
