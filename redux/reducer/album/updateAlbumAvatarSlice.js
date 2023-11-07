import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const updateAlbumAvatar = createApiThunk(
  METHODS.POST,
  "/album/updateAlbumAvatar",
  {
    "Content-Type": "multipart/form-data",
  }
);
const updateAlbumAvatarSlice = createAsyncSlice(
  "createAlbum",
  updateAlbumAvatar,
  initialState
);
export default updateAlbumAvatarSlice.reducer;
