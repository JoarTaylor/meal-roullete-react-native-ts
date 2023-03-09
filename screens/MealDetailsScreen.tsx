import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import { MealDetailsCard } from '../components/mealDetailsCard/mealDetailsCard'
import { useAppSelector } from '../services/react-redux'
import { selectCurrentMeal } from '../store/features/meals.selectors'
import { getCurrentMealAsync } from '../store/features/meals.slice'
import { useAppDispatch } from '../store/store'
import { mealDetailsScreenRouteProp } from '../types/navigation'

interface MealDetailsScreenProps {
  route: mealDetailsScreenRouteProp
}

export const MealDetailsScreen: React.FC<MealDetailsScreenProps> = ({ route }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useAppDispatch()
  const currentMeal = useAppSelector(selectCurrentMeal)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { id } = route.params
    setLoading(true)
    await dispatch(getCurrentMealAsync(id))
    setLoading(false)
  }

  const isFetchedButEmpty = currentMeal && !Object.keys(currentMeal).length
  const isError = isFetchedButEmpty

  if (isError) {
    return (
      <View>
        <Text>Error!</Text>
        <Pressable onPress={fetchData}>
          <Text>Try again</Text>
        </Pressable>
      </View>
    )
  }

  if (loading) {
    return <ActivityIndicator size="large" color="black" />
  }

  return <MealDetailsCard currentMeal={currentMeal} />
}
