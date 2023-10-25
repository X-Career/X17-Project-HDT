import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const deleteCreateAlbum = createApiThunk(
  METHODS.DELETE,
  "/album/createAlbum"
);
const deleteCreateAlbumSlice = createAsyncSlice(
  "authLogin",
  deleteCreateAlbum,
  initialState
);

export default deleteCreateAlbumSlice.reducer;
