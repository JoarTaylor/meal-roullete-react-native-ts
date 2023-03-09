import { configureStore, combineReducers } from "@reduxjs/toolkit";
import mealsReducer from "./features/meals.slice";
import { useDispatch } from "react-redux";

/* const rootReducer = combineReducers({
  meals: mealsReducer,
}); */

export type RootState = ReturnType<typeof mealsReducer>;

export  const store =  configureStore({
  reducer: {
    meals: mealsReducer,
  },
});

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch