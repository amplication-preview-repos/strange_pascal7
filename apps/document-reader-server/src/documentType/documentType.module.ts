import { Module } from "@nestjs/common";
import { DocumentTypeModuleBase } from "./base/documentType.module.base";
import { DocumentTypeService } from "./documentType.service";
import { DocumentTypeController } from "./documentType.controller";
import { DocumentTypeResolver } from "./documentType.resolver";

@Module({
  imports: [DocumentTypeModuleBase],
  controllers: [DocumentTypeController],
  providers: [DocumentTypeService, DocumentTypeResolver],
  exports: [DocumentTypeService],
})
export class DocumentTypeModule {}
