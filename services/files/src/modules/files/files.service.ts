import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FileTypeEnum } from './enums/file-type.enum';
import { STATIC_FOLDER_PATH } from './files.constants';
import * as path from 'path';
import * as uuid from 'uuid';
import * as fs from 'fs/promises';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './entities';
import { FindOptionsWhere, Repository } from 'typeorm';
import { ErrorMessagesEnum } from 'src/common';

@Injectable()
export class FilesService {
  private readonly HOST = this.configService.get('NEST_HOST');
  private readonly PORT = this.configService.get('NEST_PORT');
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(FileEntity)
    private readonly fileEntityRepository: Repository<FileEntity>,
  ) {}

  async createOne(file: Express.Multer.File) {
    const fileEntity = await this.writeFile(file);
    const entityToCreate = this.fileEntityRepository.create(fileEntity);
    const { id } = await this.fileEntityRepository
      .save(entityToCreate)
      .catch(() => {
        throw new BadRequestException(ErrorMessagesEnum.INPUT_DATA_ERROR);
      });
    return this.findOne({ id });
  }

  findOne(conditions: FindOptionsWhere<FileEntity>): Promise<FileEntity> {
    return this.fileEntityRepository
      .findOneOrFail({
        where: conditions,
      })
      .catch(() => {
        throw new NotFoundException(ErrorMessagesEnum.FILE_NOT_FOUND);
      });
  }

  async deleteOne(
    conditions: FindOptionsWhere<FileEntity>,
  ): Promise<FileEntity> {
    const entity = await this.findOne(conditions);

    await this.removeFile(entity.fileNameWithExt);

    return this.fileEntityRepository.remove(entity).catch(() => {
      throw new NotFoundException(ErrorMessagesEnum.FILE_NOT_FOUND);
    });
  }

  async removeFile(fileNameWithExt: string) {
    const filePath = path.join(STATIC_FOLDER_PATH, fileNameWithExt);
    await fs.unlink(filePath);
  }

  async writeFile(file: Express.Multer.File): Promise<Partial<FileEntity>> {
    const fileExt = file.originalname.split('.').pop();
    const fileName = uuid.v4();
    const fileNameWithExt = fileName + '.' + fileExt;
    const filePath = path.join(STATIC_FOLDER_PATH, fileNameWithExt);

    await this.createStaticFolderIfNotExists();
    await fs.writeFile(filePath, file?.buffer);

    const serverFilePath = this.generateServerFilePath(fileNameWithExt);

    return {
      fileName,
      fileExt,
      fileNameWithExt,
      filePath: serverFilePath,
    } as Partial<FileEntity>;
  }

  async createStaticFolderIfNotExists() {
    await fs
      .access(STATIC_FOLDER_PATH)
      .catch(
        async () => await fs.mkdir(STATIC_FOLDER_PATH, { recursive: true }),
      );
  }

  generateServerFilePath(fileName: string) {
    const serverPrefix = `http://${this.HOST}:${this.PORT}`;
    return serverPrefix + '/' + fileName;
  }
}
