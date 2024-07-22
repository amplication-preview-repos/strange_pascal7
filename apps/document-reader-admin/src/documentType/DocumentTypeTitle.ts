import { DocumentType as TDocumentType } from "../api/documentType/DocumentType";

export const DOCUMENTTYPE_TITLE_FIELD = "id";

export const DocumentTypeTitle = (record: TDocumentType): string => {
  return record.id?.toString() || String(record.id);
};
