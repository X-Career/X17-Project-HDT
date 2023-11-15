import { createApiThunk, createAsyncSlice } from "../../reduxToolkit";
import { METHODS } from "../../../global";
import { initialState } from "../../../global/initState";

export const getMedia = createApiThunk(METHODS.GET, "/media/getMediaEdit/$params");
const getMediaSlice = createAsyncSlice("createMedia", getMedia, initialState);
export default getMediaSlice.reducer;
