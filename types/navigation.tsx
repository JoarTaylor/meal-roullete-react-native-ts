import { StackNavigationProp } from "@react-navigation/stack";
import type { RouteProp } from '@react-navigation/native';

export type menuScreenNavigationType = StackNavigationProp<RootStackParamList, "Menu">
export type mealDetailsNavigationType = StackNavigationProp<RootStackParamList, "Meal Details">
export type mealDetailsScreenRouteProp = RouteProp<RootStackParamList, "Meal Details">

export type RootStackParamList = {
    Menu: undefined;
    "Meal Details": {
      id: number
    };
  };