import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ID } from 'src/common';
import { FileEntity } from './entities';
import { FilesService } from './files.service';

@Controller()
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  createOne(@UploadedFile() file: Express.Multer.File): Promise<FileEntity> {
    return this.filesService.createOne(file);
  }

  @Get(':id')
  findOne(@Param() conditions: ID): Promise<FileEntity> {
    return this.filesService.findOne(conditions);
  }

  @Delete(':id')
  deleteOne(@Param() conditions: ID) {
    return this.filesService.deleteOne(conditions);
  }
}
