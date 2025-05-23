import {
  IconMd,
  IconText,
  IconJs,
  IconCss,
  IconJson,
  IconSettingsTab,
} from '#/components/Icones';

/** Returns the file icon given its extension. */
export const FILE_ICONS = {
  js: IconJs,
  css: IconCss,
  json: IconJson,
  md: IconMd,
  txt: IconText,
  // Some icons are determined by the file name (eg. Settings)
  Settings: IconSettingsTab,
} as const;

export default {
  FILE_ICONS,
};
