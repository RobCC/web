import produce from 'immer';
import useStore, { RootState } from './store';

export const getCurrentFile = ({ file }: RootState) => file.currentTab;

export const getOpenedFiles = ({ file }: RootState) => file.openedFiles;

export function changeFile(fileName: string) {
  useStore.setState(produce<RootState>((state) => {
    state.file.currentTab = fileName;
  }));
}

export function closeFile(fileName: string) {
  useStore.setState(produce<RootState>((state) => {
    const indexOfFile = state.file.openedFiles.indexOf(fileName);

    if (indexOfFile === -1) {
      return;
    }

    state.file.openedFiles.splice(indexOfFile, 1);

    const { openedFiles } = state.file;

    state.file.currentTab = openedFiles[openedFiles.length - 1] || '';
  }));
}

export function openChangeFile(fileName: string) {
  useStore.setState(produce<RootState>((state) => {
    const isFileAlreadyOpen = state.file.openedFiles.indexOf(fileName) > -1;

    state.file.currentTab = fileName;

    if (!isFileAlreadyOpen) {
      state.file.openedFiles.push(fileName);
    }
  }));
}
