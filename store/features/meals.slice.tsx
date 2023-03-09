import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppDispatch } from '../store'

export const getAllMealsAsync = () => async (dispatch: AppDispatch) => {
  const awaitApiData = async (data: []) => {
    if (data) {
      dispatch(setAllMeals(data))
      dispatch(setNextFourMeals(data))
    } else {
    }
  }
  await fetchAllMeals(awaitApiData)
}

const fetchAllMeals = async (handler: any) => {
  const { data } = await axios.get(
    `https://playground.devskills.co/api/rest/meal-roulette-app/meals`
  )
  handler(data.meal_roulette_app_meals)
}

export const getCurrentMealAsync = (id: number) => async (dispatch: AppDispatch) => {
  const awaitApiData = async (data: {}) => {
    if (data) {
      dispatch(setCurrentMeal(data))
    } else {
    }
  }
  await fetchCurrentMeal(awaitApiData, id)
}

const fetchCurrentMeal = async (handler: any, id: number) => {
  const { data } = await axios.get(
    `https://playground.devskills.co/api/rest/meal-roulette-app/meals/${id}`
  )
  handler(data.meal_roulette_app_meals_by_pk)
}

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    meals: [],
    currentMeal: {},
    displayedMeals: [],
    offsetIndex: 0,
  },
  reducers: {
    setAllMeals: (state, { payload }) => {
      state.meals = payload
    },
    setNextFourMeals: (state, { payload }) => {
      if (state.meals.length > 0) {
        payload = state.meals
      }
      const numMeals = 4
      const end = (state.offsetIndex + numMeals) % payload.length

      let result: any = []

      if (end < state.offsetIndex) {
        result = payload.slice(state.offsetIndex).concat(payload.slice(0, end))
      } else {
        result = payload.slice(state.offsetIndex, state.offsetIndex + numMeals)
      }

      state.offsetIndex = end
      state.displayedMeals = result
    },
    setCurrentMeal: (state, { payload }) => {
      state.currentMeal = payload
    },
  },
})

export const { setNextFourMeals, setAllMeals, setCurrentMeal } = mealsSlice.actions

export default mealsSlice.reducer
