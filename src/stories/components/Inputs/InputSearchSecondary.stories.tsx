import type { Meta, StoryObj } from '@storybook/react';
import InputSearchSecondary from '../../../components/inputs/inputSearchSecondary';

const meta = {
  title: 'Inputs/InputSearchSecondary',
  component: InputSearchSecondary,
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
  },
} satisfies Meta<typeof InputSearchSecondary>;

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
    value: 'Texto de pesquisa',
  },
};