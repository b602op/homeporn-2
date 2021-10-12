import { createStore } from "redux";
import createRootReducer from "./reducers";

export default function configureStore() {
  const store = createStore(
    createRootReducer(),
  );

  return store;
}