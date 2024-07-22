import { DocumentTypeWhereInput } from "./DocumentTypeWhereInput";
import { DocumentTypeOrderByInput } from "./DocumentTypeOrderByInput";

export type DocumentTypeFindManyArgs = {
  where?: DocumentTypeWhereInput;
  orderBy?: Array<DocumentTypeOrderByInput>;
  skip?: number;
  take?: number;
};
