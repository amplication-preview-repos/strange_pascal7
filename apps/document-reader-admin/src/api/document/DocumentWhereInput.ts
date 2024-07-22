import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type DocumentWhereInput = {
  id?: StringFilter;
  photo?: JsonFilter;
};
