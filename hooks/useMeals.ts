import { useQuery } from '@tanstack/react-query'
import api from '../services/api'

const useMeals = () =>
  useQuery([api.fetchMeals.name], api.fetchMeals, {
    staleTime: 0,
  })

export default useMeals
