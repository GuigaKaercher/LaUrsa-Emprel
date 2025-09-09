import type { Meta, StoryObj } from '@storybook/react';
import { InputSearchSecondary } from '../../../components/inputs/inputSearchSecondary';

const meta = {
  title: 'Inputs/InputSearchSecondary',
  component: InputSearchSecondary,
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
      defaultValue: 'Pesquisar...',
    },
  },
} satisfies Meta<typeof InputSearchSecondary>;

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