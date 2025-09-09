import type { Meta, StoryObj } from '@storybook/react';
import { InputSearchPrimary } from '../../../components/inputs/inputSeachPrimary';

const meta = {
  title: 'Inputs/InputSearchPrimary',
  component: InputSearchPrimary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the input',
      defaultValue: false,
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      defaultValue: 'Que serviço você procura?',
    },
  },
} satisfies Meta<typeof InputSearchPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};