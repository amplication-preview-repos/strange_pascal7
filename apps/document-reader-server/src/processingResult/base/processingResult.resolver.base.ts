/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ProcessingResult } from "./ProcessingResult";
import { ProcessingResultCountArgs } from "./ProcessingResultCountArgs";
import { ProcessingResultFindManyArgs } from "./ProcessingResultFindManyArgs";
import { ProcessingResultFindUniqueArgs } from "./ProcessingResultFindUniqueArgs";
import { DeleteProcessingResultArgs } from "./DeleteProcessingResultArgs";
import { ProcessingResultService } from "../processingResult.service";
@graphql.Resolver(() => ProcessingResult)
export class ProcessingResultResolverBase {
  constructor(protected readonly service: ProcessingResultService) {}

  async _processingResultsMeta(
    @graphql.Args() args: ProcessingResultCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ProcessingResult])
  async processingResults(
    @graphql.Args() args: ProcessingResultFindManyArgs
  ): Promise<ProcessingResult[]> {
    return this.service.processingResults(args);
  }

  @graphql.Query(() => ProcessingResult, { nullable: true })
  async processingResult(
    @graphql.Args() args: ProcessingResultFindUniqueArgs
  ): Promise<ProcessingResult | null> {
    const result = await this.service.processingResult(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ProcessingResult)
  async deleteProcessingResult(
    @graphql.Args() args: DeleteProcessingResultArgs
  ): Promise<ProcessingResult | null> {
    try {
      return await this.service.deleteProcessingResult(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}