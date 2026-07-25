import type { Meta, StoryObj } from '@storybook/angular-vite';

import { SurfaceComponent } from './surface';

const meta: Meta<SurfaceComponent> = {
  title: 'Foundation/Surface',
  component: SurfaceComponent,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['glass', 'solid', 'outlined', 'ghost']
    },

    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl']
    },

    radius: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'full']
    },

    border: {
      control: 'boolean'
    },

    glow: {
      control: 'boolean'
    },

    interactive: {
      control: 'boolean'
    }
  },

  args: {
    variant: 'glass',
    padding: 'lg',
    radius: 'xl',
    border: true,
    glow: false,
    interactive: false
  }
};

export default meta;

type Story = StoryObj<SurfaceComponent>;

export const Glass: Story = {
  render: (args) => ({
    props: args,
    template: `
      <nds-surface
        [variant]="variant"
        [padding]="padding"
        [radius]="radius"
        [border]="border"
        [glow]="glow"
        [interactive]="interactive">

        <h3>Glass Surface</h3>

        <p>
          The quick brown fox jumps over the lazy dog.
        </p>

      </nds-surface>
    `
  })
};

export const Solid: Story = {
  args: {
    variant: 'solid'
  },

  render: Glass.render
};

export const Outlined: Story = {
  args: {
    variant: 'outlined'
  },

  render: Glass.render
};

export const Ghost: Story = {
  args: {
    variant: 'ghost'
  },

  render: Glass.render
};

export const Glow: Story = {
  args: {
    glow: true
  },

  render: Glass.render
};

export const Interactive: Story = {
  args: {
    interactive: true
  },

  render: Glass.render
};
