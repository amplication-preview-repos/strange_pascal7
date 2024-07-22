import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DocumentProcessingService } from "./documentprocessing.service";
import { DocumentCreateInput } from "../document/base/DocumentCreateInput";
import { ProcessingResultDto } from "../documentProcessing/ProcessingResultDto";

@swagger.ApiTags("documentProcessings")
@common.Controller("documentProcessings")
export class DocumentProcessingController {
  constructor(protected readonly service: DocumentProcessingService) {}

  @common.Post("/process-document")
  @swagger.ApiOkResponse({
    type: ProcessingResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProcessDocument(
    @common.Body()
    body: DocumentCreateInput
  ): Promise<ProcessingResultDto> {
        return this.service.ProcessDocument(body);
      }
}
