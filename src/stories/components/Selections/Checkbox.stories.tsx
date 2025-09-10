import type { Meta, StoryObj } from '@storybook/react';
import Checkbox from '../../../components/selections/Checkbox';

const meta = {
  title: 'Selections/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      defaultValue: false,
    },
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the checkbox',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when checkbox state changes',
    },
  },
  args: {
    onChange: () => {},
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    checked: false,
    label: 'Regular',
  },
};

