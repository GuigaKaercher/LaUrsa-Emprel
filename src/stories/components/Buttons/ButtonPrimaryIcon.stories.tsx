import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPrimaryIcon } from '../../../components/buttons/ButtonPrimaryIcon';

const meta = {
  title: 'Buttons/ButtonPrimaryIcon',
  component: ButtonPrimaryIcon,
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
} satisfies Meta<typeof ButtonPrimaryIcon>;

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