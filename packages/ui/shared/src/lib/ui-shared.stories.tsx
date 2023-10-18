import type { Meta, StoryObj } from '@storybook/react';
import { UiShared } from './ui-shared';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta: Meta<typeof UiShared> = {
  component: UiShared,
  title: 'UiShared',
};
export default meta;
type Story = StoryObj<typeof UiShared>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UiShared!/gi)).toBeTruthy();
  },
};
