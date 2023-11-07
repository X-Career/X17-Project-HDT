import { createApiThunk } from "../../reduxToolkit";
import { METHODS } from "../../../global";

export const deleteMediaFromAlbum = createApiThunk(
  METHODS.POST,
  "/media/deleteMediaFromAlbum/$params"
);
export const deleteMedia = createApiThunk(
  METHODS.POST,
  "/media/deleteMedia/$params"
);
