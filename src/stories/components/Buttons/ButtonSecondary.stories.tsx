import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSecondary } from '../../../components/buttons/ButtonSecondary';

const meta = {
  title: 'Buttons/ButtonSecondary',
  component: ButtonSecondary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label text',
      defaultValue: 'Button Label',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state of the button',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the button',
      defaultValue: false,
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when button is clicked',
    },
  },
} satisfies Meta<typeof ButtonSecondary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button Label',
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    children: 'Button Label',
    loading: true,
  },
};