import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterReducer";
import authReducer from "./authtReducer";
import todoReducer from "./reducer/todo";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer, todo: todoReducer },
});

export default store;