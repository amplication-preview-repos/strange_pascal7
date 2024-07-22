import { Module } from "@nestjs/common";
import { ProcessingResultModuleBase } from "./base/processingResult.module.base";
import { ProcessingResultService } from "./processingResult.service";
import { ProcessingResultController } from "./processingResult.controller";
import { ProcessingResultResolver } from "./processingResult.resolver";

@Module({
  imports: [ProcessingResultModuleBase],
  controllers: [ProcessingResultController],
  providers: [ProcessingResultService, ProcessingResultResolver],
  exports: [ProcessingResultService],
})
export class ProcessingResultModule {}
