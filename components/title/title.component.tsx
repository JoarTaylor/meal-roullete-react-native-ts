import React from 'react'
import * as S from './styled'

interface TitleProps {
  children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <S.ItemTitle numberOfLines={1} adjustsFontSizeToFit>
      {children}
    </S.ItemTitle>
  )
}
