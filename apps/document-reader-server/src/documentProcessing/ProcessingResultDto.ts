import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("ProcessingResultDtoObject")
class ProcessingResultDto {
    @Field(() => GraphQLJSON)
    extractedData!: InputJsonValue;
}

export { ProcessingResultDto as ProcessingResultDto };