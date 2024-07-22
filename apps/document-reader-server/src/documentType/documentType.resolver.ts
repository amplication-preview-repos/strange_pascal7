import * as graphql from "@nestjs/graphql";
import { DocumentTypeResolverBase } from "./base/documentType.resolver.base";
import { DocumentType } from "./base/DocumentType";
import { DocumentTypeService } from "./documentType.service";

@graphql.Resolver(() => DocumentType)
export class DocumentTypeResolver extends DocumentTypeResolverBase {
  constructor(protected readonly service: DocumentTypeService) {
    super(service);
  }
}
