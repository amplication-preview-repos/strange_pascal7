/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ProcessingResultService } from "../processingResult.service";
import { ProcessingResultCreateInput } from "./ProcessingResultCreateInput";
import { ProcessingResult } from "./ProcessingResult";
import { ProcessingResultFindManyArgs } from "./ProcessingResultFindManyArgs";
import { ProcessingResultWhereUniqueInput } from "./ProcessingResultWhereUniqueInput";
import { ProcessingResultUpdateInput } from "./ProcessingResultUpdateInput";

export class ProcessingResultControllerBase {
  constructor(protected readonly service: ProcessingResultService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProcessingResult })
  async createProcessingResult(
    @common.Body() data: ProcessingResultCreateInput
  ): Promise<ProcessingResult> {
    return await this.service.createProcessingResult({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ProcessingResult] })
  @ApiNestedQuery(ProcessingResultFindManyArgs)
  async processingResults(
    @common.Req() request: Request
  ): Promise<ProcessingResult[]> {
    const args = plainToClass(ProcessingResultFindManyArgs, request.query);
    return this.service.processingResults({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProcessingResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async processingResult(
    @common.Param() params: ProcessingResultWhereUniqueInput
  ): Promise<ProcessingResult | null> {
    const result = await this.service.processingResult({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProcessingResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProcessingResult(
    @common.Param() params: ProcessingResultWhereUniqueInput,
    @common.Body() data: ProcessingResultUpdateInput
  ): Promise<ProcessingResult | null> {
    try {
      return await this.service.updateProcessingResult({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProcessingResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProcessingResult(
    @common.Param() params: ProcessingResultWhereUniqueInput
  ): Promise<ProcessingResult | null> {
    try {
      return await this.service.deleteProcessingResult({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
