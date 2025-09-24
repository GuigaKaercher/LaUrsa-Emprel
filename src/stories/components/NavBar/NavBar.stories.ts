import {Meta, StoryObj} from '@storybook/react';
import { NavBar} from  '@/components/navBar/navBar';



const meta = {
  title: 'Components/NavBar',
  component: NavBar,
    parameters: {
    layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        activeIndex: {
            control: {
                type: 'number',
            },
        },
        
    },

} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    activeIndex: 0,
  },
};