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
    disabled: false,
    label: 'Regular',
    name: 'radio-group',
  },
};

export const Hover: Story = {
  args: {
    value: 'hover',
    checked: false,
    disabled: false,
    label: 'Hover',
    name: 'radio-group',
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado hover com borda azul (#1474FF)',
      },
    },
  },
};

export const Selected: Story = {
  args: {
    value: 'selected',
    checked: true,
    disabled: false,
    label: 'Selected',
    name: 'radio-group',
  },
};

export const SelectedHover: Story = {
  args: {
    value: 'selected-hover',
    checked: true,
    disabled: false,
    label: 'Selected hover',
    name: 'radio-group',
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado selected hover com cor mais escura (#0F57BF)',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    value: 'disabled',
    checked: false,
    disabled: true,
    label: 'Disabled',
    name: 'radio-group',
  },
};

export const DisabledSelected: Story = {
  args: {
    value: 'disabled-selected',
    checked: true,
    disabled: true,
    label: 'Disabled selected',
    name: 'radio-group',
  },
};

