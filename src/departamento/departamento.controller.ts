import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DepartamentosService } from './departamentos.service';
import { DepartamentoDTO } from './departamento.dto';

@Controller('api/v1/departamentos')
export class DepartamentosController {
  constructor(private departamentosService: DepartamentosService) {}

  @Get()
  todos() {
    return this.departamentosService.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.departamentosService.uno(id);
  }

  @Post()
  insertar(@Body() departamento: DepartamentoDTO) {
    return this.departamentosService.insertar(departamento);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() departamento: DepartamentoDTO) {
    return this.departamentosService.actualizar(id, departamento);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.departamentosService.eliminar(id);
  }
}