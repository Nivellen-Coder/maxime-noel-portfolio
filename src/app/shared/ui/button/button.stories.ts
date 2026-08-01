import type { Meta, StoryObj } from '@storybook/angular-vite';

import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'ghost', 'text']
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger'
      ]
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  }
};

export default meta;

type Story = StoryObj<Button>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'md'
  },
  render: (args) => ({
    props: args,
    template: `
      <nds-button
        [variant]="variant"
        [color]="color"
        [size]="size">
        Save
      </nds-button>
    `
  })
};

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  },
  render: (args) => ({
    props: args,
    template: `
      <nds-button
        [variant]="variant">
        Cancel
      </nds-button>
    `
  })
};

export const Loading: Story = {
  args: {
    loading: true
  },
  render: (args) => ({
    props: args,
    template: `
      <nds-button
        [loading]="loading">
        Loading
      </nds-button>
    `
  })
};

export const Disabled: Story = {
  args: {
    disabled: true
  },
  render: (args) => ({
    props: args,
    template: `
      <nds-button
        [disabled]="disabled">
        Disabled
      </nds-button>
    `
  })
};

export const FullWidth: Story = {
  args: {
    fullWidth: true
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 400px">
        <nds-button
          [fullWidth]="fullWidth">
          Continue
        </nds-button>
      </div>
    `
  })
};

export const Playground: Story = {
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false
  }
};
