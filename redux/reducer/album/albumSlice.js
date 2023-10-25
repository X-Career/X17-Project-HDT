import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const createAlbum = createApiThunk(METHODS.POST, "/album/createAlbum", {
  "Content-Type": "multipart/form-data",
});
const createAlbumSlice = createAsyncSlice(
  "createAlbum",
  createAlbum,
  initialState
);
export default createAlbumSlice.reducer;
