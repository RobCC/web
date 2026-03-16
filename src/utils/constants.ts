import {
  IconMd,
  ReadmeIcon,
  IconText,
  IconJs,
  IconCss,
  IconJson,
  IconSettingsTab,
  IconUser,
} from '#/components/Icones';

/** Returns the file icon given its extension. */
export const FILE_ICONS = {
  js: IconJs,
  css: IconCss,
  json: IconJson,
  md: IconMd,
  txt: IconText,
  // Some icons are determined by the file name (eg. Settings)
  readme: ReadmeIcon,
  resume: IconUser,
  settings: IconSettingsTab,
} as const;

export default {
  FILE_ICONS,
};
