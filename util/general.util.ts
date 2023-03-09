import { Platform } from 'react-native'

export const platformSelect = ({ ios, android }: { ios: unknown; android: unknown }) => {
  return Platform.OS === 'ios' ? ios : android
}
