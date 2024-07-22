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
import { DocumentTypeService } from "../documentType.service";
import { DocumentTypeCreateInput } from "./DocumentTypeCreateInput";
import { DocumentType } from "./DocumentType";
import { DocumentTypeFindManyArgs } from "./DocumentTypeFindManyArgs";
import { DocumentTypeWhereUniqueInput } from "./DocumentTypeWhereUniqueInput";
import { DocumentTypeUpdateInput } from "./DocumentTypeUpdateInput";

export class DocumentTypeControllerBase {
  constructor(protected readonly service: DocumentTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DocumentType })
  async createDocumentType(
    @common.Body() data: DocumentTypeCreateInput
  ): Promise<DocumentType> {
    return await this.service.createDocumentType({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DocumentType] })
  @ApiNestedQuery(DocumentTypeFindManyArgs)
  async documentTypes(@common.Req() request: Request): Promise<DocumentType[]> {
    const args = plainToClass(DocumentTypeFindManyArgs, request.query);
    return this.service.documentTypes({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DocumentType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async documentType(
    @common.Param() params: DocumentTypeWhereUniqueInput
  ): Promise<DocumentType | null> {
    const result = await this.service.documentType({
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
  @swagger.ApiOkResponse({ type: DocumentType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDocumentType(
    @common.Param() params: DocumentTypeWhereUniqueInput,
    @common.Body() data: DocumentTypeUpdateInput
  ): Promise<DocumentType | null> {
    try {
      return await this.service.updateDocumentType({
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
  @swagger.ApiOkResponse({ type: DocumentType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDocumentType(
    @common.Param() params: DocumentTypeWhereUniqueInput
  ): Promise<DocumentType | null> {
    try {
      return await this.service.deleteDocumentType({
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
