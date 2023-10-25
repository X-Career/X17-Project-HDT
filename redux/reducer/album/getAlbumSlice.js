import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const getAlbum = createApiThunk(METHODS.GET, "/album/getAlbum");
const getAlbumSlice = createAsyncSlice("createAlbum", getAlbum, initialState);
export default getAlbumSlice.reducer;
