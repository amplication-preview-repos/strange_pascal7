import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocumentTypeService } from "./documentType.service";
import { DocumentTypeControllerBase } from "./base/documentType.controller.base";

@swagger.ApiTags("documentTypes")
@common.Controller("documentTypes")
export class DocumentTypeController extends DocumentTypeControllerBase {
  constructor(protected readonly service: DocumentTypeService) {
    super(service);
  }
}
