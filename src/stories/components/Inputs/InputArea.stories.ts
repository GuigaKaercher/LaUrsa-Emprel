import {Meta, StoryObj} from '@storybook/react';
import { InputArea } from '@/components/inputs/inputArea';

const meta = {
  title: 'Inputs/InputArea',
  component: InputArea,
    parameters: {
    layout: 'centered',
    },
   tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'boolean',
    },
  },


} satisfies Meta<typeof InputArea>;

export default meta;
type Story = StoryObj<typeof InputArea>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Placeholder',
   
  },
};


