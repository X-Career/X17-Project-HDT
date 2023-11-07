import { createApiThunk } from "../../reduxToolkit";
import { METHODS } from "../../../global";

export const deleteRegister = createApiThunk(METHODS.DELETE, "/auth/register");
