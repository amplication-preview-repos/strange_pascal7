import { JsonValue } from "type-fest";

export type Document = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  photo: JsonValue;
};
