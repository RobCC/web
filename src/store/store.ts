import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export function createStore<State>(state: State) {
  return create(immer<State>(() => state));
}
