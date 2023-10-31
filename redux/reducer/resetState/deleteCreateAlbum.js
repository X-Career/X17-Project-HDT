import { createApiThunk } from "../../reduxToolkit";
import { METHODS } from "../../../global";

export const deleteCreateAlbum = createApiThunk(
  METHODS.DELETE,
  "/album/createAlbum"
);
