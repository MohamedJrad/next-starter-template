import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { addDecorator } from "@storybook/react";
import { withPerformance } from "storybook-addon-performance";

addDecorator(withPerformance);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "fr", right: "🇫🇷", title: "Français" },
        { value: "es", right: "🇪🇸", title: "Español" },
        { value: "zh", right: "🇨🇳", title: "中文" },
        { value: "kr", right: "🇰🇷", title: "한국어" },
      ],
    },
  },
  // theme: {
  //   name: 'Theme',
  //   description: 'Global theme for components',
  //   defaultValue: 'light',
  //   toolbar: {
  //     icon: 'circlehollow',
  //     // Array of plain string values or MenuItem shape (see below)
  //     items: ['light', 'dark'],
  //     // Property that specifies if the name of the item will be displayed
  //     showName: true,
  //     // Change title based on selected value
  //     dynamicTitle: true,
  //   },
  // },
};
