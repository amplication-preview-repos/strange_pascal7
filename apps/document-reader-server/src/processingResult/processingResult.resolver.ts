import * as graphql from "@nestjs/graphql";
import { ProcessingResultResolverBase } from "./base/processingResult.resolver.base";
import { ProcessingResult } from "./base/ProcessingResult";
import { ProcessingResultService } from "./processingResult.service";

@graphql.Resolver(() => ProcessingResult)
export class ProcessingResultResolver extends ProcessingResultResolverBase {
  constructor(protected readonly service: ProcessingResultService) {
    super(service);
  }
}
