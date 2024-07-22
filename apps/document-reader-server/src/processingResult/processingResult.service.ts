import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessingResultServiceBase } from "./base/processingResult.service.base";

@Injectable()
export class ProcessingResultService extends ProcessingResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
