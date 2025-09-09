import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSecondaryIcon } from '../../../components/buttons/ButtonSecondaryIcon';

const meta = {
  title: 'Buttons/ButtonSecondaryIcon',
  component: ButtonSecondaryIcon,
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
} satisfies Meta<typeof ButtonSecondaryIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button Label',
    loading: false,
    disabled: false,
  },
};

export const Loading: Story = {
  args: {
    children: 'Button Label',
    loading: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button Label',
    loading: false,
    disabled: true,
  },
};