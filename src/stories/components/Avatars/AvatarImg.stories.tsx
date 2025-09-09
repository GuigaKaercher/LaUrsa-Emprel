import type { Meta, StoryObj } from '@storybook/react';
import { AvatarImg } from '../../../components/avatars/avatarImg';

const meta = {
  title: 'Avatars/AvatarImg',
  component: AvatarImg,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['SM', 'MD', 'Large', 'XL'],
      description: 'Size of the avatar',
      defaultValue: 'MD',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
      defaultValue: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
      defaultValue: 'Avatar',
    },
  },
} satisfies Meta<typeof AvatarImg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'SM',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    alt: 'Avatar Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'MD',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    alt: 'Avatar Medium',
  },
};

export const Large: Story = {
  args: {
    size: 'Large',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    alt: 'Avatar Large',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'XL',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    alt: 'Avatar Extra Large',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <div className="text-center">
        <AvatarImg 
          size="SM" 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
          alt="Avatar SM" 
        />
        <p className="text-sm text-gray-600 mt-2">SM - 48px</p>
      </div>
      <div className="text-center">
        <AvatarImg 
          size="MD" 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
          alt="Avatar MD" 
        />
        <p className="text-sm text-gray-600 mt-2">MD - 64px</p>
      </div>
      <div className="text-center">
        <AvatarImg 
          size="Large" 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
          alt="Avatar Large" 
        />
        <p className="text-sm text-gray-600 mt-2">Large - 88px</p>
      </div>
      <div className="text-center">
        <AvatarImg 
          size="XL" 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
          alt="Avatar XL" 
        />
        <p className="text-sm text-gray-600 mt-2">XL - 120px</p>
      </div>
    </div>
  ),
};