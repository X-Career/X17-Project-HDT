import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const getOtherUserAlbum = createApiThunk(
  METHODS.GET,
  "/album/getOtherUserAlbum/$params"
);
const getOtherUserAlbumSlice = createAsyncSlice(
  "createAlbum",
  getOtherUserAlbum,
  initialState
);
export default getOtherUserAlbumSlice.reducer;
