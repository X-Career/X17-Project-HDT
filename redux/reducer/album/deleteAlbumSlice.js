import { createApiThunk } from "../../reduxToolkit";
import { METHODS } from "../../../global";

export const deleteAlbum = createApiThunk(METHODS.POST, "/album/deleteAlbum/$params");
