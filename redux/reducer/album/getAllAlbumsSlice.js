import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const getAllAlbums = createApiThunk(METHODS.GET, "/album/get-albums");

const infoAllAlbums = createAsyncSlice(
  "infoAllAlbums",
  getAllAlbums,
  initialState
);

export default infoAllAlbums.reducer;
