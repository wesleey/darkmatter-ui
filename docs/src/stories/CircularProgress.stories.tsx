import { Meta, Story } from '@storybook/react'
import { CircularProgress, CircularProgressProps } from '@darkmatter-ui/react'

export default {
  title: 'Progress/CircularProgress',
} as Meta<CircularProgressProps>

const Template: Story<CircularProgressProps> = (args) => {
  return <CircularProgress css={{ width: 40, height: 40 }} {...args} />
}

export const Default = Template.bind({})
