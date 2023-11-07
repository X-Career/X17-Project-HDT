import { createApiThunk } from "../../reduxToolkit";
import { METHODS } from "../../../global";

export const deleteUpdateInfo = createApiThunk(
  METHODS.DELETE,
  "/user/updateInfo"
);
