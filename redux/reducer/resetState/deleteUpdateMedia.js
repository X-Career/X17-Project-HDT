import { createApiThunk } from "../../reduxToolkit";
import { METHODS } from "../../../global";

export const deleteUpdateMedia = createApiThunk(
  METHODS.DELETE,
  "/media/updateMedia/$params"
);
