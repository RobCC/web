import {
  IconMd,
  IconText,
  IconJs,
  IconCss,
  IconJson,
} from '#/components/Icones';

/** Returns the file icon given its extension. */
export const FILE_ICONS = {
  js: IconJs,
  css: IconCss,
  json: IconJson,
  md: IconMd,
  txt: IconText,
} as const;

export default {
  FILE_ICONS,
};
