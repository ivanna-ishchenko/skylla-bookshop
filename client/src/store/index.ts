import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import cartReducer, { CartState } from "./cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export interface RootState {
  cart: CartState;
}

const rootReducer: Reducer<RootState> = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
