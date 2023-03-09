import { FC } from 'react'

import { Text, View } from 'react-native'

type Props = {
  items: string[]
}

const BulletList: FC<Props> = ({ items }) => {
  const bullets = items.map(item => (
    <View key={item} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ height: 8, width: 8, backgroundColor: 'black' }} />
      <View style={{ width: 8 }} />
      <Text>{item}</Text>
    </View>
  ))

  return <>{bullets}</>
}

export default BulletList
