import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const getHomeAlbum = createApiThunk(METHODS.GET, "/album/getHomeAlbums/$params");
const getHomeAlbumSlice = createAsyncSlice("createAlbum", getHomeAlbum, initialState);
export default getHomeAlbumSlice.reducer;
