import * as React from 'react'
import { styled } from '@darkmatter-ui/web'
import { text } from '@darkmatter-ui/styles'

export const Text = styled('p', text)

export interface TextProps extends React.ComponentProps<typeof Text> {
  as?: React.ReactElement
}

Text.displayName = 'Text'
