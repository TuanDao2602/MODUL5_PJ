import { combineReducers } from "redux";
import { listCatalog } from "./listCatalog";
import { listProduct } from "./listProduct";
import { listTopping } from "./listTopping";
export const rootReducer= combineReducers({listCatalog,listProduct,listTopping})