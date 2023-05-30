export function oneOfTheArgsIsDefined(...args: unknown[]): boolean {
  return args.some((it) => Boolean(it));
}
