/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ProcessingResult as PrismaProcessingResult,
} from "@prisma/client";

export class ProcessingResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProcessingResultCountArgs, "select">
  ): Promise<number> {
    return this.prisma.processingResult.count(args);
  }

  async processingResults(
    args: Prisma.ProcessingResultFindManyArgs
  ): Promise<PrismaProcessingResult[]> {
    return this.prisma.processingResult.findMany(args);
  }
  async processingResult(
    args: Prisma.ProcessingResultFindUniqueArgs
  ): Promise<PrismaProcessingResult | null> {
    return this.prisma.processingResult.findUnique(args);
  }
  async createProcessingResult(
    args: Prisma.ProcessingResultCreateArgs
  ): Promise<PrismaProcessingResult> {
    return this.prisma.processingResult.create(args);
  }
  async updateProcessingResult(
    args: Prisma.ProcessingResultUpdateArgs
  ): Promise<PrismaProcessingResult> {
    return this.prisma.processingResult.update(args);
  }
  async deleteProcessingResult(
    args: Prisma.ProcessingResultDeleteArgs
  ): Promise<PrismaProcessingResult> {
    return this.prisma.processingResult.delete(args);
  }
}