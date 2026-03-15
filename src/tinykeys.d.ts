declare module 'tinykeys' {
  export function tinykeys(
    target: unknown,
    keyBindingMap: Record<string, (event: KeyboardEvent) => void>,
    options?: unknown,
  ): () => void;
}
