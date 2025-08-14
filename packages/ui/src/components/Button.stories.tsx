import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'link']
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon']
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default'
  }
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg'
  }
}

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'sm'
  }
}
