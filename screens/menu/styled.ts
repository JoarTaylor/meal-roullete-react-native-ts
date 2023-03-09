import styled from 'styled-components/native'

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  background-color: 'gray';
`

export const MenuContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`

export const MealContainer = styled.View`
  align-items: center;
  width: 175px;
  min-height: 200px;
  margin-top: 15px;
  margin-right: 10px;
  margin-left: 10px;
`

export const MealImage = styled.Image`
  height: 175px;
  width: 175px;
`

const buttonSize = 125
export const ButtonContainer = styled.View<{ pressed: boolean }>`
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: ${buttonSize}px;
  width: ${buttonSize}px;
  border-radius: ${buttonSize / 2}px;
  border: 2px solid black;
  background: ${({ pressed }) => (pressed ? 'lightgray' : 'white')};
`
export const ButtonText = styled.Text`
  text-align: center;
  font-size: 24px;
  padding: 10px;
`

export const Divider = styled.View`
  height: 2px;
  width: 100%;
  background-color: black;
  border-bottom-width: 2px;
`
