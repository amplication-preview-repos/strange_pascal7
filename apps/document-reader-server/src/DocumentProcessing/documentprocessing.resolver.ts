import * as graphql from "@nestjs/graphql";
import { DocumentCreateInput } from "../document/base/DocumentCreateInput";
import { ProcessingResultDto } from "../documentProcessing/ProcessingResultDto";
import { DocumentProcessingService } from "./documentprocessing.service";

export class DocumentProcessingResolver {
  constructor(protected readonly service: DocumentProcessingService) {}

  @graphql.Mutation(() => ProcessingResultDto)
  async ProcessDocument(
    @graphql.Args()
    args: DocumentCreateInput
  ): Promise<ProcessingResultDto> {
    return this.service.ProcessDocument(args);
  }
}
