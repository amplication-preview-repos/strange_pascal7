import { Module } from "@nestjs/common";
import { DocumentProcessingService } from "./documentprocessing.service";
import { DocumentProcessingController } from "./documentprocessing.controller";
import { DocumentProcessingResolver } from "./documentprocessing.resolver";

@Module({
  controllers: [DocumentProcessingController],
  providers: [DocumentProcessingService, DocumentProcessingResolver],
  exports: [DocumentProcessingService],
})
export class DocumentProcessingModule {}
