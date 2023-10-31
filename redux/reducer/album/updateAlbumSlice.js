import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const updateAlbum = createApiThunk(
  METHODS.PUT,
  "/album/updateAlbum/$params"
);
const updateAlbumSlice = createAsyncSlice(
  "createAlbum",
  updateAlbum,
  initialState
);
export default updateAlbumSlice.reducer;
