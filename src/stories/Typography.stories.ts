import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from '../components/Typography/Typography';

const meta = {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'p', 'lead', 'large', 'small', 'muted'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'muted', 'destructive'],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const Heading5: Story = {
  args: {
    variant: 'h5',
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
};