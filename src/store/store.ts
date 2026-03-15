import { create } from 'zustand';

export function createStore<State>(state: State) {
  return create<State>(() => state);
}
