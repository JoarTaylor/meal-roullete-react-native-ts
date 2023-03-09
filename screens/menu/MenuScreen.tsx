import React, { FC, useEffect } from 'react'
import { Pressable } from 'react-native'
import { Title } from '../../components/title/title.component'
import { useAppSelector } from '../../services/react-redux'
import { selectDisplayedMeals, selectmeals } from '../../store/features/meals.selectors'
import { getAllMealsAsync, setNextFourMeals } from '../../store/features/meals.slice'
import { useAppDispatch } from '../../store/store'
import { menuScreenNavigationType } from '../../types/navigation'
import * as S from './styled'

interface MenuScreenProps {
  navigation: menuScreenNavigationType
}

export const MenuScreen: FC<MenuScreenProps> = ({ navigation }) => {
  // const { data, error, isLoading } = useMeals()

  const dispatch = useAppDispatch()
  const meals = useAppSelector(selectmeals)
  const displayedMeals = useAppSelector(selectDisplayedMeals)

  useEffect(() => {
    dispatch(getAllMealsAsync())
  }, [])

  const handleGoToMeal = (id: number) => {
    navigation.navigate('Meal Details', { id: id })
  }

  const mealItems = displayedMeals.map((meal: any) => (
    <Pressable onPress={() => handleGoToMeal(meal.id)} key={meal.id}>
      <S.MealContainer>
        <S.MealImage source={{ uri: meal.picture }}></S.MealImage>
        <Title>{meal.title}</Title>
      </S.MealContainer>
    </Pressable>
  ))

  return (
    <S.MainContainer>
      <S.MenuContainer>{mealItems}</S.MenuContainer>
      <S.Divider />
      <Pressable onPress={() => dispatch(setNextFourMeals(meals))}>
        {({ pressed }) => (
          <S.ButtonContainer pressed={pressed}>
            <S.ButtonText>Refresh</S.ButtonText>
          </S.ButtonContainer>
        )}
      </Pressable>
    </S.MainContainer>
  )
}
