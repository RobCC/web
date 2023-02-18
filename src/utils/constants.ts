import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons/faAlignLeft';

export const FILE_EXTENSION_REGEX = /\.([0-9a-z]+)$/;

export const FILE_ICONS = {
  js: 'JS',
  css: '#',
  json: '{}',
  md: faInfo,
  txt: faAlignLeft,
} as const;
