import { createApiThunk } from "../../reduxToolkit";
import { METHODS } from "../../../global";

export const deleteUpdateAlbum = createApiThunk(
  METHODS.DELETE,
  "/album/updateAlbum/$params"
);
