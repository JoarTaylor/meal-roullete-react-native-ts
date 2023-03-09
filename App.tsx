import { StatusBar } from 'expo-status-bar'
import React from 'react'
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider as ReduxProvider } from 'react-redux'
import useCachedResources from './hooks/useCachedResources'
import { MealDetailsScreen } from './screens/MealDetailsScreen'
import { MenuScreen } from './screens/menu/MenuScreen'
import { store } from './store/store'
import { RootStackParamList } from './types/navigation'

const Stack = createStackNavigator<RootStackParamList>()

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: true,
//       staleTime: 1000 * 60 * 60 * 24,
//     },
//   },
// })

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen
              initialParams={{ id: 0 }}
              name="Meal Details"
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
      {/* <QueryClientProvider client={queryClient}>
      </QueryClientProvider> */}
    </ReduxProvider>
  )
}
