import { createApiThunk } from "../../reduxToolkit";
import { METHODS } from "../../../global";

export const deleteLogin = createApiThunk(METHODS.DELETE, "/auth/login");
