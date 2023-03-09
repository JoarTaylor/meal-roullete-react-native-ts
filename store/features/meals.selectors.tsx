import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const mealSlice = (state: RootState) => state.meals

export const selectmeals = createSelector([mealSlice], (mealSlice) => mealSlice.meals)

export const selectCurrentMeal = createSelector([mealSlice], (mealSlice) => mealSlice.currentMeal)

export const selectDisplayedMeals = createSelector([mealSlice], (mealSlice) => mealSlice.displayedMeals)