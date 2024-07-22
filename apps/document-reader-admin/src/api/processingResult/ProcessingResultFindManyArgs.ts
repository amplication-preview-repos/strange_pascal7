import { ProcessingResultWhereInput } from "./ProcessingResultWhereInput";
import { ProcessingResultOrderByInput } from "./ProcessingResultOrderByInput";

export type ProcessingResultFindManyArgs = {
  where?: ProcessingResultWhereInput;
  orderBy?: Array<ProcessingResultOrderByInput>;
  skip?: number;
  take?: number;
};
