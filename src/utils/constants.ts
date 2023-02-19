import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons/faAlignLeft';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons/faSquareJs';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons/faCss3Alt';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/** Matches extension for file names. */
export const FILE_EXTENSION_REGEX = /\.([0-9a-z]+)$/;

/** Returns the file icon given its extension. */
export const FILE_ICONS: Record<Extension, IconDefinition | string> = {
  js: faSquareJs,
  css: faCss3Alt,
  json: '{}',
  md: faInfo,
  txt: faAlignLeft,
} as const;
