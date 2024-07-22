import { ProcessingResult as TProcessingResult } from "../api/processingResult/ProcessingResult";

export const PROCESSINGRESULT_TITLE_FIELD = "id";

export const ProcessingResultTitle = (record: TProcessingResult): string => {
  return record.id?.toString() || String(record.id);
};
