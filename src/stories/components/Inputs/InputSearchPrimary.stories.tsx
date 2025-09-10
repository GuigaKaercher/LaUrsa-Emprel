import type { Meta, StoryObj } from '@storybook/react';
import InputSearchPrimary from '../../../components/inputs/inputSeachPrimary';

const meta = {
  title: 'Inputs/InputSearchPrimary',
  component: InputSearchPrimary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      defaultValue: 'Que serviço você procura?',
    },
    value: {
      control: 'text',
      description: 'Current value of the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the input',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof InputSearchPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Que serviço você procura?',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Que serviço você procura?',
    value: 'Desenvolvimento web',
  },
};