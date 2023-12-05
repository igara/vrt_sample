import type { Meta, StoryObj } from '@storybook/react';

import { DefaultButton } from './DefaultButton';

const meta = {
  title: 'Example/DefaultButton',
  component: DefaultButton,
} satisfies Meta<typeof DefaultButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'デフォルトボタン',
  },
};
