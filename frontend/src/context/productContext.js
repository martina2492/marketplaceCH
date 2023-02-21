import { createContext } from "react";
import { initialState } from "./ProductReducer";

const ProductContext = createContext(initialState);

export default ProductContext;
