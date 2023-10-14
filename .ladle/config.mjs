/** @type {import('@ladle/react').UserConfig} */
export default {
  addons: {
    a11y: {
      enabled: true,
    },
    action: {
      enabled: false,
      defaultState: [],
    },
    control: {
      enabled: true,
      defaultState: {},
    },
    ladle: {
      enabled: true,
    },
    mode: {
      enabled: true,
      defaultState: 'full',
    },
    msw: {
      enabled: true,
    },
    rtl: {
      enabled: true,
      defaultState: false,
    },
    source: {
      enabled: true,
      defaultState: false,
    },
    theme: {
      enabled: true,
      defaultState: 'dark',
    },
    width: {
      enabled: true,
      options: {
        xsmall: 414,
        small: 640,
        medium: 768,
        large: 1024,
      },
      defaultState: 0,
    },
  },
  stories: [
    'packages/ui/shared/src/**/*.stories.{ts,tsx,mdx}',
    'packages/ui/email/src/**/*.stories.{ts,tsx,mdx}',
    'apps/faustian-seeker/src/**/*.stories.{ts,tsx,mdx}',
  ],
};
