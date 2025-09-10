import type { Meta, StoryObj } from '@storybook/react';
import Radio from '../../../components/selections/Radio';

const meta = {
  title: 'Selections/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Value of the radio button',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio is disabled',
      defaultValue: false,
    },
    label: {
      control: 'text',
      description: 'Label text for the radio button',
    },
    name: {
      control: 'text',
      description: 'Name attribute for radio group',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when radio selection changes',
    },
  },
  args: {
    onChange: () => {},
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Regular: Story = {
  args: {
    value: 'regular',
    checked: false,
    label: 'Regular',
    name: 'radio-group',
  },
};

