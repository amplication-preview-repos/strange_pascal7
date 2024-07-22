import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessingResultService } from "./processingResult.service";
import { ProcessingResultControllerBase } from "./base/processingResult.controller.base";

@swagger.ApiTags("processingResults")
@common.Controller("processingResults")
export class ProcessingResultController extends ProcessingResultControllerBase {
  constructor(protected readonly service: ProcessingResultService) {
    super(service);
  }
}
