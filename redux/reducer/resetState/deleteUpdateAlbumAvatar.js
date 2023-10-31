import { createApiThunk } from "../../reduxToolkit";
import { METHODS } from "../../../global";

export const deleteUpdateAlbumAvatar = createApiThunk(
  METHODS.DELETE,
  "/album/updateAlbumAvatar"
);
