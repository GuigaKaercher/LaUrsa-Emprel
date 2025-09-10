import type { Meta, StoryObj } from '@storybook/react';
import InputFilter from '../../../components/inputs/inputFilter';

const meta = {
  title: 'Inputs/InputFilter',
  component: InputFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
      defaultValue: 'Pesquisar...',
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
    onChange: {
      action: 'changed',
      description: 'Function called when input value changes',
    },
    onFilterClick: {
      action: 'filter clicked',
      description: 'Function called when filter icon is clicked',
    },
  },
  args: {
    onChange: () => {},
    onFilterClick: () => {},
  },
} satisfies Meta<typeof InputFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Pesquisar...',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Pesquisar...',
    value: 'Texto de exemplo',
  },
};