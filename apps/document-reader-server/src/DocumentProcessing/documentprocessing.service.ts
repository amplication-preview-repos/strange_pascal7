import { Injectable } from "@nestjs/common";
import { DocumentCreateInput } from "../document/base/DocumentCreateInput";
import { ProcessingResultDto } from "../documentProcessing/ProcessingResultDto";

@Injectable()
export class DocumentProcessingService {
  constructor() {}
  async ProcessDocument(args: DocumentCreateInput): Promise<ProcessingResultDto> {
    throw new Error("Not implemented");
  }
}
