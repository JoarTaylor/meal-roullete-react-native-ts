import React from 'react'
import { Platform, ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Meal } from '../../types'
import BulletList from '../BulletList/BulletList'
import { Title } from '../title/title.component'
import * as S from './styled'

interface mealDetailsCardProps {
  currentMeal: Meal
}

export const MealDetailsCard: React.FC<mealDetailsCardProps> = ({
  currentMeal: { title, description, picture, ingredients },
}) => {
  console.log('ingredients', ingredients)

  const ingredientsList = ingredients
    .split(',')
    .map(i => i.trim())
    .filter(Boolean)

  return (
    <ScrollView
      bounces={false}
      contentContainerStyle={{
        ...(Platform.OS === 'android' && { paddingBottom: 20 }),
      }}
    >
      <S.MealContainer>
        <S.FoodImg source={{ uri: picture }}></S.FoodImg>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <Title>Ingredients</Title>
        <BulletList items={ingredientsList} />
      </S.MealContainer>

      <SafeAreaView edges={['bottom']} />
    </ScrollView>
  )
}
